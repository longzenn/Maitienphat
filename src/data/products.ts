export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  specs: string;
  description: string;
  image: string;
  isNew?: boolean;
  technicalSpecs: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  {
    id: "aptomat-schneider-c60n",
    name: "Aptomat Schneider C60N 2P 32A",
    brand: "Schneider Electric",
    category: "Aptomat",
    specs: "2 pha, 32A, 6kA",
    description: "Aptomat Schneider C60N là dòng sản phẩm cao cấp, thiết kế nhỏ gọn, bảo vệ quá tải và ngắn mạch hiệu quả. Phù hợp cho các ứng dụng dân dụng và công nghiệp nhẹ.",
    image: "https://images.unsplash.com/photo-1761251947512-a293e482919f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjBjaXJjdWl0JTIwYnJlYWtlcnxlbnwxfHx8fDE3NjMwOTYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    technicalSpecs: [
      { label: "Số pha", value: "2P" },
      { label: "Dòng định mức", value: "32A" },
      { label: "Khả năng cắt", value: "6kA" },
      { label: "Đường cong", value: "C" },
      { label: "Điện áp", value: "230/400V AC" },
      { label: "Chuẩn", value: "IEC 60898-1" },
    ],
  },
  {
    id: "aptomat-abb-s203",
    name: "Aptomat ABB S203 3P 63A",
    brand: "ABB",
    category: "Aptomat",
    specs: "3 pha, 63A, 10kA",
    description: "Aptomat ABB S203 với khả năng cắt cao 10kA, phù hợp cho các hệ thống công nghiệp. Độ bền cao, hoạt động ổn định trong môi trường khắc nghiệt.",
    image: "https://images.unsplash.com/photo-1761251947512-a293e482919f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjBjaXJjdWl0JTIwYnJlYWtlcnxlbnwxfHx8fDE3NjMwOTYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technicalSpecs: [
      { label: "Số pha", value: "3P" },
      { label: "Dòng định mức", value: "63A" },
      { label: "Khả năng cắt", value: "10kA" },
      { label: "Đường cong", value: "C" },
      { label: "Điện áp", value: "400V AC" },
      { label: "Chuẩn", value: "IEC 60947-2" },
    ],
  },
  {
    id: "cau-dao-ls-gmc",
    name: "Cầu dao LS GMC-100 3P 100A",
    brand: "LS Electric",
    category: "Cầu dao",
    specs: "3 pha, 100A",
    description: "Cầu dao tải LS GMC với cơ cấu đóng ngắt nhanh, tiếp điểm bạc, độ tin cậy cao. Sử dụng cho việc đóng cắt tải trong tủ điện.",
    image: "https://images.unsplash.com/photo-1761251947512-a293e482919f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjBjaXJjdWl0JTIwYnJlYWtlcnxlbnwxfHx8fDE3NjMwOTYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technicalSpecs: [
      { label: "Số pha", value: "3P" },
      { label: "Dòng định mức", value: "100A" },
      { label: "Điện áp", value: "690V AC" },
      { label: "Loại", value: "Cầu dao cách ly" },
      { label: "Khả năng chịu dòng", value: "20kA/0.5s" },
      { label: "Chuẩn", value: "IEC 60947-3" },
    ],
  },
  {
    id: "day-cap-cadivi-cv",
    name: "Dây cáp đơn Cadivi CV 1x35mm²",
    brand: "Cadivi",
    category: "Dây cáp",
    specs: "35mm², 450/750V",
    description: "Dây cáp đơn Cadivi với lõi đồng nguyên chất, cách điện PVC chất lượng cao. Phù hợp cho lắp đặt trong ống hoặc trên máng cáp.",
    image: "https://images.unsplash.com/photo-1721375446536-a127ad0e325c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyaW5nJTIwY2FibGVzfGVufDF8fHx8MTc2MzA2MDI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    technicalSpecs: [
      { label: "Tiết diện", value: "35mm²" },
      { label: "Điện áp", value: "450/750V" },
      { label: "Số lõi", value: "1" },
      { label: "Vật liệu dẫn", value: "Đồng nguyên chất" },
      { label: "Cách điện", value: "PVC" },
      { label: "Chuẩn", value: "TCVN 5935-2:2008" },
    ],
  },
  {
    id: "contactor-schneider-lc1d",
    name: "Contactor Schneider LC1D32M7",
    brand: "Schneider Electric",
    category: "Thiết bị đóng cắt",
    specs: "32A, cuộn dây 220VAC",
    description: "Contactor Schneider TeSys D với độ bền cơ học cao, tiếp điểm bạc cadmium, hoạt động êm. Phù hợp điều khiển động cơ và tải công nghiệp.",
    image: "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwOTYyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technicalSpecs: [
      { label: "Dòng định mức", value: "32A" },
      { label: "Điện áp cuộn dây", value: "220VAC" },
      { label: "Công suất động cơ", value: "15kW (400V)" },
      { label: "Số cực", value: "3P + 1NO" },
      { label: "Độ bền cơ", value: "10 triệu lần" },
      { label: "Chuẩn", value: "IEC 60947-4-1" },
    ],
  },
  {
    id: "tu-dien-sino-electric",
    name: "Tủ điện phân phối Sino 600x800x250",
    brand: "Sino Electric",
    category: "Tủ điện",
    specs: "600x800x250mm, IP55",
    description: "Tủ điện kim loại với lớp sơn tĩnh điện, chống ăn mòn. Kín nước IP55, phù hợp lắp đặt ngoài trời hoặc môi trường ẩm ướt.",
    image: "https://images.unsplash.com/photo-1761251947512-a293e482919f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjBjaXJjdWl0JTIwYnJlYWtlcnxlbnwxfHx8fDE3NjMwOTYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technicalSpecs: [
      { label: "Kích thước", value: "600x800x250mm" },
      { label: "Cấp bảo vệ", value: "IP55" },
      { label: "Vật liệu", value: "Thép 1.2mm" },
      { label: "Xử lý bề mặt", value: "Sơn tĩnh điện" },
      { label: "Màu sắc", value: "RAL 7035" },
      { label: "Cửa", value: "Đơn, có khóa" },
    ],
  },
  {
    id: "aptomat-mitsubishi-nf",
    name: "Aptomat Mitsubishi NF125-CV 3P 100A",
    brand: "Mitsubishi Electric",
    category: "Aptomat",
    specs: "3 pha, 100A, 50kA",
    description: "MCCB Mitsubishi NF-CV với khả năng cắt siêu cao 50kA, phù hợp cho các trung tâm phân phối điện lớn. Có thể điều chỉnh dòng và độ trễ.",
    image: "https://images.unsplash.com/photo-1761251947512-a293e482919f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjBjaXJjdWl0JTIwYnJlYWtlcnxlbnwxfHx8fDE3NjMwOTYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    technicalSpecs: [
      { label: "Số pha", value: "3P" },
      { label: "Dòng định mức", value: "100A" },
      { label: "Khả năng cắt", value: "50kA" },
      { label: "Loại", value: "MCCB điều chỉnh được" },
      { label: "Điện áp", value: "240/415V AC" },
      { label: "Chuẩn", value: "IEC 60947-2" },
    ],
  },
  {
    id: "day-cap-ls-vcsq",
    name: "Cáp điện lực LS VCSQ 4x25+16 0.6/1kV",
    brand: "LS Cable",
    category: "Dây cáp",
    specs: "4x25+16mm², 0.6/1kV",
    description: "Cáp điện lực LS VCSQ 4 lõi, cách điện XLPE, vỏ PVC. Sử dụng cho truyền tải điện hạ thế trong công trình dân dụng và công nghiệp.",
    image: "https://images.unsplash.com/photo-1721375446536-a127ad0e325c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyaW5nJTIwY2FibGVzfGVufDF8fHx8MTc2MzA2MDI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technicalSpecs: [
      { label: "Tiết diện", value: "4x25mm² + 16mm²" },
      { label: "Điện áp", value: "0.6/1kV" },
      { label: "Số lõi", value: "4 + PE" },
      { label: "Vật liệu dẫn", value: "Đồng" },
      { label: "Cách điện", value: "XLPE" },
      { label: "Vỏ ngoài", value: "PVC" },
    ],
  },
];

export const categories = [
  { id: "aptomat", name: "Aptomat", count: 3 },
  { id: "cau-dao", name: "Cầu dao", count: 1 },
  { id: "dong-cat", name: "Thiết bị đóng cắt", count: 1 },
  { id: "day-cap", name: "Dây cáp điện", count: 2 },
  { id: "tu-dien", name: "Tủ điện", count: 1 },
];

export const brands = [
  "Schneider Electric",
  "ABB",
  "Siemens",
  "Mitsubishi Electric",
  "LS Electric",
  "LS Cable",
  "Panasonic",
  "Cadivi",
  "Sino Electric",
];
