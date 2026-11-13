// ============================================================
//  CLAUDINHO · landing provisoria
//  Rota /claudinho
//
//  Tudo marcado com PLACEHOLDER: trocar antes de publicar. Nada aqui
//  foi inventado como dado real. A comparacao de custo e a EXPERIENCIA
//  do Thiago, nunca promessa de economia para quem compra.
// ============================================================

/** Valor do preco, sem o "R$". */
export const PRECO_VALOR = "47,90";
export const PRECO = `R$${PRECO_VALOR}`;

/**
 * De onde o preco "cai" na animacao do bloco de preco. Aqui e o valor
 * que a propria copy cita (o que um editor cobra por um video), nao um
 * "preco antigo" do treinamento.
 */
export const PRECO_ANIMACAO_DE = "1000,00";

/** Link do checkout na Kiwify. Usado por TODOS os botoes (e pelo popup). */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/0YTgJ71";

// ---------------- popup de cupom ----------------

/** PLACEHOLDER: codigo do cupom. */
export const CUPOM_CODIGO = "CLAUDINHO20";

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

/** CTA igual em todos os botoes de compra */
const CTA = "QUERO O MEU CLAUDINHO";

export const nav = { marca: "claudinho", cta: "Garantir acesso" };

export const hero = {
  rotulo: "BRAÇO DIREITO",
  // a primeira parte fica numa linha; o destaque sai em laranja
  titulo: { inicio: "Você grava.", destaque: "O Claudinho", fim: "assume a bronca." },
  // um paragrafo so, corrido
  paragrafos: [
    "A IA evolui cada vez mais todos os dias, justamente para nos ajudar em trabalhos repetitivos. Passe alguns comandos e receba vídeo editado, roteiro profissional, copywriting e até site.",
  ],
  chamada: "Acabou a era das desculpas. Fique por dentro agora:",
  cta: CTA,
  microcopia: `${PRECO} · Treinamento COMPLETO · Pagamento seguro via Kiwify`,
};

/** O chat animado do hero (texto do handoff do design). */
export const chat = {
  titulo: "Claudinho",
  assunto: "Editar meu vídeo",
  arquivo: { nome: "gravacao-crua.mp4", detalhe: "Vídeo · 2:22 · 148 MB" },
  pedido: "Edita esse vídeo: corta as pausas, coloca legenda e animação.",
  resposta: "Feito. Cortei pausas e erros, coloquei legenda e animações. Pronto pra postar.",
  entrega: { nome: "reels-editado.mp4", detalhe: "2:13 · editado" },
  status: { enviando: "enviando…", editando: "editando…", pronto: "pronto · 2:13" },
  chips: ["edição", "roteiro", "copy", "site", "contrato"],
  campo: "Responder ao Claudinho…",
};

/**
 * As entregas. O titulo da secao conta quantas existem.
 * descricao e opcional (algumas so tem o comando de exemplo).
 * comando: exemplo de pedido, digitado quando o card aparece.
 * icone: nome de um icone de src/components/sales/Icon.jsx
 */
export const entregas = [
  {
    icone: "script",
    nome: "O prompt de roteiros do Thiago, pronto pra colar",
    descricao:
      "Você cola no seu Claude e ele já começa a trabalhar como o chat que o Thiago usa. Manda um Reels que viralizou e recebe roteiros parecidos, no seu nicho, com cara de conversa entre amigos e sem aquele cheiro de texto de IA.",
    comando: "analisa esse vídeo e me dá 5 roteiros nesse estilo",
  },
  {
    icone: "pulse",
    nome: "Ideia pra quando você trava",
    descricao:
      "Peça estilos novos de vídeo (história, lista rápida, raio X de um viral), escolha um e o roteiro sai em cima dele.",
    comando: "me dá estilos diferentes de vídeo pra eu escolher",
  },
  {
    icone: "play",
    nome: "Edição de vídeo por comando",
    descricao:
      "Você descreve o que quer, o Claude executa. A edição que levaria de 3 a 5 dias na mão fica pronta em menos de 24 horas.",
    comando: "corta as pausas e coloca legenda",
  },
  {
    icone: "magnet",
    nome: "Copy de legenda, anúncio e página",
    comando: "escreve a legenda desse post",
  },
  {
    icone: "blocks",
    nome: "Sites e páginas de venda",
    comando: "monta a página de venda do meu curso",
  },
  {
    icone: "users",
    nome: "Contrato pra montar equipe",
    descricao:
      "Quando chegar a hora de contratar editor ou social media, o contrato você pede pro Claude.",
    comando: "faz o contrato do meu editor",
  },
];

export const pacote = {
  titulo: `${entregas.length} coisas que saem da sua mão`,
};

/** A conta do 80/20, com o grafico animado. */
export const regra8020 = {
  nome: "A conta do 80/20",
  descricao:
    "Uns 80% do resultado no digital vêm de trabalho operacional e repetitivo. Os outros 20% são gravar, aparecer e saber o que está em alta, e isso a IA não faz por você. Hoje seu tempo vai quase todo pros 80%.",
  partes: [
    { valor: 80, rotulo: "operacional", quem: "o Claudinho faz" },
    { valor: 20, rotulo: "gravar e decidir", quem: "só você faz" },
  ],
};

export const preco = {
  comparacao: "Um editor cobra perto de R$1.000 por um vídeo.",
  rotulo: "O treinamento inteiro sai por",
  cta: CTA,
  microcopia: "Acesso imediato, checkout seguro pela Kiwify.",
  aviso:
    "Pra usar, você precisa de uma assinatura do Claude (cerca de R$100/mês). É a única ferramenta.",
};

export const provaSocial = {
  titulo: "Empresas que já usam o Claude para automatizar seus trabalhos repetitivos",
  prints: [
    { src: "/lovable.png", largura: 319, altura: 191, alt: "Lovable: plataforma de desenvolvimento baseada em IA" },
    { src: "/cursor.png", largura: 329, altura: 171, alt: "Cursor: editor de código baseado em IA" },
    { src: "/hostinger.png", largura: 321, altura: 204, alt: "Hostinger: provedora de hospedagem web, com o Hostinger Horizons baseado em IA" },
  ],
  nota: "As empresas aparecem como exemplos de uso do Claude e não têm relação com este treinamento.",
};

export const reforco = {
  // log de tarefas que corre de lado, como na copy
  log: ["prompt de roteiros", "ideias", "edição", "copy", "site", "contrato"],
  titulo: "Amanhã você grava. O resto já tem quem faça.",
  texto: `As ${entregas.length} entregas, acesso IMEDIATO, por ${PRECO}.`,
  cta: CTA,
};

export const autoridade = {
  titulo: "Quem montou a operação",
  nome: "Thiago Espíndola",
  instagram: { rotulo: "@thiagoespindola.z", href: "https://www.instagram.com/thiagoespindola.z/" },
  foto: "/thiago_foto.webp",
  fotoAlt: "Thiago Espíndola à noite, com o Burj Khalifa ao fundo",
  paragrafos: [
    // a copy dizia "Trilha 50K": o produto foi renomeado para Método 50K
    "Criador do Surfe a Realidade e do Método 50K. Bateu 50 mil seguidores em menos de 3 meses com vídeos simples de gravar, sem edição avançada.",
    "Quando o volume de vídeos por dia passou do que dava pra fazer na mão, ele fez a conta: pra dar conta com gente, seriam R$20 a 30 mil por mês de editor, copywriter, designer e jurídico. Com o Claude, uns R$100. O que ele continua fazendo sozinho é gravar e ler tendência.",
  ],
  // Experiencia DELE, nao promessa para o comprador.
  custo: {
    titulo: "Na operação dele",
    de: 30000,
    para: 100,
    rotuloDe: "R$20-30 mil por mês de equipe",
    rotuloPara: "por mês de ferramenta",
    nota: "Essa é a conta do Thiago na operação dele, não uma promessa de economia. O custo de cada negócio é diferente.",
  },
};

export const fecho = {
  texto:
    "O próximo vídeo que você postar pode sair do prompt do Thiago, editado por comando, com legenda escrita pelo Claude. Ou pode sair às 2 da manhã, editado na mão.",
  titulo: "Você já leu o suficiente.",
  resumo: `${PRECO}, acesso imediato. Treinamento direto ao ponto.`,
  cta: CTA,
};

export const rodape = {
  marca: "claudinho",
  direitos: "Todos os direitos reservados",
  links: [
    // PLACEHOLDER: paginas legais
    { label: "Política de privacidade", href: "#politica-de-privacidade" },
    { label: "Termos de uso", href: "#termos-de-uso" },
  ],
  disclaimer:
    "Este site não é parte do Facebook nem da Meta Platforms, Inc. O Claudinho é um treinamento de uso de ferramentas de IA e não tem vínculo com as empresas que as desenvolvem. Os resultados variam de pessoa para pessoa e nada nesta página é garantia de resultado.",
};
