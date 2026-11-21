import Conta from "@/components/gta/Conta";
import Grao from "@/components/gta/Grao";
import Imagem from "@/components/gta/Imagem";
import Palavras, { contarPalavras } from "@/components/gta/Palavras";
import Revelar from "@/components/gta/Revelar";
import {
  CHECKOUT_URL,
  NOME_PRODUTO,
  PRECO,
  PRECO_ANIMACAO,
  autoridade,
  dor,
  hero,
  oferta,
  praQuem,
  rodape,
  saber,
  seo,
  topo,
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
          <span className={styles.marca}>{NOME_PRODUTO}</span>
          <span className={styles.assinatura}>{topo.assinatura}</span>
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
        <div className={styles.grade}>
          <span className={styles.rotulo} data-revelar="">
            {dor.rotulo}
          </span>
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
            <span className={styles.rotulo}>{saber.rotulo}</span>
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

      {/* autoridade */}
      <section className={styles.autoridade}>
        <div className={styles.autoridadeGrade}>
          <div className={styles.fotoMoldura} data-revelar="">
            <Imagem
              src={autoridade.foto.src}
              alt={autoridade.foto.alt}
              rotulo={autoridade.foto.rotulo}
              tom="preto"
            />
            <span className={styles.fotoLinha} aria-hidden="true" />
          </div>
          <div className={styles.autoridadeTexto}>
            <span className={styles.rotulo} data-revelar="">
              {autoridade.rotulo}
            </span>
            <h2 className={styles.autoridadeNome} data-revelar="" style={atraso(1)}>
              {autoridade.nome}
            </h2>
            <p className={styles.autoridadeDescricao} data-revelar="" style={atraso(2)}>
              {autoridade.texto}
            </p>
            <img
              className={styles.perfil}
              src={autoridade.perfil.src}
              alt={autoridade.perfil.alt}
              width={autoridade.perfil.largura}
              height={autoridade.perfil.altura}
              loading="lazy"
              decoding="async"
              data-revelar=""
              style={atraso(3)}
            />
          </div>
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
          <span>{rodape.assinatura}</span>
        </div>
      </footer>
    </div>
  );
}
