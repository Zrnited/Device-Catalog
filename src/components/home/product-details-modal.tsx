import type { Product } from "../../types";

interface Props {
  product: Product;
}

export default function ProductDetailsModal({ product }: Props) {
  return (
    <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-20">
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center right-0 bg-[#000000]/70 backdrop-blur-md">
        <div className="w-[90%] flex justify-end lg:max-w-160"></div>
        <div className="bg-white py-6 px-5 rounded-lg w-[90%] space-y-1 lg:max-w-145 lg:p-8 max-h-150 activity overflow-y-scroll"></div>
      </div>
    </div>
  );
}
