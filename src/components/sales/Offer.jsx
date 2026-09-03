import CtaButton from "./CtaButton";
import Icon from "./Icon";
import Section from "./Section";
import {
  DATA_FECHAMENTO,
  PARCELAMENTO,
  PRECO_CHEIO,
  PRECO_JANELA,
  oferta,
} from "@/config/surfeDigital";
import styles from "./Offer.module.css";

/**
 * Secao 13. O bloco mais importante da pagina.
 * Segundo e ultimo lugar com o tratamento de destaque do hub.
 * Nenhuma promessa de renda aqui dentro.
 */
export default function Offer() {
  // Sem preco de janela nao existe ancora: a pagina mostra o preco
  // cheio e nao fala de janela nenhuma. Assim nao da pra publicar um
  // "de R$197 por" que nao seja verdade.
  const temJanela = Boolean(PRECO_JANELA);

  return (
    <Section id="preco" width="wide">
      <div className={styles.feature}>
        <div className={styles.inner}>
          <div className={styles.sheen} aria-hidden="true" />
          <div className={styles.gloss} aria-hidden="true" />

          <div className={styles.content}>
            <header className={styles.head}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                <span className={styles.badgeLabel}>
                  {temJanela ? oferta.selo : oferta.seloSemJanela}
                </span>
              </div>
              <h2 className={styles.title}>
                {temJanela ? oferta.titulo : oferta.tituloSemJanela}
              </h2>
            </header>

            <div className={styles.priceBlock}>
              {temJanela && (
                <p className={styles.anchor}>
                  de <s className={styles.strike}>{PRECO_CHEIO}</s> por
                </p>
              )}
              <p className={styles.price}>
                {temJanela ? PRECO_JANELA : PRECO_CHEIO}
              </p>
              <p className={styles.installment}>à vista, {PARCELAMENTO}</p>
            </div>

            <div className={styles.action}>
              <CtaButton block>{oferta.cta}</CtaButton>
            </div>

            <div className={styles.includes}>
              <h3 className={styles.includesTitle}>O que está incluso</h3>
              <ul className={styles.list}>
                {oferta.inclusos.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.check} aria-hidden="true">
                      <Icon name="check" size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {temJanela && (
              <p className={styles.scarcity}>
                {oferta.escassez}
                {DATA_FECHAMENTO && (
                  <>
                    {" "}
                    A janela fecha em <strong>{DATA_FECHAMENTO}</strong>.
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
