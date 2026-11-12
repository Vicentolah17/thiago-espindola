"use client";

import { useEffect } from "react";

/**
 * Liga as entradas no scroll da pagina. Nao desenha nada.
 *
 * Todo elemento com o atributo data-revelar ganha data-visto quando
 * entra na tela; o CSS da pagina faz a animacao. O "esconder antes de
 * entrar" so vale depois que este componente marca a raiz com
 * data-anim, entao sem JS, ou com "reduzir movimento", tudo aparece
 * normalmente.
 *
 * raiz: seletor do container da pagina
 */
export default function Revelar({ raiz }) {
  useEffect(() => {
    const el = document.querySelector(raiz);
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    el.setAttribute("data-anim", "");
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute("data-visto", "");
          observador.unobserve(e.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );
    el.querySelectorAll("[data-revelar]").forEach((alvo) => observador.observe(alvo));

    return () => {
      observador.disconnect();
      el.removeAttribute("data-anim");
    };
  }, [raiz]);

  return null;
}
