"use client";

export default function VirtualCardPage() {
  return (
    <div className="min-h-screen bg-white text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 sm:px-10 lg:px-20 py-30">
        <div className="absolute inset-0 bg-white" />

        <div className="relative z-10 flex flex-col items-center ">
          <h1 className="text-4xl sm:text-5xl lg:text-[73px] text-black font-bold leading-tight">
            <span>One international </span> <br />
            <span className="ml-6"> card for all your </span> <br />
            <span className="ml-4"> foreign spending </span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-lg">
            <span className="">
              Your Durapay card now works with Apple Pay and Google Pay.
              Create{" "}
            </span>
            <span className="ml-4">
              multiple cards, spend straight from your balance, and pay at
              150{" "}
            </span>
            <span className="ml-36"> million merchants worldwide. </span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
              Get your new card
            </button>
          </div>

          {/* RIGHT CARD PREVIEW */}
          {/* <div className="flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[380px] h-[220px] rounded-2xl bg-gradient-to-br from-[#1a2a4a] to-[#0f172a] shadow-2xl border border-white/10 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-400">VIRTUAL CARD</p>
                  <p className="text-lg font-semibold mt-1">Grey USD</p>
                </div>
                <div className="text-xs px-2 py-1 bg-blue-600/30 rounded-lg">
                  VISA
                </div>
              </div>
              <div className="mt-10 tracking-widest text-lg">
                4242 •••• •••• 4242
              </div>

              <div className="flex justify-between mt-8 text-sm text-gray-300">
                <div>
                  <p className="text-xs text-gray-400">CARD HOLDER</p>
                  <p>Samuel A.</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">EXPIRES</p>
                  <p>09/29</p>
                </div>
              </div>

              // glow 
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full" />
            </div>
          </div> */}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#F8F8F8] px-6 sm:px-10 lg:px-20 py-16">
        <h1 className="text-center font-semibold text-[48px] text-black">
          Cards made for the borderless
        </h1>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="relative w-full max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
            <img
              src="/visacard.avif"
              alt="Virtual Card"
              className="w-full h-auto"
            />
          </div>
          <div className="relative w-full max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
            <img
              src="/visaphone.avif"
              alt="Virtual Card"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[20px] lg:text-[30px] text-black font-semibold">
              Create multiple cards for every part <br /> of your life
            </h1>
            <p className="text-[14px] lg:text-[18px] text-black">
              One card for subscriptions. One for travel. One for business.{" "}
              <br />
              Create as many as you need, each with its own limits and <br />{" "}
              controls.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 sm:px-10 lg:px-20 py-16">
        <h2 className="text-2xl text-black font-bold mb-10">How it works</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Create account",
            "Verify identity",
            "Fund wallet",
            "Create card instantly",
          ].map((step, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-white/10 bg-black"
            >
              <p className="text-white text-sm">Step {i + 1}</p>
              <p className="mt-2 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-10 lg:px-20 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-10 text-center">
          <h2 className="text-3xl text-black font-bold">
            Start spending globally in minutes
          </h2>
          <p className="text-gray-900 mt-3">
            Get your virtual card and start paying anywhere in the world.
          </p>

          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
            Create Virtual Card
          </button>
        </div>
      </section>
    </div>
  );
}
