"use client";

import { useId, useState } from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { faq } from "@/config/surfeDigital";
import styles from "./Faq.module.css";

/**
 * Secao 15. Accordion acessivel de verdade:
 * botao nativo (Enter, Espaco e Tab ja funcionam sem JS de teclado),
 * aria-expanded no gatilho, aria-controls apontando pro painel,
 * painel com role region rotulada pelo proprio botao, e foco visivel.
 * Fechado, o painel fica visibility hidden, entao o conteudo sai da
 * ordem de foco e do leitor de tela.
 *
 * A altura abre com grid-template-rows 0fr para 1fr, sem medir nada em
 * JS. Em motor que nao interpola fr, a linha simplesmente salta para o
 * tamanho final: perde a transicao, nunca perde o conteudo.
 */
export default function Faq() {
  const [aberto, setAberto] = useState(null);
  const baseId = useId();

  return (
    <Section id="faq">
      <SectionHeader eyebrow="Dúvidas" title={faq.titulo} align="center" />

      <div className={styles.list}>
        {faq.itens.map((item, index) => {
          const open = aberto === index;
          const buttonId = `${baseId}-botao-${index}`;
          const panelId = `${baseId}-painel-${index}`;

          return (
            <div key={item.pergunta} className={styles.item} data-open={open}>
              <h3 className={styles.heading}>
                <button
                  type="button"
                  id={buttonId}
                  className={styles.trigger}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setAberto(open ? null : index)}
                >
                  <span className={styles.question}>{item.pergunta}</span>
                  <span className={styles.sign} aria-hidden="true">
                    <span className={styles.signBar} />
                    <span className={`${styles.signBar} ${styles.signBarV}`} />
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={styles.panel}
                data-open={open}
              >
                <div className={styles.panelInner}>
                  <p className={styles.answer}>{item.resposta}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
