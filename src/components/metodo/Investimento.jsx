import CtaButton from "@/components/sales/CtaButton";
import Icon from "@/components/sales/Icon";
import Section from "@/components/sales/Section";
import {
  CHECKOUT_URL,
  COMPOSICAO_ANCORA,
  PARCELAS,
  PRECO_VISTA,
  VALOR_ANCORA,
  investimento,
} from "@/config/metodoSurfe";
import styles from "./Investimento.module.css";

/**
 * Secao 13. O bloco de preco.
 * E aqui que entra o dourado: no numero do preco e no botao. Em mais
 * nenhum lugar antes disso. A ancora de R$457 vem acompanhada da
 * composicao, pra nao ficar solta.
 * Nenhuma promessa de resultado neste bloco.
 */
export default function Investimento() {
  return (
    <Section id="investimento" width="wide">
      <div className={styles.palco}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.card}>
          <div className={styles.inner}>
            <span className={styles.selo}>{investimento.eyebrow}</span>
            <h2 className={styles.titulo}>{investimento.titulo}</h2>

            {/* Ancora: valor riscado + o que compoe esse valor.
                Com VALOR_ANCORA null o bloco inteiro some, e a pagina
                vende so pelo preco. Nao da pra publicar um riscado
                sem valor por tras. */}
            {VALOR_ANCORA && (
              <div className={styles.ancora}>
                <div className={styles.ancoraValor}>
                  <span className={styles.ancoraRotulo}>
                    {investimento.seloAncora}
                  </span>
                  <s className={styles.riscado}>{VALOR_ANCORA}</s>
                </div>
                <ul className={styles.composicao}>
                  {COMPOSICAO_ANCORA.map((item) => (
                    <li key={item} className={styles.composicaoItem}>
                      <span className={styles.composicaoDot} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* o preco: unico lugar da pagina com o display de 60px, em dourado */}
            <div className={styles.precoBloco}>
              <p className={styles.preco}>{PRECO_VISTA}</p>
              <p className={styles.parcelas}>
                {investimento.rotuloVista}, {investimento.rotuloParcelas}{" "}
                <strong>{PARCELAS}</strong>
              </p>
            </div>

            <div className={styles.acao}>
              <CtaButton block tone="gold" href={CHECKOUT_URL} note={investimento.nota}>
                {investimento.cta}
              </CtaButton>
            </div>

            <ul className={styles.inclusos}>
              {investimento.inclusos.map((item) => (
                <li key={item} className={styles.incluso}>
                  <span className={styles.check} aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
