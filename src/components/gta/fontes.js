import { Anton, Fraunces, Geist, Space_Grotesk } from "next/font/google";

/**
 * Fontes das paginas do rebrand GTA (/editor-shorts e /editor-youtube).
 *
 * - Space Grotesk: corpo e rotulos das DUAS paginas (da unidade entre elas)
 * - Anton: titulos da pagina A (cartaz condensado, vibe GTA/Miami)
 * - Geist SemiBold: titulos da pagina B (premium e sobrio)
 * - Fraunces italica: os trechos de enfase da pagina B (o destaque da
 *   headline e a parte "apagada" da dor), o contraste reto x italico
 *   e o que da o dinamismo
 *
 * Cada pagina carrega so as que usa (ver classesPaginaA / classesPaginaB).
 */
export const corpo = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--gta-corpo",
  display: "swap",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--gta-titulo",
  display: "swap",
});

export const geist = Geist({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--gta-titulo",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["600"],
  variable: "--gta-editorial",
  display: "swap",
});

export const classesPaginaA = `${corpo.variable} ${anton.variable}`;
export const classesPaginaB = `${corpo.variable} ${geist.variable} ${fraunces.variable}`;
