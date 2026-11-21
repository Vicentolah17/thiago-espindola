import { Big_Shoulders, Manrope, Space_Mono } from "next/font/google";

/**
 * As tres fontes do rebrand GTA (Cloud Design), carregadas uma vez e
 * usadas pelas duas paginas (/editor-shorts e /editor-youtube):
 * - Big Shoulders Display: titulos e botoes. O Google juntou a Display
 *   na familia "Big Shoulders", com eixo de tamanho optico (opsz): a
 *   Display e o opsz no maximo, travado em 72 pelo ESTILO_DISPLAY abaixo.
 * - Manrope: corpo
 * - Space Mono: rotulos pequenos
 */
export const display = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--gta-display",
  display: "swap",
  // o next/font nao tem as metricas da Big Shoulders para gerar a
  // fonte reserva ajustada; sem isso ele so avisa no build
  adjustFontFallback: false,
});

export const corpo = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--gta-corpo",
  display: "swap",
});

export const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--gta-mono",
  display: "swap",
});

export const classesFontes = `${display.variable} ${corpo.variable} ${mono.variable}`;

/**
 * Trava o tamanho optico da Big Shoulders no maximo (o desenho
 * "Display"). E herdado; Manrope e Space Mono nao tem esse eixo e
 * ignoram.
 */
export const ESTILO_DISPLAY = { fontVariationSettings: '"opsz" 72' };
