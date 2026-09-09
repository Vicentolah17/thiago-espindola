import CtaButton from "./CtaButton";
import styles from "./SiteNav.module.css";

/**
 * Barra fina fixa no topo. Abaixo de 768px as ancoras somem.
 * Compartilhada entre as paginas de venda: cada uma passa o proprio
 * conteudo e o proprio checkout.
 *
 * @param {{marca: string, ancoras: {label: string, href: string}[], cta: string}} nav
 * @param {string} checkoutUrl  Destino do botao.
 */
export default function SiteNav({ nav, checkoutUrl }) {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#topo">
          <span className={styles.brandDot} aria-hidden="true" />
          <span className={styles.brandName}>{nav.marca}</span>
        </a>

        <nav className={styles.anchors} aria-label="Seções da página">
          {nav.ancoras.map((item) => (
            <a key={item.href} className={styles.anchor} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.action}>
          <CtaButton size="sm" href={checkoutUrl}>
            {nav.cta}
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
