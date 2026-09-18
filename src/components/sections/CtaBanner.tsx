import { Phone, ArrowRight } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bgDecor1} aria-hidden="true" />
      <div className={styles.bgDecor2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.icon}>🦷</div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Pronto para transformar seu sorriso?
            </h2>
            <p className={styles.subtitle}>
              Agende sua consulta hoje e dê o primeiro passo rumo ao sorriso que você sempre quis.
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <a
            href={CLINIC.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
            id="cta-banner-agendar-btn"
          >
            Agendar Consulta
            <ArrowRight size={18} />
          </a>
          <a
            href={`tel:+${CLINIC.whatsapp}`}
            className={styles.ctaSecondary}
          >
            <Phone size={16} />
            {CLINIC.whatsappDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
