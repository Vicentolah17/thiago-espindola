"use client";

import { useRef, useState } from "react";
import styles from "./PrintGallery.module.css";

/**
 * Galeria de prints reais usada como prova.
 *
 * Os prints sao horizontais e cheios de texto pequeno; numa tela de
 * celular ficam ilegiveis no tamanho do card. Por isso cada print e um
 * botao que abre a imagem num <dialog> nativo, no tamanho original,
 * com rolagem lateral quando nao cabe. Esc e o clique fora fecham.
 *
 * @param {{src: string, width: number, height: number, alt: string,
 *          titulo: string, texto: string}[]} prints
 */
export default function PrintGallery({ prints }) {
  const dialogRef = useRef(null);
  const [aberto, setAberto] = useState(null);

  const abrir = (print) => {
    setAberto(print);
    dialogRef.current?.showModal();
  };

  const fechar = () => dialogRef.current?.close();

  return (
    <>
      <ol className={styles.lista}>
        {prints.map((print, index) => (
          <li key={print.src} className={styles.item}>
            <div className={styles.legenda}>
              <span className={styles.numero}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className={styles.titulo}>{print.titulo}</h4>
                <p className={styles.texto}>{print.texto}</p>
              </div>
            </div>

            <button
              type="button"
              className={styles.moldura}
              onClick={() => abrir(print)}
              aria-label={`Ampliar print: ${print.titulo}`}
            >
              <img
                className={styles.imagem}
                src={print.src}
                alt={print.alt}
                width={print.width}
                height={print.height}
                loading="lazy"
                decoding="async"
              />
            </button>

            {/* fora da imagem: o print do perfil tem ~50px de altura no
                celular e uma etiqueta por cima tamparia os numeros */}
            <button
              type="button"
              className={styles.ampliar}
              onClick={() => abrir(print)}
              tabIndex={-1}
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
              Toque para ampliar
            </button>
          </li>
        ))}
      </ol>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClose={() => setAberto(null)}
        onClick={(e) => {
          // clique no fundo escuro (fora da caixa) fecha
          if (e.target === e.currentTarget) fechar();
        }}
        aria-label={aberto ? aberto.titulo : "Print ampliado"}
      >
        {aberto && (
          <div className={styles.dialogCaixa}>
            <div className={styles.dialogTopo}>
              <span className={styles.dialogTitulo}>{aberto.titulo}</span>
              <button type="button" className={styles.fechar} onClick={fechar}>
                Fechar
              </button>
            </div>
            <div className={styles.dialogRolagem}>
              <img
                className={styles.dialogImagem}
                src={aberto.src}
                alt={aberto.alt}
                width={aberto.width}
                height={aberto.height}
              />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
