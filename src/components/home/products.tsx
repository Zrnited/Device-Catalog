import type { Product } from "../../types";
import ProductCard from "./product-card";

interface Props {
  products: Product[];
}

export default function Products({ products }: Props) {
  return (
    <section className="px-5 pb-20 pt-9 mx-auto w-full sm:px-8 lg:px-12">
      <div className="mb-5 flex min-h-6 items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {products.length} products to explore
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.map((device, index) => {
          return <ProductCard key={index} device={device} />;
        })}
      </div>
    </section>
  );
}
