import { ChevronRight, Package, Wrench, FileText, Headphones, Truck, Shield } from "lucide-react";
import { Button } from "../components/ui/button";

interface ServicesPageProps {
  onQuoteClick: () => void;
}

export function ServicesPage({ onQuoteClick }: ServicesPageProps) {
  const services = [
    {
      icon: Package,
      title: "Cung cấp thiết bị điện",
      description: "Phân phối đầy đủ các loại thiết bị điện công nghiệp từ các thương hiệu hàng đầu thế giới. Cam kết 100% hàng chính hãng với giá cạnh tranh nhất thị trường.",
      features: [
        "Aptomat, MCCB, MCB các loại",
        "Contactor, relay bảo vệ",
        "Dây cáp điện công nghiệp",
        "Tủ điện, thiết bị đóng cắt",
        "Thiết bị tự động hóa",
      ],
    },
    {
      icon: Wrench,
      title: "Tư vấn kỹ thuật",
      description: "Đội ngũ kỹ sư giàu kinh nghiệm sẵn sàng tư vấn giải pháp thiết bị điện tối ưu cho từng dự án, đảm bảo hiệu quả và tiết kiệm chi phí.",
      features: [
        "Tư vấn lựa chọn thiết bị phù hợp",
        "Thiết kế sơ đồ nguyên lý",
        "Tính toán tải và cáp",
        "Lập dự toán chi tiết",
        "Hỗ trợ kỹ thuật 24/7",
      ],
    },
    {
      icon: FileText,
      title: "Hỗ trợ dự án",
      description: "Đồng hành cùng khách hàng từ khâu tư vấn, báo giá đến cung cấp thiết bị và hỗ trợ kỹ thuật cho các dự án công nghiệp lớn.",
      features: [
        "Báo giá dự án nhanh chóng",
        "Thanh toán linh hoạt",
        "Giao hàng theo tiến độ",
        "Bảo hành dài hạn",
        "Hỗ trợ kỹ thuật tại công trình",
      ],
    },
  ];

  return (
    <div className="bg-industrial-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-industrial-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-industrial-600">
            <a href="/" className="hover:text-primary-600">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-industrial-900">Dịch vụ</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary-900 mb-6">Dịch vụ của chúng tôi</h1>
            <p className="text-xl text-industrial-700">
              Giải pháp toàn diện cho mọi nhu cầu thiết bị điện công nghiệp
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-primary-900 mb-3">{service.title}</h2>
                  <p className="text-industrial-700">{service.description}</p>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-industrial-900 mb-4">Nội dung dịch vụ:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-industrial-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-primary-900 mb-12">Cam kết dịch vụ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-3">Giao hàng toàn quốc</h3>
              <p className="text-industrial-600">
                Giao hàng nhanh chóng đến tất cả các tỉnh thành trên toàn quốc. 
                Hỗ trợ vận chuyển cho dự án lớn.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-3">Bảo hành chính hãng</h3>
              <p className="text-industrial-600">
                Bảo hành chính hãng từ nhà sản xuất. Hỗ trợ kỹ thuật nhanh chóng 
                trong suốt quá trình sử dụng.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-3">Hỗ trợ 24/7</h3>
              <p className="text-industrial-600">
                Đội ngũ kỹ sư sẵn sàng hỗ trợ kỹ thuật mọi lúc. 
                Hotline luôn sẵn sàng tiếp nhận yêu cầu từ khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-white mb-4">Cần tư vấn giải pháp cho dự án?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để nhận tư vấn miễn phí và báo giá tốt nhất 
            cho dự án của bạn.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary-900 hover:bg-primary-50"
              onClick={onQuoteClick}
            >
              Yêu cầu báo giá
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/contact'}
            >
              Liên hệ ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
