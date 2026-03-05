import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

interface AddToBasketSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const REGULARS = [
  { img: "/product-1.jpg" },
  { img: "/product-2.jpg" },
  { img: "/product-3.jpg" },
];

function StarRow({
  selectedStar,
  onStarTap,
}: {
  selectedStar: number;
  onStarTap: (n: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onStarTap(star)}
          className="active:scale-110 transition-transform"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={star <= selectedStar ? "#ff9900" : "none"}
              stroke={star <= selectedStar ? "#ff9900" : "#c0c0c0"}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}

export function AddToBasketSheet({ isOpen, onClose }: AddToBasketSheetProps) {
  const [visible, setVisible] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const [selectedStar, setSelectedStar] = useState(0);
  const [nudgeCollapsed, setNudgeCollapsed] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [tickFading, setTickFading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setNudgeCollapsed(false);
      setSelectedStar(0);
      setShowTick(false);
      setTickFading(false);
      setVisible(true);
      const t = setTimeout(() => setSlideIn(true), 16);
      return () => clearTimeout(t);
    } else {
      setSlideIn(false);
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleStarTap = (star: number) => {
    if (nudgeCollapsed) return;
    setSelectedStar(star);
    // Show tick immediately at full opacity
    setShowTick(true);
    setTickFading(false);
    // After 900ms, start fading the tick
    const t1 = setTimeout(() => setTickFading(true), 900);
    // After 1000ms, start collapsing the nudge
    const t2 = setTimeout(() => setNudgeCollapsed(true), 1000);
    // After 1350ms, remove tick from DOM
    const t3 = setTimeout(() => setShowTick(false), 1350);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          slideIn ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 bg-white rounded-t-2xl shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          slideIn ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "82vh" }}
      >
        {/* ── Added to basket header (no image) ── */}
        <div className="flex items-center px-4 py-3 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2 flex-1">
            <div className="w-[22px] h-[22px] bg-[#067D62] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-[#067D62] font-bold text-[18px]">
              Added to basket
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 p-1 ml-1">
            <X size={20} />
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="overflow-y-auto flex-1">
          {/* Review nudge — collapses on star tap */}
          <div
            className="overflow-hidden bg-white border-b border-gray-100"
            style={{
              maxHeight: nudgeCollapsed ? "0px" : "180px",
              opacity: nudgeCollapsed ? 0 : 1,
              transition: "max-height 250ms ease-out, opacity 250ms ease-out",
            }}
          >
            <div className="relative px-4 py-3">
              {/* Product thumb + name */}
              <div className="flex items-center gap-3 mb-[6px]">
                <img
                  src="/ariel-1.jpg"
                  alt="Ariel"
                  className="w-9 h-9 object-contain flex-shrink-0"
                />
                <p className="text-[13px] font-medium text-[#0F1111] leading-tight line-clamp-1">
                  Ariel Washing Liquid, 101 Washes, Original
                </p>
              </div>

              {/* Soft label */}
              <p className="text-[13px] text-gray-400 mb-[10px]">
                You've ordered this before — how was it?
              </p>

              {/* Stars */}
              <StarRow selectedStar={selectedStar} onStarTap={handleStarTap} />

              {/* ✓ overlay — stays visible for ~900ms then fades */}
              {showTick && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-white/90"
                  style={{
                    opacity: tickFading ? 0 : 1,
                    transition: "opacity 350ms ease-out",
                  }}
                >
                  <div className="flex items-center gap-[6px] text-[#067D62]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#067D62"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm font-semibold">Thanks!</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Looking to restock ── */}
          <div className="bg-[#f3f3f3] p-3 mb-[2px]">
            <p className="font-bold text-[15px] text-[#0F1111] mb-[2px]">
              Looking to restock?
            </p>
            <p className="text-[13px] text-gray-500 mb-3">
              Purchase all of your favourites in one bundle
            </p>
            <div className="bg-white rounded-xl p-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-[14px]">Your regulars</span>
                <span className="text-[13px] text-gray-400">3 items</span>
              </div>
              <div className="flex items-center gap-2">
                {REGULARS.map((item, i) => (
                  <div
                    key={i}
                    className="flex-1 aspect-square rounded-lg overflow-hidden bg-[#f7f7f7]"
                  >
                    <img
                      src={item.img}
                      alt={`Regular item ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 flex-shrink-0">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* ── 5% off section ── */}
          <div className="bg-white px-4 pt-4 pb-6">
            <p className="font-bold text-[17px] text-[#0F1111] mb-3">
              5% off on 4 qualifying items
            </p>
            <div className="flex items-start gap-2 mb-3">
              <div className="w-5 h-5 bg-[#067D62] rounded-full flex items-center justify-center flex-shrink-0 mt-[1px]">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-[14px] font-bold text-[#067D62] leading-snug">
                5% off unlocked. If you add more qualifying items, you'll also
                save 5% on them.
              </p>
            </div>
            {/* Progress bar */}
            <div className="w-full h-[6px] bg-[#067D62] rounded-full mb-4" />

            {/* Product suggestion */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-[#f7f7f7] rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="/ariel-3.jpg"
                  alt="Comfort"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-[13px] text-gray-600 leading-snug mb-1">
                  Comfort Fresh Sunshiny Days Fabric Conditioner Softener with
                  Motion-...
                </p>
                <div className="flex items-center gap-[2px]">
                  {[1, 2, 3, 4].map((s) => (
                    <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#ff9900">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                  <svg width="11" height="11" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="sh">
                        <stop offset="70%" stopColor="#ff9900" />
                        <stop offset="70%" stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                      fill="url(#sh)"
                    />
                  </svg>
                  <span className="text-[11px] text-gray-500 ml-1">22,814</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
