import Icon from "@/components/sales/Icon";
import Conta from "@/components/metodo50k/Conta";
import CupomModal from "@/components/metodo50k/CupomModal";
import Revelar from "@/components/metodo50k/Revelar";
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
} from "@/config/metodo50k";
import styles from "./page.module.css";

export const metadata = {
  title: "Método 50K · Thiago Espíndola",
  description:
    "Ideias são infinitas. Com método. O passo a passo pra gravar sem travar, editar sem perder tempo e nunca mais abrir o Instagram indeciso.",
  // Provisoria e com placeholders: fora do Google ate a versao final.
  robots: { index: false, follow: false },
};

/** Botao de compra desta pagina. Todos vao para CHECKOUT_URL. */
function Cta({ children }) {
  return (
    <a className={styles.cta} href={CHECKOUT_URL}>
      <span className={styles.ctaTexto}>{children}</span>
    </a>
  );
}

/** atraso da entrada no scroll, para itens entrarem em fila */
const atraso = (i) => ({ "--atraso": `${i * 110}ms` });

/** quantas vezes o aviso se repete na faixa que corre no topo */
const REPETICOES = 6;

/**
 * Rota /metodo50k (antes /trilha50k). Landing provisoria, pagina
 * autossuficiente: nao usa o tema nem os componentes de secao das
 * outras paginas de venda, so o conjunto de icones.
 * Bastante movimento; com "reduzir movimento" fica tudo parado e completo.
 */
export default function Metodo50kPage() {
  const ano = new Date().getFullYear();
  const valorPreco = Number(PRECO.replace(/\D/g, ""));
  const [primeira, ...demais] = provaSocial.imagens;

  return (
    <div className={styles.page} id="metodo50k">
      <Revelar raiz="#metodo50k" />
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
              <p className={styles.heroRotulo}>{hero.rotulo}</p>
              <h1 className={styles.heroTitulo}>
                <span className={styles.heroLinha}>{hero.titulo.linha1}</span>
                <span className={styles.heroLinha2}>
                  {hero.titulo.inicio}{" "}
                  <span className={styles.heroDestaque}>{hero.titulo.destaque}</span>
                </span>
              </h1>
              <p className={styles.heroSub}>
                {hero.subtitulo.inicio}{" "}
                <strong className={styles.heroSubDestaque}>{hero.subtitulo.destaque}</strong>
                {hero.subtitulo.fim}
              </p>
              <p className={styles.heroPreco}>{hero.preco}</p>
              <p className={styles.heroPublico}>{hero.publico}</p>
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

        {/* 4 · o que voce recebe */}
        <section className={styles.secao} id="pacote">
          <div className={styles.caixa}>
            <h2 className={styles.titulo} data-revelar="">
              {pacote.titulo}
            </h2>

            <div className={styles.recibo} data-revelar="">
              <ul className={styles.itens}>
                {entregas.map((item, i) => (
                  <li
                    key={item.nome}
                    className={styles.item}
                    data-revelar=""
                    style={atraso(i + 1)}
                  >
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

              <div className={styles.reciboPreco} data-revelar="">
                <p className={styles.precoRotulo}>{pacote.rotuloPreco}</p>
                {/* "R$" menor que o numero; o numero cai de 497 ate o preco */}
                <p className={styles.preco} aria-label={PRECO}>
                  <span className={styles.precoMoeda} aria-hidden="true">
                    R$
                  </span>
                  <span aria-hidden="true">
                    <Conta className={styles.precoValor} de={497} ate={valorPreco} />
                  </span>
                </p>
                <div className={styles.ctaBloco}>
                  <Cta>{pacote.cta}</Cta>
                  <p className={`${styles.micro} ${styles.microNoEscuro}`}>
                    {pacote.microcopia}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 · prova: imagens do proprio Thiago */}
        <section className={styles.secao}>
          <div className={styles.caixa}>
            <h2 className={styles.titulo} data-revelar="">
              {provaSocial.titulo}
            </h2>
            <div className={styles.galeria}>
              <figure className={`${styles.prova} ${styles.provaPerfil}`} data-revelar="">
                <div className={styles.provaMoldura}>
                  <img
                    src={primeira.src}
                    alt={primeira.alt}
                    width={primeira.largura}
                    height={primeira.altura}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className={styles.provaLegenda}>{primeira.legenda}</figcaption>
              </figure>
              {demais.map((img, i) => (
                <figure
                  key={img.src}
                  className={styles.prova}
                  data-revelar=""
                  style={atraso(i + 1)}
                >
                  <div className={styles.provaMoldura}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.largura}
                      height={img.altura}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className={styles.provaLegenda}>{img.legenda}</figcaption>
                </figure>
              ))}
            </div>
            <p className={styles.disclaimer}>{provaSocial.disclaimer}</p>
          </div>
        </section>

        {/* 6 · autoridade */}
        <section className={styles.secao}>
          <div className={styles.caixa}>
            <div className={styles.autoridade}>
              {/* parte 1: foto na esquerda, titulo e a historia na direita */}
              <div className={styles.autoridadeTopo}>
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
                  <h2 className={styles.autoridadeTitulo} data-revelar="">
                    {autoridade.titulo}
                  </h2>
                  {/* cada paragrafo entra sozinho, conforme a leitura desce */}
                  {autoridade.paragrafos.slice(0, autoridade.destaque).map((p, i) => (
                    <p
                      key={p.slice(0, 24)}
                      className={`${styles.paragrafo} ${i === 0 ? styles.paragrafoAbre : ""}`}
                      data-revelar=""
                      style={atraso(i)}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* parte 2: do resultado em diante, centralizado */}
              <div className={styles.autoridadeResto}>
                {autoridade.paragrafos.slice(autoridade.destaque).map((p, i) => (
                  <p
                    key={p.slice(0, 24)}
                    className={`${styles.paragrafo} ${i === 0 ? styles.paragrafoDestaque : ""}`}
                    data-revelar=""
                  >
                    {p}
                  </p>
                ))}
                <img
                  className={styles.print}
                  src={autoridade.print.src}
                  alt={autoridade.print.alt}
                  width={autoridade.print.largura}
                  height={autoridade.print.altura}
                  loading="lazy"
                  decoding="async"
                  data-revelar=""
                />
                <p className={styles.paragrafo} data-revelar="">
                  {autoridade.fechamento}
                </p>
                <p className={styles.stat} data-revelar="">
                  <span className={styles.statValor}>
                    {autoridade.stat.de} <span className={styles.statSeta}>→</span>{" "}
                    <Conta de={autoridade.stat.de} ate={autoridade.stat.ate} duracao={2000} />{" "}
                    {autoridade.stat.sufixo}
                  </span>
                  <span className={styles.statRotulo}>{autoridade.stat.rotulo}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 · fechamento */}
        <section className={`${styles.secao} ${styles.fechamento}`}>
          <div className={styles.caixa}>
            <div className={styles.reforco}>
              <p className={styles.reforcoAbertura} data-revelar="">
                {reforco.abertura}
              </p>
              <h2 className={styles.reforcoTitulo} data-revelar="" style={atraso(1)}>
                {reforco.titulo}
              </h2>
              <p className={styles.reforcoTexto} data-revelar="" style={atraso(2)}>
                {reforco.texto}
              </p>
              <div className={styles.ctaBloco} data-revelar="" style={atraso(3)}>
                <Cta>{reforco.cta}</Cta>
                <p className={styles.micro}>{reforco.microcopia}</p>
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
