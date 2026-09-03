import CtaButton from "./CtaButton";
import Icon from "./Icon";
import Section from "./Section";
import { coproducao } from "@/config/surfeDigital";
import styles from "./Coproduction.module.css";

const ICONES = ["layers", "users", "compass", "clock"];

/**
 * Secao 11. O diferencial do produto.
 * Recebe o tratamento do card "Kit de Aplicacao" do hub, que na
 * pagina inteira so aparece aqui e no bloco de preco.
 */
export default function Coproduction() {
  return (
    <Section width="wide">
      <div className={styles.feature}>
        <div className={styles.inner}>
          <div className={styles.sheen} aria-hidden="true" />
          <div className={styles.gloss} aria-hidden="true" />

          <div className={styles.content}>
            <header className={styles.head}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                <span className={styles.badgeLabel}>{coproducao.selo}</span>
              </div>
              <h2 className={styles.title}>{coproducao.titulo}</h2>
              <p className={styles.intro}>{coproducao.intro}</p>
            </header>

            <ul className={styles.cards}>
              {coproducao.cards.map((card, index) => (
                <li key={card.titulo} className={styles.card}>
                  <span className={styles.cardIcon}>
                    <Icon name={ICONES[index]} size={20} />
                  </span>
                  <h3 className={styles.cardTitle}>{card.titulo}</h3>
                  <p className={styles.cardText}>{card.texto}</p>
                </li>
              ))}
            </ul>

            <div className={styles.cta}>
              <CtaButton>{coproducao.cta}</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
