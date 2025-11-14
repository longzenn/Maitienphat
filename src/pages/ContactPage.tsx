import { ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useState } from "react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-industrial-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-industrial-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-industrial-600">
            <a href="/" className="hover:text-primary-600">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-industrial-900">Liên hệ</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary-900 mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl text-industrial-700">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-industrial-900 mb-2">Địa chỉ</h3>
                  <p className="text-industrial-600">
                    123 Đường Lê Văn Việt<br />
                    Phường Tăng Nhơn Phú A, Quận 9<br />
                    TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-industrial-900 mb-2">Điện thoại</h3>
                  <p className="text-industrial-600">
                    Hotline: <a href="tel:0901234567" className="text-primary-600 hover:underline">090 123 4567</a><br />
                    Tel: <a href="tel:02812345678" className="text-primary-600 hover:underline">028 1234 5678</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-industrial-900 mb-2">Email</h3>
                  <p className="text-industrial-600">
                    <a href="mailto:info@thietbidien.vn" className="text-primary-600 hover:underline">
                      info@thietbidien.vn
                    </a><br />
                    <a href="mailto:sales@thietbidien.vn" className="text-primary-600 hover:underline">
                      sales@thietbidien.vn
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-industrial-900 mb-2">Giờ làm việc</h3>
                  <p className="text-industrial-600">
                    Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                    Thứ 7: 8:00 - 12:00<br />
                    Chủ nhật: Nghỉ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-primary-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-green-900 mb-2">Gửi tin nhắn thành công!</h3>
                  <p className="text-green-700">
                    Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input id="name" placeholder="Nhập họ và tên" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input id="phone" type="tel" placeholder="Nhập số điện thoại" required className="mt-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="Nhập email" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="company">Công ty</Label>
                      <Input id="company" placeholder="Tên công ty" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Tiêu đề *</Label>
                    <Input id="subject" placeholder="Tiêu đề tin nhắn" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message">Nội dung *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      rows={6}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary-600 hover:bg-primary-700">
                    Gửi tin nhắn
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white rounded-lg p-4">
          <div className="aspect-video bg-industrial-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-industrial-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>Google Maps Integration</p>
              <p className="text-sm">123 Đường Lê Văn Việt, Quận 9, TP.HCM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
