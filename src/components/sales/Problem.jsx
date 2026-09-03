import Icon from "./Icon";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { problema } from "@/config/surfeDigital";
import styles from "./Problem.module.css";

/** Secao 4. Cinco cards de dor, depois dois cards de virada. */
export default function Problem() {
  return (
    <Section id="para-quem-e" width="wide">
      <SectionHeader eyebrow="Para quem é" title={problema.titulo} />

      <ul className={styles.pains}>
        {problema.dores.map((dor) => (
          <li key={dor.titulo} className={styles.pain}>
            <span className={styles.painIcon}>
              <Icon name="minus" size={18} />
            </span>
            <div className={styles.painBody}>
              <h3 className={styles.painTitle}>{dor.titulo}</h3>
              <p className={styles.painText}>{dor.texto}</p>
            </div>
          </li>
        ))}
      </ul>

      <ul className={styles.turns}>
        {problema.viradas.map((virada, index) => (
          <li
            key={virada.titulo}
            className={`${styles.turn} ${index === 0 ? styles.violet : styles.magenta}`}
          >
            <span className={styles.turnIcon}>
              <Icon name={index === 0 ? "pulse" : "compass"} size={20} />
            </span>
            <h3 className={styles.turnTitle}>{virada.titulo}</h3>
            <p className={styles.turnText}>{virada.texto}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
