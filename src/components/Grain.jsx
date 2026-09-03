import styles from "./Grain.module.css";

/** Textura de ruido sobreposta a toda a pagina. */
export default function Grain() {
  return <div className={styles.grain} aria-hidden="true" />;
}
