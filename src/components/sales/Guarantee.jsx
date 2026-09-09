import Icon from "./Icon";
import Section from "./Section";
import styles from "./Guarantee.module.css";

/**
 * Garantia incondicional, escrita como fato legal.
 *
 * @param {number} dias    Prazo, entra no selo.
 * @param {string} titulo
 * @param {string} texto
 */
export default function Guarantee({ dias, titulo, texto }) {
  return (
    <Section>
      <div className={styles.card}>
        <div className={styles.seal} aria-hidden="true">
          <Icon name="shield" size={30} />
          <span className={styles.sealDays}>{dias} dias</span>
        </div>
        <h2 className={styles.title}>{titulo}</h2>
        <p className={styles.text}>{texto}</p>
      </div>
    </Section>
  );
}
