// ============================================================
//  OFERTA EXCLUSIVA DO SURFE DIGITAL
//  Pagina de destino do e-mail de quem baixou o Kit de Aplicacao.
//  Nao e linkada em lugar nenhum e nao e indexada.
//
//  Copy: v1 (revisada pelo copywriter).
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
 * A copy tem duas versoes do texto de exclusividade. A com prazo
 * ("ele vale por 7 dias") so pode ir ao ar se a automacao de e-mail
 * realmente desativar o link depois de 7 dias. Se o link ficar valendo
 * pra sempre, a frase e falsa.
 *
 * Deixe null para usar a versao sem prazo (a que esta no ar hoje).
 * Coloque o numero de dias (ex: 7) so quando a expiracao existir.
 */
export const LINK_EXPIRA_EM_DIAS = null;

// ============================================================
//  COPY v1
// ============================================================

export const hero = {
  selo: "Só para quem baixou o kit",
  titulo: "Mais um e-mail meu não vai te tirar do lugar.",
  subtitulo:
    "Você já entendeu o que te trava. O SURFE DIGITAL é a parte de fazer: montar a marca, criar conteúdo que prende e, se você não quiser aparecer, entrar pela co-produção.",
  cta: "Quero o SURFE DIGITAL agora",
  microcopia: `${PRECO_POR} à vista · acesso imediato · ${GARANTIA_DIAS} dias de garantia`,
};

export const exclusividade = {
  titulo: "Este preço não existe fora daqui",
  // A versao com prazo so entra se LINK_EXPIRA_EM_DIAS tiver valor.
  texto: LINK_EXPIRA_EM_DIAS
    ? `Na página pública o SURFE DIGITAL custa ${PRECO_DE}, e vai continuar custando. Os ${PRECO_POR} são a condição de quem baixou o Kit de Aplicação. Não é cupom que roda por aí nem promoção de feriado. É este link, o que chegou no seu e-mail, e ele vale por ${LINK_EXPIRA_EM_DIAS} dias.`
    : `Na página pública o SURFE DIGITAL custa ${PRECO_DE}, e vai continuar custando. Os ${PRECO_POR} são a condição de quem baixou o Kit de Aplicação. Não é cupom que roda por aí nem promoção de feriado. É este link, o que chegou no seu e-mail, e ele não está em lugar nenhum além dele.`,
};

export const entrega = {
  titulo: "O que vem depois do kit",
  subtitulo:
    "O kit resolve o primeiro vídeo. Estes nove módulos resolvem o que vem depois dele: o desenho do negócio, a criação de conteúdo toda semana e o caminho da co-produção.",
  bonusTitulo: "E ainda entra junto",
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
    "Crescimento do Thiago no Instagram, no período em que ele aplicou o método. Dá pra conferir no perfil. O kit que você baixou é um pedaço desse mesmo método, e você já testou de graça como ele funciona.",

  // ------------------------------------------------------------
  //  ESPAÇO RESERVADO: depoimentos.
  //  Enquanto a lista estiver vazia, aparecem as caixas de
  //  placeholder marcadas. Preencha com depoimento real antes de
  //  disparar o e-mail, ou apague as caixas com
  //  `mostrarPlaceholders: false`. Nao inventar nome nem resultado.
  // ------------------------------------------------------------
  depoimentos: [],
  mostrarPlaceholders: true,
  depoimentosTitulo: "Quem já está aplicando",
};

export const oferta = {
  selo: "Sua condição",
  titulo: "SURFE DIGITAL completo",
  cta: `Garantir meu acesso por ${PRECO_POR}`,
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
  garantia: `Você entra, assiste e aplica. Se em ${GARANTIA_DIAS} dias não fizer sentido pra você, pede o reembolso e recebe o valor de volta, sem precisar justificar.`,
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
      pergunta: "Não é melhor eu aplicar o kit primeiro?",
      resposta:
        "O kit resolve o começo, que é gravar sem travar. Ele não te diz sobre o que gravar toda semana, como o perfil se organiza em volta disso e como isso vira oferta. É comum gravar alguns vídeos bons e empacar quando acaba a lista de ideias, sem saber qual é o próximo passo.",
    },
    {
      pergunta: "E se eu continuar não querendo aparecer?",
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
  titulo: "Você leu a página inteira.",
  texto: `Ninguém lê uma página inteira sobre uma coisa que não quer. São ${PRECO_POR}, só por aqui, e esta página não fica linkada em lugar nenhum. Quando você fechar a aba, o caminho de volta é o e-mail que te trouxe.`,
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
