import { Plus_Jakarta_Sans } from "next/font/google";

/**
 * Fonte so desta rota: o layout global (Archivo + Public Sans) segue
 * valendo no hub e nas outras paginas de venda.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export default function Metodo50kLayout({ children }) {
  return <div className={jakarta.variable}>{children}</div>;
}
