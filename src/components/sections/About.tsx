import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import styles from "./About.module.css";

const DIFFERENTIALS = [
  "Atendimento totalmente personalizado",
  "Equipe de especialistas certificados",
  "Ambiente acolhedor e humanizado",
  "Tecnologia de última geração",
  "Mais de 15 anos de experiência",
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="sobre">
      <div className="container">
        <div className={styles.grid}>
          {/* Images grid */}
          <div className={styles.imageGrid}>
            <div className={`${styles.imgCard} ${styles.imgCard1}`}>
              <Image
                src="/images/clinic-interior.jpg"
                alt="Interior moderno do consultório Odonto Science"
                fill
                className={styles.imgFill}
                sizes="30vw"
              />
            </div>
            <div className={`${styles.imgCard} ${styles.imgCard2}`}>
              <Image
                src="/images/smile-result.jpg"
                alt="Resultado de lentes de contato dental"
                fill
                className={styles.imgFill}
                sizes="20vw"
              />
            </div>
            <div className={`${styles.imgCard} ${styles.imgCard3}`}>
              <Image
                src="/images/clinic-reception.jpg"
                alt="Recepção da clínica Odonto Science"
                fill
                className={styles.imgFill}
                sizes="35vw"
              />
            </div>
            {/* Experience badge */}
            <div className={styles.expBadge}>
              <span className={styles.expNumber}>+15</span>
              <span className={styles.expText}>anos de cuidado e confiança</span>
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className="section-header left">
              <div className={styles.sectionTag}>Sobre Nós</div>
              <h2 className="heading-lg">
                Cuidado que <span className={styles.accent}>transforma</span> sorrisos
              </h2>
            </div>

            <p className="body-lg" style={{ marginBottom: "16px" }}>
              Fundada em <strong>{CLINIC.founded}</strong>, a Odonto Science nasceu com o propósito de
              oferecer odontologia de alta qualidade em Palmas-TO, unindo expertise técnica
              com um atendimento verdadeiramente humanizado.
            </p>
            <p className="body-md" style={{ marginBottom: "32px" }}>
              Nossa equipe multidisciplinar acredita que cada sorriso é único e merece
              um plano de tratamento personalizado. Do atendimento infantil à reabilitação
              oral completa, estamos ao seu lado em cada etapa.
            </p>

            <ul className={styles.differentials}>
              {DIFFERENTIALS.map((item) => (
                <li key={item} className={styles.differentialItem}>
                  <CheckCircle2 size={20} className={styles.checkIcon} strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#servicos" className={styles.learnMore}>
              Conheça nossos serviços
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
