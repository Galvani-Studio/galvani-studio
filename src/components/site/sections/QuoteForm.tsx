"use client";
import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { quoteSchema, SERVICES } from "@/lib/quote";
const EMPTY = { name: "", company: "", email: "", phone: "", service: "", message: "" };
const MESSAGE_TEMPLATES = [
  {
    label: "Criar um site para minha empresa",
    service: "Site Institucional",
    message: `Olá! Preciso de um site institucional para apresentar minha empresa e seus serviços.

Área de atuação:
Páginas ou informações importantes:
Prazo desejado: `,
  },
  {
    label: "Captar clientes com uma landing page",
    service: "Landing Page",
    message: `Olá! Quero uma landing page para divulgar uma oferta e receber contatos de possíveis clientes.

Produto ou serviço:
Público que quero alcançar:
Objetivo da campanha:
Prazo desejado: `,
  },
  {
    label: "Modernizar ou melhorar meu site",
    service: "Redesign de Site",
    message: `Olá! Gostaria de modernizar meu site e melhorar a experiência dos visitantes.

Endereço do site atual:
O que precisa melhorar:
Referências que gosto:
Prazo desejado: `,
  },
  {
    label: "Desenvolver um sistema ou SaaS",
    service: "Sistema Web / Software",
    message: `Olá! Preciso de um sistema web sob medida para organizar a operação da minha empresa.

Problema que quero resolver:
Quem vai utilizar:
Funcionalidades essenciais:
Integrações necessárias: `,
  },
  {
    label: "Automatizar tarefas da minha equipe",
    service: "Automações de Processos B2B",
    message: `Olá! Quero reduzir tarefas manuais e conectar os processos da minha equipe.

Tarefa que consome mais tempo:
Ferramentas utilizadas hoje:
Resultado que espero alcançar: `,
  },
  {
    label: "Solicitar manutenção e suporte",
    service: "Manutenção e Evolução",
    message: `Olá! Preciso de manutenção ou suporte para uma plataforma existente.

Endereço ou descrição da plataforma:
Problema ou alteração necessária:
Urgência: `,
  },
];
type Field = keyof typeof EMPTY;
export function QuoteForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const submitting = useRef(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;
    const result = quoteSchema.safeParse(form);
    if (!result.success) {
      const fields: Partial<Record<Field, string>> = {};
      for (const issue of result.error.issues) fields[issue.path[0] as Field] ??= issue.message;
      setErrors(fields);
      setStatus("error");
      setFeedback("Revise os campos indicados antes de enviar.");
      document.getElementById(`f-${Object.keys(fields)[0]}`)?.focus();
      return;
    }
    setErrors({});
    submitting.current = true;
    setStatus("sending");
    setFeedback("");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
        signal: AbortSignal.timeout(15000),
      });
      const data = await response.json().catch(() => ({
        error: "O serviço não respondeu como esperado. Tente novamente em instantes.",
      }));
      if (!response.ok || data.ok !== true)
        throw new Error(data.error || "Não foi possível enviar. Tente novamente.");
      setStatus("success");
      setFeedback(
        "Solicitação enviada com sucesso. Nossa equipe entrará em contato pelo email informado.",
      );
      setForm(EMPTY);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error && error.name !== "TimeoutError"
          ? error.message
          : "O envio demorou mais que o esperado. Tente novamente em instantes.",
      );
    } finally {
      submitting.current = false;
    }
  };
  const props = (key: Field) => ({
    id: `f-${key}`,
    name: key,
    "aria-label": {
      name: "Nome completo",
      company: "Empresa (opcional)",
      email: "Email para contato",
      phone: "Telefone com DDD (opcional)",
      service: "Serviço de interesse",
      message: "Mensagem sobre o projeto",
    }[key],
    value: form[key],
    disabled: status === "sending",
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `error-${key}` : undefined,
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((v) => ({ ...v, [key]: undefined }));
      if (status !== "sending") {
        setStatus("idle");
        setFeedback("");
      }
    },
  });
  const error = (key: Field) =>
    errors[key] && (
      <p className="field-error" id={`error-${key}`}>
        {errors[key]}
      </p>
    );
  return (
    <form className="form-wrap" onSubmit={handleSubmit} noValidate aria-busy={status === "sending"}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="f-name">Nome</label>
          <input
            {...props("name")}
            className="input"
            required
            autoComplete="name"
            maxLength={120}
            placeholder="Seu nome completo"
          />
          {error("name")}
        </div>
        <div className="field">
          <label htmlFor="f-company">
            Empresa <span className="opt">(opcional)</span>
          </label>
          <input
            {...props("company")}
            className="input"
            autoComplete="organization"
            maxLength={160}
            placeholder="Nome da empresa"
          />
          {error("company")}
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input
            {...props("email")}
            className="input"
            required
            type="email"
            autoComplete="email"
            maxLength={254}
            placeholder="voce@empresa.com"
          />
          {error("email")}
        </div>
        <div className="field">
          <label htmlFor="f-phone">
            Telefone <span className="opt">(opcional)</span>
          </label>
          <input
            {...props("phone")}
            className="input"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            placeholder="(00) 00000-0000"
          />
          {error("phone")}
        </div>
        <div className="field field--full">
          <label htmlFor="f-service">Serviço de interesse</label>
          <select {...props("service")} className="select" required>
            <option value="">Selecione uma opção</option>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {error("service")}
        </div>
        <div className="field field--full">
          <label htmlFor="f-template">
            Quer ajuda para começar? <span className="opt">(opcional)</span>
          </label>
          <select
            id="f-template"
            className="select"
            value=""
            disabled={status === "sending"}
            aria-describedby="template-help"
            onChange={(event) => {
              const template = MESSAGE_TEMPLATES[Number(event.target.value)];
              if (!template || event.target.value === "") return;
              setForm((current) => ({
                ...current,
                service: current.service || template.service,
                message: current.message.includes(template.message)
                  ? current.message
                  : [current.message.trim(), template.message]
                      .filter(Boolean)
                      .join("\n\n")
                      .slice(0, 5000),
              }));
              setErrors((current) => ({ ...current, service: undefined, message: undefined }));
              setStatus("idle");
              setFeedback("");
              document.getElementById("f-message")?.focus();
            }}
          >
            <option value="">Escolha um assunto para inserir uma mensagem pronta</option>
            {MESSAGE_TEMPLATES.map((template, index) => (
              <option value={index} key={template.label}>
                {template.label}
              </option>
            ))}
          </select>
          <p id="template-help" className="form-note" style={{ marginTop: 8, marginBottom: 0 }}>
            A sugestão será adicionada abaixo. Você pode editar e completar os tópicos antes de
            enviar.
          </p>
        </div>
        <div className="field field--full">
          <label htmlFor="f-message">Mensagem</label>
          <textarea
            {...props("message")}
            className="textarea"
            required
            minLength={20}
            maxLength={5000}
            placeholder="Conte sobre seu projeto e seus objetivos."
          />
          {error("message")}
        </div>
        {feedback && (
          <div
            className={status === "success" ? "form-ok" : "form-error"}
            role={status === "success" ? "status" : "alert"}
          >
            {status === "success" ? (
              <Check size={18} aria-hidden="true" />
            ) : (
              <AlertCircle size={18} aria-hidden="true" />
            )}
            <span>{feedback}</span>
          </div>
        )}
      </div>
      <div className="form-foot">
        <p className="form-note">
          Seus dados são utilizados apenas para responder a esta solicitação, conforme nossa{" "}
          <a href="/privacy">Política de Privacidade</a>.
        </p>
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Enviar solicitação"}
          <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
