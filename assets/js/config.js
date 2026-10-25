/**
 * Global Configuration, Contact Channels & Theme Definitions — Portfólio Luccas
 * Single Source of Truth for metadata, contact methods, email templates and theme tokens.
 */

export const CONTACT_CONFIG = {
  // E-mail Direct
  email: {
    address: "luccascomvoce@gmail.com",
    getUrl() {
      return `mailto:${this.address}`;
    }
  },

  // WhatsApp Direto
  whatsapp: {
    number: "5547988526046",
    display: "+55 47 98852-6046",
    defaultMessage: "Olá Luccas! Vi seu portfólio técnico e gostaria de conversar sobre um projeto / oportunidade.",
    getUrl() {
      const encodedMsg = encodeURIComponent(this.defaultMessage);
      return `https://wa.me/${this.number}?text=${encodedMsg}`;
    }
  },

  // Telefone / Chamada Direta
  phone: {
    number: "+5547988526046",
    display: "+55 47 98852-6046",
    getUrl() {
      return `tel:${this.number}`;
    }
  },

  // SMS / RCS
  sms: {
    number: "+5547988526046",
    getUrl() {
      return `sms:${this.number}`;
    }
  },

  // GitHub
  github: {
    username: "luccascomvoce",
    display: "github.com/luccascomvoce",
    getUrl() {
      return `https://github.com/${this.username}`;
    }
  },

  // LinkedIn
  linkedin: {
    username: "luccascomvoce",
    display: "in/luccascomvoce",
    getUrl() {
      return `https://linkedin.com/in/${this.username}`;
    }
  },

  // Telegram
  telegram: {
    username: "luccascomvoce",
    display: "@luccascomvoce",
    getUrl() {
      return `https://t.me/${this.username}`;
    }
  },

  // vCard & QR Code
  vcard: {
    url: "assets/contact/luccas.vcf",
    qrUrl: "assets/images/contact-qr.svg"
  }
};

/**
 * Paleta de Cores e Tokens de Superfície por Tema
 * Alinhado com o Design System Precision Matte
 */
export const THEME_CONFIG = {
  dark: {
    name: "dark",
    surfaceBase: "#080a0f",
    surfaceCard: "#0f131a",
    surfaceRaised: "#151b24",
    borderPrecision: "rgba(255, 255, 255, 0.08)",
    borderHover: "rgba(255, 255, 255, 0.16)",
    textBright: "#ffffff",
    textMuted: "#94a3b8",
    accent: "#60a5fa", // Azul clássico de engenharia
    success: "#10b981",
    themeColor: "#080a0f"
  },
  light: {
    name: "light",
    surfaceBase: "#f8fafc",
    surfaceCard: "#ffffff",
    surfaceRaised: "#f1f5f9",
    borderPrecision: "rgba(15, 23, 42, 0.08)",
    borderHover: "rgba(15, 23, 42, 0.18)",
    textBright: "#0f172a",
    textMuted: "#475569",
    accent: "#2563eb",
    success: "#059669",
    themeColor: "#f8fafc"
  }
};

/**
 * Configuração Geral do Portfólio (mantendo retrocompatibilidade com modules existentes)
 */
export const SITE_CONFIG = {
  name: "Luccas",
  fullName: "Luccas",
  role: "Engenheiro de Automação & Desenvolvedor Full-Stack",
  availabilityStatus: "Disponível para Automação & Dev",
  statusColor: "#10b981",
  contact: CONTACT_CONFIG,
  theme: THEME_CONFIG,
  
  typewriterPhrases: [
    "Automação de Processos & DevOps",
    "Engenharia Reversa & Análise de Protocolos",
    "Bots Telegram & Integrações Assíncronas",
    "Web Apps & Arquiteturas Multi-Nuvem",
    "Game Modding & Otimização de Servidores",
    "PowerShell & Python Automation"
  ],

  // Mapeamento mantido para compatibilidade com código existente
  social: {
    github: {
      name: "GitHub",
      handle: CONTACT_CONFIG.github.username,
      url: CONTACT_CONFIG.github.getUrl(),
      icon: "github"
    },
    linkedin: {
      name: "LinkedIn",
      handle: CONTACT_CONFIG.linkedin.username,
      url: CONTACT_CONFIG.linkedin.getUrl(),
      icon: "linkedin"
    },
    telegram: {
      name: "Telegram",
      handle: CONTACT_CONFIG.telegram.display,
      url: CONTACT_CONFIG.telegram.getUrl(),
      icon: "telegram"
    },
    whatsapp: {
      name: "WhatsApp",
      handle: CONTACT_CONFIG.whatsapp.display,
      url: CONTACT_CONFIG.whatsapp.getUrl(),
      icon: "whatsapp"
    },
    email: {
      name: "E-mail",
      handle: CONTACT_CONFIG.email.address,
      url: CONTACT_CONFIG.email.getUrl(),
      icon: "email"
    },
    telefone: {
      name: "Telefone",
      handle: CONTACT_CONFIG.phone.display,
      url: CONTACT_CONFIG.phone.getUrl(),
      icon: "phone"
    }
  }
};
