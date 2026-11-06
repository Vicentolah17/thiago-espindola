import Icon from "@/components/sales/Icon";
import CupomModal from "@/components/trilha50k/CupomModal";
import {
  CHECKOUT_URL,
  PRECO,
  autoridade,
  entregas,
  header,
  hero,
  pacote,
  provaSocial,
  reforco,
  rodape,
  topo,
} from "@/config/trilha50k";
import styles from "./page.module.css";

export const metadata = {
  title: "Trilha 50K · Thiago Espíndola",
  description:
    "Trilha 50K, Stories Magnéticos e bônus: o caminho para crescer no Instagram, numa oferta só.",
  // Provisoria e com placeholders: fora do Google ate a versao final.
  robots: { index: false, follow: false },
};

/** Botao de compra desta pagina. Todos vao para CHECKOUT_URL. */
function Cta({ children, escuro = false }) {
  return (
    <a
      className={`${styles.cta} ${escuro ? styles.ctaNoEscuro : ""}`}
      href={CHECKOUT_URL}
    >
      {children}
    </a>
  );
}

/**
 * Rota /trilha50k. Landing provisoria, pagina autossuficiente: nao
 * usa o tema nem os componentes de secao das outras paginas de venda,
 * so o conjunto de icones.
 */
export default function Trilha50kPage() {
  const ano = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <CupomModal />

      {/* 1 · barra do topo */}
      <p className={styles.topo}>{topo}</p>

      {/* 2 · header */}
      <header className={styles.header}>
        <div className={styles.caixa}>
          <a className={styles.marca} href="/">
            <img
              className={styles.marcaLogo}
              src="/logo_surfe.webp"
              alt=""
              width={1536}
              height={1024}
            />
            <span className={styles.marcaNome}>{header.marca}</span>
          </a>
          <ul className={styles.badges} aria-label="O que está incluso">
            {header.badges.map((b) => (
              <li key={b.rotulo} className={styles.badge}>
                <span className={styles.badgeRotulo}>{b.rotulo}</span>
                <span className={styles.badgeNome}>{b.nome}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main>
        {/* 3 · hero */}
        <section className={`${styles.secao} ${styles.hero}`}>
          <div className={styles.caixa}>
            <div className={styles.heroTexto}>
              <h1 className={styles.heroTitulo}>
                {hero.titulo.inicio}{" "}
                <span className={styles.heroDestaque}>{hero.titulo.destaque}</span>
                <span className={styles.heroFechamento}>{hero.titulo.fechamento}</span>
              </h1>
              <p className={styles.heroSub}>
                {hero.subtitulo.inicio}{" "}
                <strong className={styles.heroSubDestaque}>{hero.subtitulo.destaque}</strong>{" "}
                {hero.subtitulo.fim}
              </p>
              <ul className={styles.bullets}>
                {hero.bullets.map((b) => (
                  <li key={b} className={styles.bullet}>
                    <span className={styles.check} aria-hidden="true">
                      <Icon name="check" size={14} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className={styles.ctaBloco}>
                <Cta>{hero.cta}</Cta>
                <p className={styles.micro}>{hero.microcopia}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · pacote */}
        <section className={styles.secao} id="pacote">
          <div className={styles.caixa}>
            <h2 className={styles.titulo}>
              {entregas.length} entregas por {PRECO}
            </h2>

            <div className={styles.recibo}>
              <ul className={styles.itens}>
                {entregas.map((item) => (
                  <li key={item.nome} className={styles.item}>
                    <span className={styles.itemIcone} aria-hidden="true">
                      <Icon name={item.icone} size={20} />
                    </span>
                    <div className={styles.itemTexto}>
                      <h3 className={styles.itemNome}>{item.nome}</h3>
                      <p className={styles.itemDesc}>{item.descricao}</p>
                    </div>
                    <span className={styles.itemCheck} aria-label="Incluso">
                      <Icon name="check" size={16} />
                    </span>
                  </li>
                ))}
              </ul>

              <div className={styles.reciboPreco}>
                <p className={styles.precoRotulo}>O pacote completo por</p>
                {/* "R$" menor que o numero, como no preco do Molina */}
                <p className={styles.preco} aria-label={PRECO}>
                  <span className={styles.precoMoeda} aria-hidden="true">
                    R$
                  </span>
                  <span className={styles.precoValor} aria-hidden="true">
                    {PRECO.replace(/^R\$\s*/, "")}
                  </span>
                </p>
                <div className={styles.ctaBloco}>
                  <Cta escuro>{pacote.cta}</Cta>
                  <p className={`${styles.micro} ${styles.microNoEscuro}`}>
                    {pacote.microcopia}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 · prova social (PLACEHOLDER) */}
        <section className={styles.secao}>
          <div className={styles.caixa}>
            <h2 className={styles.titulo}>{provaSocial.titulo}</h2>
            <ul className={styles.depoimentos}>
              {provaSocial.depoimentos.map((d, i) => (
                <li key={i} className={styles.depoimento}>
                  <p className={styles.depoimentoTexto}>{d.texto}</p>
                  <p className={styles.depoimentoAutor}>{d.autor}</p>
                </li>
              ))}
            </ul>
            <p className={styles.disclaimer}>{provaSocial.disclaimer}</p>
          </div>
        </section>

        {/* 6 · reforco */}
        <section className={styles.secao}>
          <div className={styles.caixa}>
            <div className={styles.reforco}>
              <h2 className={styles.reforcoTitulo}>{reforco.titulo}</h2>
              <p className={styles.reforcoTexto}>{reforco.texto}</p>
              <div className={styles.ctaBloco}>
                <Cta>{reforco.cta}</Cta>
                <p className={styles.micro}>{reforco.microcopia}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 · autoridade */}
        <section className={styles.secao}>
          <div className={styles.caixa}>
            <div className={styles.autoridade}>
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
                <p className={styles.autoridadeNome}>{autoridade.nome}</p>
                {autoridade.paragrafos.map((p) => (
                  <p key={p.slice(0, 20)} className={styles.paragrafo}>
                    {p}
                  </p>
                ))}
                <p className={styles.stat}>
                  <span className={styles.statValor}>{autoridade.stat.valor}</span>
                  <span className={styles.statRotulo}>{autoridade.stat.rotulo}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8 · rodape */}
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
