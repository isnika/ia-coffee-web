import React, { useState } from "react";
import styles from "./headerUser.module.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Công ty", href: "#cong-ty" },
  { label: "Đối tác", href: "#doi-tac" },
];

const HeaderUser: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoMark}>
            ia<span className={styles.logoDot}>.</span>
          </span>
          <span className={styles.logoSub}>Coffee &amp; More</span>
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#menu" className={styles.ctaButton}>
          Đặt món
        </a>

        <button
          aria-label="Mở menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={styles.mobileToggle}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.barShort} />
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setMenuOpen(false)}
            className={styles.mobileCta}
          >
            Đặt món
          </a>
        </nav>
      )}
    </header>
  );
};

export default HeaderUser;
