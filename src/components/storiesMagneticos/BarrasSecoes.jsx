"use client";

import { useEffect, useState } from "react";
import styles from "./BarrasSecoes.module.css";

/**
 * Barras de progresso no topo, como os segmentos de um Story.
 * Cada barra e uma secao: as anteriores ficam cheias, a atual enche
 * conforme rola, as seguintes ficam vazias. Clicar leva a secao.
 *
 * secoes: [{ id, rotulo }]
 */
export default function BarrasSecoes({ secoes }) {
  const [cheios, setCheios] = useState(() => secoes.map(() => 0));

  useEffect(() => {
    const medir = () => {
      // a "linha de leitura" fica no meio da tela
      const leitura = window.scrollY + window.innerHeight * 0.5;
      const fim = document.documentElement.scrollHeight - window.innerHeight;
      setCheios(
        secoes.map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return 0;
          // no fim da pagina tudo esta lido
          if (window.scrollY >= fim - 2) return 1;
          const topo = el.offsetTop;
          const p = (leitura - topo) / el.offsetHeight;
          return Math.min(1, Math.max(0, p));
        }),
      );
    };
    medir();
    window.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      window.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, [secoes]);

  return (
    <nav className={styles.barras} aria-label="Seções da página">
      {secoes.map(({ id, rotulo }, i) => (
        <a key={id} className={styles.barra} href={`#${id}`} title={rotulo}>
          <span className={styles.trilho}>
            <span
              className={styles.cheio}
              style={{ transform: `scaleX(${cheios[i]})` }}
            />
          </span>
          <span className={styles.rotulo}>{rotulo}</span>
        </a>
      ))}
    </nav>
  );
}
