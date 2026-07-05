import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

const EMAIL = "galvanistudio1@gmail.com";

const SERVICES = [
  "Site Institucional",
  "Landing Page",
  "Redesign de Site",
  "Otimização de Performance",
  "Manutenção e Evolução",
  "Sistema Web / Software",
  "Outro",
];

const EMPTY = { name: "", company: "", email: "", phone: "", service: "", message: "" };

export function QuoteForm() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend yet: compose a pre-filled e-mail with the request.
    // Structure ready for a future API/CRM integration.
    const subject = `Solicitação de orçamento — ${form.name || "novo contato"}`;
    const body = [
      `Nome: ${form.name}`,
      form.company && `Empresa: ${form.company}`,
      `Email: ${form.email}`,
      form.phone && `Telefone: ${form.phone}`,
      form.service && `Serviço de interesse: ${form.service}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form-wrap" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="f-name">Nome</label>
          <input
            id="f-name"
            className="input"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Seu nome completo"
          />
        </div>
        <div className="field">
          <label htmlFor="f-company">
            Empresa <span className="opt">(opcional)</span>
          </label>
          <input
            id="f-company"
            className="input"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={update("company")}
            placeholder="Nome da empresa"
          />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input
            id="f-email"
            className="input"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            placeholder="voce@empresa.com"
          />
        </div>
        <div className="field">
          <label htmlFor="f-phone">
            Telefone <span className="opt">(opcional)</span>
          </label>
          <input
            id="f-phone"
            className="input"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="field field--full">
          <label htmlFor="f-service">Serviço de interesse</label>
          <select
            id="f-service"
            className="select"
            value={form.service}
            onChange={update("service")}
          >
            <option value="">Selecione uma opção</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="f-message">Mensagem</label>
          <textarea
            id="f-message"
            className="textarea"
            required
            value={form.message}
            onChange={update("message")}
            placeholder="Conte um pouco sobre o seu projeto e seus objetivos."
          />
        </div>

        {sent && (
          <div className="form-ok" role="status">
            <Check size={18} strokeWidth={2.5} />
            <span>
              Tudo pronto! Abrimos seu cliente de email com a solicitação. Caso não abra, escreva
              para {EMAIL}.
            </span>
          </div>
        )}
      </div>

      <div className="form-foot">
        <p className="form-note">
          Seus dados são utilizados apenas para responder a esta solicitação, conforme nossa{" "}
          <a href="/privacy" style={{ color: "var(--orange)", textDecoration: "none" }}>
            Política de Privacidade
          </a>
          .
        </p>
        <button type="submit" className="btn btn-primary">
          Solicitar Orçamento
          <ArrowRight size={14} strokeWidth={2.4} />
        </button>
      </div>
    </form>
  );
}
