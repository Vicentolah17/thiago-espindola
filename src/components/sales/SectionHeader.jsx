import styles from "./SectionHeader.module.css";

/**
 * Cabecalho de secao. Mesma anatomia do "Proximos niveis" do hub:
 * rotulo em caixa alta com tracking largo, titulo, linha de apoio.
 *
 * @param {string?} eyebrow  Rotulo pequeno acima do titulo.
 * @param {string}  title    Vira o h2 da secao.
 * @param {string?} lede     Paragrafo curto de apoio.
 * @param {"left"|"center"} align
 */
export default function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  id,
}) {
  return (
    <header className={`${styles.header} ${styles[align]}`}>
      {eyebrow && (
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <span className={styles.rule} aria-hidden="true" />
        </div>
      )}
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </header>
  );
}
