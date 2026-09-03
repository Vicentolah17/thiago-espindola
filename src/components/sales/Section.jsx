import styles from "./Section.module.css";

/**
 * Casca de secao. TODO o ritmo vertical da pagina sai daqui, de uma
 * unica regra de padding. Nenhuma secao usa margin, entao nao existe
 * colapso nem cancelamento de espacamento entre blocos.
 *
 * @param {string}  id     Ancora da secao.
 * @param {"prose"|"wide"} width  620px (texto) ou 1080px (grades).
 */
export default function Section({
  id,
  width = "prose",
  className,
  children,
  ...rest
}) {
  const classes = [styles.section, className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes} {...rest}>
      <div className={`${styles.inner} ${styles[width]}`}>{children}</div>
    </section>
  );
}
