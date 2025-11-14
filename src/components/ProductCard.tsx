import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  specs?: string;
  isNew?: boolean;
  onQuoteClick: (productName: string) => void;
}

export function ProductCard({ id, name, image, brand, category, specs, isNew, onQuoteClick }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg border border-industrial-200 overflow-hidden hover:shadow-lg transition-shadow group">
      <a href={`/product/${id}`} className="block">
        <div className="relative aspect-square bg-industrial-50 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isNew && (
            <Badge className="absolute top-3 left-3 bg-primary-600 text-white">Mới</Badge>
          )}
        </div>
      </a>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">{brand}</Badge>
          <span className="text-xs text-industrial-500">{category}</span>
        </div>
        <a href={`/product/${id}`}>
          <h3 className="text-industrial-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
            {name}
          </h3>
        </a>
        {specs && (
          <p className="text-sm text-industrial-600 mb-3">{specs}</p>
        )}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.location.href = `/product/${id}`}
          >
            Chi tiết
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white"
            onClick={() => onQuoteClick(name)}
          >
            Báo giá
          </Button>
        </div>
      </div>
    </div>
  );
}
