"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/sales/Section";
import SectionHeader from "@/components/sales/SectionHeader";
import ModuleArt from "./ModuleArt";
import { protocolo } from "@/config/metodoSurfe";
import styles from "./Protocolo.module.css";

/**
 * Secao 9. O protocolo S.U.R.F.E. O momento de maior peso da pagina.
 *
 * Nao e grid de cards. E uma espinha vertical com cinco nos, um por
 * letra, e a arte de cada etapa alternando de lado (esquerda, direita,
 * esquerda) pra desenhar uma onda descendo a pagina. No celular vira
 * coluna unica com a espinha na borda esquerda.
 *
 * Unico momento orquestrado da pagina: quando a secao entra na tela,
 * as cinco letras acendem em sequencia. Um IntersectionObserver liga
 * data-entrou uma vez e se desliga. Com prefers-reduced-motion a
 * animacao nao existe e as letras ja nascem acesas.
 */
export default function Protocolo() {
  const espinhaRef = useRef(null);
  const [entrou, setEntrou] = useState(false);

  useEffect(() => {
    const alvo = espinhaRef.current;
    if (!alvo) return undefined;

    // threshold 0 com margem negativa embaixo: dispara quando o topo da
    // espinha passa 20% acima da borda inferior da tela. Um threshold
    // proporcional (0.18 da lista inteira, ~2000px) exigiria centenas de
    // pixels visiveis de uma vez e nunca cruzaria em celular deitado.
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setEntrou(true);
          observador.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" }
    );

    observador.observe(alvo);
    return () => observador.disconnect();
  }, []);

  const total = protocolo.etapas.length;

  return (
    <Section id="o-metodo" width="wide">
      <SectionHeader
        eyebrow={protocolo.eyebrow}
        title={protocolo.titulo}
        lede={protocolo.intro}
        align="center"
      />

      <ol ref={espinhaRef} className={styles.espinha} data-entrou={entrou}>
        {protocolo.etapas.map((etapa, index) => (
          <li
            key={etapa.letra}
            className={`${styles.etapa} ${index % 2 ? styles.direita : styles.esquerda}`}
            style={{ "--i": index }}
          >
            <div className={styles.no}>
              <span className={styles.letra}>{etapa.letra}</span>
            </div>

            <div className={styles.arte}>
              <ModuleArt
                src={etapa.arte}
                alt={`Arte do módulo ${etapa.nome} do Método S.U.R.F.E`}
                label={etapa.nome}
                size="md"
              />
            </div>

            <div className={styles.texto}>
              <span className={styles.indice}>
                Etapa {index + 1} de {total}
              </span>
              <h3 className={styles.nome}>{etapa.nome}</h3>
              <p className={styles.descricao}>{etapa.texto}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* coda: as cinco letras juntas, pra ficarem na memoria */}
      <p className={styles.acronimo} aria-label="S.U.R.F.E">
        {protocolo.etapas.map((etapa) => (
          <span key={etapa.letra} aria-hidden="true">
            {etapa.letra}
          </span>
        ))}
      </p>
    </Section>
  );
}
