import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { depoimentos, provaSocial } from "@/config/surfeDigital";
import styles from "./SocialProof.module.css";

/**
 * Secao 7. BLOCO DESLIGADO: ativar quando houver depoimento real.
 *
 * A estrutura esta pronta e testada, mas a secao inteira nao vai
 * pro HTML enquanto `depoimentos` estiver vazio em config. Nao
 * existe nome, resultado nem print inventado aqui dentro.
 *
 * Para ligar: grave os tres videos verticais, coloque os arquivos
 * em /public/depoimentos e preencha a lista `depoimentos` no config.
 */
export default function SocialProof() {
  if (depoimentos.length === 0) return null;

  return (
    <Section width="wide">
      <SectionHeader
        eyebrow="Prova social"
        title={provaSocial.titulo}
        lede={provaSocial.subtitulo}
        align="center"
      />

      <ul className={styles.grid}>
        {depoimentos.map((depoimento) => (
          <li key={depoimento.nome} className={styles.item}>
            <h3 className={styles.title}>{depoimento.titulo}</h3>
            <div className={styles.frame}>
              <video
                className={styles.video}
                src={depoimento.videoSrc}
                poster={depoimento.poster}
                width="1080"
                height="1920"
                controls
                playsInline
                preload="none"
              />
            </div>
            <p className={styles.name}>{depoimento.nome}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
