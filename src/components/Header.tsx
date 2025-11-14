import { Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  onQuoteClick?: () => void;
}

export function Header({ onQuoteClick }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-900 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:0901234567" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Hotline: 090 123 4567</span>
            </a>
            <a href="mailto:info@thietbidien.vn" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@demo.vn</span>
            </a>
          </div>
          <div className="flex gap-4">
            <span>Đại lý chính hãng uy tín</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div>
              <div className="text-xl text-primary-900 tracking-tight">MAI TIẾN PHÁT</div>
              <div className="text-sm text-industrial-500">Thiết bị điện chuyên nghiệp</div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-industrial-700 hover:text-primary-600 transition-colors">
              Trang chủ
            </a>
            <div 
              className="relative group"
              onMouseEnter={() => setActiveMenu("products")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-industrial-700 hover:text-primary-600 transition-colors">
                Sản phẩm
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeMenu === "products" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2">
                  <a href="/products?category=aptomat" className="block px-4 py-2 hover:bg-primary-50 text-industrial-700">Aptomat</a>
                  <a href="/products?category=cau-dao" className="block px-4 py-2 hover:bg-primary-50 text-industrial-700">Cầu dao</a>
                  <a href="/products?category=dong-cat" className="block px-4 py-2 hover:bg-primary-50 text-industrial-700">Thiết bị đóng cắt</a>
                  <a href="/products?category=day-cap" className="block px-4 py-2 hover:bg-primary-50 text-industrial-700">Dây cáp điện</a>
                  <a href="/products?category=tu-dien" className="block px-4 py-2 hover:bg-primary-50 text-industrial-700">Tủ điện</a>
                </div>
              )}
            </div>
            <a href="/about" className="text-industrial-700 hover:text-primary-600 transition-colors">
              Giới thiệu
            </a>
            <a href="/services" className="text-industrial-700 hover:text-primary-600 transition-colors">
              Dịch vụ
            </a>
            <a href="/contact" className="text-industrial-700 hover:text-primary-600 transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={onQuoteClick}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6"
          >
            Yêu cầu báo giá
          </Button>
        </div>
      </div>
    </header>
  );
}
