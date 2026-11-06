// ============================================================
//  TRILHA 50K · landing provisoria
//  Rota /trilha50k
//
//  Tudo marcado com PLACEHOLDER e valor provisorio: trocar antes de
//  publicar. Nada aqui foi inventado como dado real.
// ============================================================

/** PLACEHOLDER: preco provisorio. */
export const PRECO = "R$147";

/** PLACEHOLDER: link do checkout na Kiwify. Usado por TODOS os botoes. */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/PLACEHOLDER-TRILHA50K";

// ---------------- popup de cupom ----------------

/** PLACEHOLDER: codigo do cupom. */
export const CUPOM_CODIGO = "TRILHA20";

/** PLACEHOLDER: desconto anunciado no popup, em %. */
export const CUPOM_PERCENTUAL = 20;

/**
 * Validade do cupom, em minutos, contada a partir da PRIMEIRA vez que
 * a pagina abre na sessao. Recarregar nao reinicia: o vencimento fica
 * gravado no sessionStorage. Quando chega a zero, o popup nao aparece
 * mais nessa sessao.
 */
export const CUPOM_MINUTOS = 15;

/**
 * PLACEHOLDER: destino do botao "IR PARA O CHECKOUT" do popup.
 * Se o checkout aceitar o cupom pela URL, e aqui que ele entra.
 */
export const CHECKOUT_CUPOM_URL = CHECKOUT_URL;

// ============================================================
//  COPY
// ============================================================

export const topo = "CONDIÇÃO POR TEMPO LIMITADO";

export const header = {
  marca: "Surfe a Realidade",
  // placar de duas linhas: rotulo pequeno em cima, nome forte embaixo.
  // o ultimo e o bonus: PLACEHOLDER ate o nome real existir
  badges: [
    { rotulo: "TRILHA", nome: "50K" },
    { rotulo: "STORIES", nome: "MAGNÉTICOS" },
    { rotulo: "ACERVO", nome: "[BÔNUS]" },
  ],
};

export const hero = {
  // em tres partes: o destaque ganha a cor da barra do topo e o
  // fechamento vai para uma linha propria
  titulo: {
    inicio: "O caminho para crescer no Instagram, reunido em uma",
    destaque: "oferta completa.",
    fechamento: `Tudo por ${PRECO}.`,
  },
  // so o destaque sai em branco
  subtitulo: {
    inicio: "Um plano para quem quer bater os",
    destaque: "50 MIL SEGUIDORES",
    fim: "com método e direção.",
  },
  bullets: ["Trilha 50K", "Stories Magnéticos", "[NOME DO BÔNUS]"],
  cta: `QUERO A TRILHA 50K COMPLETA POR ${PRECO}`,
  microcopia: `Acesso imediato · ${PRECO} à vista · Pagamento único`,
};

/**
 * As entregas do pacote. O titulo da secao conta quantas existem
 * ("3 entregas por R$147"), entao adicionar ou tirar um item aqui
 * ja corrige o numero.
 * icone: nome de um icone de src/components/sales/Icon.jsx
 */
export const entregas = [
  {
    icone: "compass",
    nome: "Trilha 50K",
    // COPY PROVISORIA
    descricao: "O passo a passo para crescer no Instagram até os 50 mil seguidores, com direção do começo ao fim.",
  },
  {
    icone: "play",
    nome: "Stories Magnéticos",
    // COPY PROVISORIA
    descricao: "Como usar os stories para criar conexão com quem te segue e vender sem parecer anúncio.",
  },
  {
    icone: "gift",
    // PLACEHOLDER: nome e descricao do bonus
    nome: "[NOME DO BÔNUS]",
    descricao: "[DESCRIÇÃO DO BÔNUS]",
  },
];

export const pacote = {
  cta: "QUERO GARANTIR AS ENTREGAS",
  microcopia: "À vista · Pagamento único · Checkout Kiwify",
};

export const provaSocial = {
  titulo: "Quem já aplicou",
  // PLACEHOLDER: substituir cada item por depoimento real, de pessoa
  // real, com autorizacao. Nao inventar nome, print nem resultado.
  depoimentos: [
    { texto: "[DEPOIMENTO REAL AQUI]", autor: "[nome e @ do aluno]" },
    { texto: "[DEPOIMENTO REAL AQUI]", autor: "[nome e @ do aluno]" },
    { texto: "[DEPOIMENTO REAL AQUI]", autor: "[nome e @ do aluno]" },
  ],
  disclaimer:
    "Os resultados variam conforme o perfil, o conteúdo e a execução de cada pessoa. Nenhum depoimento é promessa de resultado.",
};

export const reforco = {
  titulo: `A Trilha 50K completa, com tudo incluso, por ${PRECO}.`,
  texto: "Trilha 50K, Stories Magnéticos e o bônus, num pagamento só, com acesso na hora.",
  cta: `QUERO A TRILHA 50K COMPLETA POR ${PRECO}`,
  microcopia: `Acesso imediato · ${PRECO} à vista · Pagamento único`,
};

export const autoridade = {
  titulo: "Quem está por trás",
  nome: "Thiago Espíndola",
  foto: "/thiago_foto.webp",
  fotoAlt: "Thiago Espíndola, criador da Trilha 50K",
  // COPY PROVISORIA
  paragrafos: [
    "Thiago Espíndola é o criador do Surfe a Realidade. Ele não começou com audiência: começou com um método, e aplicou no próprio perfil tudo o que está na Trilha 50K.",
    "A Trilha 50K é esse caminho organizado em ordem, para você não precisar descobrir tudo sozinho.",
  ],
  // Dado informado como real. Nao adicionar outro numero sem fonte.
  stat: { valor: "50 mil", rotulo: "seguidores em cerca de 3 meses" },
};

export const rodape = {
  marca: "Surfe a Realidade",
  direitos: "Todos os direitos reservados",
  links: [
    // PLACEHOLDER: paginas legais
    { label: "Política de privacidade", href: "#politica-de-privacidade" },
    { label: "Termos de uso", href: "#termos-de-uso" },
  ],
  disclaimer:
    "Este site não é parte do Facebook nem da Meta Platforms, Inc. Os resultados variam de pessoa para pessoa e nada nesta página é garantia de resultado.",
};
