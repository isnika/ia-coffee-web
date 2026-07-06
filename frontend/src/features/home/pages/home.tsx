import React from "react";
import styles from "./home.module.css";

const MENU_ITEMS = [
  { name: "Cà phê đen đá", desc: "Rang mộc, đậm & đắng nhẹ hậu ngọt", price: "29.000đ" },
  { name: "Cà phê sữa đá", desc: "Cân bằng giữa đắng và béo sữa", price: "32.000đ" },
  { name: "Bạc xỉu", desc: "Sữa nhiều, cà phê ít — dịu nhẹ", price: "35.000đ" },
  { name: "Cold Brew", desc: "Ủ lạnh 12 giờ, thanh & trong vị", price: "45.000đ" },
  { name: "Trà đào cam sả", desc: "Tươi mát, thêm vào 'More' của quán", price: "39.000đ" },
  { name: "Bánh mì que pate", desc: "Ăn kèm cà phê buổi sáng", price: "25.000đ" },
];

const STATS = [
  { number: "08", label: "Năm hoạt động" },
  { number: "12", label: "Chi nhánh" },
  { number: "3.5k+", label: "Ly cà phê / tuần" },
  { number: "40+", label: "Nhân sự" },
];

const VALUES = [
  {
    title: "Nguồn hạt minh bạch",
    text: "Hợp tác trực tiếp với nông trại tại Đắk Lắk & Lâm Đồng, truy xuất được nguồn gốc từng lô hạt.",
  },
  {
    title: "Rang mỗi ngày",
    text: "Không rang trữ kho — hạt được rang theo lượng dùng của từng ngày để giữ hương tươi.",
  },
  {
    title: "Đào tạo pha chế nội bộ",
    text: "Mọi nhân viên pha chế được huấn luyện tại chính quán, theo một công thức phin duy nhất.",
  },
];

const PARTNERS = [
  "GrabFood",
  "ShopeeFood",
  "Be Group",
  "Highlands Supply Co.",
  "VNPAY",
  "Local Roastery Co-op",
];

/** Icon giọt cà phê nhỏ dùng làm bullet / marker */
const DropIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C9 7 5 11.5 5 15.5A7 7 0 0019 15.5C19 11.5 15 7 12 2Z" />
  </svg>
);

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

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* ---------------- HERO ---------------- */}
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

      {/* ---------------- MENU ---------------- */}
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
              <div key={item.name} className={styles.menuCard}>
                <div className={styles.menuCardHead}>
                  <h3 className={styles.menuCardTitle}>{item.name}</h3>
                  <DropIcon className={styles.menuCardIcon} />
                </div>
                <p className={styles.menuCardDesc}>{item.desc}</p>
                <p className={styles.menuCardPrice}>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GIỚI THIỆU ---------------- */}
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

      {/* ---------------- CÔNG TY ---------------- */}
      <section id="cong-ty" className={styles.companySection}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Công ty</p>
          <h2 className={styles.sectionTitleWide}>Một công ty nhỏ, làm cà phê nghiêm túc</h2>

          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <p className={styles.statNumber}>{s.number}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ĐỐI TÁC ---------------- */}
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
    </div>
  );
};

export default Home;
