import styles from "./ModuleArt.module.css";

/**
 * Arte vertical de modulo, proporcao 2:3.
 *
 * Sem `src`, renderiza um placeholder limpo com a dimensao escrita
 * dentro, no mesmo clima das artes reais (violeta neon sobre preto).
 * Com `src`, vira <img> com largura e altura declaradas (sem salto de
 * layout) e carregamento preguicoso por padrao. Sao nove artes na
 * pagina: so a do hero deve passar `priority`.
 *
 * @param {string?} src       Caminho em /public. Vazio = placeholder.
 * @param {string}  alt       Descricao da arte.
 * @param {string}  label     Texto do placeholder (nome do modulo).
 * @param {number}  width     Largura do arquivo, em px.
 * @param {number}  height    Altura do arquivo, em px.
 * @param {boolean} priority  true so acima da dobra.
 * @param {"sm"|"md"|"lg"} size  Tamanho exibido.
 * @param {"cover"|"contain"} fit
 *   cover (padrao): forca 2:3 e recorta o que sobrar, para artes verticais.
 *   contain: mostra a imagem inteira na proporcao dela, para arquivo
 *   horizontal ou com transparencia (a logo, o selo do Salto Quantico).
 */
export default function ModuleArt({
  src = null,
  alt,
  label,
  width = 800,
  height = 1200,
  priority = false,
  size = "md",
  fit = "cover",
  className,
}) {
  const classes = [
    styles.art,
    styles[size],
    fit === "contain" && styles.contain,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (src) {
    return (
      <img
        className={classes}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    <div className={`${classes} ${styles.placeholder}`} role="img" aria-label={alt}>
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
      <span className={styles.dim}>
        {width} x {height}
      </span>
    </div>
  );
}
