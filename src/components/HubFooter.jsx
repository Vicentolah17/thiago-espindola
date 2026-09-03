import SmartLink from "./SmartLink";
import styles from "./HubFooter.module.css";

/**
 * Rodape do hub: pilulas de redes sociais + assinatura da marca.
 *
 * @param {{href: string, label: string, icon: "instagram"|"youtube"}[]} socials
 * @param {string} brand      Assinatura em caixa alta.
 * @param {string} copyright  Linha de direitos.
 */
export default function HubFooter({ socials = [], brand, copyright }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.socials}>
        {socials.map((social) => (
          <SmartLink key={social.href} className={styles.social} href={social.href}>
            <span
              className={
                social.icon === "youtube" ? styles.youtube : styles.instagram
              }
              aria-hidden="true"
            />
            {social.label}
          </SmartLink>
        ))}
      </div>

      <footer className={styles.footer}>
        <span className={styles.brand}>{brand}</span>
        <span className={styles.copyright}>{copyright}</span>
      </footer>
    </div>
  );
}
