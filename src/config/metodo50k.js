// ============================================================
//  MÉTODO 50K · landing provisoria
//  Rota /metodo50k (antes /trilha50k)
//
//  Tudo marcado com PLACEHOLDER: trocar antes de publicar. Nada aqui
//  foi inventado como dado real.
// ============================================================

export const PRECO = "R$147";

/** PLACEHOLDER: link do checkout na Kiwify. Usado por TODOS os botoes. */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/PLACEHOLDER-METODO50K";

// ---------------- popup de cupom ----------------

/** PLACEHOLDER: codigo do cupom. */
export const CUPOM_CODIGO = "METODO20";

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

/** CTA e microcopia iguais em todos os botoes de compra. */
const CTA = `QUERO O MÉTODO 50K POR ${PRECO}`;
const MICRO = "Acesso na hora · Pagamento único · Checkout seguro Kiwify";

export const header = {
  marca: "Surfe a Realidade",
  // placar de duas linhas: rotulo pequeno em cima, nome forte embaixo
  badges: [
    { rotulo: "MÉTODO", nome: "50K" },
    { rotulo: "EDIÇÃO", nome: "DESCOMPLICADA" },
    { rotulo: "IDEIAS", nome: "INFINITAS" },
  ],
};

export const hero = {
  rotulo: "MÉTODO 50K",
  // a primeira linha fica sozinha; o destaque ganha a cor da barra do topo
  titulo: {
    linha1: "50 mil seguidores em 90 dias.",
    inicio: "Ideias são infinitas.",
    destaque: "Com MÉTODO.",
  },
  // so o destaque sai em branco
  subtitulo: {
    inicio: "O passo a passo que eu apliquei no meu próprio perfil,",
    destaque: "todo santo dia, até passar dos 50 mil",
    fim: ": como gravar sem travar, editar sem perder tempo e virar um poço sem fundo de ideias pra nunca mais abrir o Instagram indeciso.",
  },
  preco: `Tudo por ${PRECO}.`,
  publico:
    "Pra quem sabe da potência do Instagram, mas está cansado de postar e não sair do lugar.",
  bullets: ["Método 50K", "Edição Descomplicada", "Ideias Infinitas"],
  cta: CTA,
  microcopia: MICRO,
};

/**
 * As entregas do pacote.
 * icone: nome de um icone de src/components/sales/Icon.jsx
 */
export const entregas = [
  {
    icone: "compass",
    nome: "Método 50K",
    descricao:
      "O algoritmo do Instagram tem regra. Quem entende a regra cresce. Aqui eu passo a trilha reta que me tirou do zero aos 50K, de forma simples, mas consistente. Depois que você entende, fica ridículo de fácil, mas é preciso seguir à risca o que eu falo lá dentro.",
  },
  {
    icone: "play",
    nome: "Edição Descomplicada",
    descricao:
      "Eu sei que nem todo mundo sabe fazer edições impressionantes, e muita gente demora ou trava nessa parte. Mas, depois que você entende o básico do método, percebe que quanto mais simples a edição, melhor. É sério.",
  },
  {
    icone: "script",
    nome: "Ideias Infinitas",
    descricao:
      "Meu método descomplicado pra você virar uma verdadeira MÁQUINA DE IDEIAS. Quando pegar o jeito do que a gente faz aqui, você vai encher dois cadernos inteiros de tanta ideia anotada.",
  },
];

export const pacote = {
  titulo: "O que você recebe",
  rotuloPreco: "Pacote completo por",
  cta: CTA,
  microcopia: MICRO,
};

/** Imagens do proprio Thiago (sem depoimentos de alunos por enquanto). */
const PRINT_PERFIL = {
  src: "/metodo50k/perfil-thiago.webp",
  largura: 559,
  altura: 183,
  alt: "Perfil @thiagoespindola.z no Instagram, com 50,3 mil seguidores",
};

export const provaSocial = {
  titulo: "Com método tudo fica mais fácil",
  // nesta ordem. legenda: COPY PROVISORIA
  imagens: [
    { ...PRINT_PERFIL, legenda: "O perfil hoje: 50,3 mil seguidores." },
    {
      src: "/metodo50k/instagram-stats.webp",
      largura: 1400,
      altura: 933,
      alt: "Gráfico de seguidores do Instagram do Thiago: 50,3 mil nos últimos 90 dias",
      legenda: "50,3 mil seguidores em 90 dias.",
    },
    {
      src: "/metodo50k/ideias-infinitas.webp",
      largura: 1400,
      altura: 939,
      alt: "Mesa de trabalho com o mapa de ideias do Método 50K na tela e um caderno de anotações",
      legenda: "O mapa de ideias do método, na prática.",
    },
  ],
  disclaimer:
    "Cada perfil cresce num ritmo diferente, que depende do nicho, do conteúdo e da constância de quem posta.",
};

export const autoridade = {
  titulo: "Quem está por trás",
  foto: "/thiago_foto.webp",
  fotoAlt: "Thiago Espíndola, criador do Método 50K",
  paragrafos: [
    "Eu sou o Thiago Espíndola, criador da comunidade Surfar.",
    "Trabalho há anos com marketing digital. Hoje vivo de criar conteúdo e vender pela internet, e apareço no meu perfil todo dia.",
    "Quando eu comecei esse perfil, ele tinha zero seguidores. Eu não tinha audiência, só um jeito de trabalhar: gravar simples, editar simples e saber de onde tirar a ideia do dia seguinte. Fiz isso todo dia.",
    "Em cerca de 3 meses, o perfil passou dos 50 mil seguidores.",
    "E eu não esperei ter uma audiência grande pra vender. Desde os primeiros 5 mil seguidores eu já vendia todos os dias.",
    "Continuo usando o mesmo método no meu perfil hoje. Quando você estiver lendo isso, o número provavelmente já vai estar maior.",
  ],
  // paragrafo que sai em destaque (o resultado)
  destaque: 3,
  print: PRINT_PERFIL,
  fechamento:
    "O Método 50K é esse caminho organizado em aulas, na ordem certa, pra você não gastar meses testando sozinho.",
  // Dado informado como real. Nao adicionar outro numero sem fonte.
  // o 50 conta de 0 ate o valor quando aparece na tela
  stat: { de: 0, ate: 50, sufixo: "mil", rotulo: "seguidores em cerca de 3 meses, no meu próprio perfil." },
};

export const reforco = {
  abertura:
    "Eu espero de verdade que este seja o último treinamento que você precise comprar pra crescer sua audiência.",
  titulo: `O Método 50K completo por ${PRECO}.`,
  texto:
    "Método 50K, Edição Descomplicada e Ideias Infinitas num pagamento só. O acesso sai na hora, e as aulas são atualizadas sempre que o algoritmo mudar.",
  cta: CTA,
  microcopia: MICRO,
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
