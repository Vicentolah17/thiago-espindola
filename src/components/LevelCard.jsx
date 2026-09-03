import SmartLink from "./SmartLink";
import styles from "./LevelCard.module.css";

/**
 * Card de nivel da lista "Proximos niveis".
 *
 * @param {string}  href            Link do card.
 * @param {string}  number          Numero exibido no quadrado da esquerda.
 * @param {string}  title           Nome do nivel.
 * @param {string}  description     Linha de apoio.
 * @param {string?} badge           Pilula opcional ao lado do titulo.
 * @param {"violet"|"magenta"} variant  Paleta do card.
 * @param {boolean} numbered        Mostra ou nao o quadrado com o numero.
 * @param {boolean} uppercaseTitle  Titulo em caixa alta (como no layout original).
 */
export default function LevelCard({
  href,
  number,
  title,
  description,
  badge = null,
  variant = "violet",
  numbered = true,
  uppercaseTitle = false,
}) {
  const titleClass = [styles.title, uppercaseTitle && styles.titleUppercase]
    .filter(Boolean)
    .join(" ");

  return (
    <SmartLink className={`${styles.card} ${styles[variant]}`} href={href}>
      {numbered && <span className={styles.number}>{number}</span>}

      <div className={styles.body}>
        {badge ? (
          <div className={styles.titleRow}>
            <span className={titleClass}>{title}</span>
            <span className={styles.badge}>{badge}</span>
          </div>
        ) : (
          <span className={titleClass}>{title}</span>
        )}
        <span className={styles.description}>{description}</span>
      </div>

      <span className={styles.arrow} aria-hidden="true">
        &rarr;
      </span>
    </SmartLink>
  );
}
