import { Home, User, ShoppingCart, Menu } from "lucide-react";
import { ProductHeader } from "./components/ProductHeader";
import { ProductTitle } from "./components/ProductTitle";
import { ProductImageCarousel } from "./components/ProductImageCarousel";
import { ProductInfo } from "./components/ProductInfo";
import { ProductHighlights } from "./components/ProductHighlights";
import { ProductOptions } from "./components/ProductOptions";
import { ProductActions } from "./components/ProductActions";
import { ProductDetails } from "./components/ProductDetails";
import { CustomerReviews } from "./components/CustomerReviews";

export default function App() {
  const productImages = [
    "/ariel-1.jpg",
    "/ariel-2.jpg",
    "/ariel-3.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto">
        <ProductHeader />
      </div>

      <div className="max-w-md mx-auto">
        <ProductTitle />
        <ProductImageCarousel images={productImages} />
        <ProductInfo />
        <ProductActions />
        <ProductHighlights />
        <ProductDetails />
        <CustomerReviews />

        <div className="bg-white px-4 py-6 text-center text-sm text-gray-600 border-t-8 border-gray-100">
          <p className="mb-2">
            See personalized recommendations
          </p>
          <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Sign in
          </button>
          <p className="mt-2">
            New customer?{" "}
            <button className="text-[#007185]">
              Start here.
            </button>
          </p>
        </div>
      </div>
      {/* Bottom padding so content clears the nav bar */}
      <div className="h-[60px]" />

      {/* ── Persistent bottom nav bar ── */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-30 flex items-center justify-around py-3 px-2 border-t border-gray-100 bg-white">
        <button className="p-2 text-gray-600">
          <Home size={24} />
        </button>
        <button className="p-2 text-gray-600">
          <User size={24} />
        </button>
        <button className="relative p-2 text-gray-600">
          <ShoppingCart size={24} />
          <span className="absolute top-0 right-0 bg-[#ff9900] text-black text-[9px] font-bold rounded-full min-w-[15px] h-[15px] flex items-center justify-center px-[2px]">
            14
          </span>
        </button>
        <button className="p-2 text-gray-600">
          <Menu size={24} />
        </button>
        <button className="p-2 relative w-10 h-10 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#FF6900] flex items-end justify-end p-[2px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#3366CC]" />
          </div>
        </button>
      </div>
    </div>
  );
}