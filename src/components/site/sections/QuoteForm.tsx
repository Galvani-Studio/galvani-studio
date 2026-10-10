"use client";
import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { quoteSchema } from "@/lib/quote";
const EMPTY = { name: "", company: "", contact: "", message: "", website: "" };
type Field = keyof typeof EMPTY;
export function QuoteForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const submitting = useRef(false);
  const requestId = useRef<string | null>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    requestId.current ??= crypto.randomUUID();
    const result = quoteSchema.safeParse({ ...form, requestId: requestId.current });
    if (!result.success) {
      const fields: Partial<Record<Field, string>> = {};
      for (const issue of result.error.issues) fields[issue.path[0] as Field] ??= issue.message;
      setErrors(fields);
      setStatus("error");
      setFeedback("Revise os campos indicados.");
      document.getElementById(`f-${Object.keys(fields)[0]}`)?.focus();
      return;
    }
    submitting.current = true;
    setStatus("sending");
    setErrors({});
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
      setFeedback("Enviado com sucesso! Entraremos em contato pelo e-mail ou WhatsApp informado.");
      setForm(EMPTY);
      requestId.current = null;
    } catch (e) {
      setStatus("error");
      setFeedback(
        e instanceof Error && e.name !== "TimeoutError"
          ? e.message
          : "O envio demorou mais que o esperado. Tente novamente ou fale conosco pelo e-mail.",
      );
    } finally {
      submitting.current = false;
    }
  }
  const field = (key: Field) => ({
    id: `f-${key}`,
    name: key,
    value: form[key],
    disabled: status === "sending",
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `error-${key}` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      requestId.current = null;
      setForm((v) => ({ ...v, [key]: e.target.value }));
      setErrors((v) => ({ ...v, [key]: undefined }));
      setStatus("idle");
      setFeedback("");
    },
  });
  const error = (key: Field) =>
    errors[key] && (
      <p className="field-error" id={`error-${key}`}>
        {errors[key]}
      </p>
    );
  return (
    <form onSubmit={submit} noValidate aria-busy={status === "sending"}>
      <div hidden>
        <label htmlFor="f-website">Website</label>
        <input {...field("website")} tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="f-name">Nome</label>
          <input
            {...field("name")}
            className="input"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Como podemos chamar você?"
          />
          {error("name")}
        </div>
        <div className="field">
          <label htmlFor="f-company">Empresa</label>
          <input
            {...field("company")}
            className="input"
            autoComplete="organization"
            required
            maxLength={160}
            placeholder="Nome da sua empresa"
          />
          {error("company")}
        </div>
        <div className="field field--full">
          <label htmlFor="f-contact">WhatsApp ou e-mail</label>
          <input
            {...field("contact")}
            className="input"
            required
            maxLength={254}
            placeholder="(11) 99999-9999 ou voce@empresa.com"
          />
          {error("contact")}
        </div>
        <div className="field field--full">
          <label htmlFor="f-message">Necessidade principal</label>
          <textarea
            {...field("message")}
            className="textarea"
            required
            minLength={10}
            maxLength={5000}
            placeholder="Ex.: Preciso de um site que apresente meus serviços e facilite os pedidos de orçamento."
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
          Usamos seus dados para responder à sua solicitação. Leia nossa{" "}
          <a href="/privacy">Política de Privacidade</a>.
        </p>
        <button type="submit" className="b-cta" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Solicitar Minha Solução"}
          <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
}
