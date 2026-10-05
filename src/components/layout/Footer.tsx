import { ExternalLink, Phone, MapPin, Mail, Clock } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#contato" },
];

const SERVICES_LINKS = [
  "Lentes de Contato Dental",
  "Clareamento Dental",
  "Implantes Dentários",
  "Harmonização Facial",
  "Ortodontia",
  "Tratamento de Canal",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#inicio" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <rect width="40" height="40" rx="10" fill="#C8784A"/>
                <path d="M20 8C14 8 10 13 10 18C10 22 11 25 13 27C15 29 16 32 17 34C17.5 35 18 35.5 18.5 35.5C19 35.5 19.5 35 19.5 34C19.5 32 20 30 20 30C20 30 20.5 32 20.5 34C20.5 35 21 35.5 21.5 35.5C22 35.5 22.5 35 23 34C24 32 25 29 27 27C29 25 30 22 30 18C30 13 26 8 20 8Z" fill="white"/>
              </svg>
            </div>
            <div>
              <div className={styles.logoName}>{CLINIC.name}</div>
              <div className={styles.logoTagline}>{CLINIC.specialty}</div>
            </div>
          </a>
          <p className={styles.brandDesc}>
            {CLINIC.tagline} em Palmas-TO.
            Transformando sorrisos e valorizando sua autoestima com excelência.
          </p>
          <div className={styles.social}>
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`Instagram ${CLINIC.name}`}
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`WhatsApp ${CLINIC.name}`}
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className={styles.colTitle}>Navegação</h3>
          <ul className={styles.linkList}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className={styles.colTitle}>Especialidades</h3>
          <ul className={styles.linkList}>
            {SERVICES_LINKS.map((s) => (
              <li key={s}>
                <span className={styles.link}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className={styles.colTitle}>Contato</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <span>{CLINIC.fullAddress}</span>
            </li>
            <li className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <a href={CLINIC.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                {CLINIC.whatsappDisplay}
              </a>
            </li>
            <li className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <a href={`mailto:${CLINIC.email}`} className={styles.contactLink}>
                {CLINIC.email}
              </a>
            </li>
            <li className={styles.contactItem}>
              <Clock size={16} className={styles.contactIcon} />
              <div>
                <div>Seg–Sex: 08h às 18h</div>
                <div>Sábado: 08h às 12h</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.bottomText}>
            © {new Date().getFullYear()} {CLINIC.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
