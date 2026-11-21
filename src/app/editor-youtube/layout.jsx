import { ESTILO_DISPLAY, classesFontes } from "@/components/gta/fontes";

/** Fontes do rebrand GTA, so nesta rota. */
export default function EditorYoutubeLayout({ children }) {
  return (
    <div className={classesFontes} style={ESTILO_DISPLAY}>
      {children}
    </div>
  );
}
