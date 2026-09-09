import CtaButton from "@/components/sales/CtaButton";
import Section from "@/components/sales/Section";
import { CHECKOUT_URL, decisao } from "@/config/metodoSurfe";
import styles from "./Decisao.module.css";

/** Secao 16. Fechamento emocional, com o acento dourado no botao. */
export default function Decisao() {
  return (
    <Section>
      <div className={styles.bloco}>
        <span className={styles.risco} aria-hidden="true" />
        <h2 className={styles.titulo}>{decisao.titulo}</h2>
        <p className={styles.texto}>{decisao.texto}</p>
        <div className={styles.cta}>
          <CtaButton block tone="gold" href={CHECKOUT_URL} note={decisao.microcopia}>
            {decisao.cta}
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
