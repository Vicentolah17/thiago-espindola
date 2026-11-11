"use client";

import { useEffect, useRef, useState } from "react";
import {
  CHECKOUT_CUPOM_URL,
  CHECKOUT_URL,
  CUPOM_CODIGO,
  CUPOM_MINUTOS,
  CUPOM_PERCENTUAL,
  PRECO,
} from "@/config/metodo50k";
import styles from "./CupomModal.module.css";

const CHAVE_VENCE = "metodo50k.cupom.venceEm";
const CHAVE_FECHADO = "metodo50k.cupom.fechado";

/** Grava que o usuario fechou o popup nesta sessao. */
const marcarFechado = () => {
  try {
    sessionStorage.setItem(CHAVE_FECHADO, "1");
  } catch {
    /* sem storage: so fecha */
  }
};

/** mm:ss a partir de milissegundos */
const formatar = (ms) => {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = String(Math.floor(total / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${m}:${s}`;
};

/**
 * Popup de cupom, aberto ao carregar a pagina.
 *
 * O prazo e real e vale pela sessao:
 * - na primeira visita da sessao, grava no sessionStorage QUANDO o
 *   cupom vence (agora + CUPOM_MINUTOS);
 * - recarregar a pagina le esse mesmo horario, entao o relogio nao
 *   volta pro comeco;
 * - vencido, o popup nao abre mais nessa sessao;
 * - fechado pelo usuario, tambem nao reabre a cada recarga.
 * Se o navegador bloquear o sessionStorage, o popup nao aparece: sem
 * onde guardar o prazo, ele so poderia fingir urgencia.
 *
 * O relogio e recalculado a partir do horario de vencimento a cada
 * segundo, e nao decrementado, entao aba em segundo plano nao atrasa.
 */
export default function CupomModal() {
  const dialogRef = useRef(null);
  const campoRef = useRef(null);
  const [venceEm, setVenceEm] = useState(null);
  const [agora, setAgora] = useState(() => Date.now());
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    let vence;
    try {
      const guardado = Number(sessionStorage.getItem(CHAVE_VENCE));
      vence = guardado > 0 ? guardado : Date.now() + CUPOM_MINUTOS * 60_000;
      if (!guardado) sessionStorage.setItem(CHAVE_VENCE, String(vence));
      if (sessionStorage.getItem(CHAVE_FECHADO) === "1") return;
    } catch {
      return;
    }
    if (Date.now() >= vence) return;

    setVenceEm(vence);
    setAgora(Date.now());

    // Cada caminho de fechar (X, clique fora, Esc) grava o "fechado"
    // por conta propria. O evento "close" fica so como reforco: em
    // alguns ambientes ele chega atrasado ou nao chega.
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", marcarFechado);
    dialog?.showModal();
    return () => dialog?.removeEventListener("close", marcarFechado);
  }, []);

  useEffect(() => {
    if (!venceEm) return undefined;
    const id = setInterval(() => setAgora(Date.now()), 1000);
    return () => clearInterval(id);
  }, [venceEm]);

  const restante = venceEm ? venceEm - agora : 0;
  const vencido = venceEm !== null && restante <= 0;

  const fechar = () => {
    marcarFechado();
    dialogRef.current?.close();
  };

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(CUPOM_CODIGO);
    } catch {
      // navegador sem permissao de area de transferencia
      campoRef.current?.select();
      document.execCommand?.("copy");
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="cupom-titulo"
      onKeyDown={(e) => {
        // Esc: o navegador fecha sozinho, aqui so grava
        if (e.key === "Escape") marcarFechado();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) fechar();
      }}
    >
      <div className={styles.caixa}>
        <button
          type="button"
          className={styles.fechar}
          onClick={fechar}
          aria-label="Fechar"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {vencido ? (
          <>
            <h2 id="cupom-titulo" className={styles.titulo}>
              O cupom expirou
            </h2>
            <p className={styles.texto}>
              O Método 50K continua disponível por {PRECO}, com acesso imediato.
            </p>
            <a className={styles.botao} href={CHECKOUT_URL}>
              IR PARA O CHECKOUT
            </a>
          </>
        ) : (
          <>
            <h2 id="cupom-titulo" className={styles.titulo}>
              Você ganhou {CUPOM_PERCENTUAL}% OFF
            </h2>
            <p className={styles.texto}>
              Use este código no checkout antes que o tempo acabe.
            </p>

            <div className={styles.codigo}>
              <label className={styles.codigoLabel} htmlFor="cupom-codigo">
                Seu código
              </label>
              <div className={styles.codigoLinha}>
                <input
                  ref={campoRef}
                  id="cupom-codigo"
                  className={styles.codigoCampo}
                  value={CUPOM_CODIGO}
                  readOnly
                  onFocus={(e) => e.target.select()}
                />
                <button type="button" className={styles.copiar} onClick={copiar}>
                  {copiado ? "Copiado" : "Copiar"}
                </button>
              </div>
            </div>

            <p className={styles.timer} role="timer" aria-live="off">
              Expira em <strong>{formatar(restante)}</strong>
            </p>

            <a className={styles.botao} href={CHECKOUT_CUPOM_URL}>
              IR PARA O CHECKOUT
            </a>
          </>
        )}
      </div>
    </dialog>
  );
}
