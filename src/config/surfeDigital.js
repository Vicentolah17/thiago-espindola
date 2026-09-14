// ============================================================
//  CONSTANTES CONFIGURAVEIS
//  Tudo que muda de valor mora aqui em cima.
// ============================================================

/**
 * CHECKOUT_URL: link do checkout na Kiwify. Usado por TODOS os botoes
 * da pagina de vendas.
 * Formato da Kiwify: https://pay.kiwify.com.br/<codigo-do-produto>
 */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/iSMthCh";

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
//  COPY v1 (revisada pelo copywriter)
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
  // "\n" quebra a linha na tela
  titulo:
    "Depois de muitas tentativas.\nDescobri a linha reta para destravar o digital.",
  subtitulo:
    "Sentir que ninguém liga pro seu conteúdo é estressante. Mais de 1200 pessoas aplicaram minhas estratégias e acabaram com esse sentimento. Já tentei usar todo tipo de cronograma e método pronto de internet. Nada me parecia certo. Até entender que o algoritmo honra identidade e rejeita método genérico.",
  chips: [
    "Marca pessoal do zero",
    "Conteúdo que para o scroll",
    "Co-produção, pra quem não quer aparecer",
  ],
  cta: "Quero entrar no SURFE DIGITAL",
  microcopia: `Acesso imediato após a compra · ${GARANTIA_DIAS} dias de garantia`,
};

export const faixaTermos = [
  "marca pessoal",
  "conteúdo que prende",
  "co-produção",
  "roteiros magnéticos",
  "perfil de criador",
  "surfe digital",
];

export const problema = {
  titulo: "Se você se reconhece aqui, o problema não é você",
  dores: [
    {
      titulo: "Você grava e apaga",
      texto:
        "Na sua cabeça você é claro e carismático. Aí você bota pra gravar e parece outra pessoa.",
    },
    {
      titulo: "Você posta e ninguém vê",
      texto:
        "Aí vem a desculpa fácil: o algoritmo não gosta de você, não é a sua vez, faltou sorte.",
    },
    {
      titulo: "Você manja do assunto, mas não desenrola",
      texto:
        "Você sabe do que está falando. Do jeito que você conta hoje, ninguém dá moral.",
    },
    {
      titulo: "Você copia o que viraliza",
      texto:
        "Você pega o corte, a música, a legenda. Mas o que faz o vídeo funcionar não está na tela.",
    },
    {
      titulo: "Você simplesmente não quer aparecer",
      texto:
        "Daí risca o mercado digital da lista. Tem outra porta, e ela não pede câmera.",
    },
  ],
  viradas: [
    {
      titulo: "Você não é o defeito",
      texto:
        "Vinte anos te mandando não chamar atenção. Aí o mundo virou e passou a cobrar o contrário.",
    },
    {
      titulo: "O algoritmo tem regra",
      texto:
        "Ele não sorteia quem vai bombar. Ele funciona por regra, e regra é aprendizado e repetição.",
    },
  ],
};

export const escolha = {
  titulo: "Você está diante de dois caminhos",
  negativo: {
    titulo: "Continuar postando no escuro",
    itens: [
      "Você publica e torce.",
      "Cada post é um chute novo, sem olhar o que funcionou antes.",
      "Quando não engaja, sobra culpar o alcance.",
      "Seis meses depois, o perfil está igual.",
    ],
  },
  positivo: {
    titulo: "Operar com um método",
    itens: [
      "Você sabe por que aquele post funcionou.",
      "Você repete o que deu certo e adapta pro próximo tema.",
      "Cada post alimenta o próximo.",
      "Seis meses depois, você tem um perfil que trabalha por você.",
    ],
  },
  // duas frases em paragrafo normal, e so a pergunta em destaque
  fechamentoIntro:
    "Todo dia entra gente nova consumindo conteúdo em português. Quem começa agora pega essa onda inteira, quem espera pega o que sobrar dela.",
  fechamento: "Em qual dos dois lados você vai estar daqui a seis meses?",
};

export const autoridade = {
  titulo: "Eu não comecei com audiência, comecei com um método",
  // Foto real, 1200x1600, em /public. null = volta ao placeholder.
  foto: "/thiago_foto.webp",
  paragrafos: [
    "Eu não tinha perfil grande, não tinha equipe e não tinha ninguém pra me indicar. O que eu tinha era um jeito de olhar pra realidade que eu vinha estudando e testando em mim mesmo.",
    "Quando eu parei de tratar conteúdo como sorte e comecei a tratar como método, a conta virou. Foram 40 mil seguidores em 2 meses, aplicando no meu perfil exatamente o que está aqui dentro.",
    "O SURFE DIGITAL é esse processo escrito e colocado em ordem. É o que eu faço toda semana, e agora você faz junto.",
  ],
  credenciais: [
    {
      titulo: "40 mil seguidores em 2 meses",
      texto:
        "Crescimento no meu Instagram, no período em que apliquei o método. Você pode conferir no perfil.",
    },
    {
      titulo: "Aplicado antes de ensinado",
      texto:
        "Tudo que está no curso passou primeiro pelo meu perfil, com erro, ajuste e repetição.",
    },
    {
      titulo: "Comunidade ativa",
      texto:
        "Um grupo construindo junto com você, trocando o que está funcionando agora.",
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
    "Tudo aqui embaixo é coisa pra sair fazendo, com o passo a passo dentro do curso.",
  itens: [
    {
      titulo: "Montar seu perfil de criador",
      texto:
        "Bio, destaques e primeira impressão que fazem a pessoa querer ficar.",
    },
    {
      titulo: "Falar sem travar na câmera",
      texto:
        "Com o roteiro pronto antes de gravar, sua cabeça não precisa inventar na hora.",
    },
    {
      titulo: "Escrever roteiro que segura atenção",
      texto: "Começo, meio e fim pensados pra pessoa não deslizar o dedo.",
    },
    {
      titulo: "Entender por que um conteúdo viraliza",
      texto:
        "O que faz o vídeo funcionar por baixo do formato, pra você criar em vez de copiar.",
    },
    {
      titulo: "Vender pelos stories sem parecer vendedor",
      texto: "Uma rotina que aquece, mostra e convida, no seu tom de voz.",
    },
    {
      titulo: "Atrair leads todos os dias",
      texto:
        "Como fazer quem assiste virar quem manda mensagem pedindo o próximo passo.",
    },
    {
      titulo: "Montar seu negócio sozinho",
      texto:
        "Como uma pessoa só organiza o que vende, como entrega e a rotina da semana.",
    },
    {
      titulo: "Construir sem precisar aparecer",
      texto: "O caminho inteiro pra quem não quer o próprio rosto na câmera.",
    },
  ],
  cta: "Quero aprender a fazer isso",
};

export const comparativo = {
  titulo: "A diferença não está no esforço",
  colunaNegativa: "Quem posta no escuro",
  colunaPositiva: "Quem tem um método",
  legenda: "Comparação entre postar sem método e trabalhar com um método.",
  linhas: [
    {
      negativo: "Escolhe o tema no impulso do dia",
      positivo: "Trabalha dentro de uma linha de conteúdo",
    },
    {
      negativo: "Improvisa na frente da câmera",
      positivo: "Já sabe a primeira frase antes de gravar",
    },
    {
      negativo: "Copia o formato que viu viralizar",
      positivo: "Entende por que funcionou e adapta pro próprio tema",
    },
    {
      negativo: "Publica e espera",
      positivo: "Publica, olha o resultado e ajusta o próximo",
    },
    {
      negativo: "Fala pra todo mundo e não conecta com ninguém",
      positivo: "Fala pra uma pessoa específica",
    },
    {
      negativo: "Depende de aparecer pra existir no digital",
      positivo: "Tem também o caminho da co-produção",
    },
    {
      negativo: "Recomeça do zero toda segunda",
      positivo: "Cada semana constrói em cima da anterior",
    },
  ],
};

export const metodo = {
  titulo: "O caminho inteiro, na ordem em que se faz",
  intro:
    "Nove módulos em três blocos. Você começa desenhando o negócio, passa pela criação de conteúdo e termina na co-produção. Cada módulo acaba com uma coisa pra você executar.",
  blocos: [
    {
      nome: "Base",
      modulos: [
        {
          numero: "01",
          titulo: "Como montar seu negócio sozinho",
          texto:
            "Como uma pessoa só organiza o que vende, como entrega e a rotina. Isso vem antes do primeiro post.",
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
            "Bio, destaques e a primeira impressão. O que faz alguém decidir ficar nos três primeiros segundos.",
        },
        {
          numero: "04",
          titulo: "Roteiros magnéticos",
          texto:
            "A estrutura que segura a atenção do primeiro ao último segundo, em qualquer formato.",
        },
        {
          numero: "05",
          titulo: "Vender pelos stories",
          texto:
            "A rotina que aquece, mostra e convida, sem o story virar anúncio.",
        },
        {
          numero: "06",
          titulo: "Atrair leads todos os dias",
          texto:
            "O caminho de quem só assiste até a mensagem no direct pedindo o próximo passo.",
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
            "O modelo por dentro: quem faz o quê, como se divide o resultado e por que funciona pros dois lados.",
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
            "Como se apresentar, o que mostrar e onde achar os criadores certos.",
        },
      ],
    },
  ],
  reforcos: [
    {
      titulo: "Aulas práticas, sem enrolação",
      texto: "Você assiste e já sai sabendo o que fazer depois.",
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
    "Existe um caminho no digital em que você não é o rosto, você é a estrutura por trás de quem já é. Chama co-produção, e são três dos nove módulos aqui dentro.",
  cards: [
    {
      titulo: "O que faz um co-produtor",
      texto:
        "Você entra na operação de um criador: estratégia de conteúdo, roteiro, oferta, lançamento. Ele aparece, você constrói.",
    },
    {
      titulo: "Por que criadores precisam de você",
      texto:
        "Quem tem audiência quase nunca tem tempo. Falta alguém pra organizar a oferta e fazer o negócio rodar sem depender do humor da semana.",
    },
    {
      titulo: "Você não precisa de audiência própria",
      texto:
        "Esse caminho não começa com seguidor. Começa com uma habilidade que resolve um problema real de quem já tem seguidor.",
    },
    {
      titulo: "Por que agora",
      texto:
        "Tem muito criador crescendo rápido e pouca gente que sabe operar por trás. Essa vaga está aberta.",
    },
  ],
  cta: "Quero aprender co-produção",
};

export const bonus = {
  titulo: "Dois bônus entram junto",
  subtitulo: "Os dois já entram no preço, sem custo extra.",
  itens: [
    {
      nome: "Acesso à comunidade",
      texto:
        "Um grupo de gente construindo ao mesmo tempo que você. A dúvida que te trava hoje, alguém ali já passou por ela.",
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
  cta: "Garantir meu acesso",
  inclusos: [
    "Os 9 módulos do SURFE DIGITAL",
    "O bloco completo de co-produção",
    "Acesso à comunidade",
    "Checklist de execução",
    "Encontro ao vivo de tira-dúvidas",
    "Atualizações do método",
    "Acesso imediato após a compra",
    `${GARANTIA_DIAS} dias de garantia`,
  ],
  escassez:
    "O preço de lançamento vale enquanto a janela estiver aberta. Quando ela fecha, o SURFE DIGITAL volta pro preço cheio. Sem cronômetro que reinicia sozinho, é só o preço voltando ao normal.",
};

export const garantia = {
  titulo: `${GARANTIA_DIAS} dias pra decidir sem risco`,
  texto: `Você entra, assiste e aplica. Se em ${GARANTIA_DIAS} dias não fizer sentido pra você, pede o reembolso e recebe o valor de volta. Sem justificar nada e sem ninguém tentando te convencer do contrário. É o direito de arrependimento previsto no Código de Defesa do Consumidor, e aqui ele vale integral.`,
};

export const faq = {
  titulo: "Perguntas que chegam sempre",
  itens: [
    {
      pergunta: "Eu travo na frente da câmera. Funciona pra mim?",
      resposta:
        "Funciona, e boa parte do curso existe por causa disso. Travar quase sempre vem de não saber a primeira frase e ter que inventar na hora. Com o roteiro pronto antes de gravar, seu corpo sabe pra onde ir. E se depois de tudo você ainda não quiser aparecer, o bloco de co-produção é o caminho de construir sem câmera nenhuma.",
    },
    {
      pergunta: "Funciona pra quem está começando do zero?",
      resposta:
        "Funciona, e o curso começa exatamente aí. Os dois primeiros módulos são sobre montar a base antes de existir qualquer seguidor. Se você já tem perfil, essa parte passa mais rápido.",
    },
    {
      pergunta: "Funciona pra quem não quer aparecer?",
      resposta:
        "Sim. Três dos nove módulos são sobre co-produção, que é trabalhar por trás de criadores que já aparecem. Você não precisa gravar o próprio rosto pra seguir por ali.",
    },
    {
      pergunta: "Preciso ter seguidor pra começar?",
      resposta:
        "Não. Pra criar conteúdo, o curso começa antes do primeiro post. Pra co-produção, quem precisa ter audiência é o criador com quem você vai trabalhar, não você.",
    },
    {
      pergunta: "Quanto tempo por dia eu preciso?",
      resposta:
        "As aulas são curtas e dá pra fazer um módulo por semana. O que pede constância é a execução. Uma hora por dia bem usada rende mais do que um fim de semana inteiro uma vez por mês.",
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
      resposta: `São ${GARANTIA_DIAS} dias contados a partir da compra. Nesse período você pede o reembolso e recebe o valor de volta, sem precisar justificar. É o direito de arrependimento do Código de Defesa do Consumidor.`,
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
