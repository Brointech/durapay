"use clients";

const Physicalcards = () => {
  return (
    <section className="relative overflow-hidden bg-[#04131F] text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
              Physical NGN Debit Card
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Spend confidently with your
              <span className="text-[#3574f3]"> Durapay Card</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Shop online, withdraw cash, pay bills, and make purchases anywhere
              cards are accepted. Earn rewards, cashback, and enjoy complete
              control directly from your Durapay app.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#1154da] hover:bg-[#3574f3] text-white font-semibold px-7 py-4 rounded-xl">
                Get Your Card
              </button>

              <button className="border border-white/20 hover:bg-white/10 px-7 py-4 rounded-xl">
                Learn More
              </button>
            </div>
          </div>

          {/* Card Mockup */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-[1.6/1] rounded-3xl bg-gradient-to-br from-[#1154da] via-[#3e71d8] to-[#3574f3] p-8 shadow-2xl">
              <div className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-2xl">Durapay</h3>
                  <span className="text-sm font-medium">Debit</span>
                </div>

                <div>
                  <p className="tracking-[4px] text-xl font-medium">
                    •••• •••• •••• 4587
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-xs opacity-70">CARD HOLDER</p>
                    <p className="font-medium">FELIX IDEH</p>
                  </div>

                  <div>
                    <p className="text-xs opacity-70">VALID THRU</p>
                    <p className="font-medium">08/31</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Physicalcards;
