// ============================================================
//  STORIES MAGNÉTICOS · landing provisoria
//  Rota /stories-magneticos
//
//  Tudo marcado com PLACEHOLDER: trocar antes de publicar. Nada aqui
//  foi inventado como dado real. Sem promessa de ganho em reais: se
//  um dia entrar faturamento, e decisao do Thiago, como possibilidade
//  e nunca garantia.
// ============================================================

/** Valor do preco, sem o "R$". */
export const PRECO_VALOR = "47,90";
export const PRECO = `R$${PRECO_VALOR}`;

/** PLACEHOLDER: link do checkout na Kiwify. Usado por TODOS os botoes. */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/PLACEHOLDER-STORIES-MAGNETICOS";

// ---------------- popup de cupom ----------------

/** PLACEHOLDER: codigo do cupom. */
export const CUPOM_CODIGO = "STORIES20";

/** PLACEHOLDER: desconto anunciado no popup, em %. */
export const CUPOM_PERCENTUAL = 20;

/**
 * Validade do cupom, em minutos, contada a partir da PRIMEIRA vez que
 * a pagina abre na sessao. Recarregar nao reinicia.
 */
export const CUPOM_MINUTOS = 15;

/** PLACEHOLDER: destino do "IR PARA O CHECKOUT" do popup. */
export const CHECKOUT_CUPOM_URL = CHECKOUT_URL;

// ============================================================
//  COPY
// ============================================================

export const topo = "CONDIÇÃO POR TEMPO LIMITADO";

/**
 * As secoes da pagina. Cada uma vira uma barra de progresso no topo,
 * como os segmentos de um Story; a barra enche conforme a secao rola.
 */
export const secoes = [
  { id: "inicio", rotulo: "Início" },
  { id: "pacote", rotulo: "O que está dentro" },
  { id: "resultados", rotulo: "Resultados" },
  { id: "oferta", rotulo: "Oferta" },
  { id: "expert", rotulo: "Quem ensina" },
];

export const perfil = {
  usuario: "storiesmagneticos",
  quando: "agora",
  cta: "Quero entrar",
};

export const hero = {
  titulo: ["Todo", "santo dia."],
  subtitulo:
    "Mais gente assistindo seus Stories, mais vendas saindo deles. O passo a passo direto ao ponto.",
  cta: "QUERO ACESSAR",
  assinatura: "Por Thiago Espíndola",
};

/**
 * Os 3 slides do Story do hero: a triade diaria do conteudo, cada um
 * com uma foto real (recortes 9:16 em public/stories-magneticos/).
 * COPY PROVISORIA dos titulos.
 */
export const slides = [
  {
    tag: "ENGAJAR",
    titulo: "Mais gente assistindo, todo dia",
    foto: "/stories-magneticos/story-1-camelo.webp",
  },
  {
    tag: "INTERAGIR",
    titulo: "Conversa que vira familiaridade",
    foto: "/stories-magneticos/story-2-paris.webp",
  },
  {
    tag: "VENDER",
    titulo: "Venda sem parecer anúncio",
    foto: "/stories-magneticos/story-3-torre.webp",
  },
];

/**
 * As entregas. O titulo da secao conta quantas existem, entao
 * adicionar ou tirar um item aqui ja corrige o numero.
 * Conteudo REAL do treinamento; os nomes curtos saem do proprio texto.
 */
export const entregas = [
  {
    nome: "A tríade diária",
    descricao: "Engajar, interagir e vender, todo dia, nos seus Stories.",
  },
  {
    nome: "O ritual matinal",
    descricao: "O ritual que cria familiaridade e vira hábito na sua audiência.",
  },
  {
    nome: "Postagem em blocos",
    descricao: "Um bloco a cada 2h, pra sempre voltar ao topo da fila do Instagram.",
  },
  {
    nome: "O pitch nativo",
    descricao: "Como vender todos os dias sem parecer que está vendendo.",
  },
  {
    nome: "Gatilho de palavra-chave",
    descricao: "Automação na DM no lugar do link que derruba o alcance.",
  },
  {
    nome: "A regra do fim de semana",
    descricao: "A regra pro sábado e o domingo que constrói autoridade.",
  },
  {
    nome: "O áudio na DM",
    descricao: "A mensagem de voz que acelera a venda.",
  },
];

export const pacote = {
  rotuloPreco: "O pacote completo por",
  cta: "QUERO ACESSAR",
  microcopia: "Pagamento único, acesso imediato, checkout seguro pela Kiwify.",
};

export const provaSocial = {
  titulo: "Quem já aplicou",
  // PLACEHOLDER: cada item vira um depoimento real, de pessoa real, com
  // autorizacao. Nao inventar nome, print nem resultado.
  depoimentos: [
    { texto: "[DEPOIMENTO REAL AQUI]", autor: "[nome e @ do aluno]" },
    { texto: "[DEPOIMENTO REAL AQUI]", autor: "[nome e @ do aluno]" },
    { texto: "[DEPOIMENTO REAL AQUI]", autor: "[nome e @ do aluno]" },
  ],
  disclaimer:
    "Os resultados variam conforme o perfil, o nicho e a execução de cada pessoa. Nenhum depoimento é promessa de resultado.",
};

export const reforco = {
  titulo: ["Seus Stories,", "todo santo dia."],
  texto: `As ${entregas.length} entregas, num pagamento só, com acesso na hora. Por ${PRECO}.`,
  cta: "QUERO ACESSAR",
};

export const autoridade = {
  titulo: "Quem ensina",
  nome: "Thiago Espíndola",
  instagram: { rotulo: "@thiagoespindola.z", href: "https://www.instagram.com/thiagoespindola.z/" },
  foto: "/thiago_foto.webp",
  fotoAlt: "Thiago Espíndola à noite, com o Burj Khalifa ao fundo",
  // COPY PROVISORIA
  paragrafos: [
    "Thiago Espíndola é o criador do Surfe a Realidade e do Método 50K.",
    "No Stories Magnéticos ele mostra a rotina de Stories que usa no próprio perfil, do jeito que faz, sem teoria sobrando.",
  ],
  // Dado informado como real. Nao adicionar outro numero sem fonte.
  stat: { valor: "50 mil", rotulo: "seguidores em cerca de 3 meses" },
};

export const rodape = {
  marca: "Stories Magnéticos",
  direitos: "Todos os direitos reservados",
  links: [
    // PLACEHOLDER: paginas legais
    { label: "Política de privacidade", href: "#politica-de-privacidade" },
    { label: "Termos de uso", href: "#termos-de-uso" },
  ],
  disclaimer:
    "Este site não é parte do Instagram, do Facebook nem da Meta Platforms, Inc. Os resultados variam de pessoa para pessoa e nada nesta página é garantia de resultado.",
};
