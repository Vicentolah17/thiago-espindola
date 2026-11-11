"use client";

import { useEffect, useRef, useState } from "react";

const formatar = (n) => `R$ ${Math.round(n).toLocaleString("pt-BR")}`;

/**
 * Numero em reais que corre de `de` ate `para` quando aparece na tela.
 * O HTML do servidor ja sai com o valor final; com "reduzir movimento"
 * ele fica parado no valor final.
 */
export default function Contador({ de, para, duracao = 2200, className }) {
  const [valor, setValor] = useState(para);
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
          const suave = 1 - Math.pow(1 - t, 4);
          setValor(de + (para - de) * suave);
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
  }, [de, para, duracao]);

  return (
    <span ref={ref} className={className} aria-label={formatar(para)}>
      <span aria-hidden="true">{formatar(valor)}</span>
    </span>
  );
}
