import React from "react";
import styles from "./menu.module.css";
import MenuCard from "./menuCard";
import { MENU_ITEMS } from "../data/homeData";

const Menu: React.FC = () => {
  return (
    <section id="menu" className={styles.menuSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeadRow}>
          <div>
            <p className={styles.eyebrow}>Menu</p>
            <h2 className={styles.sectionTitle}>Gợi ý hôm nay</h2>
          </div>
          <a href="#" className={styles.textLink}>Xem toàn bộ menu →</a>
        </div>

        <div className={styles.menuGrid}>
          {MENU_ITEMS.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
