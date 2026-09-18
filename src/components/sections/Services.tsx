import {
  Sparkles, Sun, Shield, Heart, Smile,
  Activity, Zap, Star, Award
} from "lucide-react";
import { SERVICES, CLINIC } from "@/lib/constants";
import styles from "./Services.module.css";

const ICON_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={24} />,
  Sun:      <Sun size={24} />,
  Shield:   <Shield size={24} />,
  Heart:    <Heart size={24} />,
  Smile:    <Smile size={24} />,
  Activity: <Activity size={24} />,
  Zap:      <Zap size={24} />,
  Star:     <Star size={24} />,
  Award:    <Award size={24} />,
};

export default function Services() {
  return (
    <section className={`section section-alt ${styles.services}`} id="servicos">
      <div className="container">
        <div className="section-header">
          <div className={styles.sectionTag}>Nossos Serviços</div>
          <h2 className="heading-lg">
            Cuidado completo para <span className={styles.accent}>cada sorriso</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: "560px", margin: "16px auto 0" }}>
            Oferecemos uma gama completa de especialidades odontológicas com a mais
            alta qualidade e tecnologia de ponta.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.card} id={`service-${service.id}`}>
              <div className={styles.iconWrap}>
                {ICON_MAP[service.icon]}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <a
                href={CLINIC.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                Agendar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
