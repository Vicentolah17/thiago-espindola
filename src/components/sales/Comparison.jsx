import Icon from "./Icon";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { comparativo } from "@/config/surfeDigital";
import styles from "./Comparison.module.css";

/** Secao 9. Tabela real, para o comparativo ser lido como comparativo. */
export default function Comparison() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Lado a lado"
        title={comparativo.titulo}
        align="center"
      />

      <div className={styles.wrap}>
        <table className={styles.table}>
          <caption className={styles.caption}>
            Comparação entre postar sem método e trabalhar com um sistema.
          </caption>
          <thead>
            <tr>
              <th scope="col" className={styles.headNegative}>
                {comparativo.colunaNegativa}
              </th>
              <th scope="col" className={styles.headPositive}>
                {comparativo.colunaPositiva}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparativo.linhas.map((linha) => (
              <tr key={linha.positivo}>
                <td className={styles.cellNegative}>
                  <span className={styles.cellInner}>
                    <span className={styles.mark} aria-hidden="true">
                      <Icon name="minus" size={14} />
                    </span>
                    <span>{linha.negativo}</span>
                  </span>
                </td>
                <td className={styles.cellPositive}>
                  <span className={styles.cellInner}>
                    <span className={styles.mark} aria-hidden="true">
                      <Icon name="check" size={14} />
                    </span>
                    <span>{linha.positivo}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
