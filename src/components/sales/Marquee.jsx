import styles from "./Marquee.module.css";

/**
 * Faixa em loop horizontal.
 * A lista e repetida duas vezes para o loop nao ter emenda visivel.
 * A copia duplicada fica aria-hidden para o leitor de tela ouvir
 * os termos uma vez so. Com prefers-reduced-motion a animacao para.
 *
 * @param {string[]} termos  Os itens da faixa.
 */
export default function Marquee({ termos }) {
  const track = (
    <ul className={styles.track}>
      {termos.map((termo) => (
        <li key={termo} className={styles.item}>
          <span className={styles.dot} aria-hidden="true" />
          {termo}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.strip}>
      <div className={styles.viewport}>
        {track}
        <div aria-hidden="true" className={styles.clone}>
          {track}
        </div>
      </div>
    </div>
  );
}
