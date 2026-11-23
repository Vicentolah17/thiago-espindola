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
  texto: "Vídeo bom de YouTube dá trabalho de estúdio inteiro.",
  apagado: "Ou você vira a noite editando, ou entrega algo que ninguém assiste até o fim.",
};

export const saber = {
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

/**
 * Referencias: criadores citados como prova de que o metodo funciona.
 * O produto e neutro (nao e "do" ninguem); cada referencia e um card.
 * O layout comporta de 1 a 3: e so acrescentar itens nesta lista.
 */
export const referencias = {
  titulo: "Quem já aplica",
  itens: [
    {
      nome: "Thiago Espíndola",
      handle: "@thiagoespindola.z",
      // prova real (dado informado pelo time: 50 mil seguidores em ~3 meses)
      texto: "Em 3 meses Thiago conseguiu engajar um público de 50K pessoas.",
      // print do perfil no Instagram
      print: {
        src: "/metodo50k/perfil-thiago.webp",
        largura: 559,
        altura: 183,
        alt: "Perfil @thiagoespindola.z no Instagram, com 50,3 mil seguidores",
      },
    },
  ],
};

export const oferta = {
  texto: `Acesso ao método completo por ${PRECO}.`,
  cta: `Quero o método — ${PRECO}`,
  // PLACEHOLDER: garantia
  garantia: "[GARANTIA]",
};

// rodape neutro: so o nome do produto e o ano (o site nao e "do" ninguem)
export const rodape = { direitos: "Todos os direitos reservados" };
