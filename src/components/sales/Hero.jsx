import CtaButton from "./CtaButton";
import { hero } from "@/config/surfeDigital";
import styles from "./Hero.module.css";

/** Secao 2. Unico h1 da pagina. */
export default function Hero() {
  return (
    <section className={styles.hero} id="topo">
      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span className={styles.badgeLabel}>{hero.selo}</span>
        </div>

        <h1 className={styles.title}>{hero.titulo}</h1>
        <p className={styles.subtitle}>{hero.subtitulo}</p>

        <ul className={styles.chips}>
          {hero.chips.map((chip) => (
            <li key={chip} className={styles.chip}>
              {chip}
            </li>
          ))}
        </ul>

        {/* VSL: substituir pelo embed */}
        <div className={styles.player}>
          <div className={styles.playerFrame}>
            <span className={styles.playerGlyph} aria-hidden="true" />
            <span className={styles.playerLabel}>Área de embed do vídeo</span>
            <span className={styles.playerDim}>16:9 · 1280x720</span>
          </div>
        </div>

        <div className={styles.cta}>
          <CtaButton block note={hero.microcopia}>
            {hero.cta}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
