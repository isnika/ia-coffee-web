import React from "react";
import styles from "./menu.module.css";
import DropIcon from "../hero/dropIcon";
import { MenuItem } from "../data/homeData";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => (
  <div className={styles.menuCard}>
    <div className={styles.menuCardHead}>
      <h3 className={styles.menuCardTitle}>{item.name}</h3>
      <DropIcon className={styles.menuCardIcon} />
    </div>
    <p className={styles.menuCardDesc}>{item.desc}</p>
    <p className={styles.menuCardPrice}>{item.price}</p>
  </div>
);

export default MenuCard;
