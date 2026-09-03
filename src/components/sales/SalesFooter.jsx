import { rodape } from "@/config/surfeDigital";
import styles from "./SalesFooter.module.css";

/** Secao 16. Assinatura, links legais e os disclaimers obrigatorios. */
export default function SalesFooter({ id }) {
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
