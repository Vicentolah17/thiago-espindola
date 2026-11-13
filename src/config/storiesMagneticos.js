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

/**
 * De onde o preco "cai" na animacao do bloco de preco (decrescente,
 * padrao das landings). So visual; o valor real e PRECO_VALOR.
 */
export const PRECO_ANIMACAO_DE = "97,00";

/** Link do checkout na Kiwify. Usado por TODOS os botoes (e pelo popup). */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/6yEAxcY";

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
  { id: "pacote", rotulo: "As 7 entregas" },
  { id: "stories", rotulo: "Entre agora" },
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
  // a primeira frase abre em destaque
  lead: "Alguém vende pros seus seguidores. Melhor que seja você.",
  subtitulo:
    "Engajar, interagir e vender nos Stories, é ridicularmente simples. O passo a passo tá aqui:",
  cta: "QUERO ACESSAR",
  assinatura: "Por Thiago Espíndola",
};

/**
 * Os 3 slides do Story do hero: a triade diaria do conteudo, cada um
 * com uma foto real (recortes 9:16 em public/stories-magneticos/).
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
 */
export const entregas = [
  {
    nome: "A tríade diária",
    descricao:
      "As três etapas que seu Story precisa passar todo dia, na ordem certa: engajar de manhã, interagir durante o dia, vender no fechamento.",
  },
  {
    nome: "O ritual matinal",
    descricao:
      "O primeiro Story do dia, sempre o mesmo. É ele que faz seu seguidor abrir o Instagram e ir direto na sua bolinha pra ver o de hoje.",
  },
  {
    nome: "Postagem em blocos",
    descricao:
      "De 2 a 4 Stories logo cedo e um bloco novo a cada 2 horas. Seu perfil volta pro começo da fila de todos os seus seguidores, enquanto as outras contas vão ficando pra trás.",
  },
  {
    nome: "O pitch nativo",
    descricao:
      "Como pegar uma coisa que aconteceu no seu dia e ligar ao seu produto, com print de resultado do lado. Sem arte de designer e sem roteiro GPTizado.",
  },
  {
    nome: "A palavra-chave no lugar do link",
    descricao:
      "A grande maioria dos experts já fazem isso, tirar o link dos stories, e a automação que entrega o link na DM de quem responde. Por quê? Como?",
  },
  {
    nome: "A regra do fim de semana",
    descricao:
      "O que sai dos seus Stories no sábado e no domingo, e por que isso faz sua audiência confiar mais em você na segunda.",
  },
  {
    nome: "O áudio na DM",
    descricao:
      "Quando alguém responde, você manda áudio com o nome da pessoa no lugar do texto. É o detalhe que mantém a conversa quente até a compra.",
  },
];

export const pacote = {
  titulo: [`${entregas.length} entregas.`, `${PRECO}.`],
  rotuloPreco: `As ${entregas.length} entregas, explicadas e detalhadas, num pagamento só`,
  cta: "QUERO ACESSAR",
  microcopia: "Pagamento único. Acesso imediato. Checkout seguro pela Kiwify.",
};

/**
 * Sem depoimentos por enquanto: 3 Stories com as fotos do hero e uma
 * frase em cada, que lidas em sequencia formam uma so:
 * "vender nos stories / NÃO É / colocar LINKzinho na tela".
 */
export const storiesFrase = {
  titulo: ["Entre agora,", "ou fique por fora"],
  cards: [
    { frase: "vender nos stories", foto: "/stories-magneticos/story-1-camelo.webp" },
    { frase: "NÃO É", foto: "/stories-magneticos/story-2-paris.webp" },
    { frase: "colocar LINKzinho na tela", foto: "/stories-magneticos/story-3-torre.webp" },
  ],
};

export const reforco = {
  titulo: ["Stories que atraem,", "leads quentes"],
  paragrafos: [
    "Dá pra repetir o que você vem fazendo todo dia. Ou dá pra abrir o insta amanhã já sabendo qual é o primeiro Story do dia, qual engaja, qual interage e qual vende.",
    `As ${entregas.length} entregas, pagamento único, acesso na hora. ${PRECO}.`,
  ],
  cta: "QUERO A ROTINA",
};

export const autoridade = {
  titulo: "Quem ensina",
  nome: "Thiago Espíndola",
  instagram: { rotulo: "@thiagoespindola.z", href: "https://www.instagram.com/thiagoespindola.z/" },
  foto: "/thiago_foto.webp",
  fotoAlt: "Thiago Espíndola à noite, com o Burj Khalifa ao fundo",
  paragrafos: [
    // a copy dizia "Trilha 50K": o produto foi renomeado para Método 50K
    "Criador do Surfe a Realidade e do Método 50K.",
    "O que está nas aulas é o que ele faz no próprio perfil: a foto do livro que sobe toda manhã, a caixinha que abre na segunda, a ida à loja que vira enquete e o pitch que sai disso. Depois de assistir, abre os Stories dele e você vai reconhecer cada peça. Resta saber se você quer fazer parte.",
  ],
  // Dado informado como real. Nao adicionar outro numero sem fonte.
  // O 50 conta de 0 ate o valor quando aparece na tela.
  stat: { ate: 50, sufixo: "mil", rotulo: "seguidores em 3 meses." },
  fechamento: "No Stories Magnéticos ele mostra o que faz com ela, todo dia.",
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
