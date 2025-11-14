import { useEffect, useRef } from "react";

const brands = [
  "Schneider Electric",
  "ABB",
  "Siemens",
  "Mitsubishi Electric",
  "LS Electric",
  "Panasonic",
  "Fuji Electric",
  "Eaton",
];

export function BrandCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        
        // Reset when reaching halfway (since we duplicated)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-industrial-900">Thương hiệu đối tác</h2>
        <p className="text-center text-industrial-600 mt-2">
          Đại lý chính hãng các thương hiệu hàng đầu thế giới
        </p>
      </div>
      <div 
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Duplicate brands for seamless loop */}
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center px-8 py-6 bg-white border border-industrial-200 rounded-lg min-w-[240px]"
          >
            <span className="text-lg text-industrial-700">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
