import { useState } from "react";

export function ProductInfo() {
  const [condition, setCondition] = useState<"new" | "used">("new");

  return (
    <div className="bg-white border-t-8 border-gray-100 px-4 pt-4 pb-3">
      <div className="border-t border-gray-300 mb-3" />
      <h2 className="text-[17px] font-bold text-[#0F1111] mb-1">Purchase options and add-ons</h2>
      <div className="border-t border-gray-300 mb-3" />

      {/* Ways to buy */}
      <p className="text-sm text-[#0F1111] mb-3">
        Ways to buy: <span className="font-bold">Buy New</span>
      </p>

      {/* Condition pills */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setCondition("new")}
          className={`flex-1 rounded p-2 text-left transition-all ${
            condition === "new" ? "border-2 border-[#146eb4]" : "border border-gray-300"
          }`}
        >
          <p className="text-[13px] font-bold text-[#0F1111]">Buy New</p>
          <p className="text-[15px] font-bold text-[#0F1111]">
            £399<sup className="text-[10px] align-super">00</sup>
          </p>
          <p className="text-[12px] text-gray-500">Sat 7 Mar</p>
        </button>
        <button
          onClick={() => setCondition("used")}
          className={`flex-1 rounded p-2 text-left transition-all ${
            condition === "used" ? "border-2 border-[#146eb4]" : "border border-gray-300"
          }`}
        >
          <p className="text-[12px] text-gray-500">Used – Very Good</p>
          <p className="text-[15px] font-bold text-[#0F1111]">
            £280<sup className="text-[10px] align-super">85</sup>
          </p>
          <p className="text-[12px] text-gray-500">Sun 8 Mar</p>
        </button>
      </div>

      {/* Big price */}
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-[32px] font-bold text-[#0F1111] leading-none">
          £399<sup className="text-[18px] align-super font-bold">00</sup>
        </span>
        <button className="text-[#007185] text-sm">Price history</button>
      </div>

      {/* Spread the cost */}
      <p className="text-sm text-[#0F1111] mb-2">
        Or <span className="font-bold">Spread the cost at 0% APR.</span> Subject to financial status &amp; eligibility. Credit broker: Amazon EU S.a.r.l, Lender: Barclays.{" "}
        <button className="text-[#007185]">Select plan</button>
      </p>

      {/* Gift card offer */}
      <p className="text-sm text-[#0F1111] mb-1">
        <span className="line-through text-gray-500">£399.00</span>{" "}
        <span className="font-bold">£379.00</span> with a Gift Card if approved for{" "}
        <button className="text-[#007185]">The Amazon Barclaycard.</button>{" "}
        Representative 28.9% APR variable.
      </p>
      <p className="text-xs text-gray-500">
        Credit broker: Amazon EU S.A.R.L, Lender: Barclays. T&amp;Cs apply.
      </p>
    </div>
  );
}
