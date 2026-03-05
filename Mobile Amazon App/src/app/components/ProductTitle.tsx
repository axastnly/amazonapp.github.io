export function ProductTitle() {
  return (
    <div className="bg-white px-4 pt-3 pb-2">
      {/* Brand row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[7px] font-bold tracking-widest">SONY</span>
          </div>
          <div>
            <p className="text-sm font-bold leading-tight">Sony</p>
            <p className="text-xs text-[#007185] leading-tight">Visit the Store</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="font-medium">4.2</span>
          <div className="flex">
            {[1, 2, 3, 4].map((s) => (
              <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#ff9900">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
            <svg width="12" height="12" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#ff9900" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#half)" />
            </svg>
          </div>
          <span className="text-[#007185]">(1,151)</span>
        </div>
      </div>

      {/* Product title */}
      <p className="text-sm leading-snug text-[#0F1111]">
        SONY WH-1000XM6 Flagship Noise Cancelling Over-Ear Wireless Bluetooth Headphones, Signature Hi-Res Sound, Comfort, Foldable Design, Durable Case, 30 HR Battery NC On, iOS &amp; Android – Black
      </p>
    </div>
  );
}
