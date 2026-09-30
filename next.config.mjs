/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Link antigo da AtomiCat, que hoje da 404. Temporario de
        // proposito (307, nao 308): se a pagina do Surfar Elite for
        // reconstruida aqui no Vercel, o navegador nao fica com o
        // desvio em cache pra sempre.
        source: "/surfarelite",
        destination: "https://app.thiagoespindola.com/surfarelite",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
