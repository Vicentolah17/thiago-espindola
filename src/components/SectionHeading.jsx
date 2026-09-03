import styles from "./SectionHeading.module.css";

/** Rotulo com a linha degrade que abre a lista de niveis. */
export default function SectionHeading({ label }) {
  return (
    <div className={styles.heading}>
      <span className={styles.label}>{label}</span>
      <span className={styles.rule} aria-hidden="true" />
    </div>
  );
}
