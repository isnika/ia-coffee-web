import React from "react";
import styles from "./footerUser.module.css";

const PAYMENT_METHODS = ["Tiền mặt", "VNPAY", "Momo", "Visa/Master", "ZaloPay"];

const FooterUser: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Tên quán + giới thiệu ngắn */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>
                ia<span className={styles.logoDot}>.</span>
              </span>
              <span className={styles.logoSub}>Coffee &amp; More</span>
            </div>
            <p className={styles.tagline}>
              Cà phê phin rang mỗi ngày, pha chậm từng giọt.
              <br />
              Một chỗ ngồi yên, một ly cà phê thật — mỗi sáng.
            </p>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className={styles.heading}>Liên hệ</h4>
            <ul className={styles.list}>
              <li>12 Đường Nguyễn Huệ, Q.1, TP.HCM</li>
              <li>
                <a href="tel:+842838123456" className={styles.link}>
                  028 3812 3456
                </a>
              </li>
              <li>
                <a href="mailto:hello@iacoffee.vn" className={styles.link}>
                  hello@iacoffee.vn
                </a>
              </li>
              <li>07:00 – 22:00 hằng ngày</li>
            </ul>
          </div>

          {/* Đối tác & thanh toán */}
          <div>
            <h4 className={styles.heading}>Đối tác giao hàng</h4>
            <ul className={styles.list}>
              <li>GrabFood</li>
              <li>ShopeeFood</li>
              <li>Be Group</li>
            </ul>

            <h4 className={styles.heading}>Thanh toán</h4>
            <ul className={styles.badgeList}>
              {PAYMENT_METHODS.map((m) => (
                <li key={m} className={styles.badge}>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} ia Coffee and More. Đã đăng ký bản quyền.</p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.link}>Chính sách bảo mật</a>
            <a href="#" className={styles.link}>Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterUser;
