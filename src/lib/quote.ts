import { z } from "zod";
export const SERVICES = [
  "Site Institucional",
  "Landing Page",
  "Redesign de Site",
  "Otimização de Performance",
  "Manutenção e Evolução",
  "Sistema Web / Software",
  "Automações de Processos B2B",
  "Personalizado / Enterprise",
  "Outro",
] as const;
export const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome com pelo menos 2 caracteres.")
    .max(120, "Use até 120 caracteres."),
  company: z.string().trim().max(160, "Use até 160 caracteres."),
  email: z.string().trim().max(254).email("Informe um email válido."),
  phone: z
    .string()
    .trim()
    .max(30, "Informe um telefone válido.")
    .refine(
      (v) =>
        !v ||
        (/^[+()\d\s.-]+$/.test(v) &&
          v.replace(/\D/g, "").length >= 10 &&
          v.replace(/\D/g, "").length <= 15),
      "Informe um telefone com DDD válido.",
    ),
  service: z.enum(SERVICES, { errorMap: () => ({ message: "Selecione um serviço." }) }),
  message: z
    .string()
    .trim()
    .min(20, "Descreva seu projeto em pelo menos 20 caracteres.")
    .max(5000, "Use até 5.000 caracteres."),
});
