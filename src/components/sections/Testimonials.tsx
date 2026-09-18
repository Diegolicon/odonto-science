"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () =>
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className={`section ${styles.testimonials}`} id="depoimentos">
      <div className="container">
        <div className="section-header">
          <div className={styles.sectionTag}>Depoimentos</div>
          <h2 className="heading-lg">
            O que nossos <span className={styles.accent}>pacientes dizem</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className={styles.carousel}>
          <button
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={prev}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={22} />
          </button>

          <div className={styles.track}>
            {TESTIMONIALS.map((t, idx) => {
              const offset = idx - current;
              const visible =
                offset === 0 ||
                offset === 1 ||
                (current === TESTIMONIALS.length - 1 && idx === 0);

              return (
                <div
                  key={t.id}
                  className={`${styles.card} ${idx === current ? styles.cardActive : ""}`}
                  aria-hidden={idx !== current}
                >
                  {/* Stars */}
                  <div className={styles.stars}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  {/* Quote */}
                  <div className={styles.quoteIcon}>&ldquo;</div>
                  <p className={styles.text}>{t.text}</p>
                  {/* Author */}
                  <div className={styles.author}>
                    <div className={styles.avatar}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.authorName}>{t.name}</div>
                      <div className={styles.authorTreatment}>{t.treatment}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={next}
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === current ? styles.dotActive : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
