// ============================================================
//  PÁGINA B · EDITOR YOUTUBE (R$97) · rebrand GTA
//  Rota provisoria /editor-youtube
//
//  Copy FINAL e aprovada (veio do Cloud Design): nao mexer no texto.
//  So os campos marcados com PLACEHOLDER esperam a informacao real.
//  Nunca inventar numero de views, seguidores ou faturamento.
// ============================================================

/** PLACEHOLDER: nome do produto (aparece no topo, na oferta e no rodape). */
export const NOME_PRODUTO = "[NOME DO PRODUTO]";

/** PLACEHOLDER: link do checkout na Kiwify (R$97). Usado pelos dois botoes. */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/PLACEHOLDER-EDITOR-YOUTUBE";

export const PRECO = "R$97";

/** Animacao do preco na oferta: cai deste valor ate o preco (padrao das landings). */
export const PRECO_ANIMACAO = { de: 197, ate: 97 };

export const seo = {
  title: "Edite vídeos de YouTube com cara de canal grande, usando IA",
  description:
    "O método pra entregar vídeo longo profissional sem equipe, usando IA pra acelerar o trabalho pesado. Acesso ao método completo por R$97.",
};

export const topo = { assinatura: "por Thiago" };

export const hero = {
  rotulo: "YouTube · Vídeo longo · IA",
  titulo: {
    inicio: "Edite vídeos de YouTube com",
    destaque: "cara de canal grande",
    fim: ", usando IA a teu favor.",
  },
  subtitulo:
    "O método pra entregar vídeo longo profissional sem equipe, usando IA pra acelerar o trabalho pesado.",
  cta: `Quero o método — ${PRECO}`,
};

export const dor = {
  rotulo: "01 — O problema",
  texto: "Vídeo bom de YouTube dá trabalho de estúdio inteiro.",
  apagado: "Ou você vira a noite editando, ou entrega algo que ninguém assiste até o fim.",
};

export const saber = {
  rotulo: "02 — O método",
  titulo: "O que você vai saber fazer",
  itens: [
    "Edição de vídeo longo com padrão profissional",
    "IA no fluxo pra cortar tempo: roteiro, corte, legenda",
    "Narrativa que segura o espectador até o fim",
    "Imagem e som com qualidade de canal grande",
    "Um processo repetível pra postar sempre",
  ],
};

export const praQuem = "Pro criador que leva o YouTube a sério e quer um canal com cara profissional.";

export const autoridade = {
  rotulo: "03 — Quem ensina",
  nome: "Thiago",
  // PLACEHOLDER: prova real do trabalho do Thiago. Sem numero inventado.
  texto: "[AUTORIDADE: prova real do trabalho do Thiago. Sem número inventado.]",
  // foto real do Thiago (16:10, recorte no rosto)
  foto: {
    src: "/thiago_e_camelo.jpg",
    alt: "Thiago Espíndola com um camelo, no deserto",
    rotulo: "Thiago",
  },
  // print do perfil do Thiago no Instagram: a prova de autoridade
  perfil: {
    src: "/metodo50k/perfil-thiago.webp",
    largura: 559,
    altura: 183,
    alt: "Perfil @thiagoespindola.z no Instagram, com 50,3 mil seguidores",
  },
};

export const oferta = {
  texto: `Acesso ao método completo por ${PRECO}.`,
  cta: `Quero o método — ${PRECO}`,
  // PLACEHOLDER: garantia
  garantia: "[GARANTIA]",
};

export const rodape = { assinatura: "Thiago" };
