// ============================================================
//  PÁGINA A · EDITOR SHORTS (R$47) · rebrand GTA
//  Rota provisoria /editor-shorts
//
//  Copy FINAL e aprovada (veio do Cloud Design): nao mexer no texto.
//  So os campos marcados com PLACEHOLDER esperam a informacao real.
//  Nunca inventar numero de views, seguidores ou faturamento.
// ============================================================

/** PLACEHOLDER: nome do produto (aparece no topo, na oferta e no rodape). */
export const NOME_PRODUTO = "[NOME DO PRODUTO]";

/** PLACEHOLDER: link do checkout na Kiwify (R$47). Usado pelos dois botoes. */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/PLACEHOLDER-EDITOR-SHORTS";

export const PRECO = "R$47";

/** Animacao do preco na oferta: cai deste valor ate o preco (padrao das landings). */
export const PRECO_ANIMACAO = { de: 97, ate: 47 };

export const seo = {
  title: "Edite Reels, TikTok e Shorts que prendem do primeiro segundo",
  description:
    "O passo a passo de edição que transforma vídeo parado em vídeo que retém, mesmo que você nunca tenha editado. Acesso ao método completo por R$47.",
};

export const topo = { assinatura: "por Thiago" };

export const hero = {
  rotulo: "Reels · TikTok · Shorts",
  titulo: { inicio: "Edite Reels, TikTok e Shorts que prendem", destaque: "do primeiro segundo." },
  subtitulo:
    "O passo a passo de edição que transforma vídeo parado em vídeo que retém, mesmo que você nunca tenha editado.",
  cta: `Quero começar — ${PRECO}`,
};

export const dor = {
  rotulo: "00:03",
  texto: "Você grava, posta e o vídeo morre nos primeiros 3 segundos.",
  destaque: "Quase nunca é o conteúdo, é a edição que não segura.",
};

export const saber = {
  titulo: { inicio: "O que você vai", destaque: "saber fazer" },
  // cor do numero de cada item, na ordem do Cloud Design
  itens: [
    { texto: "Cortes e ritmo que não deixam o dedo subir", cor: "ciano" },
    { texto: "Legenda e timing que prendem a atenção", cor: "rosa" },
    { texto: "Os efeitos certos, e quais dão cara de amador", cor: "laranja" },
    { texto: "Edição rápida no celular ou no CapCut/PC", cor: "ciano" },
    { texto: "A estrutura de retenção que faz o vídeo rodar", cor: "rosa" },
  ],
};

export const praQuem = "Pra todo criador que quer parar de postar no vácuo e começar a reter.";

export const autoridade = {
  rotulo: "Quem ensina",
  nome: "Thiago",
  // PLACEHOLDER: prova real do Thiago (rebrand e volume real de conteudo).
  // Sem numero de views ou faturamento.
  texto: "[AUTORIDADE: rebrand do Thiago e volume real de conteúdo produzido. Sem número de views ou faturamento.]",
  // foto real do Thiago (troque por outra se preferir)
  foto: { src: "/thiago_foto.webp", alt: "Thiago Espíndola", rotulo: "Foto do Thiago" },
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
  cta: `Quero começar — ${PRECO}`,
  // PLACEHOLDER: garantia
  garantia: "[GARANTIA]",
};

export const rodape = { assinatura: "Thiago" };
