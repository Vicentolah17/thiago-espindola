import styles from "./Halos.module.css";

/** Os tres halos de luz que ficam atras de todo o conteudo. */
export default function Halos() {
  return (
    <div className={styles.layer} aria-hidden="true">
      <div className={styles.violet} />
      <div className={styles.magenta} />
      <div className={styles.indigo} />
    </div>
  );
}
