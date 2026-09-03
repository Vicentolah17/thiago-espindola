import Link from "next/link";

/**
 * Link que escolhe sozinho o tipo de navegacao pelo destino.
 *
 * Rota deste projeto ("/surfe-digital") usa o Link do Next: a troca de
 * pagina e instantanea, sem recarregar tudo, e o Next ja pre-carrega a
 * rota quando o card entra na tela.
 *
 * Site de fora ("https://instagram.com/...") abre em aba nova. O hub e
 * um menu: se a pessoa sai dele pra ver o Instagram, ela precisa achar
 * o caminho de volta sem depender do botao voltar. O rel evita que a
 * pagina aberta consiga mexer nesta por window.opener.
 *
 * Ancora ("#kit") usa <a> normal, na mesma aba.
 *
 * Os tres casos renderizam <a> no HTML final, entao o visual do hub
 * nao muda em nada.
 */
export default function SmartLink({ href, children, ...rest }) {
  const destino = typeof href === "string" ? href : "";
  const rotaInterna = destino.startsWith("/");
  const siteDeFora = /^https?:\/\//i.test(destino);

  if (rotaInterna) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      {...(siteDeFora
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
      {...rest}
    >
      {children}
    </a>
  );
}
