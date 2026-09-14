// ============================================================
//  METODO S.U.R.F.E
//  Pagina de vendas. Rota /metodo-surfe.
//
//  Copy: v1 (revisada pelo copywriter).
//
//  CONSTANTES CONFIGURAVEIS
//  Tudo que muda de valor mora aqui em cima.
// ============================================================

/** CHECKOUT_URL: link do produto na Kiwify. Usado por TODOS os botoes. */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/7BvCDYT";

/** Preco a vista. */
export const PRECO_VISTA = "R$97";

/** Parcelamento, confirmado na Kiwify antes de publicar. */
export const PARCELAS = "12x de R$10,03";

/**
 * Valor de ancoragem, riscado acima do preco.
 *
 * `null` DESLIGA a ancora inteira: some o valor riscado e some a lista
 * de composicao. A copy v1 vende so pelo preco, sem ancoragem.
 *
 * Para religar, basta voltar a string ("R$457") e conferir se
 * COMPOSICAO_ANCORA ainda descreve o que compoe esse valor.
 */
export const VALOR_ANCORA = null;

/** O que compoe o valor de ancoragem. So aparece se VALOR_ANCORA existir. */
export const COMPOSICAO_ANCORA = [
  "8 módulos completos",
  "Trilha Comece por aqui",
  "Comunidade no WhatsApp",
];

/** Prazo da garantia, em dias. */
export const GARANTIA_DIAS = 7;

/** Prazo da pratica diaria, em minutos. Aparece em varias secoes. */
export const MINUTOS_POR_DIA = 20;

/**
 * BLOCO DESLIGADO: numeros sociais.
 * So ligar com numero real e verificavel. Enquanto a flag estiver
 * false, a secao 6 nao renderiza nada e a pagina fecha sem buraco.
 */
export const MOSTRAR_NUMEROS_SOCIAIS = false;
export const NUMEROS_SOCIAIS = [
  { valor: "", rotulo: "" },
  { valor: "", rotulo: "" },
  { valor: "", rotulo: "" },
];

// ============================================================
//  IMAGENS
//  Todas em /public. As artes de modulo estao em /public/metodo,
//  convertidas para WebP 800x1200 a partir dos originais na raiz
//  de /public (que podem ser apagados depois).
// ============================================================

/** Foto do Thiago, 1200x1600. Compartilhada com a pagina do SURFE DIGITAL. */
export const FOTO_THIAGO = "/thiago_foto.webp";

// ============================================================
//  COPY v1
// ============================================================

export const nav = {
  marca: "Método S.U.R.F.E",
  ancoras: [
    { label: "O padrão", href: "#o-padrao" },
    { label: "O método", href: "#o-metodo" },
    { label: "Para quem é", href: "#para-quem-e" },
    { label: "Investimento", href: "#investimento" },
  ],
  cta: "Começar agora",
};

export const hero = {
  eyebrow: "Protocolo S.U.R.F.E",
  titulo: "Você não é preguiçoso. Te programaram assim.",
  subtitulo:
    `Um protocolo de ${MINUTOS_POR_DIA} minutos por dia pra reescrever o padrão que decide como você age. Instalaram esse padrão sem te perguntar.`,
  cta: "Quero reprogramar minha mente",
  microcopia: `${PRECO_VISTA} à vista ou ${PARCELAS} · acesso imediato · ${GARANTIA_DIAS} dias de garantia`,
  // Comparador antes/depois no lugar da arte de abertura. As duas fotos
  // estao em /public/metodo, convertidas pra mesma caixa 960x1200 a
  // partir de thiago_antes.jpeg e thiago_e_camelo.jpg. Apague este
  // bloco inteiro e o hero volta a usar `arte` abaixo.
  comparacao: {
    antes: {
      src: "/metodo/thiago-antes.webp",
      alt: "Thiago Espíndola antes, de camiseta vermelha na rua, segurando duas galinhas",
    },
    depois: {
      src: "/metodo/thiago-depois.webp",
      alt: "Thiago Espíndola hoje, de keffiyeh, numa selfie ao lado de um camelo",
    },
    rotuloAntes: "Antes",
    rotuloDepois: "Hoje",
    // Na selfie original o rosto fica a esquerda e ficaria escondido
    // atras da foto de antes com a linha no meio. Espelhada, o rosto
    // vai pra direita. false mostra a foto como foi tirada.
    espelharDepois: true,
  },
  // Fallback, so usado se `comparacao` for removido.
  arte: "/logo_surfe.webp",
  arteAjuste: "contain",
};

export const agitacao = {
  titulo: "Por fora tudo certo. Por dentro um ruído.",
  paragrafos: [
    "Trabalho, rotina, gente em volta. E aquela sensação de estar sintonizado no canal errado, sem conseguir apontar o que está fora do lugar.",
    "Você sente que a frequência certa existe. E toda vez que tenta sintonizar, alguma coisa te puxa de volta pro mesmo lugar de sempre.",
  ],
  rotuloPadroes: "Os quatro padrões",
  tituloPadroes: "Reconhece algum?",
  padroes: [
    {
      numero: "01",
      titulo: "Uma vida que você não escolheu",
      texto: "Você decora as falas de um roteiro que outra pessoa escreveu.",
    },
    {
      numero: "02",
      titulo: "O projeto que para na terceira semana",
      texto:
        "Você começa, jura que dessa vez vai até o fim. Aí a semana aperta e tudo volta pro lugar de antes.",
    },
    {
      numero: "03",
      titulo: "Você sabe o que fazer e não faz",
      texto: "Já leu, já assistiu, já tentou. A informação chegou. A mudança não.",
    },
    {
      numero: "04",
      titulo: "Uma parte quer mais, a outra sabota",
      texto: "Tem um padrão rodando por baixo, e ele é muito bom no que faz.",
      destaque: true,
    },
  ],
};

export const raiz = {
  titulo: "Mais conteúdo não resolve isso",
  paragrafos: [
    "Dá pra consumir dez anos de desenvolvimento pessoal e continuar exatamente no mesmo lugar. Informação entra pela cabeça, e o padrão roda mais fundo, num lugar onde vídeo e livro não chegam.",
  ],
  fechamento:
    "Motivação some rápido e força de vontade acaba na sexta. Protocolo roda também no dia em que você não quer.",
};

export const faixaTermos = [
  "sintonizar",
  "reprogramar",
  "sair do automático",
  "surfar a realidade",
  `${MINUTOS_POR_DIA} minutos por dia`,
];

export const autoridade = {
  rotulo: "Quem está por trás",
  titulo: "Eu também fui um zumbi funcional",
  foto: FOTO_THIAGO,
  paragrafos: [
    "Faculdade, rotina, amigos, tudo dentro do esperado. De fora fazia sentido. Por dentro era ansiedade constante e a sensação de seguir um script que eu não escrevi.",
    "A pergunta que mudou tudo foi essa: e se não for falta de esforço nem azar, e sim um padrão que instalaram em mim sem eu perceber?",
    "Consumi anos de conteúdo solto e não mudei nada. Só mudou quando aquilo ganhou ordem e repetição todo dia. O S.U.R.F.E é essa ordem escrita.",
    "Hoje eu moro na Europa e escolho como uso o meu tempo. O que me move é ver alguém preso no automático começar a se mover com intenção.",
  ],
};

export const paraQuem = {
  rotulo: "Para quem é",
  titulo: "Seja honesto com você",
  positivo: {
    titulo: "É pra você se",
    itens: [
      "Sua mente trabalha contra você mais do que a favor.",
      "Você sabe o que precisa fazer e não sustenta.",
      "Você cansou de motivação que dura dois dias.",
      "Você quer entender a mecânica, não ouvir “acredite em você”.",
      `Você topa ${MINUTOS_POR_DIA} minutos por dia.`,
    ],
  },
  negativo: {
    titulo: "Não é pra você se",
    itens: [
      "Você quer atalho sem compromisso.",
      "Você já tem a vida que quer e busca entretenimento.",
      "Você prefere a desculpa de que não é possível.",
      "Você quer se motivar. Aqui você reprograma.",
    ],
  },
};

export const protocolo = {
  eyebrow: "O protocolo",
  titulo: "Cinco etapas, na ordem",
  intro:
    "Aulas curtas, de 4 a 12 minutos, pra você assistir e aplicar no mesmo dia. Cada etapa prepara a próxima, e quando as cinco entram na rotina, elas passam a rodar sem você precisar lembrar.",
  etapas: [
    {
      letra: "S",
      nome: "Sintonia",
      texto:
        "Calibrar a mente antes de agir. Começa pela gratidão, que é o ajuste mais simples e o que mais gente pula.",
      arte: "/metodo/sintonia.webp",
    },
    {
      letra: "U",
      nome: "Unidade",
      texto:
        "Parar de brigar com a realidade e começar a moldar ela. Aqui entra o alter ego, a versão sua que faz o que você ainda não faz.",
      arte: "/metodo/unidade.webp",
    },
    {
      letra: "R",
      nome: "Reprogramação",
      // PENDENTE: a segunda frase estava marcada para confirmacao na v1,
      // mas a nota explicando o que confirmar nao veio junto.
      texto:
        "Reescrever as crenças que te seguram, principalmente as que travam dinheiro. Você aprende a reconhecer a crença no momento em que ela aparece.",
      arte: "/metodo/reprogramacao.webp",
    },
    {
      letra: "F",
      nome: "Fluxo",
      texto:
        "Entrar no estado em que ação e resultado se alinham. E reconhecer os pêndulos, que sugam sua energia sem você perceber.",
      arte: "/metodo/fluxo.webp",
    },
    {
      letra: "E",
      nome: "Execução",
      texto:
        "Transformar tudo que você calibrou em resultado concreto. É aqui que o padrão novo aparece no que você faz, e não só no que você pensa.",
      arte: "/metodo/execucao.webp",
    },
  ],
};

export const aprofundamento = {
  eyebrow: "Aprofundamento",
  titulo: "O que vem depois do protocolo",
  intro:
    "Três módulos que entram quando o protocolo já está rodando em você. É a maior parte do conteúdo do curso.",
  itens: [
    {
      nome: "Leis Herméticas",
      aulas: "7 aulas",
      texto:
        "Os princípios de como a realidade responde ao que você emite. Correspondência, vibração, causa e efeito, cada um com uma aplicação prática.",
      arte: "/metodo/leis-hermeticas.webp",
    },
    {
      nome: "Salto Quântico",
      aulas: "9 aulas",
      texto:
        "Como reprogramar a mente em 30 dias, criar uma identidade nova e parar de depender da aprovação dos outros.",
      // O arquivo enviado e horizontal (759x646) com transparencia, nao
      // uma arte vertical como as outras. Entra inteiro, sem recorte.
      // Quando existir a versao 2:3, e so trocar o caminho e tirar o ajuste.
      arte: "/metodo/salto-quantico.webp",
      arteAjuste: "contain",
    },
    {
      nome: "Economia Digital",
      aulas: "3 aulas",
      texto:
        "Como o padrão novo vira oportunidade concreta. Como montar um negócio sozinho, construir marca pessoal e por onde começar na internet.",
      arte: "/metodo/economia-digital.webp",
    },
  ],
};

export const base = {
  titulo: "Não é lei da atração",
  paragrafos: [
    "A maior parte do que você faz hoje roda no automático, em padrões instalados cedo e nunca revisados. Padrão automático se reescreve do mesmo jeito que se instalou: repetição, na mesma ordem, por tempo suficiente.",
    "Aqui não tem mantra e não tem pensamento positivo. Tem prática, todo dia, na mesma ordem.",
  ],
};

export const entrega = {
  eyebrow: "O que você recebe",
  titulo: "Tudo que entra com o acesso",
  itens: [
    {
      titulo: "9 módulos, 24 aulas",
      texto:
        "Os cinco do protocolo e os três de aprofundamento, mais a trilha de entrada.",
    },
    {
      titulo: "Trilha Comece por aqui",
      texto: "Pra você saber por onde começar sem se perder no menu.",
    },
    {
      titulo: "Comunidade no WhatsApp",
      texto: "Só pra aluno. Gente aplicando o protocolo no mesmo período que você.",
    },
    {
      titulo: "Acesso pela Kiwify",
      texto: "Liberado na hora, no e-mail que você usar no checkout.",
    },
    {
      titulo: "No seu ritmo",
      texto: `A partir de ${MINUTOS_POR_DIA} minutos por dia. Sem turma e sem prazo pra assistir.`,
    },
  ],
};

export const investimento = {
  eyebrow: "Investimento",
  titulo: "O que custa pra entrar",
  seloAncora: "Valor total",
  rotuloVista: "à vista",
  rotuloParcelas: "ou",
  cta: "Quero começar hoje",
  inclusos: [
    "Os 5 módulos do protocolo S.U.R.F.E",
    "Os 3 módulos de aprofundamento",
    "Trilha Comece por aqui",
    "Comunidade no WhatsApp",
    "Acesso imediato",
    `${GARANTIA_DIAS} dias de garantia`,
  ],
  nota: "Pagamento seguro pela Kiwify · acesso imediato",
};

export const garantia = {
  titulo: `${GARANTIA_DIAS} dias pra testar o protocolo`,
  texto: `Você entra, roda os primeiros dias e sente se funciona em você. Se não fizer sentido, pede o reembolso e recebe o valor de volta, sem precisar justificar. É o direito de arrependimento previsto no Código de Defesa do Consumidor, e aqui ele vale integral.`,
};

export const faq = {
  eyebrow: "Dúvidas",
  titulo: "O que perguntam antes de entrar",
  itens: [
    {
      pergunta: "Preciso de algum conhecimento antes?",
      resposta:
        "Não. A trilha Comece por aqui existe pra isso, e a primeira etapa do protocolo começa do zero.",
    },
    {
      pergunta: "Quanto tempo por dia?",
      resposta: `A partir de ${MINUTOS_POR_DIA} minutos. As aulas têm de 4 a 12 minutos, então o tempo maior é o da prática, não o de assistir.`,
    },
    {
      pergunta: "É no meu ritmo?",
      resposta: "É. Não tem turma, não tem horário e não tem prazo pra terminar.",
    },
    {
      pergunta: "Por quanto tempo eu tenho acesso?",
      // PENDENTE: a v1 deixou "[preencher: vitalicio, 1 ano, enquanto o
      // produto existir]". Mantida a resposta antiga, que e verdadeira e
      // nao promete prazo. Trocar assim que a decisao existir.
      resposta:
        "O acesso é liberado na sua conta da Kiwify e você volta nas aulas quantas vezes precisar.",
    },
    {
      pergunta: "E se eu não gostar?",
      resposta: `Você tem ${GARANTIA_DIAS} dias pra pedir reembolso e receber o valor de volta, sem justificar.`,
    },
    {
      pergunta: "Serve pra qualquer idade?",
      resposta:
        "Serve. O padrão de quem tem 50 está rodando há mais tempo que o de quem tem 20, e a capacidade de reescrever é a mesma nos dois.",
    },
    {
      pergunta: "Qual a diferença pro conteúdo gratuito do Thiago?",
      resposta:
        "No gratuito você monta a ordem sozinho. Aqui a ordem já está montada, uma etapa preparando a seguinte, com prática diária em vez de vídeo pra assistir e esquecer.",
    },
  ],
};

export const decisao = {
  titulo: "Aquela parte que quer mais já está aí dentro",
  texto:
    "Você pode continuar tentando na base da vontade, e já sabe onde isso te trouxe. Ou pode entender como a sua mente funciona e parar de ser levado por qualquer onda.",
  cta: "Entrar no Método S.U.R.F.E",
  microcopia: `Acesso imediato · ${GARANTIA_DIAS} dias de garantia · pagamento seguro`,
};

export const rodape = {
  marca: "Surfe a Realidade",
  direitos: "Todos os direitos reservados",
  links: [
    { label: "Política de privacidade", href: "#politica-de-privacidade" },
    { label: "Termos de uso", href: "#termos-de-uso" },
  ],
  disclaimers: [
    "Este site não é parte do Facebook nem da Meta Platforms, Inc. O nome Facebook é marca registrada da Meta Platforms, Inc.",
    "Os resultados variam de pessoa para pessoa e dependem de aplicação, contexto e constância. Nada nesta página é garantia de resultado.",
  ],
};

export const ctaFixo = {
  acao: "Quero entrar",
  nota: `ou ${PARCELAS}`,
};
