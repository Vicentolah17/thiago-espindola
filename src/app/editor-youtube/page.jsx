import Conta from "@/components/gta/Conta";
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
} from "@/config/editorYoutube";
import styles from "./page.module.css";

export const metadata = {
  title: seo.title,
  description: seo.description,
  icons: { icon: "/editor-youtube/icone.svg" },
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

/** Botao de compra: rosa com a sombra dourada deslocada. */
function Cta({ children }) {
  return (
    <a className={styles.cta} href={CHECKOUT_URL}>
      <span className={styles.ctaTexto}>{children}</span>
    </a>
  );
}

/** atraso da entrada no scroll, para itens entrarem em fila */
const atraso = (i) => ({ "--atraso": `${i * 110}ms` });

/**
 * Pagina B · YouTube R$97 · rebrand GTA ("premium preto solido").
 * Porte fiel do Cloud Design, com animacao em cima, no ritmo de
 * abertura de filme: os arcos se desenham, o titulo sobe palavra por
 * palavra, a linha neon se estica, as linhas douradas se tracam no
 * scroll e o preco cai ate R$97. Com "reduzir movimento" tudo fica
 * parado e completo.
 */
export default function EditorYoutubePage() {
  const nInicio = contarPalavras(hero.titulo.inicio);
  const nDestaque = contarPalavras(hero.titulo.destaque);
  // "cara de canal grande" + ", usando IA a teu favor.": a virgula do
  // fim precisa colar em "grande"
  const palavrasDestaque = hero.titulo.destaque.split(" ");
  const ultimaDestaque = palavrasDestaque.pop();
  const destaqueSemUltima = palavrasDestaque.join(" ");
  const pontuacaoFim = hero.titulo.fim.match(/^[,.;:!?]*/)[0];
  const restoFim = hero.titulo.fim.slice(pontuacaoFim.length).trim();

  return (
    <div className={styles.page} id="editor-youtube">
      <Revelar raiz="#editor-youtube" />
      <Grao opacidade={0.07} />

      {/* hero */}
      <header className={styles.hero}>
        <div className={styles.brilho} aria-hidden="true" />
        <div className={styles.arcos} aria-hidden="true">
          <span className={styles.arco1} />
          <span className={styles.arco2} />
          <span className={styles.arco3} />
        </div>

        <div className={styles.barra}>
          {/* so o nome do produto: a marca e neutra */}
          <span className={styles.marca}>{NOME_PRODUTO}</span>
        </div>

        <div className={styles.heroTexto}>
          <span className={`${styles.rotuloDourado} ${styles.heroRotulo}`}>{hero.rotulo}</span>
          <h1 className={styles.heroTitulo}>
            <Palavras texto={hero.titulo.inicio} className={styles.palavraHero} />{" "}
            <span className={styles.rosa}>
              <Palavras
                texto={destaqueSemUltima}
                inicio={nInicio}
                className={styles.palavraHero}
              />
            </span>{" "}
            {/* o fim comeca com virgula: ela fica grudada na ultima palavra
                rosa, sem quebrar linha entre as duas */}
            <span className={styles.palavraHero} style={{ "--i": nInicio + nDestaque - 1 }}>
              <span className={styles.rosa}>{ultimaDestaque}</span>
              {pontuacaoFim}
            </span>{" "}
            <Palavras texto={restoFim} inicio={nInicio + nDestaque} className={styles.palavraHero} />
          </h1>
          <div className={styles.linhaNeon} aria-hidden="true" />
          <p className={styles.heroSub}>{hero.subtitulo}</p>
          <div className={styles.heroAcao}>
            <Cta>{hero.cta}</Cta>
          </div>
        </div>
      </header>

      {/* dor */}
      <section className={styles.dor}>
        <div className={styles.centro}>
          <p className={`${styles.dorTexto} ${styles.porPalavra}`} data-revelar="">
            <Palavras texto={dor.texto} className={styles.palavra} />{" "}
            <span className={styles.apagado}>
              <Palavras
                texto={dor.apagado}
                inicio={contarPalavras(dor.texto) + 2}
                className={styles.palavra}
              />
            </span>
          </p>
        </div>
      </section>

      {/* o que voce vai saber */}
      <section className={styles.saber}>
        <div className={styles.grade}>
          <div className={styles.saberCabeca} data-revelar="">
            <h2 className={styles.saberTitulo}>{saber.titulo}</h2>
          </div>
          <ol className={styles.lista}>
            {saber.itens.map((item, i) => (
              <li key={item} className={styles.listaItem} data-revelar="" style={atraso(i)}>
                <span className={styles.listaNumero}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.listaTexto}>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* pra quem e */}
      <section className={styles.praQuem}>
        <div className={styles.praQuemCaixa}>
          <span className={styles.praQuemTraco} data-revelar="" aria-hidden="true" />
          <p className={`${styles.praQuemTexto} ${styles.porPalavra}`} data-revelar="">
            <Palavras texto={praQuem} className={styles.palavra} />
          </p>
        </div>
      </section>

      {/* referencias: criadores citados como prova (1 a 3 cards) */}
      <section className={styles.referencias}>
        <div className={styles.grade}>
          <div className={styles.referenciasCabeca} data-revelar="">
            <h2 className={styles.referenciasTitulo}>{referencias.titulo}</h2>
          </div>
          <ul className={styles.referenciasLista}>
            {referencias.itens.map((r, i) => (
              <li key={r.nome} className={styles.referencia} data-revelar="" style={atraso(i + 1)}>
                <img
                  className={styles.referenciaPrint}
                  src={r.print.src}
                  alt={r.print.alt}
                  width={r.print.largura}
                  height={r.print.altura}
                  loading="lazy"
                  decoding="async"
                />
                <p className={styles.referenciaNome}>
                  {r.nome} <span className={styles.referenciaHandle}>{r.handle}</span>
                </p>
                <p className={styles.referenciaProva}>{r.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* oferta: as cantoneiras fecham no card e o preco cai ate R$97 */}
      <section id="oferta" className={styles.oferta}>
        <div className={styles.ofertaCard} data-revelar="">
          <span className={`${styles.canto} ${styles.cantoSE}`} aria-hidden="true" />
          <span className={`${styles.canto} ${styles.cantoSD}`} aria-hidden="true" />
          <span className={`${styles.canto} ${styles.cantoIE}`} aria-hidden="true" />
          <span className={`${styles.canto} ${styles.cantoID}`} aria-hidden="true" />
          <span className={styles.rotuloDourado}>{NOME_PRODUTO}</span>
          <p className={styles.ofertaTexto}>{oferta.texto}</p>
          <div className={styles.preco} aria-label={PRECO}>
            <span aria-hidden="true">
              R$
              <Conta de={PRECO_ANIMACAO.de} ate={PRECO_ANIMACAO.ate} duracao={2200} />
            </span>
          </div>
          <Cta>{oferta.cta}</Cta>
          <div className={styles.garantia}>
            <span className={styles.garantiaLosango} aria-hidden="true" />
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
