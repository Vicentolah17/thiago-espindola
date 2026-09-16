// ============================================================
//  OFERTA EXCLUSIVA DO SURFE DIGITAL
//  Pagina de destino do e-mail de quem ja conhece o Salto Quantico.
//  Nao e linkada em lugar nenhum e nao e indexada.
//
//  Copy: v2 (revisada pelo copywriter).
//
//  CONSTANTES CONFIGURAVEIS
// ============================================================

/**
 * CHECKOUT_URL_OFERTA: link do checkout na Kiwify PARA ESTA OFERTA.
 * Oferta separada da pagina publica, com o preco de R$147.
 */
export const CHECKOUT_URL_OFERTA = "https://pay.kiwify.com.br/PjPcARr";

/** Preco da pagina publica, usado como ancoragem riscada. */
export const PRECO_DE = "R$197";

/** Preco desta oferta. */
export const PRECO_POR = "R$147";

/** Confirmar as condicoes reais na Kiwify antes de publicar. */
export const PARCELAMENTO = "ou parcelado no cartão";

/** Prazo da garantia, em dias. */
export const GARANTIA_DIAS = 7;

/**
 * O LINK DESTA PAGINA EXPIRA?
 *
 * Com um numero, a pagina afirma o prazo em dois lugares: no bloco de
 * exclusividade ("ele vale por 7 dias") e no fechamento ("so por 7
 * dias"). Com null, as duas frases somem e entra a versao sem prazo.
 *
 * ATENCAO: esta pagina e estatica e NAO expira sozinha. A frase so e
 * verdadeira se a automacao de e-mail ou a oferta na Kiwify forem
 * desativadas depois do prazo.
 */
export const LINK_EXPIRA_EM_DIAS = 7;

// ============================================================
//  COPY v2
// ============================================================

export const hero = {
  selo: "Só para quem já conhece o Salto Quântico",
  titulo: "Como se livrar do perigo de viver uma vida que você NÃO escolheu.",
  subtitulo:
    "Você entendeu que FINALMENTE chegou a hora de tomar uma decisão própria na vida. O SURFE DIGITAL é a linha reta dessa primeira etapa: criar sua marca, conteúdo que prende e, se não quiser aparecer, entrar nesse mercado pela coprodução.",
  cta: "Quero o SURFE DIGITAL agora",
  microcopia: `${PRECO_POR} à vista · acesso imediato · ${GARANTIA_DIAS} dias de garantia`,
};

export const exclusividade = {
  titulo: "Este preço não existe fora daqui",
  // A versao com prazo so entra se LINK_EXPIRA_EM_DIAS tiver valor.
  texto: LINK_EXPIRA_EM_DIAS
    ? `Na página pública o SURFE DIGITAL custa ${PRECO_DE}, e vai continuar custando. Os ${PRECO_POR} são a condição de quem já conhece o Salto Quântico. Não é cupom que roda por aí nem promoção de feriado. É este link, o que chegou no seu e-mail, e ele vale por ${LINK_EXPIRA_EM_DIAS} dias.`
    : `Na página pública o SURFE DIGITAL custa ${PRECO_DE}, e vai continuar custando. Os ${PRECO_POR} são a condição de quem já conhece o Salto Quântico. Não é cupom que roda por aí nem promoção de feriado. É este link, o que chegou no seu e-mail, e ele não está em lugar nenhum além dele.`,
};

export const entrega = {
  titulo: "O que vem depois do Salto",
  subtitulo:
    "O Salto Quântico te faz entender o que você quer. Estes nove módulos resolvem o que vem depois dele: o desenho do negócio, a criação de conteúdo toda semana e a trajetória completa da coprodução.",
  bonusTitulo: "E ainda vem junto:",
  bonus: [
    {
      nome: "Acesso à comunidade",
      texto: "Um grupo de gente construindo ao mesmo tempo que você.",
    },
    {
      nome: "Material de implementação",
      texto: "Checklist de execução e um encontro ao vivo de tira-dúvidas.",
    },
  ],
};

export const prova = {
  titulo: "O método aplicado no próprio perfil",
  caseNumero: "40 mil",
  caseRotulo: "seguidores em 2 meses",
  caseTexto:
    "Meu crescimento no Instagram não foi sorte ou dinheiro, foi simplesmente método. Dá pra conferir no perfil. O Salto Quântico me ajudou a desenvolver essa estratégia, e você pode ir no meu perfil e ver que já funciona.",

  depoimentosTitulo: "Dá uma olhada",

  // ------------------------------------------------------------
  //  PRINTS REAIS no lugar dos depoimentos (curso novo, ainda sem
  //  aluno formado). Arquivos em /public/oferta, gerados a partir de
  //  perfil_engajado.png, comunidade_engajada.png e modulos.png.
  //  No print da comunidade os numeros de telefone foram borrados.
  //  Cada print amplia ao tocar.
  // ------------------------------------------------------------
  prints: [
    {
      src: "/oferta/perfil.webp",
      width: 804,
      height: 128,
      titulo: "O perfil, em números",
      texto: "Seguidores, posts e média de curtidas do @thiagoespindola.z, medidos por ferramenta externa.",
      alt: "Painel de métricas do perfil @thiagoespindola.z: 43.873 seguidores, 144 seguindo, 63 publicações, taxa de engajamento 0,65 e média de 279,79 curtidas",
    },
    {
      src: "/oferta/comunidade.webp",
      width: 689,
      height: 251,
      titulo: "O diário no WhatsApp",
      texto: "O áudio que o Thiago manda todo dia pra comunidade, e a turma respondendo. Números de telefone ocultos por privacidade.",
      alt: "Print do grupo Diário do Thiago Espíndola no WhatsApp com um áudio do Thiago recebendo 20 reações e uma mensagem com 7 reações",
    },
    {
      src: "/oferta/modulos.webp",
      width: 1077,
      height: 369,
      titulo: "A área de membros",
      texto: "Os blocos do SURFE DIGITAL do jeito que aparecem quando você entra.",
      alt: "Área de membros do SURFE DIGITAL com os blocos Boas-vindas, Criação de conteúdo, Co-produção e Próximos passos",
    },
  ],

  // ------------------------------------------------------------
  //  DEPOIMENTOS EM VIDEO: quando existirem, tomam o lugar dos
  //  prints automaticamente. Nao inventar nome nem resultado.
  // ------------------------------------------------------------
  depoimentos: [],
  mostrarPlaceholders: false,
};

export const oferta = {
  // o layout poe a etiqueta em caixa alta
  selo: "Muito barato",
  titulo: "SURFE DIGITAL completo",
  cta: `Dar o primeiro passo agora por ${PRECO_POR}`,
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
  garantia: `Você entra, assiste e aplica. Se em ${GARANTIA_DIAS} dias não fizer sentido pra você, pede o reembolso e recebe o valor de volta, sem precisar justificar. É seu direito.`,
};

/**
 * As tres perguntas. Esta pagina nao tem FAQ; estas sao as objecoes
 * do lead quente antes de decidir. Renderiza com o mesmo accordion
 * das outras paginas.
 */
export const objecoes = {
  titulo: "Antes de você fechar a aba",
  itens: [
    {
      pergunta: "Mas o Salto Quântico já não resolve?",
      resposta:
        "Resolve sim, o começo. Ele não te diz sobre o que gravar toda semana, como o perfil se organiza em volta disso e como isso vira oferta. É comum gravar alguns vídeos bons e empacar quando acaba a lista de ideias, sem saber qual é o próximo passo.",
    },
    {
      pergunta: "Não estou pronto para aparecer, como faço?",
      resposta:
        "Três dos nove módulos são sobre co-produção, que é entrar na operação de um criador que já tem audiência. Nesse caminho quem aparece é ele, quem constrói é você. Não depende de você gravar nada.",
    },
    {
      pergunta: "Quanto tempo eu preciso ter por dia?",
      resposta:
        "As aulas são curtas e dá pra fazer um módulo por semana. O que pede constância é a execução. Uma hora bem usada por dia rende mais do que um fim de semana inteiro uma vez por mês.",
    },
  ],
};

export const ctaFinal = {
  titulo: "Você já leu o suficiente.",
  // A ultima frase so entra se LINK_EXPIRA_EM_DIAS tiver valor.
  texto: `Ninguém lê uma página inteira sobre algo que não quer. São ${PRECO_POR}, só por aqui, só pra quem lê nossos e-mails. Se você fechar a aba, o caminho de volta é o e-mail que te trouxe.${
    LINK_EXPIRA_EM_DIAS ? ` Lembrando: só por ${LINK_EXPIRA_EM_DIAS} dias.` : ""
  }`,
  cta: "Entrar no SURFE DIGITAL",
  microcopia: `Pagamento pela Kiwify · acesso imediato · ${GARANTIA_DIAS} dias de garantia`,
};

/**
 * Rodape. Sem o disclaimer do Facebook: esta pagina nao roda anuncio.
 * Se um dia rodar, ele entra aqui junto.
 */
export const rodape = {
  marca: "Surfe a Realidade",
  direitos: "Todos os direitos reservados",
  links: [
    { label: "Política de privacidade", href: "#politica-de-privacidade" },
    { label: "Termos de uso", href: "#termos-de-uso" },
  ],
  disclaimers: [
    "Os resultados variam de pessoa para pessoa e dependem de aplicação, contexto e esforço individual. Nada nesta página é garantia de resultado.",
  ],
};
