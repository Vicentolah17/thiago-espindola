"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Numero inteiro que corre de `de` ate `ate` quando aparece na tela.
 * O HTML do servidor ja sai com o valor final; com "reduzir movimento"
 * ele fica parado no valor final.
 */
export default function Conta({ de = 0, ate, duracao = 1800, className }) {
  const [valor, setValor] = useState(ate);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    setValor(de);

    let raf;
    const observador = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        observador.disconnect();
        const inicio = performance.now();
        const passo = (agora) => {
          const t = Math.min(1, (agora - inicio) / duracao);
          // desacelera no fim, para o numero "pousar" no valor final
          const suave = 1 - Math.pow(1 - t, 3);
          setValor(Math.round(de + (ate - de) * suave));
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
  }, [de, ate, duracao]);

  return (
    <span ref={ref} className={className}>
      {valor}
    </span>
  );
}
