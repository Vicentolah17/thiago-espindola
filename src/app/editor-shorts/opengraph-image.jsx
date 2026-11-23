import { ImageResponse } from "next/og";
import { fontesOg } from "@/components/gta/fonteOg";
import { seo } from "@/config/editorShorts";

// Imagem de compartilhamento (WhatsApp, Instagram, X...), gerada pelo
// Next no build com o clima da pagina: por do sol neon.
export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await fontesOg("Anton", 400);
  const titulo = fonts.length ? "Anton" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background:
            "linear-gradient(180deg, #0c0613 0%, #1f0a3d 32%, #4e1466 55%, #b02778 74%, #ff5f5a 88%, #ff9a3d 100%)",
          color: "#fbf6fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#ff8a3d" }}>
          REELS · TIKTOK · SHORTS
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: titulo,
            fontSize: 108,
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: -1,
          }}
        >
          <span>EDITE REELS, TIKTOK</span>
          <span>E SHORTS QUE PRENDEM</span>
          <span style={{ color: "#22e4f0" }}>DO PRIMEIRO SEGUNDO.</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              padding: "10px 30px",
              background: "#ff2e88",
              boxShadow: "6px 6px 0 #22e4f0",
              fontFamily: titulo,
              fontSize: 48,
              fontWeight: 400,
            }}
          >
            R$47
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
