import { Fragment } from "react";

/**
 * Quebra um texto em palavras, cada uma num <span> com --i (a ordem),
 * para animar palavra por palavra sem atrapalhar a quebra de linha
 * natural. inicio soma um deslocamento, para continuar a contagem de
 * um trecho anterior (ex.: o destaque colorido do titulo).
 */
export default function Palavras({ texto, inicio = 0, className }) {
  const palavras = texto.split(" ");
  return palavras.map((palavra, k) => (
    <Fragment key={k}>
      <span className={className} style={{ "--i": inicio + k }}>
        {palavra}
      </span>
      {k < palavras.length - 1 ? " " : null}
    </Fragment>
  ));
}

/** quantas palavras tem o texto (para encadear o proximo trecho) */
export const contarPalavras = (texto) => texto.split(" ").length;
