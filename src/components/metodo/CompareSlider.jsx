"use client";

import { useCallback, useRef, useState } from "react";
import styles from "./CompareSlider.module.css";

const limitar = (v) => Math.min(100, Math.max(0, v));

/**
 * Comparador antes/depois.
 *
 * Duas fotos na mesma caixa. A de "depois" fica embaixo, inteira. A de
 * "antes" fica por cima, recortada por clip-path na posicao da linha:
 * a esquerda da linha e o antes, a direita e o depois.
 *
 * Interacao:
 * - Mouse: a linha segue o cursor so de passar por cima (sem clicar),
 *   como na pagina antiga.
 * - Toque e caneta: arrasta. O gesto vertical continua rolando a
 *   pagina (touch-action: pan-y), so o horizontal move a linha.
 * - Teclado: a alca e um slider de verdade. Setas movem 5%, Page Up e
 *   Page Down 10%, Home e End vao aos extremos.
 *
 * A posicao vai numa custom property (--pos) no elemento, entao mover
 * a linha nao reescreve estilo em cada filho.
 *
 * @param {{src: string, alt: string}} antes
 * @param {{src: string, alt: string}} depois
 * @param {number}  width, height   Dimensao dos arquivos (os dois iguais).
 * @param {string?} rotuloAntes, rotuloDepois  Pilulas nos cantos. null esconde.
 * @param {number}  inicial         Posicao inicial, em %.
 */
export default function CompareSlider({
  antes,
  depois,
  width = 960,
  height = 1200,
  rotuloAntes = "Antes",
  rotuloDepois = "Depois",
  inicial = 50,
  espelharDepois = false,
  className,
}) {
  const frameRef = useRef(null);
  const arrastando = useRef(false);
  const [pos, setPos] = useState(inicial);

  const posicaoDoEvento = useCallback((clientX) => {
    const r = frameRef.current.getBoundingClientRect();
    return limitar(((clientX - r.left) / r.width) * 100);
  }, []);

  const aoMover = (e) => {
    // mouse segue no hover; toque e caneta so enquanto arrastam
    if (e.pointerType === "mouse" || arrastando.current) {
      setPos(posicaoDoEvento(e.clientX));
    }
  };

  // capturar o ponteiro mantem o arraste vivo mesmo se o dedo sair da
  // foto. Pode lancar se o ponteiro ja nao estiver ativo; nesse caso o
  // arraste so deixa de ser capturado, nada quebra.
  const capturar = (el, id, ligar) => {
    try {
      if (ligar) el.setPointerCapture(id);
      else if (el.hasPointerCapture?.(id)) el.releasePointerCapture(id);
    } catch {
      /* ponteiro inativo: ignorar */
    }
  };

  const aoApertar = (e) => {
    if (e.pointerType !== "mouse") {
      arrastando.current = true;
      capturar(e.currentTarget, e.pointerId, true);
    }
    setPos(posicaoDoEvento(e.clientX));
  };

  const aoSoltar = (e) => {
    arrastando.current = false;
    capturar(e.currentTarget, e.pointerId, false);
  };

  const aoTeclar = (e) => {
    const passos = {
      ArrowLeft: -5,
      ArrowDown: -5,
      ArrowRight: 5,
      ArrowUp: 5,
      PageDown: -10,
      PageUp: 10,
    };
    if (e.key in passos) {
      e.preventDefault();
      setPos((p) => limitar(p + passos[e.key]));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  const valor = Math.round(pos);

  return (
    <div className={[styles.moldura, className].filter(Boolean).join(" ")}>
      <div
        ref={frameRef}
        className={styles.frame}
        style={{ "--pos": `${pos}%` }}
        onPointerMove={aoMover}
        onPointerDown={aoApertar}
        onPointerUp={aoSoltar}
        onPointerCancel={aoSoltar}
      >
        <img
          className={`${styles.foto} ${espelharDepois ? styles.espelhada : ""}`}
          src={depois.src}
          alt={depois.alt}
          width={width}
          height={height}
          loading="eager"
          decoding="async"
          draggable={false}
        />
        <img
          className={`${styles.foto} ${styles.antes}`}
          src={antes.src}
          alt={antes.alt}
          width={width}
          height={height}
          loading="eager"
          decoding="async"
          draggable={false}
        />

        {rotuloAntes && (
          <span className={`${styles.rotulo} ${styles.rotuloAntes}`} aria-hidden="true">
            {rotuloAntes}
          </span>
        )}
        {rotuloDepois && (
          <span className={`${styles.rotulo} ${styles.rotuloDepois}`} aria-hidden="true">
            {rotuloDepois}
          </span>
        )}

        <div
          className={styles.alca}
          role="slider"
          tabIndex={0}
          aria-label="Comparar a foto de antes com a de hoje"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={valor}
          aria-valuetext={`${valor}% da foto de antes visível`}
          aria-orientation="horizontal"
          onKeyDown={aoTeclar}
        >
          <span className={styles.linha} aria-hidden="true" />
          <span className={styles.botao} aria-hidden="true">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
              <path d="M5 1 0 6l5 5zM13 1l5 5-5 5z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
