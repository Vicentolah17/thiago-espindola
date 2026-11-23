/**
 * Busca uma fonte do Google em TTF para as imagens de compartilhamento
 * (opengraph-image), que nao usam next/font. Roda no build. Se a rede
 * falhar, devolve [] e a imagem sai com a fonte padrao, sem quebrar o
 * deploy.
 *
 * familia: nome no Google Fonts ("Anton", "Syne")
 * peso: peso a carregar (Anton so tem 400; Syne usamos 800)
 */
export async function fontesOg(familia, peso = 400) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${familia.replace(/ /g, "+")}:wght@${peso}&display=swap`,
    ).then((r) => r.text());
    // sem user-agent de navegador moderno, o Google entrega TTF
    const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return [];
    const dados = await fetch(url).then((r) => r.arrayBuffer());
    return [{ name: familia, data: dados, weight: peso, style: "normal" }];
  } catch {
    return [];
  }
}
