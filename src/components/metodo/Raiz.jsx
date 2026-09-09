import Section from "@/components/sales/Section";
import { raiz } from "@/config/metodoSurfe";
import styles from "./Raiz.module.css";

/** Secao 4. O bloco de virada. Destaque sem ruido decorativo. */
export default function Raiz() {
  return (
    <Section>
      <div className={styles.bloco}>
        <span className={styles.risco} aria-hidden="true" />
        <div className={styles.corpo}>
          <h2 className={styles.titulo}>{raiz.titulo}</h2>
          {raiz.paragrafos.map((p) => (
            <p key={p.slice(0, 20)} className={styles.paragrafo}>
              {p}
            </p>
          ))}
          <p className={styles.fechamento}>{raiz.fechamento}</p>
        </div>
      </div>
    </Section>
  );
}
