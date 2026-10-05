import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { CLINIC, STATS } from "@/lib/constants";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.bgCircle1} aria-hidden="true" />
      <div className={styles.bgCircle2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {CLINIC.specialty} • Praça dos Girassóis, Palmas-TO
          </div>

          <h1 className={`heading-xl ${styles.headline}`}>
            Seu sorriso merece o{" "}
            <span className={styles.highlight}>melhor cuidado</span>
          </h1>

          <p className={`body-lg ${styles.subtitle}`}>
            {CLINIC.tagline}. Especialistas dedicados
            a transformar sorrisos com tecnologia, cuidado e atenção personalizada.
          </p>

          <div className={styles.ctas}>
            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
              id="hero-agendar-btn"
            >
              Agendar Consulta
              <ArrowRight size={18} />
            </a>
            <a href="#servicos" className={styles.ctaSecondary}>
              <Phone size={16} />
              Ver Serviços
            </a>
          </div>
        </div>

        {/* Right — Real Image */}
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/hero-smile.jpg"
                alt={`Paciente com sorriso perfeito na ${CLINIC.name}`}
                fill
                className={styles.image}
                priority
                sizes="(max-width: 900px) 92vw, 50vw"
              />
            </div>

            {/* Floating cards */}
            <div className={`${styles.floatCard} ${styles.floatCardTop}`}>
              <div className={styles.floatCardIcon}>✨</div>
              <div>
                <div className={styles.floatCardTitle}>Lentes Dentais</div>
                <div className={styles.floatCardSub}>Resultado imediato</div>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.floatCardBottom}`}>
              <div className={styles.floatCardIcon}>🦷</div>
              <div>
                <div className={styles.floatCardTitle}>+4.000 pacientes</div>
                <div className={styles.floatCardSub}>Satisfeitos desde {CLINIC.founded}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
