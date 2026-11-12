/**
 * Ima em ferradura, a marca da pagina: corpo preto (currentColor) e os
 * polos em papel, contornados (polo troca a cor deles nas secoes pretas).
 * Substitui a bolinha pontilhada do Story.
 */
export default function Ima({ size = 20, className, polo = "#f4f4f1" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {/* corpo: ferradura solida */}
      <path d="M4.5 5v7a7.5 7.5 0 0 0 15 0V5h-3.8v7a3.7 3.7 0 0 1-7.4 0V5z" fill="currentColor" />
      {/* polos */}
      <rect x="4.5" y="2.6" width="3.8" height="4" rx="0.6" fill={polo} stroke="currentColor" strokeWidth="1.5" />
      <rect x="15.7" y="2.6" width="3.8" height="4" rx="0.6" fill={polo} stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
