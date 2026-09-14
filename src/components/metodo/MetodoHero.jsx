import CtaButton from "@/components/sales/CtaButton";
import CompareSlider from "./CompareSlider";
import ModuleArt from "./ModuleArt";
import { CHECKOUT_URL, hero } from "@/config/metodoSurfe";
import styles from "./MetodoHero.module.css";

/**
 * Secao 2. Unico h1 da pagina. Texto a esquerda, visual a direita.
 *
 * O visual e o comparador antes/depois quando `hero.comparacao` existe.
 * Sem ele, cai na arte unica (`hero.arte`), como antes.
 */
export default function MetodoHero() {
  const contain = hero.arteAjuste === "contain";

  return (
    <section className={styles.hero} id="topo">
      <div className={styles.inner}>
        <div className={styles.text}>
          {/* eyebrow e identidade, nao etiqueta: mesmo tracking do "Surfe a" do hub */}
          <span className={styles.eyebrow}>{hero.eyebrow}</span>

          <h1 className={styles.title}>{hero.titulo}</h1>
          <p className={styles.subtitle}>{hero.subtitulo}</p>

          <div className={styles.cta}>
            <CtaButton block href={CHECKOUT_URL} note={hero.microcopia}>
              {hero.cta}
            </CtaButton>
          </div>
        </div>

        <div className={styles.visual}>
          {hero.comparacao ? (
            <CompareSlider
              antes={hero.comparacao.antes}
              depois={hero.comparacao.depois}
              rotuloAntes={hero.comparacao.rotuloAntes}
              rotuloDepois={hero.comparacao.rotuloDepois}
              espelharDepois={hero.comparacao.espelharDepois}
              width={960}
              height={1200}
              className={styles.comparador}
            />
          ) : (
            <ModuleArt
              src={hero.arte}
              alt="Arte de abertura do Método S.U.R.F.E"
              label="Arte de abertura"
              width={contain ? 1536 : 960}
              height={contain ? 1024 : 1200}
              priority
              size="lg"
              fit={hero.arteAjuste}
              className={`${styles.art} ${contain ? styles.artContain : ""}`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
