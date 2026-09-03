import CtaButton from "./CtaButton";
import { nav } from "@/config/surfeDigital";
import styles from "./SiteNav.module.css";

/** Barra fina fixa no topo. Abaixo de 768px as ancoras somem. */
export default function SiteNav() {
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
          <CtaButton size="sm">{nav.cta}</CtaButton>
        </div>
      </div>
    </header>
  );
}
