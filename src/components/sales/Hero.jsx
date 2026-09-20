import { Fragment } from "react";
import CtaButton from "./CtaButton";
import { MOSTRAR_VSL, hero } from "@/config/surfeDigital";
import styles from "./Hero.module.css";

/**
 * Secao 2. Unico h1 da pagina.
 *
 * Dois layouts, decididos por MOSTRAR_VSL no config:
 *
 * 1. Com VSL (true): coluna unica centralizada, o video entre os chips
 *    e o botao. E a composicao original da pagina.
 * 2. Sem VSL (false, o que esta no ar): o retrato do Thiago ocupa o
 *    lugar do video. No desktop vira duas colunas, texto e botao a
 *    esquerda e a foto a direita; no celular empilha, com a foto logo
 *    antes do botao.
 */
export default function Hero() {
  const comFoto = !MOSTRAR_VSL && Boolean(hero.foto);

  return (
    <section className={styles.hero} id="topo">
      <div className={`${styles.inner} ${comFoto ? styles.duasColunas : ""}`}>
        <div className={styles.text}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span className={styles.badgeLabel}>{hero.selo}</span>
          </div>

          {/* cada "\n" no titulo do config vira uma quebra de linha */}
          <h1 className={styles.title}>
            {hero.titulo.split("\n").map((linha, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {linha}
              </Fragment>
            ))}
          </h1>

          <p className={styles.subtitle}>{hero.subtitulo}</p>

          <ul className={styles.chips}>
            {hero.chips.map((chip) => (
              <li key={chip} className={styles.chip}>
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          {/* VSL: substituir pelo embed. So aparece com MOSTRAR_VSL = true no config. */}
          {MOSTRAR_VSL ? (
            <div className={styles.player}>
              <div className={styles.playerFrame}>
                <span className={styles.playerGlyph} aria-hidden="true" />
                <span className={styles.playerLabel}>Área de embed do vídeo</span>
                <span className={styles.playerDim}>16:9 · 1280x720</span>
              </div>
            </div>
          ) : (
            comFoto && (
              <figure className={styles.fotoMoldura}>
                <img
                  className={styles.foto}
                  src={hero.foto}
                  alt={hero.fotoAlt}
                  width={1200}
                  height={1600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </figure>
            )
          )}
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
