import styles from "./SalesFooter.module.css";

/**
 * Assinatura, links legais e os disclaimers obrigatorios.
 * Compartilhado entre as paginas de venda.
 *
 * @param {string} id
 * @param {{marca: string, direitos: string, links: {label: string, href: string}[], disclaimers: string[]}} rodape
 */
export default function SalesFooter({ id, rodape }) {
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.footer} id={id}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <span className={styles.brand}>{rodape.marca}</span>
          <nav className={styles.links} aria-label="Links legais">
            {rodape.links.map((link) => (
              <a key={link.href} className={styles.link} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className={styles.copyright}>
          © {ano} Thiago Espíndola · {rodape.direitos}
        </p>

        <div className={styles.disclaimers}>
          {rodape.disclaimers.map((texto) => (
            <p key={texto.slice(0, 24)} className={styles.disclaimer}>
              {texto}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
