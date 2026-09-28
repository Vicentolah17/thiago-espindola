import Grain from "@/components/Grain";
import Halos from "@/components/Halos";
import HubFooter from "@/components/HubFooter";
import HubHeader from "@/components/HubHeader";
import KitCard from "@/components/KitCard";
import LevelCard from "@/components/LevelCard";
import SectionHeading from "@/components/SectionHeading";
import { hub } from "@/config/hub";
import styles from "./page.module.css";

export default function Home() {
  const { header, kit, levels, levelsLabel, socials, footer, display } = hub;

  return (
    <div className={styles.page}>
      {display.halos && <Halos />}
      {display.grain && <Grain />}

      <div className={styles.container}>
        <HubHeader
          eyebrow={header.eyebrow}
          title={header.title}
          tagline={header.tagline}
          avatar={display.avatar}
          logoSrc={header.logoSrc}
          avatarSrc={header.avatarSrc}
        />

        <KitCard
          href={kit.href}
          badge={kit.badge}
          eyebrow={kit.eyebrow}
          titleLines={kit.titleLines}
          description={kit.description}
          cta={kit.cta}
        />

        <div className={styles.levels}>
          <SectionHeading label={levelsLabel} />
          {/* card com `oculto` sai da tela; a numeracao conta so os
              visiveis, entao nunca sobra buraco na sequencia */}
          {levels
            .filter((level) => !level.oculto)
            .map((level, indice) => (
            <LevelCard
              key={level.href}
              href={level.href}
              number={String(indice + 1).padStart(2, "0")}
              title={level.title}
              description={level.description}
              badge={level.badge}
              variant={level.variant}
              uppercaseTitle={level.uppercaseTitle}
              numbered={display.numbered}
            />
            ))}
        </div>

        <HubFooter
          socials={socials}
          brand={footer.brand}
          copyright={footer.copyright}
        />
      </div>
    </div>
  );
}
