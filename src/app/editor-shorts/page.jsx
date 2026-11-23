import Conta from "@/components/gta/Conta";
import Cronometro from "@/components/gta/Cronometro";
import Grao from "@/components/gta/Grao";
import Palavras, { contarPalavras } from "@/components/gta/Palavras";
import Revelar from "@/components/gta/Revelar";
import {
  CHECKOUT_URL,
  NOME_PRODUTO,
  PRECO,
  PRECO_ANIMACAO,
  dor,
  hero,
  oferta,
  praQuem,
  referencias,
  rodape,
  saber,
  seo,
} from "@/config/editorShorts";
import styles from "./page.module.css";

export const metadata = {
  title: seo.title,
  description: seo.description,
  icons: { icon: "/editor-shorts/icone.svg" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
  // Provisoria e com placeholders: fora do Google ate a versao final.
  robots: { index: false, follow: false },
};

/** Botao de compra: rosa com a sombra ciano deslocada. */
function Cta({ children }) {
  return (
    <a className={styles.cta} href={CHECKOUT_URL}>
      <span className={styles.ctaTexto}>{children}</span>
    </a>
  );
}

/** atraso da entrada no scroll, para itens entrarem em fila */
const atraso = (i) => ({ "--atraso": `${i * 90}ms` });

/**
 * Pagina A · Shorts R$47 · rebrand GTA ("Miami neon").
 * Porte fiel do Cloud Design, com animacao em cima: o titulo entra
 * palavra por palavra e o destaque acende como letreiro neon, o relogio
 * corre ate 00:03, as secoes entram no scroll e o preco cai ate R$47.
 * Com "reduzir movimento" tudo fica parado e completo.
 */
export default function EditorShortsPage() {
  const nInicio = contarPalavras(hero.titulo.inicio);

  return (
    <div className={styles.page} id="editor-shorts">
      <Revelar raiz="#editor-shorts" />
      <Grao opacidade={0.13} />

      {/* hero */}
      <header className={styles.hero}>
        <div className={styles.heroFundo} aria-hidden="true">
          <div className={styles.ceu} />
          <div className={styles.brilhoCiano} />
          <div className={styles.brilhoRosa} />
          <div className={styles.escurece} />
          <div className={styles.sol}>
            <div className={styles.solDisco} />
          </div>
          <div className={styles.horizonte}>
            <div className={styles.grade} />
            <div className={styles.gradeSombra} />
          </div>
        </div>

        <div className={styles.barra}>
          {/* so o nome do produto: a marca e neutra */}
          <span className={styles.marca}>{NOME_PRODUTO}</span>
        </div>

        <div className={styles.heroTexto}>
          <span className={`${styles.rotulo} ${styles.heroRotulo}`}>{hero.rotulo}</span>
          <h1 className={styles.heroTitulo}>
            <Palavras texto={hero.titulo.inicio} className={styles.palavraHero} />{" "}
            <span className={styles.neon}>
              <Palavras
                texto={hero.titulo.destaque}
                inicio={nInicio}
                className={styles.palavraHero}
              />
            </span>
          </h1>
          <p className={styles.heroSub}>{hero.subtitulo}</p>
          <div className={styles.heroAcao}>
            <Cta>{hero.cta}</Cta>
          </div>
        </div>

        {/* espaco para o sol e a grade aparecerem embaixo do texto */}
        <div className={styles.heroEspaco} />
      </header>

      {/* dor: o relogio corre ate 00:03 e o texto entra palavra por palavra */}
      <section className={styles.dor}>
        <div className={styles.caixaColuna}>
          <span className={`${styles.rotulo} ${styles.relogio}`}>
            <span className={styles.relogioPonto} aria-hidden="true" />
            <Cronometro ate={3} />
          </span>
          <p className={`${styles.dorTexto} ${styles.porPalavra}`} data-revelar="">
            <Palavras texto={dor.texto} className={styles.palavra} />{" "}
            <span className={styles.rosa}>
              <Palavras
                texto={dor.destaque}
                inicio={contarPalavras(dor.texto)}
                className={styles.palavra}
              />
            </span>
          </p>
        </div>
      </section>

      {/* o que voce vai saber */}
      <section className={styles.saber}>
        <div className={styles.saberGrade}>
          <h2 className={styles.saberTitulo} data-revelar="">
            {saber.titulo.inicio} <span className={styles.ciano}>{saber.titulo.destaque}</span>
          </h2>
          <ol className={styles.lista}>
            {saber.itens.map((item, i) => (
              <li key={item.texto} className={styles.listaItem} data-revelar="" style={atraso(i)}>
                <span className={`${styles.listaNumero} ${styles[item.cor]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.listaTexto}>{item.texto}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* pra quem e */}
      <section className={styles.praQuem}>
        <div className={styles.faixaBrilho} aria-hidden="true" />
        <div className={styles.caixa}>
          <p className={`${styles.praQuemTexto} ${styles.porPalavra}`} data-revelar="">
            <Palavras texto={praQuem} className={styles.palavra} />
          </p>
        </div>
      </section>

      {/* referencias: criadores citados como prova (1 a 3 cards) */}
      <section className={styles.referencias}>
        <div className={styles.referenciasCaixa}>
          <span className={styles.rotulo} data-revelar="">
            {referencias.rotulo}
          </span>
          <h2 className={styles.referenciasTitulo} data-revelar="" style={atraso(1)}>
            {referencias.titulo}
          </h2>
          <ul className={styles.referenciasLista}>
            {referencias.itens.map((r, i) => (
              <li key={r.nome} className={styles.referencia} data-revelar="" style={atraso(i + 2)}>
                <img
                  className={styles.referenciaPrint}
                  src={r.print.src}
                  alt={r.print.alt}
                  width={r.print.largura}
                  height={r.print.altura}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.referenciaTexto}>
                  <p className={styles.referenciaNome}>
                    {r.nome} <span className={styles.referenciaHandle}>{r.handle}</span>
                  </p>
                  <p className={styles.referenciaProva}>{r.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* oferta: o card "liga" como neon e o preco cai ate R$47 */}
      <section id="oferta" className={styles.oferta}>
        <div className={styles.ofertaCard} data-revelar="">
          <span className={`${styles.rotulo} ${styles.rotuloCiano}`}>{NOME_PRODUTO}</span>
          <p className={styles.ofertaTexto}>{oferta.texto}</p>
          <div className={styles.preco} aria-label={PRECO}>
            <span aria-hidden="true">
              R$
              <Conta de={PRECO_ANIMACAO.de} ate={PRECO_ANIMACAO.ate} duracao={2000} />
            </span>
          </div>
          <Cta>{oferta.cta}</Cta>
          <div className={styles.garantia}>
            <span className={styles.garantiaPonto} aria-hidden="true" />
            <span className={styles.garantiaTexto}>{oferta.garantia}</span>
          </div>
        </div>
      </section>

      <footer className={styles.rodape}>
        <div className={styles.rodapeLinha}>
          <span>{NOME_PRODUTO}</span>
          <span>
            © {new Date().getFullYear()} · {rodape.direitos}
          </span>
        </div>
      </footer>
    </div>
  );
}
