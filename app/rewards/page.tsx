"use clients";

const Rewards = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F3A] to-[#142C54] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white mb-6">
              🎉 Cashback Rewards
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get rewarded for every payment you make.
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Earn cashback on transfers, card payments, airtime purchases, bill
              payments, gift cards and more. The more you use Durapay, the more
              rewards you unlock.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-white text-[#0B1F3A] px-6 py-3 rounded-full font-semibold">
                Start Earning
              </button>

              <button className="border border-white/20 text-white px-6 py-3 rounded-full">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/cashback-hero.png"
              alt="Durapay Cashback"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
