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
import styles from "./page.module.css";

export const metadata = {
  title: "SURFE DIGITAL · Thiago Espíndola",
  description:
    "Uma formação completa pra viver do digital: marca pessoal, conteúdo que atrai e co-produção, o caminho de quem não quer aparecer.",
};

export default function SurfeDigitalPage() {
  return (
    <div className={styles.page}>
      {/* 1 */} <SiteNav />

      <main>
        {/* 2 */} <Hero />
        {/* 3 */} <Marquee />
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
        {/* 14 */} <Guarantee />
        {/* 15 */} <Faq />
      </main>

      {/* 16 */} <SalesFooter id="rodape" />

      <MobileCta heroId="topo" footerId="rodape" />
    </div>
  );
}
