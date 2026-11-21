import { ImageResponse } from "next/og";
import { fontesOg } from "@/components/gta/fonteOg";
import { seo } from "@/config/editorYoutube";

// Imagem de compartilhamento (WhatsApp, Instagram, X...), gerada pelo
// Next no build com o clima da pagina: preto solido, rosa e dourado.
export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await fontesOg();
  const titulo = fonts.length ? "Big Shoulders" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background: "#050505",
          color: "#f4efe9",
          fontFamily: "sans-serif",
        }}
      >
        {/* brilho rosa no canto, como no hero */}
        <div
          style={{
            position: "absolute",
            top: -360,
            right: -300,
            width: 900,
            height: 900,
            borderRadius: 450,
            background: "radial-gradient(circle, rgba(255,46,136,0.22) 0%, rgba(242,181,74,0.06) 40%, rgba(5,5,5,0) 68%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#f2b54a" }}>
          YOUTUBE · VÍDEO LONGO · IA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: titulo,
            fontSize: 92,
            fontWeight: 900,
            lineHeight: 0.92,
          }}
        >
          <span>EDITE VÍDEOS DE YOUTUBE COM</span>
          <span style={{ color: "#ff2e88" }}>CARA DE CANAL GRANDE,</span>
          <span>USANDO IA A TEU FAVOR.</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              width: 160,
              height: 3,
              background: "#ff2e88",
              boxShadow: "0 0 18px #ff2e88",
            }}
          />
          <div style={{ display: "flex", fontFamily: titulo, fontSize: 48, fontWeight: 900 }}>R$97</div>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 3, color: "#f2b54a" }}>POR THIAGO</div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
