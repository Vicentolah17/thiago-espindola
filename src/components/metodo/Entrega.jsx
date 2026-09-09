import Icon from "@/components/sales/Icon";
import Section from "@/components/sales/Section";
import SectionHeader from "@/components/sales/SectionHeader";
import { entrega } from "@/config/metodoSurfe";
import styles from "./Entrega.module.css";

const ICONES = ["layers", "compass", "users", "link", "clock"];

/**
 * Secao 12. O que a pessoa acessa depois da compra.
 * Nao existia na pagina antiga. Uma pagina que pede dinheiro e nunca
 * diz o que entrega perde venda de quem ja estava convencido.
 */
export default function Entrega() {
  return (
    <Section width="wide">
      <SectionHeader eyebrow={entrega.eyebrow} title={entrega.titulo} />

      <ul className={styles.grid}>
        {entrega.itens.map((item, index) => (
          <li key={item.titulo} className={styles.item}>
            <span className={styles.icone}>
              <Icon name={ICONES[index]} size={20} />
            </span>
            <div className={styles.corpo}>
              <h3 className={styles.titulo}>{item.titulo}</h3>
              <p className={styles.texto}>{item.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
