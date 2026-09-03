import { CHECKOUT_URL } from "@/config/surfeDigital";
import styles from "./CtaButton.module.css";

/**
 * Botao de compra. Reaproveita exatamente o botao do card do hub:
 * mesma altura, mesmo raio, mesmo gradiente, mesma sombra, mesmo
 * quadrado da seta. Todos apontam para CHECKOUT_URL.
 *
 * @param {string}  children  Texto do botao.
 * @param {"lg"|"sm"} size    lg = 62px (padrao do hub), sm = nav.
 * @param {boolean} block     Ocupa a largura toda.
 * @param {string?} note      Microcopia abaixo do botao.
 * @param {string?} href      So para casos que nao vao ao checkout.
 */
export default function CtaButton({
  children,
  size = "lg",
  block = false,
  note,
  href = CHECKOUT_URL,
}) {
  const classes = [styles.button, styles[size], block && styles.block]
    .filter(Boolean)
    .join(" ");

  const button = (
    <a className={classes} href={href}>
      <span className={styles.label}>{children}</span>
      {size === "lg" && (
        <span className={styles.arrow} aria-hidden="true">
          &rarr;
        </span>
      )}
    </a>
  );

  if (!note) return button;

  return (
    <div className={styles.group}>
      {button}
      <p className={styles.note}>{note}</p>
    </div>
  );
}
