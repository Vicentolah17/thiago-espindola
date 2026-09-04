// ============================================================
//  EDITE AQUI: links, textos e chaves de exibicao do hub.
//  Nenhum outro arquivo precisa ser tocado para trocar um link.
// ============================================================

export const hub = {
  header: {
    eyebrow: "Surfe a",
    title: "Realidade",
    tagline:
      "Reprograme a mente e surfe a sua própria realidade. Escolha por onde começar.",
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
    // PENDENTE: o Kit de Aplicacao ainda nao existe. Enquanto o href
    // comecar com "#", o card fica visivel mas nao leva a lugar nenhum.
    // Trocar pelo link real quando o kit estiver no ar.
    href: "#kit",
    badge: "Gratuito",
    eyebrow: "Comece aqui de graça",
    titleLines: ["Kit de", "Aplicação"],
    description:
      "O guia prático para destravar seu carisma. Primeiro passo para criar sua identidade digital",
    cta: "Acessar o kit gratuito",
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
        "Conteúdo, viralização e co-produção. O jogo digital destravado.",
      variant: "violet",
    },
    {
      href: "https://www.thiagoespindola.com/surfarelite",
      number: "02",
      title: "Surfar Elite",
      badge: "por aplicação",
      description: "Mentoria e acesso privilegiado aos melhores contatos e métodos que nossa equipe pode oferecer",
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
