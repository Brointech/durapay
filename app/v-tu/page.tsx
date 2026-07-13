"use client";

export default function () {
  return (
    <section className="max-w-7xl mx-auto min-h-[60vh] md:min-h-[90vh] lg:min-h-screen bg-white px-6 md:px-10 lg:px-10 pt-28 md:pt-32 lg:pt-28 pb-20 ">
      {/* Fisrt Section */}
      <div className="mx-auto max-w-7xl flex lg:items-center xs:justify-center justify-between ">
        <div className="lg:-mt-20 md:-mt-20">
          <h1 className="text-[#1F1F30] lg:text-left text-center text-[34px] sm:text-[34px] md:text-[42px] lg:text-[52px] font-bold leading-[1.05] sm:leading-[1.15] lg:leading-[1.03] tracking-tight">
            Your Business <br className="hidden xs:block" /> Airtime{" "}
            <br className="hidden lg:block" />
            & Utility <br className="hidden xs:block" /> Bills in one{" "}
            <br className="hidden lg:block" />
            place. <br className="hidden xs:block" /> Built with your{" "}
            <br className="hidden lg:block" />
            team in mind
          </h1>
          {/* <h1 className="text-center text-[#1F1F30] lg:text-left text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-2xl">
            Your Business Airtime & Utility Bills in one place.
            <span className="block">Built with your team in mind.</span>
          </h1> */}
          <div className="mt-10 flex justify-center lg:justify-start">
            <button className="mt-8 sm:mt-10 lg:mt-12 w-full sm:w-auto rounded-xl bg-[#1154DA] px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white transition hover:bg-[#0f49be]">
              Get started in 10 mins
            </button>
          </div>
        </div>
        {/* Right side:image  */}
        <div className="mb-10">
          <img
            src="/lenco1.svg"
            alt=""
            className="w-[3x20px] md:w-[720px] lg:w-[520px] object-contain hidden lg:block"
          />
        </div>
      </div>
      {/* Buy Airtime */}
      <div className="mt-28 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center  ">
        {/* Left Side */}
        <div>
          <h1 className="text-[#1F1F30] font-bold text-[28px] leading-10 sm:leading-[1.15]  tracking-tight">
            Buy Airtime for Individuals <br className="hidden lg:block" /> and
            Teams
          </h1>
          <p className="text-[#1F1F30] mt-6 max-w-xl text-lg lg:leading-6 ">
            Purchase airtime in a breeze for an individual or in bulk{" "}
            <br className="hidden lg:block" />
            for your team members with zero fees.
          </p>
        </div>
        {/* Right side */}
        <div>
          <img
            src="/lenco2.svg"
            alt=""
            className="w-[380px] md:w-[720px] lg:w-[520px] object-contain "
          />
        </div>
      </div>
      {/* Utility Payment */}
      <div className="mt-28 lg:mt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 ">
        {/* Left Side: image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/lenco3.svg"
            alt=""
            className="w-[380px] md:w-[720px] lg:w-[520px] object-contain"
          />
        </div>
        {/* Right content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-[#1F1F30] font-bold text-[32px] leading-[1.05] sm:leading-[1.15] lg:leading-10  tracking-tight">
            Power your business utilities <br className="hidden lg:block" />
            easily for free
          </h1>
          <p className="text-[#1F1F30] mt-6 max-w-xl text-lg lg:leading-6">
            Power your business utilities easily for free
          </p>
        </div>
      </div>
      {/* Airtime APIs */}
      <div className="mt-28 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-[#1F1F30] font-bold text-[32px] leading-[1.05] sm:leading-[1.15]  tracking-tight">
            Airtime and Payments via API
          </h1>
          <p className="text-[#1F1F30] mt-6 max-w-xl text-lg lg:leading-6">
            No paperwork. Do everything on the web or App. No{" "}
            <br className="hidden lg:block" />
            hidden fees. Absolute control. We put everything in{" "}
            <br className="hidden lg:block" />
            your hands. Best customer support whenever you{" "}
            <br className="hidden lg:block" />
            need.
          </p>
        </div>
        {/* Right side */}
        <div>
          <img
            src="/lenco4.svg"
            alt=""
            className="w-[380px] md:w-[720px] lg:w-[520px] object-contain "
          />
        </div>
      </div>

      {/* Contact & FAQs */}
      {/* <div className="mt-28 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ">
        <div className="">
          <h1 className="text-[#1F1F30] font-bold text-[32px]">
            Need to Speak to us?
          </h1>
          <div className="">

          </div>
        </div>
        <div className="">
          <h1 className="text-[#1F1F30] font-bold text-[32px]">
            Frequently asked questions
          </h1>
        </div>
      </div> */}
    </section>
  );
}
