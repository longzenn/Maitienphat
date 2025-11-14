import { Button } from "../components/ui/button";
import { Shield, Truck, HeadphonesIcon, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { BrandCarousel } from "../components/BrandCarousel";
import { products, categories } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface HomePageProps {
  onQuoteClick: (productName?: string) => void;
}

export function HomePage({ onQuoteClick }: HomePageProps) {
  const featuredProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwOTYyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Industrial electrical equipment"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Đại lý phân phối thiết bị điện công nghiệp chính hãng
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Cung cấp đầy đủ thiết bị điện, aptomat, contactor, dây cáp cho mọi công trình. 
              Chất lượng đảm bảo - Giá cạnh tranh - Giao hàng toàn quốc.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary-900 hover:bg-primary-50"
                onClick={() => onQuoteClick()}
              >
                Yêu cầu báo giá
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/products'}
              >
                Xem sản phẩm
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary-900 mb-4">Về chúng tôi</h2>
            <p className="text-lg text-industrial-700">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực phân phối thiết bị điện công nghiệp, 
              chúng tôi tự hào là đối tác tin cậy của hàng ngàn doanh nghiệp và nhà thầu trên toàn quốc. 
              Cam kết cung cấp sản phẩm chính hãng 100%, giá cả cạnh tranh và dịch vụ hỗ trợ kỹ thuật chuyên nghiệp.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-industrial-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-primary-900 mb-3">Danh mục sản phẩm</h2>
          <p className="text-center text-industrial-600 mb-12">
            Đầy đủ thiết bị điện cho mọi nhu cầu công trình
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/products?category=${category.id}`}
                className="bg-white p-6 rounded-lg border border-industrial-200 hover:border-primary-600 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                  <svg className="w-8 h-8 text-primary-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-industrial-900 mb-1">{category.name}</h3>
                <p className="text-sm text-industrial-600">{category.count} sản phẩm</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-primary-900 mb-3">Lợi thế cạnh tranh</h2>
          <p className="text-center text-industrial-600 mb-12">
            Tại sao khách hàng tin tưởng chọn chúng tôi
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-2">Đại lý chính hãng</h3>
              <p className="text-industrial-600">
                100% sản phẩm chính hãng từ các thương hiệu uy tín hàng đầu thế giới
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-2">Bảo hành dài hạn</h3>
              <p className="text-industrial-600">
                Chế độ bảo hành chính hãng, hỗ trợ kỹ thuật nhanh chóng
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-2">Giao hàng nhanh</h3>
              <p className="text-industrial-600">
                Giao hàng toàn quốc, nhanh chóng đáp ứng tiến độ dự án
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-2">Tư vấn 24/7</h3>
              <p className="text-industrial-600">
                Đội ngũ kỹ sư sẵn sàng tư vấn giải pháp kỹ thuật mọi lúc
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-industrial-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-primary-900 mb-2">Sản phẩm mới</h2>
              <p className="text-industrial-600">Các sản phẩm mới nhất từ chúng tôi</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/products'}
            >
              Xem tất cả
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onQuoteClick={onQuoteClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <BrandCarousel />

      {/* Quick Quote Form */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-white mb-3">Yêu cầu báo giá nhanh</h2>
              <p className="text-primary-100">
                Để lại thông tin, chúng tôi sẽ liên hệ tư vấn trong vòng 30 phút
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-300 mt-1 flex-shrink-0" />
                  <span>Tư vấn miễn phí giải pháp kỹ thuật</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-300 mt-1 flex-shrink-0" />
                  <span>Báo giá cạnh tranh nhất thị trường</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-300 mt-1 flex-shrink-0" />
                  <span>Hỗ trợ dự án lớn, thanh toán linh hoạt</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-300 mt-1 flex-shrink-0" />
                  <span>Giao hàng nhanh chóng toàn quốc</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="w-full bg-white text-primary-900 hover:bg-primary-50"
                onClick={() => onQuoteClick()}
              >
                Yêu cầu báo giá ngay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
