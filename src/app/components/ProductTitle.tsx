import { useState } from "react";

export function ProductTitle() {
  const [showSustainability, setShowSustainability] = useState(false);

  return (
    <div className="bg-white px-4 pt-3 pb-3">
      {/* Purchased info */}
      <p className="text-[13px] font-bold text-[#0F1111]">Purchased 2 times</p>
      <p className="text-[12px] text-[#0F1111] mb-[2px]">Last purchased on 28 Jun 2025</p>
      <button className="text-[12px] text-[#007185] mb-3">View order</button>

      {/* Store + rating row */}
      <div className="flex items-center justify-between mb-2">
        <button className="text-[13px] text-[#007185]">Visit the Ariel Store</button>
        <div className="flex items-center gap-1 text-xs">
          <span className="font-medium">4.8</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#ff9900">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>
          <span className="text-[#007185]">(795)</span>
        </div>
      </div>

      {/* Product title */}
      <p className="text-sm leading-snug text-[#0F1111] mb-2">
        Ariel Washing Liquid Laundry Detergent, Clothes Washing Liquid, 101 Washes, Stain Remover for Clothes &amp; Odour Removal in 1 Use, Brrrillient Even In Cold &amp; Short
      </p>

      {/* Amazon's Choice badge */}
      <div className="inline-flex items-center bg-[#232f3e] rounded px-2 py-[3px] mb-2">
        <span className="text-white text-[11px]">Amazon's </span>
        <span className="text-[#ff9900] text-[11px] font-bold ml-[2px]">Choice</span>
      </div>

      {/* Sustainability */}
      <div className="mb-1">
        <button
          onClick={() => setShowSustainability(!showSustainability)}
          className="flex items-center gap-1 text-[13px] text-[#007185]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a9e3a" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#5a9e3a" />
            <path d="M8 13s1.5 2 4 2 4-2 4-2" stroke="white" strokeLinecap="round" />
            <path d="M15 9c-.5 2-2 3.5-4.5 3" stroke="white" strokeLinecap="round" />
            <path d="M9 9c.5 2 2 3.5 4.5 3" stroke="white" strokeLinecap="round" />
          </svg>
          <span>2 sustainability features</span>
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#007185" strokeWidth="2"
            className={`transition-transform ${showSustainability ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {/* 5K+ bought */}
      <p className="text-[12px] text-[#0F1111]">
        <span className="font-bold">5K+</span> bought in past month
      </p>
    </div>
  );
}
