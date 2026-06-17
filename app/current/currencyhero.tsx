"use clients";

export default function CurrencyHero() {
  return (
    <section className="bg-[#F6F8FC] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              Fast Currency Exchange
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
              Exchange currencies at the best rates
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Convert USD, GBP, EUR and NGN instantly with competitive rates and
              zero hidden fees.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-7 py-4 rounded-xl bg-black text-white font-medium">
                Get Started
              </button>

              <button className="px-7 py-4 rounded-xl border">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img src="/currency-hero.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
