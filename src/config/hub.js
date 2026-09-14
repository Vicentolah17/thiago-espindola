// ============================================================
//  EDITE AQUI: links, textos e chaves de exibicao do hub.
//  Nenhum outro arquivo precisa ser tocado para trocar um link.
//
//  Copy: v2 (teste).
// ============================================================

export const hub = {
  header: {
    eyebrow: "Surfe a",
    title: "Realidade",
    tagline:
      "Você não nasceu travado, foi treinado. Dá pra reprogramar isso. Escolhe por onde começar.",
    // Logo da marca. Quando preenchida, entra no lugar do circulo de
    // retrato, sem recorte, com o mesmo glow roxo do hub.
    // Precisa ser PNG com FUNDO TRANSPARENTE: o hub e quase preto,
    // e imagem com fundo branco vira um retangulo branco na tela.
    // Coloque o arquivo em /public e escreva "/logo-surfe-a-realidade.png".
    logoSrc: "/logo_surfe.webp",

    // null = mantem o placeholder "retrato" do layout original.
    // So e usado quando logoSrc esta vazio.
    // Para usar uma foto: coloque o arquivo em /public e escreva "/retrato.jpg".
    avatarSrc: null,
  },

  kit: {
    // Produto gratuito, hospedado na Gumroad. Link definitivo.
    href: "https://thiagoespindola.gumroad.com/l/saltoquantico",
    // A etiqueta ja sai em caixa alta pelo layout, entao aqui fica
    // escrita normal.
    badge: "Gratuito",
    eyebrow: "Começa aqui, de graça",
    // Uma linha so: em tela estreita ela quebra sozinha no espaco.
    titleLines: ["Salto Quântico"],
    description:
      "Viver o mesmo roteiro toda semana é horrível, e conteúdo motivacional não resolve. Eu tentei, a angústia sempre voltava. Salte para sua realidade ideal, enquanto há tempo.",
    cta: "Acessar DE GRAÇA",
  },

  levelsLabel: "Próximos níveis",

  levels: [
    {
      // Card 01 vai para a pagina de vendas do SURFE DIGITAL, que
      // mora neste mesmo projeto. Comeca com "/", entao a navegacao e
      // interna e nao recarrega a pagina inteira.
      href: "/surfe-digital",
      number: "01",
      title: "Surfe Digital",
      uppercaseTitle: true,
      description:
        "Como eu cheguei a 40K seguidores em 2 meses. Viralização, conteúdo e co-produção (sem aparecer), o jogo digital destravado.",
      variant: "violet",
    },
    {
      // Pagina de vendas do Metodo S.U.R.F.E, neste mesmo projeto.
      href: "/metodo-surfe",
      number: "02",
      title: "Método S.U.R.F.E",
      description:
        "O protocolo completo de reprogramação mental, pra quem já entendeu que quebrar ciclos é o primeiro passo.",
      // violeta e a cor dos niveis regulares do hub. O magenta fica
      // reservado pro Elite, que e o topo da escada.
      variant: "violet",
    },
    {
      href: "https://www.thiagoespindola.com/surfarelite",
      number: "03",
      title: "Surfar Elite",
      badge: "por aplicação",
      description:
        "Fazer mais de 10K em 3 meses com sua própria marca digital. Esse é o poder do Surfar Elite. Acompanhamento direcionado e técnicas de aplicação.",
      variant: "magenta",
    },
  ],

  socials: [
    {
      href: "https://www.instagram.com/thiagoespindola.z/",
      label: "Instagram",
      icon: "instagram",
    },
    {
      href: "https://www.youtube.com/@thiagoespindolaz",
      label: "YouTube",
      icon: "youtube",
    },
  ],

  footer: {
    brand: "Surfe a Realidade",
    copyright: "© 2026 Thiago Espíndola · Todos os direitos reservados",
  },

  // Mesmos switches do arquivo de referencia (sc-if).
  display: {
    halos: true,
    grain: true,
    avatar: true,
    numbered: true,
  },
};
