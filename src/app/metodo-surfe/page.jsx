import "./theme.css";

import Grain from "@/components/Grain";
import Agitacao from "@/components/metodo/Agitacao";
import Aprofundamento from "@/components/metodo/Aprofundamento";
import Base from "@/components/metodo/Base";
import Decisao from "@/components/metodo/Decisao";
import Entrega from "@/components/metodo/Entrega";
import Investimento from "@/components/metodo/Investimento";
import MetodoAutoridade from "@/components/metodo/MetodoAutoridade";
import MetodoHero from "@/components/metodo/MetodoHero";
import NumerosSociais from "@/components/metodo/NumerosSociais";
import ParaQuem from "@/components/metodo/ParaQuem";
import Protocolo from "@/components/metodo/Protocolo";
import Raiz from "@/components/metodo/Raiz";
import Faq from "@/components/sales/Faq";
import Guarantee from "@/components/sales/Guarantee";
import Marquee from "@/components/sales/Marquee";
import MobileCta from "@/components/sales/MobileCta";
import SalesFooter from "@/components/sales/SalesFooter";
import SiteNav from "@/components/sales/SiteNav";
import {
  CHECKOUT_URL,
  GARANTIA_DIAS,
  PRECO_VISTA,
  ctaFixo,
  faixaTermos,
  faq,
  garantia,
  nav,
  rodape,
} from "@/config/metodoSurfe";
import styles from "./page.module.css";

export const metadata = {
  title: "Método S.U.R.F.E · Thiago Espíndola",
  description:
    "Um protocolo de 20 minutos por dia para sair do piloto automático e reescrever os padrões que decidem a sua vida por você.",
};

/**
 * Rota /metodo-surfe.
 * Mesmos componentes das outras paginas de venda. O que muda e o tema,
 * aplicado por data-theme no elemento raiz: tokens de cor sobrepostos
 * em theme.css, nenhum componente alterado.
 */
export default function MetodoSurfePage() {
  return (
    <div className={styles.page} data-theme="metodo-surfe">
      {/* profundidade: duas camadas de violeta muito escuro, estaticas */}
      <div className={styles.profundidade} aria-hidden="true" />
      {/* textura de particula, a mesma do hub */}
      <Grain />

      {/* 1 */} <SiteNav nav={nav} checkoutUrl={CHECKOUT_URL} />

      <main className={styles.main}>
        {/* 2  */} <MetodoHero />
        {/* 3  */} <Agitacao />
        {/* 4  */} <Raiz />
        {/* 5  */} <Marquee termos={faixaTermos} />

        {/*
          6. BLOCO DESLIGADO: numeros sociais.
          Renderiza so com MOSTRAR_NUMEROS_SOCIAIS = true no config e
          os tres valores preenchidos. Desligado, nao deixa buraco.
        */}
        <NumerosSociais />

        {/* 7  */} <MetodoAutoridade />
        {/* 8  */} <ParaQuem />
        {/* 9  */} <Protocolo />
        {/* 10 */} <Aprofundamento />
        {/* 11 */} <Base />
        {/* 12 */} <Entrega />
        {/* 13 */} <Investimento />
        {/* 14 */}
        <Guarantee
          dias={GARANTIA_DIAS}
          titulo={garantia.titulo}
          texto={garantia.texto}
        />
        {/* 15 */}
        <Faq eyebrow={faq.eyebrow} titulo={faq.titulo} itens={faq.itens} />
        {/* 16 */} <Decisao />
      </main>

      {/* 17 */} <SalesFooter id="rodape" rodape={rodape} />

      <MobileCta
        heroId="topo"
        footerId="rodape"
        preco={PRECO_VISTA}
        nota={ctaFixo.nota}
        acao={ctaFixo.acao}
        checkoutUrl={CHECKOUT_URL}
      />
    </div>
  );
}
