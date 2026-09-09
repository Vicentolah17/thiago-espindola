import Section from "@/components/sales/Section";
import { autoridade } from "@/config/metodoSurfe";
import styles from "./MetodoAutoridade.module.css";

/** Secao 7. Foto a esquerda, dois blocos de texto a direita. */
export default function MetodoAutoridade() {
  return (
    <Section width="wide">
      <div className={styles.grid}>
        {/* Foto vem do config; sem `foto`, volta ao placeholder com a dimensao */}
        <figure className={styles.photo}>
          {autoridade.foto ? (
            <img
              className={styles.photoImg}
              src={autoridade.foto}
              alt="Thiago Espíndola, criador do Método S.U.R.F.E"
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className={styles.photoFrame}>
              <span className={styles.photoLabel}>Foto do Thiago</span>
              <span className={styles.photoDim}>640 x 800</span>
            </div>
          )}
        </figure>

        <div className={styles.text}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>{autoridade.rotulo}</span>
            <span className={styles.rule} aria-hidden="true" />
          </div>

          <h2 className={styles.title}>{autoridade.titulo}</h2>

          {autoridade.paragrafos.map((p) => (
            <p key={p.slice(0, 20)} className={styles.paragraph}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
