export default function Header() {
  return (
    <header className="market-header border-b border-border bg-white">
      <div className="mx-auto flex w-full items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Morrow home"
        >
          <span className="font-grotesk text-xl font-bold text-black">Device Catalog</span>
        </a>
      </div>
    </header>
  );
}
