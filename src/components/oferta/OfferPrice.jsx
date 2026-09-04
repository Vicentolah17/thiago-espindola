import CtaButton from "@/components/sales/CtaButton";
import Icon from "@/components/sales/Icon";
import Section from "@/components/sales/Section";
import {
  CHECKOUT_URL_OFERTA,
  PARCELAMENTO,
  PRECO_DE,
  PRECO_POR,
  oferta,
} from "@/config/ofertaSurfeDigital";
import styles from "./OfferPrice.module.css";

/**
 * Secao 5. O elemento-chave da pagina.
 * E o unico lugar que recebe o glow roxo, e o unico que usa o
 * tamanho de display da tipografia.
 */
export default function OfferPrice() {
  return (
    <Section id="oferta" width="wide">
      <div className={styles.palco}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.selo}>
              <span className={styles.seloLabel}>{oferta.selo}</span>
            </div>

            <h2 className={styles.titulo}>{oferta.titulo}</h2>

            <div className={styles.precoBloco}>
              <p className={styles.ancora}>
                de <s className={styles.riscado}>{PRECO_DE}</s> por
              </p>
              <p className={styles.preco}>{PRECO_POR}</p>
              <p className={styles.parcelamento}>à vista, {PARCELAMENTO}</p>
            </div>

            <div className={styles.acao}>
              <CtaButton block href={CHECKOUT_URL_OFERTA}>
                {oferta.cta}
              </CtaButton>
            </div>

            <ul className={styles.lista}>
              {oferta.inclusos.map((item) => (
                <li key={item} className={styles.listaItem}>
                  <span className={styles.check} aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className={styles.garantia}>
              <span className={styles.garantiaIcone} aria-hidden="true">
                <Icon name="shield" size={18} />
              </span>
              {oferta.garantia}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
