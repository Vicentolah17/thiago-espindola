"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChatHero.module.css";

/**
 * O chat do hero, em loop:
 *   0 vazio → 1 o arquivo sobe (barra de envio) → 2 "editando…" com os
 *   pontinhos → 3 resposta → 4 video editado → 5 segura e recomeca.
 * - so roda com o card na tela e a aba visivel;
 * - com "reduzir movimento" ligado, mostra direto o estado final;
 * - o HTML do servidor ja sai no estado final, entao sem JS a cena
 *   aparece completa.
 */
const TEMPOS = [700, 1500, 1500, 1000, 5200, 5200];
const FINAL = 5;

export default function ChatHero({ chat }) {
  const [passo, setPasso] = useState(FINAL);
  const cardRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let atual = 0;
    let timer = null;
    let rodando = false;
    let naTela = false;

    const agendar = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        atual = atual >= FINAL ? 0 : atual + 1;
        setPasso(atual);
        agendar();
      }, TEMPOS[atual]);
    };

    const atualizar = () => {
      const deveRodar = naTela && document.visibilityState === "visible";
      if (deveRodar && !rodando) {
        rodando = true;
        agendar();
      } else if (!deveRodar && rodando) {
        rodando = false;
        clearTimeout(timer);
      }
    };

    // comeca do zero na primeira vez que aparece
    setPasso(0);
    const observador = new IntersectionObserver(
      ([e]) => {
        naTela = e.isIntersecting;
        atualizar();
      },
      { threshold: 0.25 },
    );
    if (cardRef.current) observador.observe(cardRef.current);
    document.addEventListener("visibilitychange", atualizar);

    return () => {
      clearTimeout(timer);
      observador.disconnect();
      document.removeEventListener("visibilitychange", atualizar);
    };
  }, []);

  const status =
    passo < 2 ? chat.status.enviando : passo < 3 ? chat.status.editando : chat.status.pronto;
  const pronto = passo >= 3;

  return (
    <div ref={cardRef} className={styles.card}>
      <div className={styles.topo}>
        <div className={styles.identidade}>
          <span className={styles.avatar} aria-hidden="true" />
          <span className={styles.nome}>{chat.titulo}</span>
          <span className={styles.assunto}>· {chat.assunto}</span>
        </div>
        <span
          className={`${styles.status} ${pronto ? styles.statusPronto : styles.statusAndando}`}
          aria-live="off"
        >
          <span className={styles.statusPonto} aria-hidden="true" />
          {status}
        </span>
      </div>

      <div className={styles.mensagens}>
        {passo >= 1 && (
          <div className={`${styles.usuario} ${styles.entra}`}>
            <div className={styles.anexo}>
              <span className={styles.anexoTipo}>MP4</span>
              <div className={styles.anexoTexto}>
                <span className={styles.anexoNome}>{chat.arquivo.nome}</span>
                <span className={styles.anexoDetalhe}>{chat.arquivo.detalhe}</span>
              </div>
              {/* barra de envio: enche uma vez quando o arquivo sobe */}
              <span
                className={`${styles.envio} ${passo === 1 ? styles.envioAndando : styles.envioCheio}`}
                aria-hidden="true"
              />
            </div>
            <div className={styles.balao}>{chat.pedido}</div>
          </div>
        )}

        {passo === 2 && (
          <div className={`${styles.digitando} ${styles.entraRapido}`} aria-label="Claudinho está editando">
            <span className={styles.avatarGrande} aria-hidden="true" />
            <span className={styles.pontos} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </div>
        )}

        {passo >= 3 && (
          <div className={`${styles.resposta} ${styles.entra}`}>
            <span className={styles.avatarGrande} aria-hidden="true" />
            <div className={styles.respostaCorpo}>
              <span className={styles.respostaTexto}>{chat.resposta}</span>
              {passo >= 4 && (
                <div className={`${styles.video} ${styles.entra}`}>
                  <span className={styles.miniatura} aria-hidden="true">
                    <span className={styles.play} />
                  </span>
                  <span className={styles.videoTexto}>
                    <span className={styles.anexoNome}>{chat.entrega.nome}</span>
                    <span className={styles.videoDetalhe}>{chat.entrega.detalhe}</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={styles.rodape}>
        <div className={styles.chips} aria-hidden="true">
          {chat.chips.map((c, i) => (
            <span key={c} className={`${styles.chip} ${i === 0 ? styles.chipAtivo : ""}`}>
              {i === 0 ? `✓ ${c}` : c}
            </span>
          ))}
        </div>
        <div className={styles.campo} aria-hidden="true">
          <span>{chat.campo}</span>
          <span className={styles.enviar}>↑</span>
        </div>
      </div>
    </div>
  );
}
