import Icon from "@/components/sales/Icon";
import Section from "@/components/sales/Section";
import SectionHeader from "@/components/sales/SectionHeader";
import { entrega } from "@/config/ofertaSurfeDigital";
// Os modulos vem do config da pagina de vendas de proposito: se um
// modulo mudar de nome, as duas paginas mudam juntas. Uma lista so.
import { metodo } from "@/config/surfeDigital";
import styles from "./Deliverables.module.css";

export default function Deliverables() {
  return (
    <Section width="wide">
      <SectionHeader
        eyebrow="A entrega"
        title={entrega.titulo}
        lede={entrega.subtitulo}
      />

      <div className={styles.blocos}>
        {metodo.blocos.map((bloco) => (
          <div key={bloco.nome} className={styles.bloco}>
            <h3 className={styles.blocoNome}>{bloco.nome}</h3>
            <ul className={styles.modulos}>
              {bloco.modulos.map((modulo) => (
                <li key={modulo.numero} className={styles.modulo}>
                  <span className={styles.numero}>{modulo.numero}</span>
                  <span className={styles.moduloTexto}>
                    <span className={styles.moduloTitulo}>{modulo.titulo}</span>
                    <span className={styles.moduloApoio}>{modulo.texto}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bonus}>
        <h3 className={styles.bonusTitulo}>{entrega.bonusTitulo}</h3>
        <ul className={styles.bonusLista}>
          {entrega.bonus.map((item) => (
            <li key={item.nome} className={styles.bonusItem}>
              <span className={styles.bonusIcone}>
                <Icon name="check" size={16} />
              </span>
              <span>
                <strong className={styles.bonusNome}>{item.nome}</strong>
                <span className={styles.bonusApoio}>{item.texto}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
