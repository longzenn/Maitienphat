import { useState, useMemo } from "react";
import { ProductCard } from "../components/ProductCard";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { products, categories, brands } from "../data/products";
import { ChevronRight } from "lucide-react";

interface ProductsPageProps {
  onQuoteClick: (productName?: string) => void;
}

export function ProductsPage({ onQuoteClick }: ProductsPageProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Get category from URL if present
  useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam && !selectedCategories.includes(categoryParam)) {
      setSelectedCategories([categoryParam]);
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategories.length === 0 || 
        selectedCategories.some(cat => {
          const category = categories.find(c => c.id === cat);
          return category && product.category === category.name;
        });
      
      const brandMatch = selectedBrands.length === 0 || 
        selectedBrands.includes(product.brand);

      return categoryMatch && brandMatch;
    });
  }, [selectedCategories, selectedBrands]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="bg-industrial-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-industrial-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-industrial-600">
            <a href="/" className="hover:text-primary-600">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-industrial-900">Sản phẩm</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h3 className="text-industrial-900 mb-4">Bộ lọc</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-industrial-900 mb-3">Loại sản phẩm</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center gap-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                      />
                      <Label
                        htmlFor={`category-${category.id}`}
                        className="flex-1 cursor-pointer text-sm text-industrial-700"
                      >
                        {category.name} ({category.count})
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Brand Filter */}
              <div>
                <h4 className="text-industrial-900 mb-3">Thương hiệu</h4>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center gap-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <Label
                        htmlFor={`brand-${brand}`}
                        className="flex-1 cursor-pointer text-sm text-industrial-700"
                      >
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h1 className="text-primary-900 mb-2">Sản phẩm</h1>
                <p className="text-industrial-600">
                  Hiển thị {filteredProducts.length} sản phẩm
                </p>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onQuoteClick={onQuoteClick}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-12 text-center">
                <p className="text-industrial-600">
                  Không tìm thấy sản phẩm phù hợp với bộ lọc của bạn.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
