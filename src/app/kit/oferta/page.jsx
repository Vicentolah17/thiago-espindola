import Deliverables from "@/components/oferta/Deliverables";
import Exclusivity from "@/components/oferta/Exclusivity";
import FinalCta from "@/components/oferta/FinalCta";
import OfertaHero from "@/components/oferta/OfertaHero";
import OfferPrice from "@/components/oferta/OfferPrice";
import Proof from "@/components/oferta/Proof";
import styles from "./page.module.css";

export const metadata = {
  title: "SURFE DIGITAL · condição exclusiva",
  description:
    "Condição de quem baixou o Kit de Aplicação. Página não listada.",

  // Fora do Google. Esta pagina existe so para quem recebeu o link
  // por e-mail: se ela indexar, o preco de R$147 vaza para quem
  // nunca baixou o kit e a oferta publica de R$197 perde o sentido.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

/**
 * Rota /kit/oferta.
 *
 * NAO LINKAR EM LUGAR NENHUM: nem no hub, nem na pagina de vendas,
 * nem em menu. O unico caminho ate aqui e o e-mail que a automacao
 * dispara depois do download do kit.
 *
 * O slug e /kit/oferta de proposito. "oferta-surfe-digital" seria
 * adivinhavel por quem conhece o produto, e noindex barra o Google,
 * nao barra alguem digitando a URL.
 */
export default function OfertaSurfeDigitalPage() {
  return (
    <div className={styles.page}>
      <main>
        {/* 1 */} <OfertaHero />
        {/* 2 */} <Exclusivity />
        {/* 3 */} <Deliverables />
        {/* 4 */} <Proof />
        {/* 5 */} <OfferPrice />
        {/* 6 */} <FinalCta />
      </main>
    </div>
  );
}
