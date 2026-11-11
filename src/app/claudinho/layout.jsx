import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

/**
 * Fontes so desta rota, como no handoff do design:
 * Bricolage Grotesque nos titulos, Hanken Grotesk no corpo e
 * JetBrains Mono nos detalhes de "terminal". O layout global segue
 * valendo no resto do site.
 */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "800"],
  variable: "--cd-display",
  display: "swap",
});

const corpo = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--cd-corpo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--cd-mono",
  display: "swap",
});

export default function ClaudinhoLayout({ children }) {
  return (
    <div className={`${display.variable} ${corpo.variable} ${mono.variable}`}>
      {children}
    </div>
  );
}
