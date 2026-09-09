"use client";

import { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import styles from "./MobileCta.module.css";

/**
 * CTA fixo, so abaixo de 768px.
 * Aparece depois que o hero sai da tela e some quando o rodape
 * entra, entao ele nunca cobre o rodape. Dois IntersectionObserver,
 * sem listener de scroll.
 *
 * @param {string} heroId       Elemento que define "ja passou do hero".
 * @param {string} footerId     Elemento que faz o botao sumir.
 * @param {string} preco        Valor exibido ao lado do botao.
 * @param {string} nota         Linha pequena abaixo do preco.
 * @param {string} acao         Texto do botao.
 * @param {string} checkoutUrl  Destino do botao.
 */
export default function MobileCta({
  heroId,
  footerId,
  preco,
  nota,
  acao,
  checkoutUrl,
}) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const rodape = document.getElementById(footerId);
    if (!hero || !rodape) return undefined;

    let passouDoHero = false;
    let chegouNoRodape = false;
    const atualizar = () => setVisivel(passouDoHero && !chegouNoRodape);

    const obsHero = new IntersectionObserver(
      ([entrada]) => {
        passouDoHero = !entrada.isIntersecting;
        atualizar();
      },
      { threshold: 0 }
    );

    const obsRodape = new IntersectionObserver(
      ([entrada]) => {
        chegouNoRodape = entrada.isIntersecting;
        atualizar();
      },
      { threshold: 0 }
    );

    obsHero.observe(hero);
    obsRodape.observe(rodape);

    return () => {
      obsHero.disconnect();
      obsRodape.disconnect();
    };
  }, [heroId, footerId]);

  return (
    <div className={styles.bar} data-visible={visivel} aria-hidden={!visivel}>
      <div className={styles.price}>
        <span className={styles.priceValue}>{preco}</span>
        <span className={styles.priceNote}>{nota}</span>
      </div>
      <CtaButton size="sm" href={checkoutUrl}>
        {acao}
      </CtaButton>
    </div>
  );
}
