import BarrasSecoes from "@/components/storiesMagneticos/BarrasSecoes";
import CupomModal from "@/components/storiesMagneticos/CupomModal";
import StoryCard from "@/components/storiesMagneticos/StoryCard";
import {
  CHECKOUT_URL,
  PRECO,
  PRECO_VALOR,
  autoridade,
  entregas,
  hero,
  pacote,
  perfil,
  provaSocial,
  reforco,
  rodape,
  secoes,
  slides,
  topo,
} from "@/config/storiesMagneticos";
import styles from "./page.module.css";

export const metadata = {
  title: "Stories Magnéticos · Thiago Espíndola",
  description:
    "Mais gente assistindo seus Stories, mais vendas saindo deles. O passo a passo direto ao ponto.",
  // Provisoria e com placeholders: fora do Google ate a versao final.
  robots: { index: false, follow: false },
};

/** Botao de compra. Todos vao para CHECKOUT_URL. */
function Cta({ children, claro = false }) {
  return (
    <a className={`${styles.cta} ${claro ? styles.ctaClaro : ""}`} href={CHECKOUT_URL}>
      {children}
      <span className={styles.ctaSeta} aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

/**
 * Rota /stories-magneticos. Landing provisoria em preto e branco, de
 * proposito fora da identidade roxa da marca. A pagina se comporta
 * como um Story: as barras do topo sao as secoes.
 */
export default function StoriesMagneticosPage() {
  const ano = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <CupomModal />

      {/* 1 · barra do topo */}
      <p className={styles.topo}>{topo}</p>

      <BarrasSecoes secoes={secoes} />

      <main>
        {/* 2 · hero */}
        <section id="inicio" className={styles.hero}>
          <div className={styles.perfil}>
            <div className={styles.perfilConta}>
              <span className={styles.avatar} aria-hidden="true" />
              <span className={styles.usuario}>{perfil.usuario}</span>
              <span className={styles.quando}>{perfil.quando}</span>
            </div>
            <a className={styles.pill} href={CHECKOUT_URL}>
              {perfil.cta}
            </a>
          </div>

          <div className={styles.heroConteudo}>
            <div className={styles.heroTexto}>
              <h1 className={styles.heroTitulo}>
                {hero.titulo[0]}
                <br />
                {hero.titulo[1]}
              </h1>
              <p className={styles.heroSub}>{hero.subtitulo}</p>
              <div className={styles.heroAcoes}>
                <Cta>{hero.cta}</Cta>
                <span className={styles.assinatura}>{hero.assinatura}</span>
              </div>
            </div>

            <StoryCard
              slides={slides}
              ctaHref={CHECKOUT_URL}
              ctaRotulo={hero.cta}
            />
          </div>
        </section>

        {/* 3 · pacote */}
        <section id="pacote" className={`${styles.secao} ${styles.escura}`}>
          <div className={styles.caixa}>
            <h2 className={styles.titulo}>
              {entregas.length} entregas
              <br />
              por {PRECO}
            </h2>

            <div className={styles.recibo}>
              <ol className={styles.itens}>
                {entregas.map((item) => (
                  <li key={item.nome} className={styles.item}>
                    <span className={styles.anel} aria-hidden="true" />
                    <div>
                      <h3 className={styles.itemNome}>{item.nome}</h3>
                      <p className={styles.itemDesc}>{item.descricao}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className={styles.precoBloco}>
                <p className={styles.precoRotulo}>{pacote.rotuloPreco}</p>
                <p className={styles.preco} aria-label={PRECO}>
                  <span className={styles.precoMoeda} aria-hidden="true">
                    R$
                  </span>
                  <span className={styles.precoValor} aria-hidden="true">
                    {PRECO_VALOR}
                  </span>
                </p>
                <Cta>{pacote.cta}</Cta>
                <p className={styles.micro}>{pacote.microcopia}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · prova social (PLACEHOLDER) */}
        <section id="resultados" className={styles.secao}>
          <div className={styles.caixa}>
            <h2 className={styles.titulo}>{provaSocial.titulo}</h2>
            <ul className={styles.depoimentos}>
              {provaSocial.depoimentos.map((d, i) => (
                <li key={i} className={styles.depoimento}>
                  <span className={styles.depoimentoBarras} aria-hidden="true">
                    <span />
                    <span />
                  </span>
                  <p className={styles.depoimentoTexto}>{d.texto}</p>
                  <p className={styles.depoimentoAutor}>{d.autor}</p>
                </li>
              ))}
            </ul>
            <p className={styles.disclaimer}>{provaSocial.disclaimer}</p>
          </div>
        </section>

        {/* 5 · reforco */}
        <section id="oferta" className={`${styles.secao} ${styles.escura} ${styles.reforco}`}>
          <div className={styles.caixa}>
            <h2 className={styles.reforcoTitulo}>
              {reforco.titulo[0]}
              <br />
              {reforco.titulo[1]}
            </h2>
            <p className={styles.reforcoTexto}>{reforco.texto}</p>
            <Cta claro>{reforco.cta}</Cta>
          </div>
        </section>

        {/* 6 · autoridade */}
        <section id="expert" className={styles.secao}>
          <div className={`${styles.caixa} ${styles.autoridade}`}>
            <img
              className={styles.foto}
              src={autoridade.foto}
              alt={autoridade.fotoAlt}
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.autoridadeTexto}>
              <h2 className={styles.titulo}>{autoridade.titulo}</h2>
              <p className={styles.autoridadeNome}>
                {autoridade.nome}{" "}
                <a className={styles.autoridadeArroba} href={autoridade.instagram.href}>
                  {autoridade.instagram.rotulo}
                </a>
              </p>
              {autoridade.paragrafos.map((p) => (
                <p key={p.slice(0, 24)} className={styles.paragrafo}>
                  {p}
                </p>
              ))}
              <p className={styles.stat}>
                <span className={styles.statValor}>{autoridade.stat.valor}</span>
                <span className={styles.statRotulo}>{autoridade.stat.rotulo}</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 7 · rodape */}
      <footer className={styles.rodape}>
        <div className={styles.caixa}>
          <div className={styles.rodapeTopo}>
            <span className={styles.rodapeMarca}>{rodape.marca}</span>
            <nav className={styles.rodapeLinks} aria-label="Links legais">
              {rodape.links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <p className={styles.rodapeTexto}>
            © {ano} Thiago Espíndola. {rodape.direitos}.
          </p>
          <p className={styles.rodapeTexto}>{rodape.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
