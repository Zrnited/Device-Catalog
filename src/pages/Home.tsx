import { ShieldCheck } from "lucide-react";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";

export default function Home() {
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
      <section className="px-5 pb-20 pt-9 mx-auto w-full sm:px-8 sm:pt-12 lg:px-12">
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
      </section>
      <Footer />
    </main>
  );
}
