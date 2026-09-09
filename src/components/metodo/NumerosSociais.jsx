import Section from "@/components/sales/Section";
import { MOSTRAR_NUMEROS_SOCIAIS, NUMEROS_SOCIAIS } from "@/config/metodoSurfe";
import styles from "./NumerosSociais.module.css";

/**
 * Secao 6. BLOCO DESLIGADO por padrao.
 * Tres numeros grandes com rotulo pequeno. So renderiza com a flag
 * MOSTRAR_NUMEROS_SOCIAIS em true e com os tres valores preenchidos.
 * Desligado, nao deixa nem espaco: a secao anterior emenda na proxima.
 */
export default function NumerosSociais() {
  const completos = NUMEROS_SOCIAIS.every((n) => n.valor && n.rotulo);
  if (!MOSTRAR_NUMEROS_SOCIAIS || !completos) return null;

  return (
    <Section width="wide">
      <ul className={styles.grid}>
        {NUMEROS_SOCIAIS.map((n) => (
          <li key={n.rotulo} className={styles.item}>
            <span className={styles.valor}>{n.valor}</span>
            <span className={styles.rotulo}>{n.rotulo}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
