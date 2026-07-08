import React from "react";
import styles from "./company.module.css";
import { ValueEntry } from "../data/homeData";

interface ValueCardProps {
  value: ValueEntry;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => (
  <div className={styles.valueCard}>
    <h3 className={styles.valueTitle}>{value.title}</h3>
    <p className={styles.valueText}>{value.text}</p>
  </div>
);

export default ValueCard;
