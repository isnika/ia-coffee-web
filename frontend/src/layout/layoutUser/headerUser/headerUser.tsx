import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./headerUser.module.css";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Giới thiệu", to: "/gioi-thieu" },
  { label: "Công ty", to: "/cong-ty" },
  { label: "Đối tác", to: "/doi-tac" },
];

const HeaderUser: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>
            ia<span className={styles.logoDot}>.</span>
          </span>
          <span className={styles.logoSub}>Coffee &amp; More</span>
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={styles.navLink}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Nút đăng nhập / đăng ký */}
        <div className={styles.authButtons}>
          {isLoggedIn ? (
            <>
              <Link to="/order" className={styles.loginButton}>
                Đặt món
              </Link>

              <Link to="/profile" className={styles.registerButton}>
                Thông tin
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.loginButton}>
                Đăng nhập
              </Link>

              <Link to="/register" className={styles.registerButton}>
                Đăng ký
              </Link>
            </>
          )}
        </div>

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
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {link.label}
            </NavLink>
          ))}

          {isLoggedIn ? (
            <>
              <Link
                to="/order"
                onClick={() => setMenuOpen(false)}
                className={styles.mobileLogin}
              >
                Đặt món
              </Link>

              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className={styles.mobileRegister}
              >
                Thông tin
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={styles.mobileLogin}
              >
                Đăng nhập
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className={styles.mobileRegister}
              >
                Đăng ký
              </Link>
            </>
          )}

        </nav>
      )}
    </header>
  );
};

export default HeaderUser;