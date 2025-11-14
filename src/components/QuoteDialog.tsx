import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
}

export function QuoteDialog({ open, onOpenChange, productName }: QuoteDialogProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Yêu cầu báo giá</DialogTitle>
              <DialogDescription>
                Để lại thông tin, chúng tôi sẽ liên hệ tư vấn và báo giá trong vòng 30 phút.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              {productName && (
                <div>
                  <Label>Sản phẩm quan tâm</Label>
                  <Input value={productName} disabled className="mt-2" />
                </div>
              )}
              <div>
                <Label htmlFor="name">Họ và tên *</Label>
                <Input id="name" placeholder="Nhập họ và tên" required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone">Số điện thoại *</Label>
                <Input id="phone" type="tel" placeholder="Nhập số điện thoại" required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Nhập email" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="company">Công ty</Label>
                <Input id="company" placeholder="Tên công ty" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="message">Nội dung yêu cầu</Label>
                <Textarea 
                  id="message" 
                  placeholder="Mô tả chi tiết yêu cầu của bạn (số lượng, thông số kỹ thuật...)"
                  rows={4}
                  className="mt-2"
                />
              </div>
              <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
                Gửi yêu cầu
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl mb-2">Gửi yêu cầu thành công!</h3>
            <p className="text-industrial-600">
              Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
