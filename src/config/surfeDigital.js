// ============================================================
//  CONSTANTES CONFIGURAVEIS
//  Tudo que muda de valor mora aqui em cima.
// ============================================================

/**
 * CHECKOUT_URL: link do checkout na Kiwify. Usado por TODOS os botoes
 * da pagina de vendas. Trocar pelo link real do produto.
 * Formato da Kiwify: https://pay.kiwify.com.br/<codigo-do-produto>
 */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/SEU-CODIGO";

/** Preco cheio do SURFE DIGITAL. */
export const PRECO_CHEIO = "R$197";

/**
 * Preco da janela de lancamento, se existir.
 *
 * Deixe `null` para a pagina vender pelo preco cheio, sem preco
 * riscado. Com null a ancora some sozinha: nao tem como a pagina
 * mostrar um "de R$197 por" que nao e verdade.
 *
 * So preencha se o produto realmente voltar a R$197 depois da janela.
 */
export const PRECO_JANELA = null;

/**
 * Texto do parcelamento. Confirmar as condicoes reais na Kiwify antes
 * de publicar: nao inventar numero de parcela aqui.
 */
export const PARCELAMENTO = "ou parcelado no cartão";

/**
 * Data real de fechamento da janela, ex: "12 de outubro".
 * Deixe null para a pagina falar de janela sem citar data.
 */
export const DATA_FECHAMENTO = null;

/** Prazo da garantia, em dias. */
export const GARANTIA_DIAS = 7;

// ============================================================
//  COPY
//  Rascunho de trabalho, feito para ser revisado.
// ============================================================

export const nav = {
  marca: "Surfe Digital",
  ancoras: [
    { label: "Método", href: "#metodo" },
    { label: "Para quem é", href: "#para-quem-e" },
    { label: "Bônus", href: "#bonus" },
    { label: "Preço", href: "#preco" },
  ],
  cta: "Quero entrar",
};

export const hero = {
  selo: "Formação completa",
  titulo:
    "Construa uma marca pessoal que trabalha por você, mesmo começando do zero hoje.",
  subtitulo:
    "Uma formação completa pra viver do digital, do primeiro post até a co-produção.",
  chips: [
    "Marca pessoal do zero",
    "Conteúdo que as pessoas param pra ver",
    "Co-produção, pra quem não quer aparecer",
  ],
  cta: "Quero entrar no SURFE DIGITAL",
  microcopia: "Acesso imediato após a compra · 7 dias de garantia",
};

export const faixaTermos = [
  "marca pessoal",
  "conteúdo que atrai",
  "co-produção",
  "roteiros magnéticos",
  "perfil de criador",
  "surfe digital",
];

export const problema = {
  titulo: "Se você se reconhece em algum desses pontos, o problema não é você",
  dores: [
    {
      titulo: "Você posta e ninguém vê",
      texto:
        "Aí vem a explicação fácil: o algoritmo te odeia, não é a sua vez, faltou sorte.",
    },
    {
      titulo: "Você tem vivência, mas não sabe empacotar",
      texto:
        "O conteúdo está todo dentro de você. Só que ninguém consegue acessar do jeito que você conta hoje.",
    },
    {
      titulo: "Você copia o que viralizou e não funciona",
      texto:
        "Você copiou o formato. O que fez aquilo funcionar era o mecanismo por trás, e ele não aparece na tela.",
    },
    {
      titulo: "Você quer viver do digital e não sabe o primeiro passo",
      texto:
        "A vontade existe há meses. O passo concreto de segunda de manhã, não.",
    },
    {
      titulo: "Você não quer aparecer",
      texto:
        "Então você decidiu que essa porta não é pra você. Ela é. Só que a chave é outra.",
    },
  ],
  viradas: [
    {
      titulo: "A audiência ainda está sendo distribuída",
      texto:
        "Todo dia entra gente nova consumindo conteúdo em português. Quem constrói presença agora pega essa onda inteira. Quem espera, pega o que sobrar dela.",
    },
    {
      titulo: "Não é talento, não é sorte, é método",
      texto:
        "O algoritmo não é um pêndulo te perseguindo. É um sistema com regra, e regra você aprende, aplica e repete.",
    },
  ],
};

export const escolha = {
  titulo: "Você está diante de dois caminhos",
  negativo: {
    titulo: "Continuar postando no escuro",
    itens: [
      "Você publica e torce.",
      "Cada post é um chute novo, sem leitura do que funcionou antes.",
      "Quando não engaja, sobra culpar o alcance.",
      "Seis meses depois, o perfil está igual.",
    ],
  },
  positivo: {
    titulo: "Operar com um sistema que já funcionou",
    itens: [
      "Você sabe por que aquele conteúdo funcionou.",
      "Você repete o mecanismo, não o formato.",
      "Cada post alimenta o próximo.",
      "Seis meses depois, você tem um ativo.",
    ],
  },
  fechamento:
    "Postar no escuro é dar importância excessiva ao algoritmo e nenhuma ao processo. Qual dos dois você vai estar vivendo daqui a seis meses?",
};

export const autoridade = {
  titulo: "Eu não comecei com audiência, comecei com um método",
  paragrafos: [
    "Eu não tinha perfil grande, não tinha equipe e não tinha ninguém pra me indicar. Tinha um jeito de olhar pra realidade que eu vinha estudando e aplicando na minha própria vida.",
    "Quando eu passei a tratar conteúdo como sistema, e não como sorte, a conta virou. Foram 40 mil seguidores em 2 meses, aplicando no meu perfil exatamente o que eu ensino aqui dentro.",
    "O SURFE DIGITAL é esse processo escrito e colocado em ordem. Não é teoria que eu li em algum lugar. É o que eu faço toda semana.",
  ],
  credenciais: [
    {
      titulo: "40 mil seguidores em 2 meses",
      texto:
        "Crescimento real no Instagram, no período em que o método foi aplicado. Número verificável no perfil.",
    },
    {
      titulo: "Método aplicado, não teorizado",
      texto:
        "Tudo que está no curso passou primeiro pelo perfil dele, com erro, ajuste e repetição.",
    },
    {
      titulo: "Comunidade ativa",
      texto:
        "Um grupo de pessoas construindo ao mesmo tempo, trocando o que está funcionando agora.",
    },
  ],
};

// ------------------------------------------------------------
//  BLOCO DESLIGADO: ativar quando houver depoimento real.
//  Enquanto esta lista estiver vazia, a secao 7 nao renderiza
//  nada, nem o titulo. Nao preencher com nome ou resultado
//  inventado: assim que houver os tres videos gravados, e so
//  adicionar os objetos aqui e a secao aparece sozinha.
//
//  Formato de cada item:
//  { nome, titulo, videoSrc, poster }
//  videoSrc: MP4 vertical 1080x1920, ver ASSETS.md
// ------------------------------------------------------------
export const depoimentos = [];

export const provaSocial = {
  titulo: "Quem já está aplicando",
  subtitulo: "Depoimentos de quem entrou e colocou o método pra rodar.",
};

export const resultados = {
  titulo: "O que você sai sabendo fazer",
  subtitulo:
    "Cada item abaixo é uma habilidade prática, não um conceito pra guardar.",
  itens: [
    {
      titulo: "Montar seu perfil de criador",
      texto:
        "Bio, destaques e primeira impressão que fazem a pessoa querer ficar.",
    },
    {
      titulo: "Escrever roteiro que segura atenção",
      texto: "Começo, meio e fim pensados pra pessoa não deslizar o dedo.",
    },
    {
      titulo: "Entender por que um conteúdo viraliza",
      texto: "O mecanismo por trás do formato, pra você criar em vez de copiar.",
    },
    {
      titulo: "Vender pelos stories sem parecer vendedor",
      texto: "Uma rotina que aquece, mostra e convida, no seu tom de voz.",
    },
    {
      titulo: "Atrair leads todos os dias",
      texto: "O caminho pra transformar quem assiste em quem levanta a mão.",
    },
    {
      titulo: "Montar seu modelo de negócio solo",
      texto: "Como uma pessoa sozinha organiza oferta, entrega e rotina.",
    },
    {
      titulo: "Trabalhar como co-produtor",
      texto:
        "Entrar na estrutura de quem já tem audiência, sem construir a sua antes.",
    },
    {
      titulo: "Construir sem precisar aparecer",
      texto: "O caminho inteiro pra quem não quer o próprio rosto na câmera.",
    },
  ],
  cta: "Quero entrar no SURFE DIGITAL",
};

export const comparativo = {
  titulo: "A diferença não está no esforço",
  colunaNegativa: "Quem posta no escuro",
  colunaPositiva: "Quem tem um sistema",
  linhas: [
    {
      negativo: "Escolhe o tema no impulso do dia",
      positivo: "Trabalha dentro de uma linha de conteúdo definida",
    },
    {
      negativo: "Copia o formato que viu viralizar",
      positivo: "Entende o mecanismo e adapta pro próprio tema",
    },
    {
      negativo: "Publica e espera",
      positivo: "Publica, lê o resultado e ajusta o próximo",
    },
    {
      negativo: "Fala pra todo mundo e não conecta com ninguém",
      positivo: "Fala pra uma pessoa específica",
    },
    {
      negativo: "Trata story como sobra do feed",
      positivo: "Usa story como o lugar onde a venda acontece",
    },
    {
      negativo: "Depende de aparecer pra existir no digital",
      positivo: "Tem também o caminho da co-produção",
    },
    {
      negativo: "Recomeça do zero toda segunda",
      positivo: "Acumula, cada semana em cima da anterior",
    },
  ],
};

export const metodo = {
  titulo: "SURFE DIGITAL é uma formação, não um cursinho de viralizar",
  intro:
    "São nove módulos em ordem. Você começa desenhando a base do seu negócio, passa pela criação de conteúdo e termina no caminho da co-produção. Cada módulo entrega uma coisa pra executar.",
  blocos: [
    {
      nome: "Base",
      modulos: [
        {
          numero: "01",
          titulo: "Modelo de negócio solo",
          texto:
            "Como uma pessoa sozinha organiza oferta, entrega e rotina. O desenho vem antes do post.",
        },
        {
          numero: "02",
          titulo: "Marca pessoal do zero",
          texto:
            "O que você defende, pra quem você fala e como isso vira reconhecimento com o tempo.",
        },
      ],
    },
    {
      nome: "Criação de conteúdo",
      modulos: [
        {
          numero: "03",
          titulo: "Perfil de criador",
          texto:
            "Bio, destaques e primeira impressão. O que faz alguém decidir ficar em três segundos.",
        },
        {
          numero: "04",
          titulo: "Roteiros magnéticos",
          texto:
            "A estrutura que segura atenção do primeiro ao último segundo, em qualquer formato.",
        },
        {
          numero: "05",
          titulo: "Vender pelos stories",
          texto:
            "A rotina que aquece, mostra e convida, sem o conteúdo virar anúncio.",
        },
        {
          numero: "06",
          titulo: "Atrair leads todos os dias",
          texto:
            "Como transformar quem assiste em quem levanta a mão e pede o próximo passo.",
        },
      ],
    },
    {
      nome: "Co-produção",
      modulos: [
        {
          numero: "07",
          titulo: "O que é co-produção",
          texto:
            "O modelo por dentro: quem faz o quê, como se divide e por que ele funciona.",
        },
        {
          numero: "08",
          titulo: "Trabalhar como co-produtor",
          texto:
            "Como entrar na operação de um criador que já tem audiência e entregar resultado.",
        },
        {
          numero: "09",
          titulo: "Seu perfil de co-produtor",
          texto:
            "Como se apresentar, o que mostrar e onde encontrar os criadores certos.",
        },
      ],
    },
  ],
  reforcos: [
    {
      titulo: "Aulas práticas, sem enrolação",
      texto:
        "Cada aula vai direto ao ponto. Você assiste e já sai com o que fazer depois.",
    },
    {
      titulo: "Atualizações incluídas",
      texto:
        "O digital muda. Quando o método é atualizado, você recebe sem pagar de novo.",
    },
  ],
};

export const coproducao = {
  selo: "Quase ninguém ensina isso",
  titulo: "E se você não quer aparecer?",
  intro:
    "Existe um caminho no digital onde você não é o rosto. Você é a estrutura por trás de quem já é o rosto. Isso chama co-produção, e são três dos nove módulos do curso.",
  cards: [
    {
      titulo: "O que faz um co-produtor",
      texto:
        "Você entra na operação de um criador: estratégia de conteúdo, roteiro, oferta, lançamento. Ele aparece, você constrói.",
    },
    {
      titulo: "Por que criadores precisam de você",
      texto:
        "Quem tem audiência quase nunca tem tempo. Falta quem organize a oferta e faça o negócio rodar sem depender do humor da semana.",
    },
    {
      titulo: "Você não precisa de audiência própria",
      texto:
        "Esse caminho não começa com seguidor. Começa com uma habilidade que resolve um problema real de quem já tem seguidor.",
    },
    {
      titulo: "Por que agora",
      texto:
        "Tem muito criador crescendo rápido e pouca gente sabendo operar por trás. A vaga existe e está aberta.",
    },
  ],
  cta: "Quero aprender co-produção",
};

export const bonus = {
  titulo: "Dois bônus entram junto",
  subtitulo: "Sem soma de valor inventada. Os dois estão inclusos no preço.",
  itens: [
    {
      nome: "Acesso à comunidade",
      texto:
        "Um grupo de gente construindo ao mesmo tempo que você. A pergunta que te trava hoje, alguém ali já passou por ela.",
      etiqueta: "Incluso",
    },
    {
      nome: "Material de implementação",
      texto:
        "Checklist de execução pra você não travar no meio do caminho, mais um encontro ao vivo de tira-dúvidas.",
      etiqueta: "Incluso",
    },
  ],
};

export const oferta = {
  // usados quando PRECO_JANELA tem valor
  selo: "Condição de lançamento",
  titulo: "Entre agora, na janela",
  // usados quando PRECO_JANELA e null, ou seja, preco cheio
  seloSemJanela: "Acesso imediato",
  tituloSemJanela: "Entre no SURFE DIGITAL",
  cta: "Quero entrar no SURFE DIGITAL",
  inclusos: [
    "Os 9 módulos do SURFE DIGITAL",
    "O bloco completo de co-produção",
    "Acesso à comunidade",
    "Checklist de execução",
    "Encontro ao vivo de tira-dúvidas",
    "Atualizações do método",
    "Acesso imediato após a compra",
    "7 dias de garantia",
  ],
  escassez:
    "O preço de lançamento vale enquanto a janela estiver aberta. Quando ela fecha, o SURFE DIGITAL volta para o preço cheio. Sem contador na tela e sem cronômetro que reinicia: é só o preço voltando ao normal.",
};

export const garantia = {
  titulo: "7 dias pra decidir sem risco",
  texto:
    "Você entra, assiste e aplica. Se em 7 dias não fizer sentido pra você, pede o reembolso e recebe o valor de volta. Sem justificativa e sem ninguém tentando te convencer do contrário. Esse é o direito de arrependimento previsto no Código de Defesa do Consumidor, e aqui ele vale integral.",
};

export const faq = {
  titulo: "Perguntas que chegam sempre",
  itens: [
    {
      pergunta: "Funciona pra quem está começando do zero?",
      resposta:
        "Funciona, e o curso começa exatamente aí. Os dois primeiros módulos são sobre montar a base antes de existir qualquer seguidor. Se você já tem perfil, essa parte passa mais rápido.",
    },
    {
      pergunta: "Funciona pra quem não quer aparecer?",
      resposta:
        "Sim. Três dos nove módulos são sobre co-produção, que é o caminho de trabalhar por trás de criadores que já aparecem. Você não precisa gravar o próprio rosto pra seguir por ali.",
    },
    {
      pergunta: "Quanto tempo por dia eu preciso?",
      resposta:
        "As aulas são curtas e dá pra fazer um módulo por semana. A execução é que pede constância, não volume. Uma hora por dia bem usada rende mais do que um fim de semana inteiro uma vez por mês.",
    },
    {
      pergunta: "E se eu não tenho o que ensinar?",
      resposta:
        "Você não precisa ensinar nada pra começar. Marca pessoal também se constrói mostrando processo, opinião e o que você está aprendendo agora. E se mesmo assim não for o seu caminho, a co-produção não depende de você ter conteúdo próprio.",
    },
    {
      pergunta: "Como eu recebo o acesso?",
      resposta:
        "O pagamento é pela Kiwify. Assim que a compra é confirmada, o acesso chega no seu e-mail. Não tem espera nem turma pra abrir.",
    },
    {
      pergunta: "Como funciona a garantia?",
      resposta:
        "São 7 dias contados a partir da compra. Nesse período você pede o reembolso e recebe o valor de volta, sem precisar justificar. É o direito de arrependimento do Código de Defesa do Consumidor.",
    },
  ],
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
    "Os resultados variam de pessoa para pessoa e dependem de aplicação, contexto e esforço individual. Nada nesta página é garantia de resultado.",
  ],
};

export const ctaFixo = {
  acao: "Quero entrar",
};
