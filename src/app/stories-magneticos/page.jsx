import BarrasSecoes from "@/components/storiesMagneticos/BarrasSecoes";
import Conta from "@/components/storiesMagneticos/Conta";
import CupomModal from "@/components/storiesMagneticos/CupomModal";
import Ima from "@/components/storiesMagneticos/Ima";
import Revelar from "@/components/storiesMagneticos/Revelar";
import StoryCard from "@/components/storiesMagneticos/StoryCard";
import {
  CHECKOUT_URL,
  PRECO,
  PRECO_ANIMACAO_DE,
  PRECO_VALOR,
  autoridade,
  entregas,
  hero,
  pacote,
  perfil,
  reforco,
  rodape,
  secoes,
  slides,
  storiesFrase,
  topo,
} from "@/config/storiesMagneticos";
import styles from "./page.module.css";

export const metadata = {
  title: "Stories Magnéticos · Thiago Espíndola",
  description:
    "Alguém vende pros seus seguidores. Melhor que seja você. Engajar, interagir e vender nos Stories, passo a passo.",
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

/** Titulo em linhas que sobem de dentro de uma "mascara". */
function Linhas({ linhas }) {
  return linhas.map((l) => (
    <span key={l} className={styles.linha}>
      <span>{l}</span>
    </span>
  ));
}

/** atraso da entrada no scroll, para itens entrarem em fila */
const atraso = (i) => ({ "--atraso": `${i * 90}ms` });

const REPETICOES = 6;
const FAIXA = ["ENGAJAR", "INTERAGIR", "VENDER"];

/**
 * Rota /stories-magneticos. Landing provisoria em preto e branco, de
 * proposito fora da identidade roxa da marca. A pagina se comporta
 * como um Story: as barras do topo sao as secoes. Bastante movimento;
 * com "reduzir movimento" fica tudo parado e completo.
 */
export default function StoriesMagneticosPage() {
  const ano = new Date().getFullYear();

  return (
    <div className={styles.page} id="stories-magneticos">
      <Revelar raiz="#stories-magneticos" />
      <CupomModal />

      {/* 1 · barra do topo: o aviso corre sem parar */}
      <div className={styles.topo} role="note" aria-label={topo}>
        <div className={styles.topoFaixa} aria-hidden="true">
          {[0, 1].map((metade) => (
            <span key={metade} className={styles.topoGrupo}>
              {Array.from({ length: REPETICOES }, (_, i) => (
                <span key={i} className={styles.topoItem}>
                  {topo}
                  <span className={styles.topoEstrela}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <BarrasSecoes secoes={secoes} />

      <main>
        {/* 2 · hero */}
        <section id="inicio" className={styles.hero}>
          <div className={styles.perfil}>
            <div className={styles.perfilConta}>
              {/* anel de Story girando, com o ima no meio */}
              <span className={styles.avatar} aria-hidden="true">
                <span className={styles.avatarMiolo}>
                  <Ima size={18} className={styles.imaAvatar} />
                </span>
              </span>
              <span className={styles.usuario}>{perfil.usuario}</span>
              <span className={styles.quando}>{perfil.quando}</span>
            </div>
            <a className={styles.pill} href={CHECKOUT_URL}>
              {perfil.cta}
            </a>
          </div>

          <div className={styles.heroConteudo}>
            <div className={styles.heroTexto}>
              <h1 className={`${styles.heroTitulo} ${styles.heroTituloEntra}`}>
                <Linhas linhas={hero.titulo} />
              </h1>
              <p className={styles.heroLead}>{hero.lead}</p>
              <p className={styles.heroSub}>{hero.subtitulo}</p>
              <div className={styles.heroAcoes}>
                <Cta>{hero.cta}</Cta>
                <span className={styles.assinatura}>{hero.assinatura}</span>
              </div>
            </div>

            <div className={styles.heroStory}>
              <StoryCard slides={slides} ctaHref={CHECKOUT_URL} ctaRotulo={hero.cta} />
            </div>
          </div>
        </section>

        {/* 3 · pacote */}
        <section id="pacote" className={`${styles.secao} ${styles.escura}`}>
          <div className={styles.caixa}>
            <h2 className={`${styles.titulo} ${styles.mascara}`} data-revelar="">
              <Linhas linhas={pacote.titulo} />
            </h2>

            <div className={styles.recibo} data-revelar="">
              <ol className={styles.itens}>
                {entregas.map((item, i) => (
                  <li key={item.nome} className={styles.item} data-revelar="" style={atraso(i % 4)}>
                    <span className={styles.anel} aria-hidden="true">
                      <Ima size={20} className={styles.imaItem} />
                    </span>
                    <div>
                      <h3 className={styles.itemNome}>{item.nome}</h3>
                      <p className={styles.itemDesc}>{item.descricao}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className={styles.precoBloco} data-revelar="">
                <p className={styles.precoRotulo}>{pacote.rotuloPreco}</p>
                {/* o preco cai de PRECO_ANIMACAO_DE ate o valor real */}
                <p className={styles.preco} aria-label={PRECO}>
                  <span className={styles.precoMoeda} aria-hidden="true">
                    R$
                  </span>
                  <span aria-hidden="true">
                    <Conta
                      className={styles.precoValor}
                      de={PRECO_ANIMACAO_DE}
                      ate={PRECO_VALOR}
                      casas={2}
                      duracao={2000}
                    />
                  </span>
                </p>
                <Cta>{pacote.cta}</Cta>
                <p className={styles.micro}>{pacote.microcopia}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · 3 Stories com a frase em sequencia */}
        <section id="stories" className={styles.secao}>
          <div className={styles.caixa}>
            <h2 className={`${styles.titulo} ${styles.mascara}`} data-revelar="">
              <Linhas linhas={storiesFrase.titulo} />
            </h2>
            <ol
              className={styles.stories}
              aria-label={storiesFrase.cards.map((c) => c.frase).join(" ")}
            >
              {storiesFrase.cards.map((c, i) => (
                <li
                  key={c.frase}
                  className={styles.story}
                  data-revelar=""
                  style={{ ...atraso(i), "--i": i }}
                  aria-hidden="true"
                >
                  <img
                    className={styles.storyFoto}
                    src={c.foto}
                    alt=""
                    width={720}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.storySombra} />
                  {/* barras: as anteriores cheias, a deste card enchendo */}
                  <span className={styles.storyBarras}>
                    {storiesFrase.cards.map((_, k) => (
                      <span
                        key={k}
                        className={`${styles.storyBarra} ${k < i ? styles.storyBarraCheia : ""} ${k === i ? styles.storyBarraAtual : ""}`}
                      />
                    ))}
                  </span>
                  <span className={styles.storyConta}>
                    <span className={styles.storyAvatar}>
                      <Ima size={12} />
                    </span>
                    storiesmagneticos
                  </span>
                  <p className={styles.storyFrase}>
                    <span>{c.frase}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5 · reforco */}
        <section id="oferta" className={`${styles.secao} ${styles.escura} ${styles.reforco}`}>
          <div className={styles.faixa} aria-hidden="true">
            <div className={styles.faixaTrilho}>
              {[0, 1].map((metade) => (
                <span key={metade} className={styles.faixaGrupo}>
                  {[...FAIXA, ...FAIXA].map((p, i) => (
                    <span key={i} className={styles.faixaItem}>
                      {p}
                      <Ima size={28} className={styles.imaFaixa} polo="#0d0d0d" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.caixa}>
            <h2 className={`${styles.reforcoTitulo} ${styles.mascara}`} data-revelar="">
              <Linhas linhas={reforco.titulo} />
            </h2>
            {reforco.paragrafos.map((p, i) => (
              <p
                key={p.slice(0, 24)}
                className={`${styles.reforcoTexto} ${i === 1 ? styles.reforcoResumo : ""}`}
                data-revelar=""
                style={atraso(i + 1)}
              >
                {p}
              </p>
            ))}
            <div data-revelar="" style={atraso(3)}>
              <Cta claro>{reforco.cta}</Cta>
            </div>
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
              data-revelar=""
            />
            <div className={styles.autoridadeTexto}>
              <h2 className={`${styles.titulo} ${styles.mascara}`} data-revelar="">
                <Linhas linhas={[autoridade.titulo]} />
              </h2>
              <p className={styles.autoridadeNome} data-revelar="">
                {autoridade.nome} <span aria-hidden="true">·</span>{" "}
                <a className={styles.autoridadeArroba} href={autoridade.instagram.href}>
                  {autoridade.instagram.rotulo}
                </a>
              </p>
              {autoridade.paragrafos.map((p, i) => (
                <p
                  key={p.slice(0, 24)}
                  className={`${styles.paragrafo} ${i === 0 ? styles.paragrafoAbre : ""}`}
                  data-revelar=""
                  style={atraso(i + 1)}
                >
                  {p}
                </p>
              ))}
              <div className={styles.stat} data-revelar="">
                <p className={styles.statLinha}>
                  <span className={styles.statValor}>
                    <Conta de={0} ate={autoridade.stat.ate} duracao={1800} /> {autoridade.stat.sufixo}
                  </span>
                  <span className={styles.statRotulo}>{autoridade.stat.rotulo}</span>
                </p>
                <p className={styles.statFechamento}>{autoridade.fechamento}</p>
              </div>
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
