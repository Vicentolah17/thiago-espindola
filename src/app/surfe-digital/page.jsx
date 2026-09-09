import Authority from "@/components/sales/Authority";
import Bonuses from "@/components/sales/Bonuses";
import Choice from "@/components/sales/Choice";
import Comparison from "@/components/sales/Comparison";
import Coproduction from "@/components/sales/Coproduction";
import Faq from "@/components/sales/Faq";
import Guarantee from "@/components/sales/Guarantee";
import Hero from "@/components/sales/Hero";
import Marquee from "@/components/sales/Marquee";
import Method from "@/components/sales/Method";
import MobileCta from "@/components/sales/MobileCta";
import Offer from "@/components/sales/Offer";
import Outcomes from "@/components/sales/Outcomes";
import Problem from "@/components/sales/Problem";
import SalesFooter from "@/components/sales/SalesFooter";
import SiteNav from "@/components/sales/SiteNav";
import SocialProof from "@/components/sales/SocialProof";
import {
  CHECKOUT_URL,
  GARANTIA_DIAS,
  PRECO_CHEIO,
  PRECO_JANELA,
  ctaFixo,
  faixaTermos,
  faq,
  garantia,
  nav,
  rodape,
} from "@/config/surfeDigital";
import styles from "./page.module.css";

export const metadata = {
  title: "SURFE DIGITAL · Thiago Espíndola",
  description:
    "Você não nasceu travado, te treinaram pra isso. A formação pra viver do digital, do primeiro vídeo até a co-produção.",
};

export default function SurfeDigitalPage() {
  return (
    <div className={styles.page}>
      {/* 1 */} <SiteNav nav={nav} checkoutUrl={CHECKOUT_URL} />

      <main>
        {/* 2 */} <Hero />
        {/* 3 */} <Marquee termos={faixaTermos} />
        {/* 4 */} <Problem />
        {/* 5 */} <Choice />
        {/* 6 */} <Authority />

        {/*
          7. BLOCO DESLIGADO: ativar quando houver depoimento real.
          O componente existe e esta pronto, mas nao renderiza nada
          enquanto a lista `depoimentos` estiver vazia no config.
          Nao ha nome, print ou resultado inventado na pagina.
        */}
        <SocialProof />

        {/* 8  */} <Outcomes />
        {/* 9  */} <Comparison />
        {/* 10 */} <Method />
        {/* 11 */} <Coproduction />
        {/* 12 */} <Bonuses />
        {/* 13 */} <Offer />
        {/* 14 */}
        <Guarantee
          dias={GARANTIA_DIAS}
          titulo={garantia.titulo}
          texto={garantia.texto}
        />
        {/* 15 */} <Faq titulo={faq.titulo} itens={faq.itens} />
      </main>

      {/* 16 */} <SalesFooter id="rodape" rodape={rodape} />

      <MobileCta
        heroId="topo"
        footerId="rodape"
        preco={PRECO_JANELA ?? PRECO_CHEIO}
        nota={PRECO_JANELA ? "na janela de lançamento" : "acesso imediato"}
        acao={ctaFixo.acao}
        checkoutUrl={CHECKOUT_URL}
      />
    </div>
  );
}
