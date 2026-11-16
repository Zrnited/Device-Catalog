import { ChevronDown, Search, ShieldCheck } from "lucide-react";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import { getDevices } from "../api/getDevices";
import type { ApiError } from "../lib/api";
import { useEffect, useState } from "react";
import type { Product } from "../types";
import Products from "../components/home/products";
import ProductDetailsModal from "../components/home/product-details-modal";

interface ProductHandler {
  data: Product[] | null;
  error: string | null;
  isLoading: boolean;
}

export default function Home() {
  //   const devices: { name: string; value: string } = [];
  //   const prices: { name: string; value: string } = [];
  const [product, setProduct] = useState<Product | null>(null);
  const [showProductModal, setShowProductModal] = useState<boolean>(false);

  const [products, setProducts] = useState<ProductHandler>({
    data: null,
    error: null,
    isLoading: true,
  });

  const fetchDevices = async (cancelled: boolean) => {
    try {
      const res = await getDevices();
      if (cancelled) return;
      if (res.products)
        setProducts((prev) => ({ ...prev, data: res.products }));
    } catch (e: any) {
      const err = e as ApiError;
      if (cancelled) return;
      if (err.message) setProducts((prev) => ({ ...prev, error: err.message }));
    } finally {
      setProducts((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const onClose = () => {
    setShowProductModal(false);
    setProduct(null);
  };

  useEffect(() => {
    let cancelled = false;
    fetchDevices(cancelled);

    //track page exit
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!product) return;
    setShowProductModal(true);
  }, [product]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="mx-auto grid w-full gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_auto] bg-[#072320]/5 lg:items-end lg:px-12 lg:py-18">
        <div className="max-w-3xl">
          <p className="mb-4 items-center gap-2 text-sm font-semibold text-primary">
            ••• YOUR NEXT DEVICE, FOUND
          </p>
          <h1 className="max-w-3xl font-grotesk text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-[3.65rem] text-black">
            Good tech. <span className="text-primary">Better days.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Shop phones, laptops and everyday tech — all in one happy place.
          </p>
        </div>
        <div className="flex items-center gap-3 self-start lg:self-end">
          <div className="p-3 bg-primary text-white rounded-full flex items-center justify-center">
            <ShieldCheck />
          </div>
          <span>
            <span className="block text-sm font-semibold text-black">
              A smarter way to shop
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Choose a device, then explore flexible payments.
            </span>
          </span>
        </div>
      </section>
      <section className="px-5 pb-10 pt-9 mx-auto w-full sm:px-8 sm:pt-12 lg:px-12">
        {/* heading text */}
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-primary">
              THE DEVICE EDIT
            </p>
            <h2 className="font-grotesk text-2xl font-semibold sm:text-3xl text-black">
              Find your next favourite.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground lg:text-right">
            A little something for your work, your play, and everything in
            between.
          </p>
        </div>
        {/* filter form */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* text */}
          <div className="relative">
            <input
              className="flex w-full border px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 rounded-md border-border pl-11"
              aria-label="Search devices by name"
              placeholder="Search devices…"
              value=""
              title="Search"
            />
            <Search className="absolute left-3 top-3" />
          </div>
          {/* type of device */}
          <div className="relative">
            <select className="border px-3 py-1 rounded-md h-12 appearance-none cursor-pointer w-full">
              <option>All devices</option>
              <option>Smartphones</option>
              <option>Laptops</option>
              <option>Tablets</option>
              <option>Accessories</option>
            </select>
            <ChevronDown className="absolute right-3 top-3" />
          </div>
          {/* price */}
          <div className="relative">
            <select className="border px-3 py-1 rounded-md h-12 appearance-none cursor-pointer w-full">
              <option>Any price</option>
              <option>Under $500</option>
              <option>$500 - $1000</option>
              <option>Over $1000</option>
            </select>
            <ChevronDown className="absolute right-3 top-3" />
          </div>
        </div>
      </section>
      {/* devices */}
      <Products setProduct={setProduct} products={products.data ?? []} />
      {showProductModal && (
        <ProductDetailsModal
          product={product}
          onClose={onClose}
        />
      )}
      <Footer />
    </main>
  );
}
