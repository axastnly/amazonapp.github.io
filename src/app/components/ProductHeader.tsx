import { ArrowLeft, Search, ScanLine, Mic } from "lucide-react";

export function ProductHeader() {
  return (
    <div className="sticky top-0 z-50 bg-[#232f3e] px-3 py-2 flex items-center gap-2">
      <button className="text-white p-1">
        <ArrowLeft size={22} />
      </button>
      <div className="flex-1">
        <div className="bg-white rounded-md px-3 py-[7px] flex items-center gap-2">
          <Search size={16} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search or ask a question"
            className="flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-400"
          />
        </div>
      </div>
      <button className="text-white p-1">
        <ScanLine size={22} />
      </button>
      <button className="text-white p-1">
        <Mic size={22} />
      </button>
    </div>
  );
}
