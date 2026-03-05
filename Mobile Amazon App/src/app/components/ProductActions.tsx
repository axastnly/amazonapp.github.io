import { MapPin, ChevronDown } from "lucide-react";

function PrimeBadge() {
  return (
    <div className="flex items-center gap-[3px]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#00A8E1" strokeWidth="2" />
        <path d="M9 12l2 2 4-4" stroke="#00A8E1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[#00A8E1] font-bold italic text-[13px] tracking-tight">prime</span>
    </div>
  );
}

export function ProductActions() {
  return (
    <div className="bg-white px-4 pt-3 pb-4">
      {/* Prime */}
      <div className="mb-[3px]">
        <PrimeBadge />
      </div>

      {/* FREE Returns */}
      <p className="text-sm text-[#007600] mb-1">FREE Returns</p>

      {/* Delivery */}
      <p className="text-sm text-[#0F1111] mb-1">
        FREE delivery <span className="font-bold">Saturday, 7 March</span>. Order within{" "}
        <span className="font-bold text-[#c7511f]">5 hrs 39 mins</span>.{" "}
        <button className="text-[#007185]">Details</button>
      </p>

      {/* Deliver to */}
      <div className="flex items-center gap-1 mb-3">
        <MapPin size={14} className="text-[#0F1111] flex-shrink-0" />
        <button className="text-[#007185] text-sm">Deliver to acsah - London N1 3</button>
      </div>

      {/* In stock */}
      <p className="text-[#007600] font-bold text-sm mb-3">In stock</p>

      {/* Quantity */}
      <div className="border border-gray-300 rounded px-3 py-2 flex items-center justify-between mb-3 w-44">
        <span className="text-sm text-[#0F1111]">Quantity: 1</span>
        <ChevronDown size={16} className="text-[#0F1111]" />
      </div>

      {/* Add to basket */}
      <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-[#0F1111] text-[15px] font-normal rounded-full py-[10px] mb-2 transition-colors">
        Add to basket
      </button>

      {/* Buy Now */}
      <button className="w-full bg-[#ffa41c] hover:bg-[#ff8f00] text-[#0F1111] text-[15px] font-normal rounded-full py-[10px] transition-colors">
        Buy Now
      </button>
    </div>
  );
}
