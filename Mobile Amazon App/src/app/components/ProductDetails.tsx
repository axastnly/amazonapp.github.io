import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ProductDetails() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["details"]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="bg-white border-t-8 border-gray-100">
      {/* Product details */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("details")}
          className="w-full px-4 py-3 flex items-center justify-between"
        >
          <span className="font-semibold text-[15px]">Product details</span>
          {expandedSections.includes("details") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("details") && (
          <div className="px-4 pb-4 text-sm space-y-[10px]">
            {[
              ["Brand", "Ariel"],
              ["Scent", "Original"],
              ["Liquid Volume", "3.535 Litres"],
              ["Number of Washes", "101"],
              ["Item Form", "Liquid"],
              ["Specific Uses", "Laundry, Stain Removal"],
              ["Unit Count", "1 Count"],
            ].map(([label, value]) => (
              <div key={label} className="flex">
                <span className="w-2/5 text-gray-500">{label}</span>
                <span className="w-3/5 text-[#0F1111]">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Important information */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("safety")}
          className="w-full px-4 py-3 flex items-center justify-between"
        >
          <span className="font-semibold text-[15px]">Important information</span>
          {expandedSections.includes("safety") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("safety") && (
          <div className="px-4 pb-4 text-sm">
            <p className="font-semibold mb-2">Safety information</p>
            <ul className="text-gray-600 space-y-1 list-disc pl-4">
              <li>Causes serious eye irritation.</li>
              <li>Contains Citronellol; Geraniol; Tetramethyl Acetyloctahydronaphthalenes; Benzyl Salicylate; Methylundecanal; Benzisothiazolinone; Delta-Damascone. May produce an allergic reaction.</li>
              <li>Harmful to aquatic life with long lasting effects.</li>
            </ul>
            <p className="font-semibold mt-3 mb-2">Legal disclaimer</p>
            <p className="text-gray-600">
              Product packaging may vary. Always read and follow label instructions.
            </p>
          </div>
        )}
      </div>

      {/* Returns */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("returns")}
          className="w-full px-4 py-3 flex items-center justify-between"
        >
          <span className="font-semibold text-[15px]">Returns</span>
          {expandedSections.includes("returns") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("returns") && (
          <div className="px-4 pb-4 text-sm text-gray-600">
            <p>Eligible for return within 30 days of receipt. For exceptions and conditions see Amazon's Return Policy.</p>
          </div>
        )}
      </div>
    </div>
  );
}
