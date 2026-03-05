import { Star, ThumbsUp } from "lucide-react";
import { Progress } from "./ui/progress";

export function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      author: "Emma T.",
      date: "18 February 2026",
      rating: 5,
      verified: true,
      title: "Does exactly what it says on the bottle",
      content:
        "I've tried a lot of washing liquids over the years and this is genuinely one of the best. Got a red wine stain out of a white shirt on a 30° wash. Brilliant value for 101 washes too.",
      helpful: 312,
    },
    {
      id: 2,
      author: "James H.",
      date: "11 February 2026",
      rating: 5,
      verified: true,
      title: "Great value, clothes come out smelling fresh",
      content:
        "Bought this for the value and wasn't disappointed. 101 washes from one bottle is unbeatable. Everything comes out clean and smelling great even on shorter cycles.",
      helpful: 198,
    },
    {
      id: 3,
      author: "Sophie R.",
      date: "4 February 2026",
      rating: 4,
      verified: true,
      title: "Works well in cold washes",
      content:
        "I run most of my washes at 20° to save energy and this liquid performs brilliantly. Only reason for 4 stars is the bottle is a bit awkward to pour from, but the product itself is excellent.",
      helpful: 74,
    },
  ];

  const distribution = [
    { stars: 5, percent: 87 },
    { stars: 4, percent: 8 },
    { stars: 3, percent: 2 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 2 },
  ];

  return (
    <div className="bg-white border-t-8 border-gray-100 px-4 py-4">
      <h2 className="font-bold text-[15px] text-[#0F1111] mb-3">Customer reviews</h2>

      {/* Overall rating */}
      <div className="flex items-center gap-2 mb-1">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={18} className="fill-[#ff9900] text-[#ff9900]" />
          ))}
        </div>
        <span className="text-sm font-medium">4.8 out of 5</span>
      </div>
      <p className="text-sm text-gray-500 mb-4">795 global ratings</p>

      {/* Star distribution */}
      <div className="space-y-[6px] mb-6">
        {distribution.map((item) => (
          <div key={item.stars} className="flex items-center gap-3">
            <button className="text-sm text-[#007185] whitespace-nowrap w-10 text-right">
              {item.stars} star
            </button>
            <Progress value={item.percent} className="flex-1 h-[14px]" />
            <span className="text-sm text-gray-500 w-8">{item.percent}%</span>
          </div>
        ))}
      </div>

      {/* Individual reviews */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="font-semibold text-[14px] mb-4">Top reviews from the United Kingdom</h3>
        <div className="space-y-5">
          {reviews.map((review) => (
            <div key={review.id} className="pb-5 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[#e8e8e8] rounded-full flex items-center justify-center text-sm font-semibold text-[#0F1111]">
                  {review.author[0]}
                </div>
                <span className="text-sm font-semibold">{review.author}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      className={
                        star <= review.rating
                          ? "fill-[#ff9900] text-[#ff9900]"
                          : "fill-gray-300 text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold">{review.title}</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Reviewed in the United Kingdom on {review.date}
              </p>
              {review.verified && (
                <p className="text-xs text-[#c7511f] mb-2">Verified Purchase</p>
              )}
              <p className="text-sm text-[#0F1111] leading-snug mb-3">{review.content}</p>
              <button className="flex items-center gap-1 text-sm text-gray-500">
                <ThumbsUp size={13} />
                <span>Helpful ({review.helpful})</span>
              </button>
            </div>
          ))}
        </div>
        <button className="text-sm text-[#007185] mt-3 block">
          See all 795 reviews
        </button>
      </div>
    </div>
  );
}
