import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google";

/**
 * Fontes so desta rota, como no handoff do design:
 * - Archivo variavel com o eixo de largura (wdth), usado bem condensado
 *   nos titulos;
 * - Instrument Sans no corpo e nos botoes;
 * - JetBrains Mono nos rotulos pequenos do Story.
 * O layout global segue valendo no resto do site.
 */
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--sm-display",
  display: "swap",
});

const corpo = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--sm-corpo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--sm-mono",
  display: "swap",
});

export default function StoriesMagneticosLayout({ children }) {
  return (
    <div className={`${display.variable} ${corpo.variable} ${mono.variable}`}>
      {children}
    </div>
  );
}
