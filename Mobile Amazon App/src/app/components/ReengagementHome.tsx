import { useState } from "react";
import {
  Search,
  Mic,
  Camera,
  MapPin,
  ChevronDown,
  Home,
  User,
  ShoppingCart,
  Menu,
  Star,
  ChevronRight,
  X,
  Users,
} from "lucide-react";

interface Props {
  onBack: () => void;
}

// ── Nudge card — social proof ──────────────────────────────────────────────
function NudgeCard() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="mx-4 my-2 bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden">
      <div className="flex items-start justify-between px-3 pt-3 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
            <Users size={16} className="text-amber-600" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-gray-900 leading-tight">
              3 people are thinking of buying this
            </p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Based on the last 24 hours
            </p>
          </div>
        </div>
        <button onClick={() => setDismissed(true)} className="p-1 text-gray-400">
          <X size={14} />
        </button>
      </div>

      {/* Mini product row */}
      <div className="flex items-center gap-3 px-3 pb-3 border-t border-gray-50 pt-2">
        <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
          <img src="/ariel-1.jpg" alt="Ariel" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] text-gray-800 font-medium leading-tight line-clamp-2">
            Ariel All-in-1 PODS Washing Liquid Laundry Detergent Tablets
          </p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < 4 ? "text-[#FF9900] fill-[#FF9900]" : "text-gray-300 fill-gray-300"}
              />
            ))}
            <span className="text-[10px] text-[#007185] ml-1">4,821</span>
          </div>
          <p className="text-[12px] text-gray-500 mt-0.5 italic line-clamp-1">
            "Does exactly what it says — brilliant for colours"
          </p>
        </div>
        <button className="shrink-0 bg-[#FF9900] text-black text-[11px] font-semibold rounded-lg px-3 py-1.5">
          View
        </button>
      </div>
    </div>
  );
}

// ── Deal card ──────────────────────────────────────────────────────────────
function DealCard({
  label,
  discount,
  tag,
  bg,
}: {
  label: string;
  discount: string;
  tag: string;
  bg: string;
}) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${bg} flex flex-col items-center justify-end`} style={{ height: 140 }}>
      <span className="absolute top-2 left-2 bg-[#CC0C39] text-white text-[10px] font-bold px-2 py-0.5 rounded">
        {discount}
      </span>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center text-2xl">
          {label}
        </div>
      </div>
      <p className="relative z-10 text-[10px] font-semibold text-[#CC0C39] bg-white/90 w-full text-center py-1">
        {tag}
      </p>
    </div>
  );
}

// ── Sponsored product pill ─────────────────────────────────────────────────
function SponsoredCard({ emoji, name }: { emoji: string; name: string }) {
  return (
    <div className="shrink-0 w-32 bg-white rounded-xl border border-gray-200 p-2 flex flex-col items-center gap-1">
      <div className="w-full h-24 bg-gray-50 rounded-lg flex items-center justify-center text-4xl">
        {emoji}
      </div>
      <p className="text-[10px] text-gray-700 text-center leading-tight line-clamp-2">{name}</p>
      <span className="text-[9px] text-gray-400">Sponsored</span>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export function ReengagementHome({ onBack }: Props) {
  const categories = ["Everyday Essentials", "Grocery", "Beauty", "Electronics", "Home"];

  return (
    <div className="min-h-screen bg-[#f3f3f3] max-w-md mx-auto flex flex-col">
      {/* ── Sticky orange header ── */}
      <div className="sticky top-0 z-30 bg-[#FF9900]">
        {/* Search bar */}
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center bg-white rounded-full px-3 py-2 gap-2">
            <Search size={18} className="text-gray-500 shrink-0" />
            <span className="flex-1 text-[14px] text-gray-400">Search or ask a question</span>
            <Camera size={18} className="text-gray-500 shrink-0" />
            <Mic size={18} className="text-gray-500 shrink-0 ml-1" />
          </div>
        </div>

        {/* Category chips */}
        <div className="flex items-center gap-2 px-3 pb-2 overflow-x-auto no-scrollbar">
          <button className="shrink-0 flex items-center gap-1 bg-white/20 text-white text-[12px] font-medium px-3 py-1.5 rounded-full">
            <MapPin size={12} />
            N1 3 <ChevronDown size={12} />
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className="shrink-0 bg-white/20 text-white text-[12px] font-medium px-3 py-1.5 rounded-full"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto pb-[60px]">
        {/* Hero banner */}
        <div className="relative mx-3 mt-3 rounded-2xl overflow-hidden bg-[#FF9900] p-4 shadow">
          <p className="text-white text-[22px] font-extrabold leading-tight">
            Spring Deal Days<br />is coming
          </p>
          <p className="text-white/80 text-[13px] mt-1">10 – 16 March</p>
          <div className="mt-3 w-full h-28 bg-white/10 rounded-xl flex items-center justify-center gap-3">
            <div className="w-20 h-20 bg-amber-200/50 rounded-xl flex items-center justify-center text-4xl">📦</div>
            <div className="w-16 h-16 bg-orange-300/50 rounded-xl flex items-center justify-center text-3xl">🎧</div>
            <div className="w-12 h-12 bg-yellow-200/50 rounded-xl flex items-center justify-center text-2xl">📷</div>
          </div>
        </div>

        {/* Sponsored horizontal scroll */}
        <div className="mt-4 px-3">
          <p className="text-[13px] text-gray-500 mb-2">
            For you <span className="text-[11px]">· Sponsored</span>
          </p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <SponsoredCard emoji="💄" name="NUDE Matte Liquid Lipstick Set" />
            <SponsoredCard emoji="🧴" name="NIVEA Luminous 630 UV Fluid SPF50" />
            <SponsoredCard emoji="🧼" name="CeraVe Hydrating Cleanser 473ml" />
            <SponsoredCard emoji="💅" name="OPI Nail Polish — Bubble Bath" />
          </div>
        </div>

        {/* Prime banner */}
        <div className="mx-3 mt-4 rounded-xl overflow-hidden bg-[#1A54B9] flex items-center p-4 gap-3">
          <div className="flex-1">
            <p className="text-white text-[14px] font-bold leading-snug">
              Read for free with Prime.<br />Get a £5 reward.
            </p>
            <button className="mt-2 bg-white text-[#1A54B9] text-[12px] font-semibold rounded-full px-4 py-1.5">
              Download an eBook
            </button>
            <p className="text-white/60 text-[10px] mt-1">Terms apply &gt;</p>
          </div>
          <div className="text-5xl shrink-0">📖</div>
        </div>

        {/* Spring Deal Days stripe */}
        <div className="mx-3 mt-3 bg-[#FF9900] rounded-xl py-2 text-center">
          <p className="text-white text-[13px] font-bold italic">
            Spring Deal Days: 10 – 16 March
          </p>
        </div>

        {/* Recommended deals */}
        <div className="mt-4 px-3">
          <p className="text-[17px] font-bold text-gray-900 mb-2">Recommended deals for you</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {/* Deals card 1 */}
            <div className="shrink-0 w-56 bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[13px] font-bold text-gray-900">Deals for you</p>
                <ChevronRight size={14} className="text-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <DealCard label="🎒" discount="15% off" tag="Ends in 40:44" bg="bg-gray-100" />
                <DealCard label="🔊" discount="24% off" tag="Limited time" bg="bg-gray-100" />
                <DealCard label="✂️" discount="15% off" tag="Limited time" bg="bg-gray-100" />
                <DealCard label="🛏️" discount="22% off" tag="Limited time" bg="bg-gray-100" />
              </div>
            </div>

            {/* Deals card 2 */}
            <div className="shrink-0 w-56 bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[13px] font-bold text-gray-900">Delivered today</p>
                <ChevronRight size={14} className="text-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <DealCard label="⌨️" discount="24% off" tag="Limited time" bg="bg-blue-50" />
                <DealCard label="🖱️" discount="18% off" tag="Limited time" bg="bg-blue-50" />
                <DealCard label="🔦" discount="37% off" tag="Limited time" bg="bg-blue-50" />
                <DealCard label="🧹" discount="20% off" tag="Limited time" bg="bg-blue-50" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Nudge card — social proof ── */}
        <div className="mt-4">
          <p className="px-3 text-[17px] font-bold text-gray-900 mb-2">Picked for you</p>
          <NudgeCard />
        </div>

        {/* Keep shopping */}
        <div className="mt-4 px-3">
          <p className="text-[17px] font-bold text-gray-900 mb-2">Keep shopping for</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {[
              { emoji: "💄", label: "Lipsticks" },
              { emoji: "🧴", label: "Skincare" },
              { emoji: "🧺", label: "Laundry" },
              { emoji: "🏠", label: "Home" },
            ].map((item) => (
              <div
                key={item.label}
                className="shrink-0 w-24 bg-white rounded-xl border border-gray-200 flex flex-col items-center py-3 gap-2"
              >
                <span className="text-3xl">{item.emoji}</span>
                <p className="text-[12px] font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second nudge deeper in the feed */}
        <div className="mt-4">
          <p className="px-3 text-[17px] font-bold text-gray-900 mb-2">Trending near you</p>
          <div className="mx-4 bg-white rounded-xl border border-green-200 shadow-sm p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <Users size={18} className="text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-gray-900">
                5 people nearby bought this this week
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-[#FF9900] fill-[#FF9900]" />
                ))}
                <span className="text-[10px] text-gray-500 ml-1">
                  "Perfect for sensitive skin"
                </span>
              </div>
            </div>
            <button className="shrink-0 text-[12px] font-semibold text-[#007185]">
              View
            </button>
          </div>
        </div>

        <div className="h-6" />
      </div>

      {/* ── Bottom nav ── */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-30 flex items-center justify-around py-3 px-2 border-t border-gray-100 bg-white">
        <button className="p-2 text-[#FF9900]">
          <Home size={24} />
        </button>
        <button className="p-2 text-gray-600">
          <User size={24} />
        </button>
        <button className="relative p-2 text-gray-600">
          <ShoppingCart size={24} />
          <span className="absolute top-0 right-0 bg-[#FF9900] text-black text-[9px] font-bold rounded-full min-w-[15px] h-[15px] flex items-center justify-center px-[2px]">
            14
          </span>
        </button>
        <button className="p-2 text-gray-600">
          <Menu size={24} />
        </button>
        <button onClick={onBack} className="p-2 relative w-10 h-10 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#FF6900] flex items-end justify-end p-[2px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#3366CC]" />
          </div>
        </button>
      </div>
    </div>
  );
}
