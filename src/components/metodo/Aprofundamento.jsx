import Section from "@/components/sales/Section";
import SectionHeader from "@/components/sales/SectionHeader";
import ModuleArt from "./ModuleArt";
import { aprofundamento } from "@/config/metodoSurfe";
import styles from "./Aprofundamento.module.css";

/**
 * Secao 10. Os tres modulos que vem depois do protocolo.
 * Deliberadamente mais contido que a secao 9: sem card, sem espinha,
 * so arte pequena e uma linha. A hierarquia precisa ficar clara.
 */
export default function Aprofundamento() {
  return (
    <Section width="wide">
      <SectionHeader
        eyebrow={aprofundamento.eyebrow}
        title={aprofundamento.titulo}
        lede={aprofundamento.intro}
        align="center"
      />

      <ul className={styles.grid}>
        {aprofundamento.itens.map((item) => (
          <li key={item.nome} className={styles.item}>
            <ModuleArt
              src={item.arte}
              alt={`Arte do módulo ${item.nome} do Método S.U.R.F.E`}
              label={item.nome}
              size="sm"
              fit={item.arteAjuste}
            />
            <h3 className={styles.nome}>{item.nome}</h3>
            {item.aulas && <span className={styles.aulas}>{item.aulas}</span>}
            <p className={styles.texto}>{item.texto}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
