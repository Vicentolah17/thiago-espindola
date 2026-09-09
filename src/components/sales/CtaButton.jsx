import { CHECKOUT_URL } from "@/config/surfeDigital";
import styles from "./CtaButton.module.css";

/**
 * Botao de compra. Reaproveita exatamente o botao do card do hub:
 * mesma altura, mesmo raio, mesmo gradiente, mesma sombra, mesmo
 * quadrado da seta.
 *
 * O gradiente e a sombra vem dos tokens --sr-grad-cta e --sr-shadow-cta,
 * entao um tema que redefina esses tokens muda a cor do botao sem
 * tocar neste arquivo.
 *
 * @param {string}  children  Texto do botao.
 * @param {"lg"|"sm"} size    lg = 62px (padrao do hub), sm = nav.
 * @param {boolean} block     Ocupa a largura toda.
 * @param {string?} note      Microcopia abaixo do botao.
 * @param {string}  href      Destino. Padrao: checkout do SURFE DIGITAL.
 *                            Toda outra pagina deve passar o proprio.
 * @param {"violet"|"gold"} tone  gold usa --sr-grad-cta-gold, que so
 *                            existe no tema do Metodo S.U.R.F.E. Fora
 *                            dele cai no gradiente normal.
 */
export default function CtaButton({
  children,
  size = "lg",
  block = false,
  note,
  href = CHECKOUT_URL,
  tone = "violet",
}) {
  const classes = [
    styles.button,
    styles[size],
    block && styles.block,
    tone === "gold" && styles.gold,
  ]
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
