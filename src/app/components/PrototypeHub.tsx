import { RotateCcw, Sparkles } from "lucide-react";

interface Props {
  onFlow: (flow: "reorder" | "reengagement") => void;
}

export function PrototypeHub({ onFlow }: Props) {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col max-w-md mx-auto">

      {/* Clean white header — logo + subtitle, no orange bg */}
      <div className="bg-white px-6 pt-12 pb-6 border-b border-gray-100">
        <img src="/amazon-logo.webp" alt="Amazon" className="h-8 w-auto object-contain" />
        <p className="text-[13px] text-gray-500 mt-2">Prototype — choose a flow to explore</p>
      </div>

      {/* Flow cards */}
      <div className="flex-1 flex flex-col gap-4 px-5 py-8">

        {/* Flow 1 — Reorder */}
        <button
          onClick={() => onFlow("reorder")}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left active:scale-[0.98] transition-transform"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFF3CD] flex items-center justify-center shrink-0">
              <RotateCcw size={24} className="text-[#FF9900]" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#FF9900]">Flow 1</span>
              <h2 className="text-[18px] font-bold text-gray-900 mt-0.5">Reorder</h2>
              <p className="text-[13px] text-gray-500 mt-1 leading-snug">
                User quickly reorders a frequently bought product — Ariel laundry pods.
              </p>
              <div className="mt-3 inline-block bg-[#FF9900] text-black text-[13px] font-semibold rounded-lg px-4 py-1.5">
                Start →
              </div>
            </div>
          </div>
        </button>

        {/* Flow 2 — Reengagement */}
        <button
          onClick={() => onFlow("reengagement")}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left active:scale-[0.98] transition-transform"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8F4FD] flex items-center justify-center shrink-0">
              <Sparkles size={24} className="text-[#007185]" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#007185]">Flow 2</span>
              <h2 className="text-[18px] font-bold text-gray-900 mt-0.5">Reengagement</h2>
              <p className="text-[13px] text-gray-500 mt-1 leading-snug">
                Lapsed user returns to browse — personalised homepage with deals, nudges &amp; social proof.
              </p>
              <div className="mt-3 inline-block bg-[#007185] text-white text-[13px] font-semibold rounded-lg px-4 py-1.5">
                Start →
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-[12px] text-gray-500 px-6 pb-3">
        Tap the avatar icon (bottom right) on any screen to return here.
      </p>
      <p className="text-center text-[11px] text-gray-400 pb-8">Internal prototype — not for distribution</p>
    </div>
  );
}
