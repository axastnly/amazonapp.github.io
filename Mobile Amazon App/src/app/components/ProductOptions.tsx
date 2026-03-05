import { useState } from "react";

const colours = [
  { name: "Black",     hex: "#1a1a1a", delivery: "Saturday" },
  { name: "Silver",    hex: "#c0c0c0", delivery: "Tomorrow" },
  { name: "Sand Pink", hex: "#e8cfc5", delivery: "Tomorrow" },
];

function PrimeBadge() {
  return (
    <div className="flex items-center gap-[2px]">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#00A8E1" strokeWidth="2" />
        <path d="M9 12l2 2 4-4" stroke="#00A8E1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[#00A8E1] font-bold italic text-[11px] tracking-tight">prime</span>
    </div>
  );
}

export function ProductOptions() {
  const [selectedColour, setSelectedColour] = useState("Black");

  return (
    <div className="bg-white px-4 py-3">
      <p className="text-sm mb-3">
        <span className="font-normal text-[#0F1111]">Colour Name: </span>
        <span className="font-bold text-[#0F1111]">{selectedColour}</span>
      </p>

      <div className="flex gap-2">
        {colours.map((colour) => (
          <button
            key={colour.name}
            onClick={() => setSelectedColour(colour.name)}
            className={`flex-1 rounded p-2 text-left transition-all ${
              selectedColour === colour.name
                ? "border-2 border-[#146eb4]"
                : "border border-gray-300"
            }`}
          >
            <div
              className="w-10 h-10 rounded-full mx-auto mb-2 border border-gray-200"
              style={{ backgroundColor: colour.hex }}
            />
            <p className="text-[12px] font-bold text-[#0F1111] leading-tight mb-[2px]">{colour.name}</p>
            <p className="text-[12px] text-[#0F1111] leading-tight mb-[2px]">
              £399<sup className="text-[9px] align-super">00</sup>
            </p>
            <div className="mb-[2px]">
              <PrimeBadge />
            </div>
            <p className="text-[11px] text-[#007600] leading-tight mb-[1px]">In stock</p>
            <p className="text-[11px] text-[#0F1111] leading-tight">FREE Delivery</p>
            <p className="text-[11px] font-bold text-[#0F1111] leading-tight">{colour.delivery}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
