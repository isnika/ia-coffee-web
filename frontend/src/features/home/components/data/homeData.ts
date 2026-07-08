export interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export interface StatEntry {
  number: string;
  label: string;
}

export interface ValueEntry {
  title: string;
  text: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { name: "Cà phê đen đá", desc: "Rang mộc, đậm & đắng nhẹ hậu ngọt", price: "29.000đ" },
  { name: "Cà phê sữa đá", desc: "Cân bằng giữa đắng và béo sữa", price: "32.000đ" },
  { name: "Bạc xỉu", desc: "Sữa nhiều, cà phê ít — dịu nhẹ", price: "35.000đ" },
  { name: "Cold Brew", desc: "Ủ lạnh 12 giờ, thanh & trong vị", price: "45.000đ" },
  { name: "Trà đào cam sả", desc: "Tươi mát, thêm vào 'More' của quán", price: "39.000đ" },
  { name: "Bánh mì que pate", desc: "Ăn kèm cà phê buổi sáng", price: "25.000đ" },
];

export const STATS: StatEntry[] = [
  { number: "08", label: "Năm hoạt động" },
  { number: "12", label: "Chi nhánh" },
  { number: "3.5k+", label: "Ly cà phê / tuần" },
  { number: "40+", label: "Nhân sự" },
];

export const VALUES: ValueEntry[] = [
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

export const PARTNERS: string[] = [
  "GrabFood",
  "ShopeeFood",
  "Be Group",
  "Highlands Supply Co.",
  "VNPAY",
  "Local Roastery Co-op",
];