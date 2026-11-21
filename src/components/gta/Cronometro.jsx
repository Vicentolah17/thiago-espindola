"use client";

import { useEffect, useRef, useState } from "react";

const formatar = (s) => `00:${String(s).padStart(2, "0")}`;

/**
 * Relogio que corre de 00:00 ate 00:0N quando aparece na tela, como o
 * contador de um video rodando. O HTML do servidor ja sai com o valor
 * final; com "reduzir movimento" ele fica parado nele.
 */
export default function Cronometro({ ate = 3, className }) {
  const [segundos, setSegundos] = useState(ate);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    setSegundos(0);

    let timer;
    const observador = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        observador.disconnect();
        let s = 0;
        timer = setInterval(() => {
          s += 1;
          setSegundos(s);
          if (s >= ate) clearInterval(timer);
        }, 1000);
      },
      { threshold: 0.8 },
    );
    if (ref.current) observador.observe(ref.current);
    return () => {
      observador.disconnect();
      clearInterval(timer);
    };
  }, [ate]);

  return (
    <span ref={ref} className={className} aria-label={formatar(ate)}>
      <span aria-hidden="true">{formatar(segundos)}</span>
    </span>
  );
}
