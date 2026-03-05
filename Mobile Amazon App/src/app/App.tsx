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
    "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBibGFja3xlbnwxfHx8fDE3NzI2NzQ4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1764557159396-419b85356035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwZGV0YWlsJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzI3MTU5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1722448113450-f6860b7fbfe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwcGFja2FnaW5nJTIwYm94fGVufDF8fHx8MTc3MjY5OTMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto">
        <ProductHeader />
      </div>

      <div className="max-w-md mx-auto">
        <ProductTitle />
        <ProductImageCarousel images={productImages} />
        <ProductOptions />
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
    </div>
  );
}