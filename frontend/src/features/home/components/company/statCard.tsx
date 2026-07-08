import React from "react";
import styles from "./company.module.css";
import { StatEntry } from "../data/homeData";

interface StatCardProps {
  stat: StatEntry;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => (
  <div className={styles.statItem}>
    <p className={styles.statNumber}>{stat.number}</p>
    <p className={styles.statLabel}>{stat.label}</p>
  </div>
);

export default StatCard;
