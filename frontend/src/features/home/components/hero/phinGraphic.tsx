import React from "react";
import styles from "./hero.module.css";

/** Signature graphic: Phin cà phê với giọt rơi, dùng ở Hero */
const PhinGraphic: React.FC = () => (
  <div className={styles.phinWrap}>
    <svg viewBox="0 0 400 460" className={styles.phinSvg}>
      <circle cx="200" cy="150" r="140" fill="none" stroke="#A9754F" strokeWidth="2" opacity="0.35" />
      <circle cx="200" cy="150" r="108" fill="none" stroke="#A9754F" strokeWidth="2" opacity="0.5" />
      <circle cx="200" cy="150" r="76" fill="#3A241A" stroke="#A9754F" strokeWidth="2" />
      <circle cx="200" cy="150" r="76" fill="#241712" opacity="0.6" />
      <path
        d="M96 150 L128 300 Q200 330 272 300 L304 150"
        fill="none"
        stroke="#A9754F"
        strokeWidth="3"
      />
      <path d="M128 300 Q200 330 272 300 L262 320 Q200 344 138 320 Z" fill="#4A2E22" />
      <rect x="150" y="360" width="100" height="70" rx="6" fill="none" stroke="#A9754F" strokeWidth="2" />
      <path d="M150 360 h100" stroke="#A9754F" strokeWidth="2" />
      <g fill="#A9754F">
        <path className={styles.phinDrop} d="M200 300c-6 8-11 15-11 21a11 11 0 0022 0c0-6-5-13-11-21Z" />
        <path className={styles.phinDrop} d="M200 300c-6 8-11 15-11 21a11 11 0 0022 0c0-6-5-13-11-21Z" />
        <path className={styles.phinDrop} d="M200 300c-6 8-11 15-11 21a11 11 0 0022 0c0-6-5-13-11-21Z" />
      </g>
    </svg>
  </div>
);

export default PhinGraphic;
