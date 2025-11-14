import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-industrial-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="text-lg">ĐIỆN CÔNG NGHIỆP</div>
            </div>
            <p className="text-industrial-300 mb-4">
              Đại lý phân phối thiết bị điện công nghiệp uy tín, chất lượng cao cho mọi dự án.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-industrial-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-industrial-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-industrial-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-industrial-300 hover:text-primary-400 transition-colors">Trang chủ</a></li>
              <li><a href="/products" className="text-industrial-300 hover:text-primary-400 transition-colors">Sản phẩm</a></li>
              <li><a href="/about" className="text-industrial-300 hover:text-primary-400 transition-colors">Giới thiệu</a></li>
              <li><a href="/services" className="text-industrial-300 hover:text-primary-400 transition-colors">Dịch vụ</a></li>
              <li><a href="/contact" className="text-industrial-300 hover:text-primary-400 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg mb-4">Danh mục sản phẩm</h3>
            <ul className="space-y-2">
              <li><a href="/products?category=aptomat" className="text-industrial-300 hover:text-primary-400 transition-colors">Aptomat</a></li>
              <li><a href="/products?category=cau-dao" className="text-industrial-300 hover:text-primary-400 transition-colors">Cầu dao</a></li>
              <li><a href="/products?category=dong-cat" className="text-industrial-300 hover:text-primary-400 transition-colors">Thiết bị đóng cắt</a></li>
              <li><a href="/products?category=day-cap" className="text-industrial-300 hover:text-primary-400 transition-colors">Dây cáp điện</a></li>
              <li><a href="/products?category=tu-dien" className="text-industrial-300 hover:text-primary-400 transition-colors">Tủ điện</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-industrial-300">123 Đường Lê Văn Việt, Quận 9, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:0901234567" className="text-industrial-300 hover:text-primary-400">090 123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@thietbidien.vn" className="text-industrial-300 hover:text-primary-400">info@thietbidien.vn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-700 mt-8 pt-6 text-center text-industrial-400">
          <p>&copy; 2025 Điện Công Nghiệp. Đại lý chính hãng thiết bị điện uy tín.</p>
        </div>
      </div>
    </footer>
  );
}
