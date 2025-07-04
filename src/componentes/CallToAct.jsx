export default function CallToAction() {
  return (
    <section className="flex items-center justify-center px-6 py-20 text-center text-white">
      <div className="max-w-xl space-y-6">
        <p className="text-sm font-semibold text-gray-400">
          TRY IT FREE FOR 14 DAYS <span className="ml-1">🎾</span>
        </p>

        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          Anywhere you want. <br /> Anytime you want.
        </h1>

        <p className="text-gray-400">
          Get started with two free weeks of unlimited yoga, fitness, and
          meditation classes. Cancel anytime.
        </p>

        <button className="rounded-full bg-[#E94A2B] px-6 py-2 font-semibold text-white transition duration-200 hover:bg-red-950 sm:py-4 lg:py-3">
          Download App
        </button>
      </div>
    </section>
  );
}
