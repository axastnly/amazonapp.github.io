import { useState } from "react";
import { MapPin } from "lucide-react";

function PrimeBadge() {
  return (
    <span className="inline-flex items-center gap-[2px]">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#00A8E1" strokeWidth="2" />
        <path d="M9 12l2 2 4-4" stroke="#00A8E1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[#00A8E1] font-bold italic text-[13px] tracking-tight">prime</span>
    </span>
  );
}

export function ProductInfo() {
  const [plan, setPlan] = useState<"subscribe" | "onetime">("onetime");

  return (
    <div className="bg-white border-t-8 border-gray-100 px-4 pt-4 pb-3">
      <div className="border-t border-gray-300 mb-3" />
      <h2 className="text-[17px] font-bold text-[#0F1111] mb-1">Purchase options and add-ons</h2>
      <div className="border-t border-gray-300 mb-3" />

      {/* Ways to buy */}
      <p className="text-sm text-[#0F1111] mb-3">
        Ways to buy: <span className="font-bold">One-time purchase</span>
      </p>

      {/* Plan pills */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setPlan("subscribe")}
          className={`flex-1 rounded p-2 text-left transition-all ${
            plan === "subscribe" ? "border-2 border-[#146eb4]" : "border border-gray-300"
          }`}
        >
          <div className="flex items-center gap-1 mb-[2px]">
            <p className="text-[12px] font-bold text-[#0F1111]">Subscribe &amp; Save</p>
            <span className="text-[10px]">🏷</span>
          </div>
          <p className="text-[14px] font-bold text-[#0F1111]">
            £13<sup className="text-[9px] align-super">59</sup>{" "}
            <span className="text-[11px] font-normal text-gray-500">(£4.25 / l)</span>
          </p>
          <p className="text-[11px] text-gray-500">Tomorrow, 6 Mar</p>
        </button>
        <button
          onClick={() => setPlan("onetime")}
          className={`flex-1 rounded p-2 text-left transition-all ${
            plan === "onetime" ? "border-2 border-[#146eb4]" : "border border-gray-300"
          }`}
        >
          <p className="text-[12px] font-bold text-[#0F1111] mb-[2px]">One-time purchase</p>
          <p className="text-[14px] font-bold text-[#0F1111]">
            £14<sup className="text-[9px] align-super">00</sup>{" "}
            <span className="text-[11px] font-normal text-gray-500">(£4.47 / l)</span>
          </p>
          <p className="text-[11px] text-gray-500">Tomorrow, 6 Mar</p>
        </button>
      </div>

      {/* Big price */}
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-[32px] font-bold text-[#0F1111] leading-none">
          £14<sup className="text-[18px] align-super font-bold">00</sup>
        </span>
        <span className="text-sm text-gray-500">(£4.47 / l)</span>
      </div>
      <button className="text-[#007185] text-sm mb-2">Price history</button>

      {/* Prime + delivery */}
      <p className="text-sm text-[#0F1111] mb-1">
        <PrimeBadge /> <span className="font-bold">Tomorrow</span>
      </p>

      {/* FREE Returns */}
      <p className="text-sm text-[#007600] mb-2">FREE Returns</p>

      {/* Save 5% banner */}
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="bg-[#097138] text-white text-[12px] font-bold px-2 py-[2px] rounded-sm">
          Save 5%
        </span>
        <span className="text-sm text-[#0F1111]">
          on any 4{" "}
          <button className="text-[#007185]">Qualifying items ›</button>
          {" "}|{" "}
          <button className="text-[#007185]">Terms</button>
        </span>
      </div>

      {/* Free delivery */}
      <p className="text-sm text-[#0F1111] mb-1">
        FREE delivery <span className="font-bold">Tomorrow, 6 March</span>. Order within{" "}
        <span className="font-bold text-[#c7511f]">8 hrs 41 mins</span>.{" "}
        <button className="text-[#007185]">Details</button>
      </p>

      {/* Deliver to */}
      <div className="flex items-center gap-1">
        <MapPin size={14} className="text-[#0F1111] flex-shrink-0" />
        <button className="text-[#007185] text-sm">Deliver to acsah - London N1 3</button>
      </div>
    </div>
  );
}
