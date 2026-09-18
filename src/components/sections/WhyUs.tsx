import { Users, Heart, Award, Zap } from "lucide-react";
import { WHY_US, CLINIC } from "@/lib/constants";
import styles from "./WhyUs.module.css";

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users size={28} />,
  Heart: <Heart size={28} />,
  Award: <Award size={28} />,
  Zap:   <Zap size={28} />,
};

export default function WhyUs() {
  return (
    <section className={`section ${styles.whyUs}`} id="diferenciais">
      <div className="container">
        <div className={styles.grid}>
          {/* Left content */}
          <div className={styles.content}>
            <div className={styles.sectionTag}>Por Que Nos Escolher</div>
            <h2 className="heading-lg">
              Cuidado que você pode <span className={styles.accent}>confiar</span>
            </h2>
            <p className="body-lg" style={{ marginTop: "16px", marginBottom: "36px" }}>
              Na Odonto Science, cada detalhe importa. Nossa missão é oferecer
              tratamentos de excelência em um ambiente que inspira conforto e segurança.
            </p>
            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              id="whyus-agendar-btn"
            >
              Agendar Minha Consulta →
            </a>
          </div>

          {/* Right cards */}
          <div className={styles.cardsGrid}>
            {WHY_US.map((item) => (
              <div key={item.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  {ICON_MAP[item.icon]}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
