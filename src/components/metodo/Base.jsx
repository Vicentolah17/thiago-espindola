import Section from "@/components/sales/Section";
import { base } from "@/config/metodoSurfe";
import styles from "./Base.module.css";

/**
 * Secao 11. Curta de proposito: existe pra separar o produto da
 * autoajuda generica, nao pra provar tese. Nenhum campo cientifico
 * usado como selo.
 */
export default function Base() {
  return (
    <Section>
      <div className={styles.bloco}>
        <span className={styles.risco} aria-hidden="true" />
        <h2 className={styles.titulo}>{base.titulo}</h2>
        {base.paragrafos.map((p) => (
          <p key={p.slice(0, 20)} className={styles.texto}>
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
