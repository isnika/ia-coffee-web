import React from "react";
import styles from "./hero.module.css";
import DropIcon from "./dropIcon";
import PhinGraphic from "./phinGraphic";

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroInner}>
        <div>
          <p className={styles.eyebrow}>Cà phê phin truyền thống &amp; hơn thế nữa</p>
          <h1 className={styles.heroTitle}>
            Từng giọt chờ,
            <br />
            từng phút <span className={styles.accentText}>thức tỉnh.</span>
          </h1>
          <p className={styles.heroDesc}>
            ia Coffee and More rang xay mỗi ngày, pha từng phin theo nhịp
            chờ chậm rãi — nơi cà phê là cái cớ để bạn ngồi lại lâu hơn.
          </p>
          <div className={styles.heroActions}>
            <a href="#menu" className={styles.primaryBtn}>Xem menu</a>
            <a href="#gioi-thieu" className={styles.secondaryBtn}>Câu chuyện của ia</a>
          </div>
        </div>

        <PhinGraphic />
      </div>

      <div className={styles.dropDivider}>
        {[0, 1, 2].map((i) => (
          <DropIcon key={i} className={styles.dropIcon} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
