import { Anton, Fraunces, Space_Grotesk, Syne } from "next/font/google";

/**
 * Fontes das paginas do rebrand GTA (/editor-shorts e /editor-youtube).
 *
 * - Space Grotesk: corpo e rotulos das DUAS paginas (da unidade entre elas)
 * - Anton: titulos da pagina A (cartaz condensado, vibe GTA/Miami)
 * - Syne ExtraBold: titulos da pagina B (premium)
 * - Fraunces italica: so o destaque da headline principal da pagina B
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

export const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
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
export const classesPaginaB = `${corpo.variable} ${syne.variable} ${fraunces.variable}`;
