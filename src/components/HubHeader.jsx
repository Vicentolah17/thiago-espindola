import styles from "./HubHeader.module.css";

/**
 * Cabecalho do hub: marca + assinatura "Surfe a / Realidade" + tagline.
 *
 * O topo tem tres estados, nessa ordem de prioridade:
 * 1. logoSrc preenchido  -> a logo aparece solta, sem recorte
 * 2. avatarSrc preenchido -> foto dentro do circulo com anel degrade
 * 3. nenhum dos dois      -> o placeholder "retrato" do layout original
 *
 * A logo fica fora do circulo de proposito: o circulo corta a imagem
 * em quadrado (object-fit: cover), o que funciona pra retrato e destroi
 * ilustracao larga. Solta, ela mantem a proporcao que vier.
 *
 * @param {string}  eyebrow    Linha pequena acima do titulo.
 * @param {string}  title      Titulo em degrade.
 * @param {string}  tagline    Paragrafo de apoio.
 * @param {boolean} avatar     Mostra ou nao o bloco de marca do topo.
 * @param {string?} logoSrc    Caminho da logo (PNG com fundo transparente).
 * @param {string?} avatarSrc  Caminho da foto de retrato.
 */
export default function HubHeader({
  eyebrow,
  title,
  tagline,
  avatar = true,
  logoSrc = null,
  avatarSrc = null,
}) {
  return (
    <header className={styles.header}>
      {avatar &&
        (logoSrc ? (
          <img
            className={styles.logo}
            src={logoSrc}
            alt={`${eyebrow} ${title}`}
          />
        ) : (
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>
              {avatarSrc ? (
                <img
                  className={styles.avatarImage}
                  src={avatarSrc}
                  alt={title}
                />
              ) : (
                <span className={styles.avatarPlaceholder}>retrato</span>
              )}
            </div>
          </div>
        ))}

      <div className={styles.titleGroup}>
        <div className={styles.wordmark}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <span className={styles.title}>{title}</span>
        </div>
        <p className={styles.tagline}>{tagline}</p>
      </div>
    </header>
  );
}
