/**
 * Busca a Big Shoulders (desenho Display, peso 900) em TTF para as
 * imagens de compartilhamento (opengraph-image), que nao usam next/font.
 * Roda no build. Se a rede falhar, devolve [] e a imagem sai com a
 * fonte padrao, sem quebrar o deploy.
 */
export async function fontesOg() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@72,900&display=swap",
    ).then((r) => r.text());
    // sem user-agent de navegador moderno, o Google entrega TTF
    const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return [];
    const dados = await fetch(url).then((r) => r.arrayBuffer());
    return [{ name: "Big Shoulders", data: dados, weight: 900, style: "normal" }];
  } catch {
    return [];
  }
}
