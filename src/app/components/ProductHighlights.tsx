import { Check } from "lucide-react";

export function ProductHighlights() {
  const highlights = [
    "101 washes per bottle – XXXL mega pack delivers outstanding value for money",
    "Powerful stain & odour removal in just 1 wash – tackles over 100 types of stains including oil, grass and wine",
    "Brrilliant results even in cold & short cycles – saves energy without sacrificing clean",
    "Works on colours and whites – gentle on fabrics while delivering a deep clean",
    "Trusted enzymatic formula breaks down tough stains at the source",
    "Pre-treat cap for direct application to stubborn stains before washing",
  ];

  return (
    <div className="bg-white px-4 py-4 border-t-8 border-gray-100">
      <h2 className="font-bold text-[15px] text-[#0F1111] mb-3">About this item</h2>
      <ul className="space-y-[10px]">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex gap-2 text-sm text-[#0F1111]">
            <Check size={15} className="text-[#0F1111] mt-[2px] flex-shrink-0" />
            <span className="leading-snug">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
