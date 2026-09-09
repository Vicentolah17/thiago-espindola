import Icon from "@/components/sales/Icon";
import Section from "@/components/sales/Section";
import SectionHeader from "@/components/sales/SectionHeader";
import { paraQuem } from "@/config/metodoSurfe";
import styles from "./ParaQuem.module.css";

/** Secao 8. Filtro de qualificacao, duas colunas contrastantes. */
export default function ParaQuem() {
  return (
    <Section id="para-quem-e" width="wide">
      <SectionHeader
        eyebrow={paraQuem.rotulo}
        title={paraQuem.titulo}
        align="center"
      />

      <div className={styles.colunas}>
        <article className={`${styles.coluna} ${styles.positivo}`}>
          <h3 className={styles.colunaTitulo}>{paraQuem.positivo.titulo}</h3>
          <ul className={styles.lista}>
            {paraQuem.positivo.itens.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.marca} aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className={`${styles.coluna} ${styles.negativo}`}>
          <h3 className={styles.colunaTitulo}>{paraQuem.negativo.titulo}</h3>
          <ul className={styles.lista}>
            {paraQuem.negativo.itens.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.marca} aria-hidden="true">
                  <Icon name="minus" size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
