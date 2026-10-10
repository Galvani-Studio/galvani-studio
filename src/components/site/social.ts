// Single source of truth for the studio's three official channels.
// Update links here and they stay consistent across Nav, Contact and Footer.

export const INSTAGRAM_URL = "https://www.instagram.com/galvani_studio/";
export const LINKEDIN_URL = "https://www.linkedin.com/company/galvani-studio/";
export const EMAIL = "contato@galvanistudio.com";

const SUBJECT = "Solicitação de orçamento";
const BODY = "Olá!\n\nGostaria de solicitar um orçamento para um projeto.";

export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(
  BODY,
)}`;
