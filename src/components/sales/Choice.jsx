import Icon from "./Icon";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { escolha } from "@/config/surfeDigital";
import styles from "./Choice.module.css";

/** Secao 5. Dois caminhos lado a lado e a pergunta de fechamento. */
export default function Choice() {
  return (
    <Section width="wide">
      <SectionHeader eyebrow="A escolha" title={escolha.titulo} align="center" />

      <div className={styles.paths}>
        <article className={`${styles.path} ${styles.negative}`}>
          <h3 className={styles.pathTitle}>{escolha.negativo.titulo}</h3>
          <ul className={styles.list}>
            {escolha.negativo.itens.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.mark} aria-hidden="true">
                  <Icon name="minus" size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className={`${styles.path} ${styles.positive}`}>
          <h3 className={styles.pathTitle}>{escolha.positivo.titulo}</h3>
          <ul className={styles.list}>
            {escolha.positivo.itens.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.mark} aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      {escolha.fechamentoIntro && (
        <p className={styles.closingIntro}>{escolha.fechamentoIntro}</p>
      )}
      <p className={styles.closing}>{escolha.fechamento}</p>
    </Section>
  );
}
