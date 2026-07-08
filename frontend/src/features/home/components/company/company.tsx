import React from "react";
import styles from "./company.module.css";
import StatCard from "./statCard";
import ValueCard from "./valueCard";
import { STATS, VALUES } from "../data/homeData";

const Company: React.FC = () => {
  return (
    <section id="cong-ty" className={styles.companySection}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Công ty</p>
        <h2 className={styles.sectionTitleWide}>Một công ty nhỏ, làm cà phê nghiêm túc</h2>

        <div className={styles.statsGrid}>
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>

        <div className={styles.valuesGrid}>
          {VALUES.map((v) => (
            <ValueCard key={v.title} value={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
