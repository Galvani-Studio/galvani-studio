"use client";
import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { quoteSchema, SERVICES } from "@/lib/quote";
const EMPTY = { name: "", company: "", email: "", phone: "", service: "", message: "" };
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
      const data = await response.json();
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
            {status === "success" ? <Check size={18} /> : <AlertCircle size={18} />}
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
          {status === "sending" ? "Enviando…" : "Solicitar Orçamento"}
          <ArrowRight size={14} />
        </button>
      </div>
    </form>
  );
}
