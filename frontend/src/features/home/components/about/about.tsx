import React from "react";
import styles from "./about.module.css";

const About: React.FC = () => {
  return (
    <section id="gioi-thieu" className={styles.aboutSection}>
      <div className={styles.aboutInner}>
        <div className={styles.aboutVisual}>
          <span className={styles.aboutQuote}>
            "Chậm một chút, để cà phê kịp ngấm."
          </span>
        </div>
        <div>
          <p className={styles.eyebrowDark}>Giới thiệu</p>
          <h2 className={styles.sectionTitleDark}>Bắt đầu từ một chiếc phin cũ</h2>
          <p className={styles.aboutText}>
            ia Coffee and More ra đời từ một góc bếp nhỏ, nơi mẻ cà phê đầu
            tiên được rang tay và pha bằng chiếc phin nhôm cũ của gia đình.
            Chúng tôi giữ nguyên cách pha ấy — chậm, kiên nhẫn, không vội —
            dù quán đã lớn hơn rất nhiều.
          </p>
          <p className={styles.aboutText}>
            "More" trong tên quán là những gì đi cùng ly cà phê: bánh mì
            buổi sáng, một góc ngồi yên tĩnh, và những cuộc gặp không hẹn
            trước.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
