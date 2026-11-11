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

/** PLACEHOLDER: link do checkout na Kiwify. Usado por TODOS os botoes. */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/PLACEHOLDER-CLAUDINHO";

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

export const nav = { marca: "claudinho", cta: "Garantir acesso" };

export const hero = {
  rotulo: "BRAÇO DIREITO",
  // o destaque sai em laranja
  titulo: { inicio: "Você grava.", destaque: "O Claudinho", fim: "faz o resto." },
  subtitulo:
    "Passe alguns comandos e receba vídeo editado, roteiro, copy e site. A IA assume o trabalho repetitivo.",
  cta: "QUERO O CLAUDINHO",
  microcopia: "R$100/mês de ferramenta no lugar de R$20-30 mil de equipe",
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
 * As entregas (conteudo REAL do treinamento). O titulo da secao conta
 * quantas existem. "comando" e um exemplo de pedido, so ilustrativo:
 * COPY PROVISORIA.
 * icone: nome de um icone de src/components/sales/Icon.jsx
 */
export const entregas = [
  {
    icone: "play",
    nome: "Edição de vídeo por comando",
    descricao: "Você passa a instrução, recebe o vídeo pronto.",
    comando: "corta as pausas e coloca legenda",
  },
  {
    icone: "script",
    nome: "Roteiros e ideias",
    descricao: "Criação de roteiros e geração de ideias de conteúdo.",
    comando: "10 ideias de Reels pra semana",
  },
  {
    icone: "blocks",
    nome: "Sites e páginas de venda",
    descricao: "Criação de sites e páginas de venda.",
    comando: "monta a página de venda do meu curso",
  },
  {
    icone: "magnet",
    nome: "Copy persuasiva",
    descricao: "Copy persuasiva escrita pra você.",
    comando: "escreve a legenda desse post",
  },
  {
    icone: "users",
    nome: "Contratos e burocracia",
    descricao: "Contratos e burocracia pra contratar e gerir equipe.",
    comando: "faz o contrato do meu editor",
  },
];

/** A ultima entrega: a logica 80/20, com o grafico animado. */
export const regra8020 = {
  nome: "A lógica 80/20",
  descricao:
    "Automatizar os 80% operacionais pra você focar nos 20% que só você faz.",
  partes: [
    { valor: 80, rotulo: "operacional", quem: "o Claudinho faz" },
    { valor: 20, rotulo: "gravar e decidir", quem: "só você faz" },
  ],
};

export const totalEntregas = entregas.length + 1;

export const pacote = {
  rotuloPreco: "Tudo isso por",
  cta: "QUERO O CLAUDINHO",
  // PLACEHOLDER: confirmar se e pagamento unico ou recorrente
  microcopia: "Acesso imediato, checkout seguro pela Kiwify.",
};

export const provaSocial = {
  titulo: "Quem já colocou o Claudinho pra trabalhar",
  // PLACEHOLDER: cada item vira um depoimento real, de pessoa real, com
  // autorizacao. Nao inventar nome, print nem resultado.
  depoimentos: [
    { texto: "[DEPOIMENTO REAL AQUI]", autor: "[nome e @ do aluno]" },
    { texto: "[DEPOIMENTO REAL AQUI]", autor: "[nome e @ do aluno]" },
    { texto: "[DEPOIMENTO REAL AQUI]", autor: "[nome e @ do aluno]" },
  ],
  disclaimer:
    "Os resultados variam conforme o negócio, o conteúdo e a execução de cada pessoa. Nenhum depoimento é promessa de resultado.",
};

export const reforco = {
  titulo: "Você grava. O resto já está em andamento.",
  texto: `As ${totalEntregas} entregas, com acesso na hora. Por ${PRECO}.`,
  cta: "QUERO O CLAUDINHO",
};

export const autoridade = {
  titulo: "Quem montou a operação",
  nome: "Thiago Espíndola",
  instagram: { rotulo: "@thiagoespindola.z", href: "https://www.instagram.com/thiagoespindola.z/" },
  foto: "/thiago_foto.webp",
  fotoAlt: "Thiago Espíndola à noite, com o Burj Khalifa ao fundo",
  // COPY PROVISORIA
  paragrafos: [
    "Thiago Espíndola é o criador do Surfe a Realidade e da Trilha 50K.",
    "O Claudinho é a forma como ele tirou o operacional das próprias mãos: o que dá pra pedir por comando, ele pede, e guarda o tempo para gravar e decidir.",
  ],
  // Dado informado como real. Nao adicionar outro numero sem fonte.
  stat: { valor: "50 mil", rotulo: "seguidores em cerca de 3 meses" },
  // Experiencia DELE, nao promessa para o comprador.
  custo: {
    titulo: "Na operação dele",
    de: 30000,
    para: 100,
    rotuloDe: "R$20-30 mil por mês de equipe",
    rotuloPara: "por mês de ferramenta",
    nota: "Essa é a experiência do Thiago na operação dele, não uma promessa de economia. O custo de cada negócio é diferente.",
  },
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
