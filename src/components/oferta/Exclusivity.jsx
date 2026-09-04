import Section from "@/components/sales/Section";
import { exclusividade } from "@/config/ofertaSurfeDigital";
import styles from "./Exclusivity.module.css";

/** Secao 2. Bloco curto de exclusividade. */
export default function Exclusivity() {
  return (
    <Section>
      <div className={styles.bloco}>
        <span className={styles.risco} aria-hidden="true" />
        <div className={styles.texto}>
          <h2 className={styles.titulo}>{exclusividade.titulo}</h2>
          <p className={styles.paragrafo}>{exclusividade.texto}</p>
        </div>
      </div>
    </Section>
  );
}
