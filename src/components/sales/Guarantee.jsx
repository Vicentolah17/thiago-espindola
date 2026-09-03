import Icon from "./Icon";
import Section from "./Section";
import { GARANTIA_DIAS, garantia } from "@/config/surfeDigital";
import styles from "./Guarantee.module.css";

/** Secao 14. Garantia incondicional, escrita como fato legal. */
export default function Guarantee() {
  return (
    <Section>
      <div className={styles.card}>
        <div className={styles.seal} aria-hidden="true">
          <Icon name="shield" size={30} />
          <span className={styles.sealDays}>{GARANTIA_DIAS} dias</span>
        </div>
        <h2 className={styles.title}>{garantia.titulo}</h2>
        <p className={styles.text}>{garantia.texto}</p>
      </div>
    </Section>
  );
}
