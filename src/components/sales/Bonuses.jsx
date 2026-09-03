import Icon from "./Icon";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { bonus } from "@/config/surfeDigital";
import styles from "./Bonuses.module.css";

const ICONES = ["users", "gift"];

/**
 * Secao 12. Dois bonus reais.
 * A etiqueta e "Incluso" de proposito: sem valor somado, porque
 * nao existe preco real por bonus para ancorar.
 */
export default function Bonuses() {
  return (
    <Section id="bonus" width="wide">
      <SectionHeader
        eyebrow="Bônus"
        title={bonus.titulo}
        lede={bonus.subtitulo}
      />

      <ul className={styles.grid}>
        {bonus.itens.map((item, index) => (
          <li key={item.nome} className={styles.item}>
            <div className={styles.top}>
              <span className={styles.icon}>
                <Icon name={ICONES[index]} size={20} />
              </span>
              <span className={styles.tag}>{item.etiqueta}</span>
            </div>
            <h3 className={styles.title}>{item.nome}</h3>
            <p className={styles.text}>{item.texto}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
