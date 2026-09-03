import CtaButton from "./CtaButton";
import Icon from "./Icon";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { resultados } from "@/config/surfeDigital";
import styles from "./Outcomes.module.css";

const ICONES = [
  "person",
  "script",
  "pulse",
  "play",
  "magnet",
  "blocks",
  "link",
  "hidden",
];

/** Secao 8. Grid de oito habilidades e o CTA logo abaixo. */
export default function Outcomes() {
  return (
    <Section width="wide">
      <SectionHeader
        eyebrow="O que muda"
        title={resultados.titulo}
        lede={resultados.subtitulo}
      />

      <ul className={styles.grid}>
        {resultados.itens.map((item, index) => (
          <li key={item.titulo} className={styles.item}>
            <span className={styles.icon}>
              <Icon name={ICONES[index]} size={20} />
            </span>
            <h3 className={styles.title}>{item.titulo}</h3>
            <p className={styles.text}>{item.texto}</p>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <CtaButton>{resultados.cta}</CtaButton>
      </div>
    </Section>
  );
}
