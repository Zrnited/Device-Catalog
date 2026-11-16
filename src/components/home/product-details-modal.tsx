import { ChevronDown, Heart, Star } from "lucide-react";
import type { Product } from "../../types";

interface Props {
  product: Product; 
}
//image(s), description, price, rating and brand.
export default function ProductDetailsModal({ product }: Props) {
  return (
    <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-20">
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center right-0 bg-[#000000]/70 backdrop-blur-md">
        <div className="bg-white py-6 px-5 rounded-lg w-[90%] space-y-1 lg:p-8 max-h-150 activity overflow-y-scroll flex flex-col gap-3 lg:max-w-[80%] xl:flex-row">
          {/* product details */}
          <div className="space-y-3 lg:w-1/2">
            <div className="space-y-2">
              <div className="bg-[#072320]/5 rounded-md">
                <img src={product.images[0]} alt="product" decoding="async" loading="lazy" draggable={false} />
              </div>
              {/* image list */}
              <div></div>
            </div>
            <div className="space-y-2">
              <h1 className="text-black font-grotesk font-semibold">
                {product.title ?? ""}
              </h1>
              <div className="flex justify-between w-full items-center text-sm">
                <p className="capitalize">{product.brand ?? ""}</p>
                <div className="flex items-center gap-1">
                  <Star size={18} />
                  <p>{product.rating ?? 0}</p>
                </div>
              </div>
              {/* description */}
              <p className="text-sm lg:text-md">
                {product.description ?? ""}
              </p>
              {/* price */}
              <h1 className="font-semibold text-lg font-grotesk">${product.price ?? 0}</h1>
            </div>
          </div>
          {/* form */}
          <div className="space-y-3 lg:w-1/2">
            <div>
              <div className="flex items-center gap-x-2">
                <div className="p-1.5 text-white w-fit rounded-full bg-primary flex items-center justify-center">
                  <Heart size={15} />
                </div>
                <p className="text-xs capitalize">a little more flexibility</p>
              </div>
              <h2 className="font-grotesk text-black font-semibold">
                Make it yours
              </h2>
              <p className="text-sm">
                Interested in a payment plan? Share your details and preferred
                repayment period.
              </p>
            </div>
            <form className="space-y-2 w-full">
              <div className="text-sm flex flex-col gap-y-1.5">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Alex Morgan"
                  name="full_name"
                  className="border w-full px-2.5 rounded-md h-10"
                />
              </div>
              <div className="text-sm flex flex-col gap-y-1.5">
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  className="border w-full px-2.5 rounded-md h-10"
                />
              </div>
              <div className="text-sm flex flex-col gap-y-1.5">
                <label>Phone number</label>
                <input
                  type="email"
                  placeholder="+1 555 123 4567"
                  name="phone_number"
                  className="border w-full px-2.5 rounded-md h-10"
                />
              </div>
              <div className="text-sm flex flex-col gap-y-1.5">
                <label>Phone number</label>
                <div className="relative">
                  <select className="border w-full px-2.5 rounded-md h-10 appearance-none">
                    <option>3 months</option>
                    <option>6 months</option>
                    <option>12 months</option>
                    <option>24 months</option>
                  </select>
                  <ChevronDown className="right-2 top-2 absolute" color="gray" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
