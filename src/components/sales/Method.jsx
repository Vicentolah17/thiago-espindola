import Icon from "./Icon";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { metodo } from "@/config/surfeDigital";
import styles from "./Method.module.css";

const ICONES = {
  "01": "blocks",
  "02": "compass",
  "03": "person",
  "04": "script",
  "05": "play",
  "06": "magnet",
  "07": "layers",
  "08": "link",
  "09": "hidden",
};

/** Secao 10. Nove modulos em ordem, agrupados nos tres blocos do curso. */
export default function Method() {
  return (
    <Section id="metodo" width="wide">
      <SectionHeader
        eyebrow="O método"
        title={metodo.titulo}
        lede={metodo.intro}
      />

      <div className={styles.blocks}>
        {metodo.blocos.map((bloco, blocoIndex) => (
          <div key={bloco.nome} className={styles.block}>
            <div className={styles.blockHead}>
              <span className={styles.blockIndex}>
                Bloco {String(blocoIndex + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.blockName}>{bloco.nome}</h3>
              <span className={styles.blockRule} aria-hidden="true" />
            </div>

            <ul className={styles.modules}>
              {bloco.modulos.map((modulo) => (
                <li
                  key={modulo.numero}
                  className={`${styles.module} ${
                    bloco.nome === "Co-produção" ? styles.magenta : styles.violet
                  }`}
                >
                  <div className={styles.moduleTop}>
                    <span className={styles.moduleNumber}>{modulo.numero}</span>
                    <span className={styles.moduleIcon}>
                      <Icon name={ICONES[modulo.numero]} size={18} />
                    </span>
                  </div>
                  <h4 className={styles.moduleTitle}>{modulo.titulo}</h4>
                  <p className={styles.moduleText}>{modulo.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ul className={styles.reinforcements}>
        {metodo.reforcos.map((reforco, index) => (
          <li key={reforco.titulo} className={styles.reinforcement}>
            <span className={styles.reinforcementIcon}>
              <Icon name={index === 0 ? "check" : "refresh"} size={20} />
            </span>
            <div>
              <h3 className={styles.reinforcementTitle}>{reforco.titulo}</h3>
              <p className={styles.reinforcementText}>{reforco.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
