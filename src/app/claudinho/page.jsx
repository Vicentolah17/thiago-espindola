import Icon from "@/components/sales/Icon";
import ChatHero from "@/components/claudinho/ChatHero";
import Contador from "@/components/claudinho/Contador";
import ContaPreco from "@/components/claudinho/ContaPreco";
import CupomModal from "@/components/claudinho/CupomModal";
import Revelar from "@/components/claudinho/Revelar";
import {
  CHECKOUT_URL,
  PRECO,
  PRECO_ANIMACAO_DE,
  PRECO_VALOR,
  autoridade,
  chat,
  entregas,
  fecho,
  hero,
  nav,
  pacote,
  preco,
  provaSocial,
  reforco,
  regra8020,
  rodape,
  topo,
} from "@/config/claudinho";
import styles from "./page.module.css";

export const metadata = {
  title: "Claudinho · Thiago Espíndola",
  description:
    "Você grava. O Claudinho assume a bronca. Passe alguns comandos e receba vídeo editado, roteiro profissional, copywriting e até site.",
  // Provisoria e com placeholders: fora do Google ate a versao final.
  robots: { index: false, follow: false },
};

/** Botao de compra. Todos vao para CHECKOUT_URL. */
function Cta({ children, grande = false }) {
  return (
    <a className={`${styles.cta} ${grande ? styles.ctaGrande : ""}`} href={CHECKOUT_URL}>
      {children}
    </a>
  );
}

/** atraso da entrada no scroll, para os itens de uma grade entrarem em fila */
const atraso = (i) => ({ "--atraso": `${i * 90}ms` });

/**
 * Rota /claudinho. Landing provisoria em preto e laranja, de proposito
 * fora da identidade roxa da marca. Bastante movimento, sempre a favor
 * da leitura; com "reduzir movimento" a pagina fica estatica e completa.
 */
export default function ClaudinhoPage() {
  const ano = new Date().getFullYear();

  return (
    <div className={styles.page} id="claudinho">
      <Revelar raiz="#claudinho" />
      <CupomModal />

      {/* 1 · barra do topo */}
      <p className={styles.topo}>
        <span className={styles.topoPonto} aria-hidden="true" />
        {topo}
      </p>

      <main>
        {/* 2 · hero */}
        <header className={styles.hero}>
          <span className={styles.heroBrilho} aria-hidden="true" />

          <nav className={styles.nav}>
            <span className={styles.marca}>
              {nav.marca}
              <span className={styles.cursor} aria-hidden="true">
                _
              </span>
            </span>
            <a className={styles.navCta} href={CHECKOUT_URL}>
              {nav.cta}
            </a>
          </nav>

          <div className={styles.heroTexto}>
            <p className={styles.heroRotulo}>{hero.rotulo}</p>
            <h1 className={styles.heroTitulo}>
              {hero.titulo.inicio}
              <br />
              <span className={styles.laranja}>{hero.titulo.destaque}</span>{" "}
              <span className={styles.heroFim}>{hero.titulo.fim}</span>
            </h1>
            <div className={styles.heroSub}>
              {hero.paragrafos.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <p className={styles.heroChamada}>{hero.chamada}</p>
            <div className={styles.heroAcoes}>
              <Cta grande>{hero.cta}</Cta>
              <span className={styles.heroMicro}>{hero.microcopia}</span>
            </div>
          </div>

          <ChatHero chat={chat} />
        </header>

        {/* 3 · pacote */}
        <section id="pacote" className={styles.secao}>
          <div className={styles.caixa}>
            <h2 className={styles.titulo} data-revelar="">
              {pacote.titulo}
            </h2>

            <ul className={styles.capacidades}>
              {entregas.map((e, i) => (
                <li
                  key={e.nome}
                  className={styles.capacidade}
                  data-revelar=""
                  style={atraso(i % 3)}
                >
                  <span className={styles.capIcone} aria-hidden="true">
                    <Icon name={e.icone} size={22} />
                  </span>
                  <h3 className={styles.capNome}>{e.nome}</h3>
                  {e.descricao && <p className={styles.capDesc}>{e.descricao}</p>}
                  {/* exemplo de pedido, digitado quando o card aparece */}
                  <p className={styles.comando} aria-label={`Exemplo de comando: ${e.comando}`}>
                    <span className={styles.comandoSeta} aria-hidden="true">
                      ›
                    </span>
                    {/* letra por letra, para "digitar" e ainda quebrar linha */}
                    <span className={styles.comandoTexto} aria-hidden="true">
                      {[...e.comando].map((letra, k) => (
                        <span key={k} style={{ "--k": k }}>
                          {letra}
                        </span>
                      ))}
                    </span>
                  </p>
                </li>
              ))}
            </ul>

            {/* a conta do 80/20, com o grafico */}
            <div className={`${styles.capacidade} ${styles.regra}`} data-revelar="">
              <div className={styles.regraTexto}>
                <h3 className={styles.capNome}>{regra8020.nome}</h3>
                <p className={styles.capDesc}>{regra8020.descricao}</p>
              </div>
              <div className={styles.grafico}>
                <div
                  className={styles.barra}
                  role="img"
                  aria-label="80% do trabalho é operacional e fica com o Claudinho; 20% é gravar e decidir, e fica com você."
                >
                  {regra8020.partes.map((p, i) => (
                    <span
                      key={p.rotulo}
                      className={`${styles.barraParte} ${i === 0 ? styles.barraMaquina : styles.barraVoce}`}
                      style={{ "--parte": `${p.valor}%` }}
                    />
                  ))}
                </div>
                <div className={styles.legenda} aria-hidden="true">
                  {regra8020.partes.map((p, i) => (
                    <span
                      key={p.rotulo}
                      className={`${styles.legendaItem} ${i === 0 ? styles.legendaMaquina : ""}`}
                      style={{ "--parte": `${p.valor}%` }}
                    >
                      <strong>{p.valor}%</strong>
                      <span>{p.rotulo}</span>
                      <em>→ {p.quem}</em>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · preco */}
        <section id="oferta" className={styles.secaoPreco}>
          <div className={styles.caixa}>
            <div className={styles.precoCard} data-revelar="">
              <p className={styles.precoComparacao}>{preco.comparacao}</p>
              <p className={styles.precoRotulo}>{preco.rotulo}</p>
              {/* o preco cai do valor do editor ate o do treinamento */}
              <p className={styles.preco} aria-label={PRECO}>
                <span className={styles.precoMoeda} aria-hidden="true">
                  R$
                </span>
                <span aria-hidden="true">
                  <ContaPreco
                    className={styles.precoValor}
                    de={PRECO_ANIMACAO_DE}
                    ate={PRECO_VALOR}
                  />
                </span>
              </p>
              <Cta grande>{preco.cta}</Cta>
              <p className={styles.micro}>{preco.microcopia}</p>
              <p className={styles.precoAviso}>{preco.aviso}</p>
            </div>
          </div>
        </section>

        {/* 5 · empresas que usam o Claude */}
        <section id="empresas" className={styles.secao}>
          <div className={styles.caixa}>
            <h2 className={`${styles.titulo} ${styles.tituloMenor}`} data-revelar="">
              {provaSocial.titulo}
            </h2>
            <ul className={styles.empresas}>
              {provaSocial.prints.map((p, i) => (
                <li key={p.src} className={styles.empresa} data-revelar="" style={atraso(i)}>
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={p.largura}
                    height={p.altura}
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
            <p className={styles.disclaimer}>{provaSocial.nota}</p>
          </div>
        </section>

        {/* 6 · reforco */}
        <section className={`${styles.secao} ${styles.reforco}`}>
          <div className={styles.log} aria-hidden="true">
            <div className={styles.logFaixa}>
              {[...reforco.log, ...reforco.log].map((item, i) => (
                <span
                  key={i}
                  className={`${styles.logItem} ${i >= reforco.log.length ? styles.logCopia : ""}`}
                >
                  <span className={styles.laranja}>✓</span> {item}
                </span>
              ))}
            </div>
          </div>
          <div className={`${styles.caixa} ${styles.reforcoCaixa}`} data-revelar="">
            <h2 className={styles.reforcoTitulo}>{reforco.titulo}</h2>
            <p className={styles.reforcoTexto}>{reforco.texto}</p>
            <Cta grande>{reforco.cta}</Cta>
          </div>
        </section>

        {/* 7 · autoridade */}
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
            <div className={styles.autoridadeTexto} data-revelar="" style={atraso(1)}>
              <h2 className={styles.tituloEsq}>{autoridade.titulo}</h2>
              <p className={styles.autoridadeNome}>
                {autoridade.nome}{" "}
                <a className={styles.arroba} href={autoridade.instagram.href}>
                  {autoridade.instagram.rotulo}
                </a>
              </p>
              {autoridade.paragrafos.map((p) => (
                <p key={p.slice(0, 24)} className={styles.paragrafo}>
                  {p}
                </p>
              ))}

              {/* experiencia dele, nao promessa */}
              <div className={styles.custo}>
                <p className={styles.custoTitulo}>{autoridade.custo.titulo}</p>
                <p className={styles.custoDe}>{autoridade.custo.rotuloDe}</p>
                <p className={styles.custoPara}>
                  <Contador
                    className={styles.custoValor}
                    de={autoridade.custo.de}
                    para={autoridade.custo.para}
                  />
                  <span className={styles.custoRotulo}>{autoridade.custo.rotuloPara}</span>
                </p>
                <p className={styles.custoNota}>{autoridade.custo.nota}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8 · fecho */}
        <section className={`${styles.secao} ${styles.fecho}`}>
          <div className={`${styles.caixa} ${styles.fechoCaixa}`}>
            <p className={styles.fechoTexto} data-revelar="">
              {fecho.texto}
            </p>
            <h2 className={styles.fechoTitulo} data-revelar="" style={atraso(1)}>
              {fecho.titulo}
            </h2>
            <p className={styles.fechoResumo} data-revelar="" style={atraso(2)}>
              {fecho.resumo}
            </p>
            <div data-revelar="" style={atraso(3)}>
              <Cta grande>{fecho.cta}</Cta>
            </div>
          </div>
        </section>
      </main>

      {/* 9 · rodape */}
      <footer className={styles.rodape}>
        <div className={styles.caixa}>
          <div className={styles.rodapeTopo}>
            <span className={styles.marca}>
              {rodape.marca}
              <span className={styles.laranja}>_</span>
            </span>
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
