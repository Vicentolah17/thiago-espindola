import Section from "@/components/sales/Section";
import { agitacao } from "@/config/metodoSurfe";
import styles from "./Agitacao.module.css";

/** Secao 3. A pergunta, dois paragrafos e os quatro padroes. */
export default function Agitacao() {
  return (
    <Section id="o-padrao" width="wide">
      <div className={styles.abertura}>
        <h2 className={styles.titulo}>{agitacao.titulo}</h2>
        <div className={styles.paragrafos}>
          {agitacao.paragrafos.map((p) => (
            <p key={p.slice(0, 20)} className={styles.paragrafo}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.rotuloRow}>
        <span className={styles.rotulo}>{agitacao.rotuloPadroes}</span>
        <span className={styles.rule} aria-hidden="true" />
      </div>

      {agitacao.tituloPadroes && (
        <h3 className={styles.tituloPadroes}>{agitacao.tituloPadroes}</h3>
      )}

      <ol className={styles.padroes}>
        {agitacao.padroes.map((padrao) => (
          <li
            key={padrao.numero}
            className={`${styles.padrao} ${padrao.destaque ? styles.destaque : ""}`}
          >
            <span className={styles.numero}>{padrao.numero}</span>
            <div className={styles.corpo}>
              <h3 className={styles.padraoTitulo}>{padrao.titulo}</h3>
              <p className={styles.padraoTexto}>{padrao.texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
