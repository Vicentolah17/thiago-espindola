import CtaButton from "@/components/sales/CtaButton";
import { CHECKOUT_URL_OFERTA, hero } from "@/config/ofertaSurfeDigital";
import styles from "./OfertaHero.module.css";

/** Secao 1. Unico h1 da pagina. */
export default function OfertaHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.selo}>
          <span className={styles.seloDot} aria-hidden="true" />
          <span className={styles.seloLabel}>{hero.selo}</span>
        </div>

        <h1 className={styles.titulo}>{hero.titulo}</h1>
        <p className={styles.subtitulo}>{hero.subtitulo}</p>

        <div className={styles.cta}>
          <CtaButton block href={CHECKOUT_URL_OFERTA} note={hero.microcopia}>
            {hero.cta}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
