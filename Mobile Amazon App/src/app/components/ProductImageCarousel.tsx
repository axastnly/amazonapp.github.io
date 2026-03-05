import { useState } from "react";
import { Heart, Share2 } from "lucide-react";

interface ProductImageCarouselProps {
  images: string[];
}

export function ProductImageCarousel({ images }: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x > rect.width / 2) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <div className="bg-white">
      {/* Image */}
      <div
        className="aspect-square overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={images[currentIndex]}
          alt={`Product image ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Dots + action icons */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <div className="flex items-center gap-[6px]">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#0F1111] w-[10px] h-[10px]"
                  : "bg-gray-300 w-2 h-2"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#0F1111]">
            <Heart size={22} strokeWidth={1.5} />
          </button>
          <button className="text-[#0F1111]">
            <Share2 size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
