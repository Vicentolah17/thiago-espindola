import styles from "./Grao.module.css";

/**
 * Textura de ruido fixa por cima da pagina inteira (o "grain" do Cloud
 * Design). opacidade: 0.13 na pagina A, 0.07 na B.
 */
export default function Grao({ opacidade = 0.1 }) {
  return <div className={styles.grao} style={{ opacity: opacidade }} aria-hidden="true" />;
}
