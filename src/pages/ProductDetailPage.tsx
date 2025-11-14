import { useState, useMemo } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { products } from "../data/products";
import { ChevronRight, Download, Package, Shield, Truck } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ProductDetailPageProps {
  productId: string;
  onQuoteClick: (productName?: string) => void;
}

export function ProductDetailPage({ productId, onQuoteClick }: ProductDetailPageProps) {
  const product = useMemo(() => {
    return products.find(p => p.id === productId);
  }, [productId]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-primary-900 mb-4">Sản phẩm không tồn tại</h1>
        <Button onClick={() => window.location.href = '/products'}>
          Quay lại danh sách sản phẩm
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-industrial-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-industrial-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-industrial-600">
            <a href="/" className="hover:text-primary-600">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/products" className="hover:text-primary-600">Sản phẩm</a>
            <ChevronRight className="w-4 h-4" />
            <a href={`/products?category=${product.category}`} className="hover:text-primary-600">
              {product.category}
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-industrial-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline">{product.brand}</Badge>
              <Badge variant="outline">{product.category}</Badge>
              {product.isNew && <Badge className="bg-primary-600 text-white">Mới</Badge>}
            </div>
            
            <h1 className="text-primary-900 mb-4">{product.name}</h1>
            
            <p className="text-lg text-industrial-700 mb-6">
              {product.description}
            </p>

            <div className="bg-industrial-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Shield className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-industrial-600">Chính hãng 100%</p>
                </div>
                <div>
                  <Package className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-industrial-600">Còn hàng</p>
                </div>
                <div>
                  <Truck className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-industrial-600">Giao nhanh 24h</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button
                size="lg"
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white"
                onClick={() => onQuoteClick(product.name)}
              >
                Yêu cầu báo giá
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => alert('Tính năng tải catalog đang được phát triển')}
              >
                <Download className="w-5 h-5 mr-2" />
                Tải PDF Catalog
              </Button>
            </div>

            <div className="text-sm text-industrial-600">
              <p className="mb-2">
                ☎️ Liên hệ hotline: <a href="tel:0901234567" className="text-primary-600 hover:underline">090 123 4567</a>
              </p>
              <p>
                ✉️ Email: <a href="mailto:info@thietbidien.vn" className="text-primary-600 hover:underline">info@thietbidien.vn</a>
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-lg p-8 mb-12">
          <h2 className="text-primary-900 mb-6">Thông số kỹ thuật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.technicalSpecs.map((spec, index) => (
              <div
                key={index}
                className="flex py-3 border-b border-industrial-100 last:border-0"
              >
                <div className="w-1/2 text-industrial-600">{spec.label}</div>
                <div className="w-1/2">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-primary-900 mb-6">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  {...relatedProduct}
                  onQuoteClick={onQuoteClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
