import { Fragment } from "react";
import SmartLink from "./SmartLink";
import styles from "./KitCard.module.css";

/**
 * Card principal (gratuito) do hub.
 *
 * @param {string}   href        Link do card inteiro / do botao.
 * @param {string}   badge       Texto da pilula com o ponto rosa.
 * @param {string}   eyebrow     Linha curta acima do titulo.
 * @param {string[]} titleLines  Cada item vira uma linha do titulo.
 * @param {string}   description Paragrafo de apoio.
 * @param {string}   cta         Texto do botao em degrade.
 */
export default function KitCard({
  href,
  badge,
  eyebrow,
  titleLines = [],
  description,
  cta,
}) {
  return (
    <SmartLink className={styles.card} href={href}>
      <div className={styles.inner}>
        <div className={styles.sheen} aria-hidden="true" />
        <div className={styles.gloss} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span className={styles.badgeLabel}>{badge}</span>
          </div>

          <div className={styles.body}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1 className={styles.title}>
              {titleLines.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h1>
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.cta}>
            <span className={styles.ctaLabel}>{cta}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </SmartLink>
  );
}
