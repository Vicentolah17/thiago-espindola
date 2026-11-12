"use client";

import { useEffect, useRef, useState } from "react";

/** "1000,00" -> 100000 centavos */
const centavos = (v) => Math.round(Number(String(v).replace(/\./g, "").replace(",", ".")) * 100);

/** 100000 -> "1.000,00" */
const formatar = (c) =>
  (c / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/**
 * Preco que CAI de `de` ate `ate` quando aparece na tela (padrao das
 * landings: sempre decrescente). O HTML do servidor ja sai com o valor
 * final; com "reduzir movimento" ele fica parado nele.
 */
export default function ContaPreco({ de, ate, duracao = 2200, className }) {
  const inicio = centavos(de);
  const fim = centavos(ate);
  const [valor, setValor] = useState(fim);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    setValor(inicio);

    let raf;
    const observador = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        observador.disconnect();
        const t0 = performance.now();
        const passo = (agora) => {
          const t = Math.min(1, (agora - t0) / duracao);
          // desacelera no fim, para o numero "pousar" no preco
          const suave = 1 - Math.pow(1 - t, 4);
          setValor(Math.round(inicio + (fim - inicio) * suave));
          if (t < 1) raf = requestAnimationFrame(passo);
        };
        raf = requestAnimationFrame(passo);
      },
      { threshold: 0.6 },
    );
    if (ref.current) observador.observe(ref.current);
    return () => {
      observador.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [inicio, fim, duracao]);

  const texto = formatar(valor);

  // --digitos deixa o CSS ajustar o tamanho a quantidade de caracteres
  return (
    <span ref={ref} className={className} style={{ "--digitos": texto.length }}>
      {texto}
    </span>
  );
}
