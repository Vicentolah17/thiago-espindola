"use client";

import { useEffect, useRef, useState } from "react";

/** "47,90" -> 4790 centavos (ou 50 -> 50 com casas=0) */
const paraNumero = (v, casas) =>
  typeof v === "number" ? v * 10 ** casas : Math.round(Number(String(v).replace(",", ".")) * 10 ** casas);

const formatar = (n, casas) => {
  if (!casas) return String(Math.round(n));
  const inteiro = Math.floor(n / 10 ** casas);
  const resto = String(Math.round(n) % 10 ** casas).padStart(casas, "0");
  return `${inteiro},${resto}`;
};

/**
 * Numero que corre de `de` ate `ate` quando aparece na tela. Aceita
 * centavos ("97,00" -> "47,90" com casas={2}). O HTML do servidor ja
 * sai com o valor final; com "reduzir movimento" ele fica parado nele.
 */
export default function Conta({ de, ate, casas = 0, duracao = 1800, className }) {
  const fim = paraNumero(ate, casas);
  const inicio = paraNumero(de, casas);
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
          // desacelera no fim, para o numero "pousar" no valor final
          const suave = 1 - Math.pow(1 - t, 3);
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

  return (
    <span ref={ref} className={className}>
      {formatar(valor, casas)}
    </span>
  );
}
