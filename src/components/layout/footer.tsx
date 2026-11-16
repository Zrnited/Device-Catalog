export default function Footer() {
  return (
    <footer className="border-t-2">
      <div className="mx-auto flex w-full flex-col justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <p className="font-grotesk text-black text-lg font-semibold">
          A good device should feel good to buy.
        </p>
        <p className="max-w-lg text-sm leading-6">
          Found the one? Ask about a repayment period that works for you, right
          from the device details.
        </p>
      </div>
    </footer>
  );
}
