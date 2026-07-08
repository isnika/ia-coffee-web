import React from "react";
import styles from "./partners.module.css";
import { PARTNERS } from "../data/homeData";

const Partners: React.FC = () => {
  return (
    <section id="doi-tac" className={styles.partnersSection}>
      <div className={styles.container}>
        <p className={styles.eyebrowCenter}>Đối tác</p>
        <h2 className={styles.sectionTitleCenter}>Đồng hành cùng ia Coffee and More</h2>
        <div className={styles.partnersRow}>
          {PARTNERS.map((p) => (
            <span key={p} className={styles.partnerName}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
