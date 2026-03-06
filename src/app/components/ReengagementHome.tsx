import { useState, useRef } from "react";
import { asset } from "./ui/utils";
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
} from "lucide-react";

interface Props {
  onBack: () => void;
}

// ── Hero banner carousel — native scroll-snap for reliable mobile swipe ───
function HeroBannerCarousel() {
  const [slide, setSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slides = [asset("/banner.jpg"), asset("/banner2.jpg")];

  const goTo = (i: number) => {
    scrollRef.current?.scrollTo({ left: scrollRef.current.clientWidth * i, behavior: "smooth" });
    setSlide(i);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const i = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
    setSlide(i);
  };

  return (
    <div className="relative" style={{ height: 200 }}>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar h-full"
        onScroll={handleScroll}
      >
        {slides.map((src, i) => (
          <img key={i} src={src} alt={`Banner ${i + 1}`}
            className="snap-start shrink-0 w-full h-full object-cover" />
        ))}
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === slide ? "bg-white" : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}

// ── Deal card — fixed height ───────────────────────────────────────────────
function DealCard({ img, discount, tag, bg }: { img: string; discount: string; tag: string; bg: string }) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${bg} flex flex-col`} style={{ height: 120 }}>
      <span className="absolute top-1.5 left-1.5 bg-[#CC0C39] text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
        {discount}
      </span>
      <div className="flex-1 flex items-center justify-center p-2">
        <img src={img} alt="" className="h-16 w-full object-contain" />
      </div>
      <p className="text-[9px] font-semibold text-[#CC0C39] bg-white/90 w-full text-center py-0.5">{tag}</p>
    </div>
  );
}

// ── Sponsored card — fixed image height ───────────────────────────────────
function SponsoredCard({ img, name, price }: { img: string; name: string; price: string }) {
  return (
    <div className="shrink-0 w-28 bg-[#f5f5f5] rounded-xl overflow-hidden flex flex-col">
      <div className="h-24 flex items-center justify-center p-2">
        <img src={img} alt={name} className="h-full w-full object-contain" />
      </div>
      <div className="px-2 pb-2 flex flex-col gap-0.5">
        <p className="text-[10px] text-gray-700 leading-tight line-clamp-2">{name}</p>
        <p className="text-[11px] font-bold text-gray-900">{price}</p>
        <span className="text-[9px] text-gray-400">Sponsored</span>
      </div>
    </div>
  );
}

// ── Order Again card — grey bg, fixed image height, price inside ──────────
function OrderAgainCard({ img, name, price, lastOrdered }: {
  img: string; name: string; price: string; lastOrdered: string;
}) {
  return (
    <div className="bg-[#f5f5f5] rounded-xl overflow-hidden flex flex-col">
      {/* Fixed-height image area — identical for all cards */}
      <div className="h-28 flex items-center justify-center p-2">
        <img src={img} alt={name} className="h-full w-full object-contain" />
      </div>
      <div className="px-2 pb-2.5 flex flex-col gap-0.5">
        <p className="text-[11px] text-gray-800 leading-snug line-clamp-2">{name}</p>
        <p className="text-[13px] font-bold text-gray-900">{price}</p>
        <p className="text-[10px] text-gray-400">Ordered {lastOrdered}</p>
      </div>
    </div>
  );
}

// ── Review nudge — tight, Amazon-style ────────────────────────────────────
function ReviewNudge() {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  function handleStar(n: number) {
    setSelected(n);
    setConfirmed(true);
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5 flex flex-col gap-2">
      {/* Image + one-liner copy */}
      <div className="flex items-center gap-2.5">
        <div className="w-12 h-12 shrink-0 rounded-lg bg-[#f5f5f5] overflow-hidden flex items-center justify-center">
          <img src={asset("/p7.png")} alt="CeraVe" className="h-full w-full object-contain" />
        </div>
        <div className="flex flex-col gap-0.5 flex-1">
          <p className="text-[12px] text-gray-700 leading-snug">
            You read reviews before buying this. <span className="text-gray-500">3 people are deciding right now.</span>
          </p>
          <p className="text-[10px] text-gray-400">Ordered 1 month ago</p>
        </div>
      </div>

      {/* Stars → confirmation */}
      {confirmed ? (
        <div className="flex items-center gap-2">
          {/* Locked-in stars */}
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={20}
                className={n <= selected ? "text-[#FF9900] fill-[#FF9900]" : "text-gray-300 fill-gray-300"} />
            ))}
          </div>
          <span className="text-[12px] text-gray-600">Thanks! </span>
          <button className="text-[12px] text-[#007185] font-medium underline-offset-2 underline">
            Write a review
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} aria-label={`${n} star`}
              onMouseEnter={() => setHovered(n)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => handleStar(n)}
            >
              <Star size={26}
                className={n <= (hovered || selected) ? "text-[#FF9900] fill-[#FF9900]" : "text-gray-300 fill-gray-300"} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export function ReengagementHome({ onBack }: Props) {
  const categories = ["Everyday Essentials", "Grocery", "Beauty", "Electronics", "Home"];

  const orderAgainProducts = [
    { img: asset("/p7.png"),  name: "CeraVe Hydrating Cleanser 236ml",         price: "£9.50",  lastOrdered: "1 month ago"  },
    { img: asset("/p1.png"),  name: "NIVEA Cashmere & Cottonseed Shower 250ml", price: "£3.50",  lastOrdered: "3 months ago" },
    { img: asset("/p3.png"),  name: "OGX Argan Oil Shampoo 385ml",              price: "£8.49",  lastOrdered: "6 weeks ago"  },
    { img: asset("/p2.png"),  name: "Binit 40 Everyday Refuse Sacks",           price: "£5.99",  lastOrdered: "2 months ago" },
  ];

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto flex flex-col">

      {/* ── Sticky header ── */}
      <div className="sticky top-0 z-30 bg-[#FF9900] pt-2">
        <div className="px-3 pb-2">
          <div className="flex items-center bg-white rounded-full px-3 py-2 gap-2">
            <Search size={18} className="text-gray-500 shrink-0" />
            <span className="flex-1 text-[14px] text-gray-400">Search or ask a question</span>
            <Camera size={18} className="text-gray-500 shrink-0" />
            <Mic size={18} className="text-gray-500 shrink-0 ml-1" />
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 pb-2 overflow-x-auto no-scrollbar">
          <button className="shrink-0 flex items-center gap-1 bg-white/20 text-black text-[12px] font-medium px-3 py-1 rounded-full">
            <MapPin size={11} /> N1 3 <ChevronDown size={11} />
          </button>
          {categories.map((c) => (
            <button key={c} className="shrink-0 bg-white/20 text-black text-[12px] font-medium px-3 py-1 rounded-full">
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex-1 overflow-y-auto pb-[60px]">

        <HeroBannerCarousel />

        {/* Sponsored */}
        <div className="mt-4 px-3">
          <p className="text-[12px] text-gray-400 mb-2">For you · Sponsored</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <SponsoredCard img={asset("/p4.png")}  name="Finish Dishwasher Tablets x30"       price="£6.00"  />
            <SponsoredCard img={asset("/p5.png")}  name="Comfort Pure Fabric Conditioner 1L"  price="£4.25"  />
            <SponsoredCard img={asset("/p12.png")} name="The Inkey List Ceramide Moisturizer" price="£12.00" />
            <SponsoredCard img={asset("/p3.png")}  name="OGX Argan Oil Shampoo 385ml"         price="£8.49"  />
          </div>
        </div>

        {/* Deals */}
        <div className="mt-4 px-3">
          <p className="text-[17px] font-bold text-gray-900 mb-2">Recommended deals for you</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <div className="shrink-0 w-56 bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[13px] font-bold text-gray-900">Deals for you</p>
                <ChevronRight size={14} className="text-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-1">
                <DealCard img={asset("/p11.png")} discount="24% off" tag="Limited time"  bg="bg-gray-100" />
                <DealCard img={asset("/p10.png")} discount="15% off" tag="Ends in 40:44" bg="bg-gray-100" />
                <DealCard img={asset("/p4.png")}  discount="22% off" tag="Limited time"  bg="bg-gray-100" />
                <DealCard img={asset("/p5.png")}  discount="37% off" tag="Limited time"  bg="bg-gray-100" />
              </div>
            </div>
            <div className="shrink-0 w-56 bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[13px] font-bold text-gray-900">Based on your shopping</p>
                <ChevronRight size={14} className="text-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-1">
                <DealCard img={asset("/p1.png")}  discount="20% off" tag="Limited time" bg="bg-gray-100" />
                <DealCard img={asset("/p3.png")}  discount="18% off" tag="Limited time" bg="bg-gray-100" />
                <DealCard img={asset("/p8.png")}  discount="15% off" tag="Limited time" bg="bg-gray-100" />
                <DealCard img={asset("/p9.png")}  discount="30% off" tag="Limited time" bg="bg-gray-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Ready to restock */}
        <div className="mt-5 px-3">
          <p className="text-[17px] font-bold text-gray-900 mb-3">Ready to restock?</p>

          <ReviewNudge />

          <div className="grid grid-cols-2 gap-2 mt-3">
            {orderAgainProducts.map((p) => (
              <OrderAgainCard key={p.name} {...p} />
            ))}
          </div>
          <button className="mt-2 text-[13px] font-semibold text-[#007185]">
            See more past orders →
          </button>
        </div>

        <div className="h-6" />
      </div>

      {/* ── Bottom nav ── */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-30 flex items-center justify-around py-3 px-2 border-t border-gray-100 bg-white">
        <button className="p-2 text-[#FF9900]" aria-label="Home"><Home size={24} /></button>
        <button className="p-2 text-gray-600" aria-label="Account"><User size={24} /></button>
        <button className="relative p-2 text-gray-600" aria-label="Cart">
          <ShoppingCart size={24} />
          <span className="absolute top-0 right-0 bg-[#FF9900] text-black text-[9px] font-bold rounded-full min-w-[15px] h-[15px] flex items-center justify-center px-[2px]">14</span>
        </button>
        <button className="p-2 text-gray-600" aria-label="Menu"><Menu size={24} /></button>
        <button onClick={onBack} aria-label="Back" className="p-2">
          <div className="w-7 h-7 rounded-full bg-[#FF6900] flex items-end justify-end p-[3px]">
            <div className="w-[11px] h-[11px] rounded-full bg-[#3366CC]" />
          </div>
        </button>
      </div>
    </div>
  );
}
