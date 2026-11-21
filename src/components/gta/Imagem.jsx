import styles from "./Imagem.module.css";

/**
 * Espaco de imagem (o image-slot do Cloud Design).
 * Com src: a imagem preenche o espaco (cover).
 * Sem src: um placeholder marcado com o rotulo, ate a imagem real chegar.
 * O tamanho e a proporcao vem do elemento pai.
 */
export default function Imagem({ src, alt = "", rotulo, tom = "escuro" }) {
  if (src) {
    return <img className={styles.imagem} src={src} alt={alt} loading="lazy" decoding="async" />;
  }
  return (
    <div className={`${styles.vazio} ${styles[tom]}`} role="img" aria-label={`Espaço reservado: ${rotulo}`}>
      <span className={styles.rotulo}>{rotulo}</span>
    </div>
  );
}
