import Section from "@/components/sales/Section";
import { prova } from "@/config/ofertaSurfeDigital";
import styles from "./Proof.module.css";

/**
 * Secao 4. Prova.
 *
 * O case dos 40k e real e sempre aparece. Os depoimentos sao espaco
 * reservado: enquanto `prova.depoimentos` estiver vazio, o que
 * aparece sao caixas de placeholder marcadas, nunca nome ou frase
 * inventada. Ver o comentario no config.
 */
export default function Proof() {
  const { depoimentos, mostrarPlaceholders } = prova;
  const temDepoimento = depoimentos.length > 0;
  const mostrarSlots = !temDepoimento && mostrarPlaceholders;

  return (
    <Section width="wide">
      <div className={styles.caseBloco}>
        <div className={styles.caseNumeroBloco}>
          <span className={styles.caseNumero}>{prova.caseNumero}</span>
          <span className={styles.caseRotulo}>{prova.caseRotulo}</span>
        </div>
        <div className={styles.caseTexto}>
          <h2 className={styles.caseTitulo}>{prova.titulo}</h2>
          <p className={styles.caseParagrafo}>{prova.caseTexto}</p>
        </div>
      </div>

      {(temDepoimento || mostrarSlots) && (
        <div className={styles.depoimentos}>
          <h3 className={styles.depoimentosTitulo}>
            {prova.depoimentosTitulo}
          </h3>

          {temDepoimento ? (
            <ul className={styles.grid}>
              {depoimentos.map((item) => (
                <li key={item.nome} className={styles.item}>
                  <p className={styles.itemTitulo}>{item.titulo}</p>
                  <div className={styles.frame}>
                    <video
                      className={styles.video}
                      src={item.videoSrc}
                      poster={item.poster}
                      width="1080"
                      height="1920"
                      controls
                      playsInline
                      preload="none"
                    />
                  </div>
                  <p className={styles.itemNome}>{item.nome}</p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className={`${styles.grid} ${styles.gridPlaceholder}`}>
              {[1, 2, 3].map((n) => (
                <li key={n} className={styles.item}>
                  <div className={styles.placeholder}>
                    <span className={styles.placeholderLabel}>
                      Depoimento {n}
                    </span>
                    <span className={styles.placeholderDim}>
                      vídeo vertical · 1080 x 1920
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Section>
  );
}
