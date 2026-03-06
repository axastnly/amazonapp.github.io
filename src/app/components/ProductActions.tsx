import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AddToBasketSheet } from "./AddToBasketSheet";

export function ProductActions() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="bg-white px-4 pt-3 pb-4">
      {/* In stock */}
      <p className="text-[#007600] font-bold text-sm mb-3">In stock</p>

      {/* Quantity */}
      <div className="border border-gray-300 rounded px-3 py-2 flex items-center justify-between mb-3 w-44">
        <span className="text-sm text-[#0F1111]">Quantity: 1</span>
        <ChevronDown size={16} className="text-[#0F1111]" />
      </div>

      {/* Add to basket */}
      <button
        className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-[#0F1111] text-[15px] font-normal rounded-full py-[10px] mb-2 transition-colors"
        onClick={() => setSheetOpen(true)}
      >
        Add to basket
      </button>

      {/* Buy Now */}
      <button className="w-full bg-[#ffa41c] hover:bg-[#ff8f00] text-[#0F1111] text-[15px] font-normal rounded-full py-[10px] transition-colors">
        Buy Now
      </button>

      <AddToBasketSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </div>
  );
}
