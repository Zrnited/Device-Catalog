import { ArrowRightCircle, Star } from "lucide-react";
import type { Product } from "../../types";
import { useState } from "react";

interface Props {
  device: Product;
}

export default function ProductCard({ device }: Props) {
  const [hover, setHover] = useState<true | null>(null);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(null)}
      className="border border-gray-500 rounded-md cursor-pointer hover:shadow-lg transition ease-in-out delay-100 bg-white relative"
    >
      <div className="bg-[#072320]/10 h-50 p-1 flex items-center justify-center">
        <img
          alt="product-img"
          loading="lazy"
          decoding="async"
          src={device.thumbnail ?? ""}
          className="w-[70%] h-auto"
        />
      </div>
      <div className="p-5 space-y-2 rounded-b-md">
        <p className="uppercase font-semibold text-sm">
          {device.category ?? ""}
        </p>
        <h1 className="font-grotesk font-bold text-black">
          {device.title ?? ""}
        </h1>
        <div className="flex justify-between w-full items-center text-sm">
          <p className="capitalize">{device.brand ?? "Brand Unknown"}</p>
          <div className="flex items-center gap-1">
            <Star size={18} />
            <p>{device.rating ?? 0}</p>
          </div>
        </div>
        <h1 className="font-semibold text-lg font-grotesk text-black">
          ${device.price ?? 0}
        </h1>
      </div>
      {/* stock status */}
      {device.availabilityStatus && (
        <p
          className={`py-1 capitalize absolute top-3 left-3 rounded-full text-sm font-grotesk px-3 text-white ${device.availabilityStatus.toLocaleLowerCase().includes("in") ? "bg-green-600" : device.availabilityStatus.toLocaleLowerCase().includes("low") ? "bg-yellow-600" : "bg-red-600"}`}
        >
          {device.availabilityStatus}
        </p>
      )}
      {hover && <ArrowRightCircle size={30} className="absolute right-3 top-3 animate-pulse text-primary" />}
    </div>
  );
}
