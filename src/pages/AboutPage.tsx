import { ChevronRight, Target, Users, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="bg-industrial-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-industrial-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-industrial-600">
            <a href="/" className="hover:text-primary-600">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-industrial-900">Giới thiệu</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary-900 mb-6">Về chúng tôi</h1>
            <p className="text-xl text-industrial-700">
              Đối tác tin cậy trong lĩnh vực phân phối thiết bị điện công nghiệp, 
              mang đến giải pháp chất lượng cho mọi công trình
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-primary-900 mb-6">Câu chuyện của chúng tôi</h2>
            <div className="space-y-4 text-industrial-700">
              <p>
                Được thành lập từ năm 2014, <strong>Điện Công Nghiệp</strong> đã không ngừng phát triển 
                và khẳng định vị thế là một trong những đơn vị phân phối thiết bị điện công nghiệp 
                hàng đầu tại Việt Nam.
              </p>
              <p>
                Với đội ngũ kỹ sư giàu kinh nghiệm và mạng lưới đối tác rộng khắp, chúng tôi tự hào 
                đã cung cấp thiết bị cho hơn 5,000 dự án lớn nhỏ trên toàn quốc, từ các nhà máy công nghiệp, 
                trung tâm thương mại, đến các công trình dân dụng cao cấp.
              </p>
              <p>
                Chúng tôi luôn đặt chất lượng sản phẩm và sự hài lòng của khách hàng lên hàng đầu, 
                cam kết mang đến những giải pháp tối ưu nhất với giá cả cạnh tranh.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1684695749267-233af13276d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbmR1c3RyaWFsJTIwc3RvcmFnZXxlbnwxfHx8fDE3NjMwOTYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Kho hàng"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-3">Sứ mệnh</h3>
              <p className="text-industrial-600">
                Cung cấp thiết bị điện chất lượng cao, góp phần phát triển ngành công nghiệp Việt Nam
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-3">Tầm nhìn</h3>
              <p className="text-industrial-600">
                Trở thành đại lý phân phối thiết bị điện hàng đầu khu vực Đông Nam Á
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-3">Giá trị cốt lõi</h3>
              <p className="text-industrial-600">
                Chất lượng - Uy tín - Chuyên nghiệp - Tận tâm
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-industrial-900 mb-3">Đội ngũ</h3>
              <p className="text-industrial-600">
                50+ nhân viên chuyên nghiệp, giàu kinh nghiệm trong lĩnh vực điện công nghiệp
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary-900 text-white rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-2">10+</div>
              <p className="text-primary-200">Năm kinh nghiệm</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">5000+</div>
              <p className="text-primary-200">Dự án hoàn thành</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">50+</div>
              <p className="text-primary-200">Đội ngũ chuyên nghiệp</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">100%</div>
              <p className="text-primary-200">Hàng chính hãng</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Image */}
      <div className="container mx-auto px-4 pb-16">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdGVhbSUyMHdvcmtlcnN8ZW58MXx8fHwxNzYzMDk2MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Đội ngũ nhân viên"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
