import Icon from "./Icon";
import Section from "./Section";
import { autoridade } from "@/config/surfeDigital";
import styles from "./Authority.module.css";

const ICONES = ["pulse", "compass", "users"];

/** Secao 6. Foto a esquerda, texto a direita, tres credenciais abaixo. */
export default function Authority() {
  return (
    <Section width="wide">
      <div className={styles.grid}>
        {/* Foto vem do config; sem `foto`, volta ao placeholder com a dimensao */}
        <figure className={styles.photo}>
          {autoridade.foto ? (
            <img
              className={styles.photoImg}
              src={autoridade.foto}
              alt="Thiago Espíndola, criador do SURFE DIGITAL"
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
            <span className={styles.eyebrow}>Quem está por trás</span>
            <span className={styles.rule} aria-hidden="true" />
          </div>
          <h2 className={styles.title}>{autoridade.titulo}</h2>
          {autoridade.paragrafos.map((paragrafo) => (
            <p key={paragrafo.slice(0, 24)} className={styles.paragraph}>
              {paragrafo}
            </p>
          ))}
        </div>
      </div>

      <ul className={styles.credentials}>
        {autoridade.credenciais.map((credencial, index) => (
          <li key={credencial.titulo} className={styles.credential}>
            <span className={styles.credentialIcon}>
              <Icon name={ICONES[index]} size={20} />
            </span>
            <h3 className={styles.credentialTitle}>{credencial.titulo}</h3>
            <p className={styles.credentialText}>{credencial.texto}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
