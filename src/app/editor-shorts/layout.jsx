import { classesPaginaA } from "@/components/gta/fontes";

/** Fontes da pagina A (Barlow Condensed + Space Grotesk), so nesta rota. */
export default function EditorShortsLayout({ children }) {
  return <div className={classesPaginaA}>{children}</div>;
}
