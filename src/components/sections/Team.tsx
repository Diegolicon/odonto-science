import Image from "next/image";
import { TEAM } from "@/lib/constants";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={`section section-alt ${styles.team}`} id="equipe">
      <div className="container">
        <div className="section-header">
          <div className={styles.sectionTag}>Nossa Equipe</div>
          <h2 className="heading-lg">
            Especialistas dedicados ao{" "}
            <span className={styles.accent}>seu sorriso</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: "520px", margin: "16px auto 0" }}>
            Nossa equipe multidisciplinar reúne os melhores profissionais de cada
            especialidade, comprometidos com sua saúde e bem-estar.
          </p>
        </div>

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <div key={member.id} className={styles.card}>
              <div className={styles.photoWrap}>
                <Image
                  src="/images/clinic-team.jpg"
                  alt={`Foto de ${member.name}`}
                  fill
                  className={styles.photoImg}
                  sizes="(max-width: 900px) 50vw, 33vw"
                />
                <div className={styles.photoBadge}>{member.specialty.split("&")[0].trim()}</div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.specialty}>{member.specialty}</p>
                <p className={styles.cro}>{member.cro}</p>
                <p className={styles.desc}>{member.description}</p>
              </div>
            </div>
          ))}

          {/* Placeholder for more doctors */}
          <div className={`${styles.card} ${styles.cardAdd}`}>
            <div className={styles.addInner}>
              <div className={styles.addIcon}>+</div>
              <p className={styles.addText}>
                Em breve mais especialistas serão apresentados aqui.
              </p>
              <p className={styles.addSub}>
                Nossa equipe está crescendo para melhor atendê-lo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
