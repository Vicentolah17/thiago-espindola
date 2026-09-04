// ============================================================
//  OFERTA EXCLUSIVA DO SURFE DIGITAL
//  Pagina de destino do e-mail de quem baixou o Kit de Aplicacao.
//  Nao e linkada em lugar nenhum e nao e indexada.
//
//  CONSTANTES CONFIGURAVEIS
// ============================================================

/**
 * CHECKOUT_URL_OFERTA: link do checkout na Kiwify PARA ESTA OFERTA.
 *
 * Precisa ser uma oferta separada da pagina publica, com o preco de
 * R$147. Se apontar para o checkout de R$197, a pagina promete um
 * preco e cobra outro.
 *
 * Formato da Kiwify: https://pay.kiwify.com.br/<codigo-da-oferta>
 */
export const CHECKOUT_URL_OFERTA = "https://pay.kiwify.com.br/SEU-CODIGO-147";

/** Preco da pagina publica, usado como ancoragem riscada. */
export const PRECO_DE = "R$197";

/** Preco desta oferta. */
export const PRECO_POR = "R$147";

/** Confirmar as condicoes reais na Kiwify antes de publicar. */
export const PARCELAMENTO = "ou parcelado no cartão";

/** Prazo da garantia, em dias. */
export const GARANTIA_DIAS = 7;

// ============================================================
//  COPY
//  Rascunho de trabalho, feito para ser substituido.
// ============================================================

export const hero = {
  selo: "Só para quem baixou o kit",
  titulo: "Você já começou. Agora vem o sistema inteiro.",
  subtitulo:
    "O Kit de Aplicação é o primeiro passo. O SURFE DIGITAL é o caminho completo: marca pessoal, conteúdo que as pessoas param pra ver e co-produção, a trilha de quem não quer aparecer.",
  cta: "Quero o SURFE DIGITAL agora",
  microcopia: `${PRECO_POR} à vista · acesso imediato · ${GARANTIA_DIAS} dias de garantia`,
};

export const exclusividade = {
  titulo: "Este preço não existe fora daqui",
  texto:
    "Na página pública o SURFE DIGITAL é R$197, e continua sendo. Os R$147 desta página são a condição de quem baixou o Kit de Aplicação. Não é cupom que circula, não é campanha de feriado. É este link, que chegou no seu e-mail.",
};

export const entrega = {
  titulo: "O que você leva",
  subtitulo:
    "Nove módulos em ordem, do desenho do negócio até o caminho da co-produção.",
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
    "Crescimento real do Thiago no Instagram, no período em que o método foi aplicado. Número verificável no perfil, e o único número de resultado que esta página usa.",

  // ------------------------------------------------------------
  //  ESPAÇO RESERVADO: depoimentos.
  //  Enquanto a lista estiver vazia, aparecem as caixas de
  //  placeholder marcadas, para você ver o layout. Preencha com
  //  depoimento real antes de disparar o e-mail, ou apague as
  //  caixas passando `mostrarPlaceholders: false`.
  //  Nao inventar nome nem resultado aqui.
  // ------------------------------------------------------------
  depoimentos: [],
  mostrarPlaceholders: true,
  depoimentosTitulo: "Quem já está aplicando",
};

export const oferta = {
  selo: "Sua condição",
  titulo: "SURFE DIGITAL completo",
  cta: "Garantir meu acesso por " + PRECO_POR,
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

export const ctaFinal = {
  titulo: "Você leu até aqui. O preço continua o mesmo.",
  texto:
    "R$147 é o que esta página cobra, e ela não fica linkada em lugar nenhum. Quando você fechar esta aba, o caminho de volta é o e-mail que te trouxe.",
  cta: "Entrar no SURFE DIGITAL",
  microcopia: `Pagamento pela Kiwify · acesso imediato · ${GARANTIA_DIAS} dias de garantia`,
};
