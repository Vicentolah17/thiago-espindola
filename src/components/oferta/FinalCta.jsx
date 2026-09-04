import CtaButton from "@/components/sales/CtaButton";
import Section from "@/components/sales/Section";
import { CHECKOUT_URL_OFERTA, ctaFinal } from "@/config/ofertaSurfeDigital";
import styles from "./FinalCta.module.css";

/** Secao 6. Fechamento. */
export default function FinalCta() {
  return (
    <Section>
      <div className={styles.bloco}>
        <span className={styles.risco} aria-hidden="true" />
        <h2 className={styles.titulo}>{ctaFinal.titulo}</h2>
        <p className={styles.texto}>{ctaFinal.texto}</p>
        <div className={styles.cta}>
          <CtaButton block href={CHECKOUT_URL_OFERTA} note={ctaFinal.microcopia}>
            {ctaFinal.cta}
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
