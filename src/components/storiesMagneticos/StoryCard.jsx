"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./StoryCard.module.css";

const DURACAO = 5000;

/**
 * O card 9:16 do hero, que se comporta como um Story do Instagram.
 * - autoplay: cada slide dura 5s e a barra dele enche;
 * - toque nos 35% da esquerda volta, nos 65% da direita avanca;
 * - pausa com o mouse em cima, com o dedo pressionado e fora da tela;
 * - setas do teclado quando o card tem foco;
 * - com "reduzir movimento" ligado, nao roda sozinho.
 *
 * slides: [{ tag, titulo, foto }]
 */
export default function StoryCard({ slides, ctaHref, ctaRotulo }) {
  const [indice, setIndice] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const cardRef = useRef(null);
  const pausadoRef = useRef(false);
  const visivelRef = useRef(true);
  const autoplayRef = useRef(true);

  // o relogio vive em refs; o estado so espelha para desenhar
  const indiceRef = useRef(0);
  const progressoRef = useRef(0);

  const mostrar = useCallback((i, p) => {
    indiceRef.current = i;
    progressoRef.current = p;
    setIndice(i);
    setProgresso(p);
  }, []);

  const ir = useCallback(
    (passo) => {
      const total = slides.length;
      mostrar((indiceRef.current + passo + total) % total, 0);
    },
    [slides.length, mostrar],
  );

  useEffect(() => {
    autoplayRef.current = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const card = cardRef.current;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        visivelRef.current = entrada.isIntersecting;
      },
      { threshold: 0.2 },
    );
    if (card) observador.observe(card);

    let ultimo = performance.now();
    let raf;
    const tick = (agora) => {
      const dt = agora - ultimo;
      ultimo = agora;
      if (autoplayRef.current && visivelRef.current && !pausadoRef.current) {
        const novo = progressoRef.current + dt / DURACAO;
        if (novo >= 1) {
          mostrar((indiceRef.current + 1) % slides.length, 0);
        } else {
          mostrar(indiceRef.current, novo);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observador.disconnect();
    };
  }, [slides.length, mostrar]);

  const pausar = (sim) => () => {
    pausadoRef.current = sim;
  };

  const atual = slides[indice];

  return (
    <div className={styles.envolve}>
      <div
        ref={cardRef}
        className={styles.card}
        role="group"
        aria-roledescription="story"
        aria-label={`Story ${indice + 1} de ${slides.length}: ${atual.tag}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") ir(-1);
          if (e.key === "ArrowRight") ir(1);
        }}
        onMouseEnter={pausar(true)}
        onMouseLeave={pausar(false)}
        onPointerDown={pausar(true)}
        onPointerUp={pausar(false)}
        onPointerCancel={pausar(false)}
      >
        {/* as 3 fotos ficam carregadas e empilhadas; so a atual aparece,
            entao a troca nao pisca */}
        {slides.map((s, k) => (
          <img
            key={s.foto}
            className={`${styles.foto} ${k === indice ? styles.fotoAtual : ""}`}
            src={s.foto}
            alt=""
            width={720}
            height={1280}
            fetchPriority={k === 0 ? "high" : "auto"}
            draggable={false}
          />
        ))}
        <span className={styles.sombra} aria-hidden="true" />

        <div className={styles.segmentos} aria-hidden="true">
          {slides.map((s, k) => (
            <span key={s.tag} className={styles.segmento}>
              <span
                className={styles.segmentoCheio}
                style={{
                  transform: `scaleX(${k < indice ? 1 : k === indice ? progresso : 0})`,
                }}
              />
            </span>
          ))}
        </div>

        <div className={styles.meta}>
          <span className={styles.tag}>{atual.tag}</span>
          <span className={styles.contador}>
            {indice + 1}/{slides.length}
          </span>
        </div>

        {/* titulo com fundo em cada linha, como o texto de Story */}
        <p className={styles.titulo} aria-live="polite">
          <span>{atual.titulo}</span>
        </p>

        <button
          type="button"
          className={styles.zonaVoltar}
          onClick={() => ir(-1)}
          aria-label="Story anterior"
        />
        <button
          type="button"
          className={styles.zonaAvancar}
          onClick={() => ir(1)}
          aria-label="Próximo story"
        />

        <div className={styles.rodape}>
          <span className={styles.mensagem} aria-hidden="true">
            Enviar mensagem
          </span>
          <a className={styles.enviar} href={ctaHref} aria-label={ctaRotulo}>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <p className={styles.lateral} aria-hidden="true">
        {slides.map((s) => s.tag).join("   ")}
      </p>
    </div>
  );
}
