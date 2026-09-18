"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="#inicio" className={styles.logo} onClick={handleNavClick}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
              <rect width="40" height="40" rx="10" fill="#C8784A"/>
              <path d="M20 8C14 8 10 13 10 18C10 22 11 25 13 27C15 29 16 32 17 34C17.5 35 18 35.5 18.5 35.5C19 35.5 19.5 35 19.5 34C19.5 32 20 30 20 30C20 30 20.5 32 20.5 34C20.5 35 21 35.5 21.5 35.5C22 35.5 22.5 35 23 34C24 32 25 29 27 27C29 25 30 22 30 18C30 13 26 8 20 8Z" fill="white"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Odonto Science</span>
            <span className={styles.logoTagline}>Odontologia Estética</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className={styles.actions}>
          <a
            href={CLINIC.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            id="header-whatsapp-btn"
          >
            <Phone size={16} />
            Agendar Consulta
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCtaBtn}
              onClick={handleNavClick}
            >
              <Phone size={16} />
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
