import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <section className={`section section-alt ${styles.location}`} id="contato">
      <div className="container">
        <div className="section-header">
          <div className={styles.sectionTag}>Localização</div>
          <h2 className="heading-lg">
            Venha nos <span className={styles.accent}>visitar</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: "480px", margin: "16px auto 0" }}>
            Estamos em uma localização conveniente no coração de Palmas-TO,
            prontos para recebê-lo.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Map */}
          <div className={styles.mapWrap}>
            <iframe
              src="https://maps.google.com/maps?q=Pra%C3%A7a+dos+Girass%C3%B3is,+Palmas+-+TO&output=embed&hl=pt-BR&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização ${CLINIC.name} — Praça dos Girassóis, Palmas TO`}
            />
          </div>

          {/* Info */}
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>{CLINIC.name}</h3>
            <p className={styles.infoTagline}>{CLINIC.tagline}</p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Endereço</div>
                  <div className={styles.contactValue}>{CLINIC.fullAddress}</div>
                  <a
                    href={CLINIC.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={20} />
                </div>
                <div>
                  <div className={styles.contactLabel}>WhatsApp</div>
                  <a href={CLINIC.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                    {CLINIC.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <div className={styles.contactLabel}>E-mail</div>
                  <a href={`mailto:${CLINIC.email}`} className={styles.contactValue}>
                    {CLINIC.email}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Clock size={20} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Horário de Atendimento</div>
                  {CLINIC.hours.map((h) => (
                    <div key={h.day} className={styles.hourRow}>
                      <span className={styles.hourDay}>{h.day}</span>
                      <span className={styles.hourTime}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              id="location-agendar-btn"
            >
              <Phone size={16} />
              Agendar pelo WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
