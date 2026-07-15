"use client";

import { div } from "framer-motion/client";

export default function () {
  return (
    <div>
      <section className="max-w-7xl mx-auto min-h-[60vh] md:min-h-[90vh] lg:min-h-screen bg-white px-6 md:px-10 lg:px-10 pt-28 md:pt-32 lg:pt-18 pb-20 ">
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
        <div className=" mt-28 lg:mt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-30 ">
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
      </section>
      {/* HOW IT WORKS */}
      <section className="bg-[#F3F5F9] px-6 sm:px-10 lg:px-10 py-16">
        <h2 className="text-2xl text-black text-center text-[38px] lg:text-[74px] lg:text-center font-semibold mb-10 leading-12 lg:leading-21 tracking-tight">
          Recharge your airtime and utility <br /> bills in less than one minute
        </h2>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 lg:mt-30">
          <div className="flex flex-col gap-8">
            <div className="w-full flex flex-col items-center justify-center max-w-[600px]  mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
              <img src="/download-dura.avif" alt="" className="w-120 lg:w-80" />
            </div>
            <div className="">
              <span className="bg-[#E8F0FC] text-[#082F74] font-medium text-[18px] p-2 rounded-[7px] border border-[#A0C0F3]">
                {" "}
                STEP ONE
              </span>
              <p className="text-[#1B1F28] font-medium text-[20px] mt-6 ">
                Download the Durapay app
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full flex flex-col items-center justify-center  max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
              <img src="/createdura.avif" alt="" className="w-120 lg:w-80 " />
            </div>
            <div className="">
              <span className="bg-[#E8F0FC] text-[#082F74] font-medium text-[18px] p-2 rounded-[7px] border border-[#A0C0F3]">
                {" "}
                STEP TWO
              </span>
              <p className="text-[#3b3b3c] font-medium text-[20px] mt-6 ">
                Create your account
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
              <img src="/fund.avif" alt="" className="w-120 lg:w-80" />
            </div>
            <div className="">
              <span className="bg-[#E8F0FC] text-[#082F74] font-medium text-[18px] p-2 rounded-[7px] border border-[#A0C0F3]">
                {" "}
                STEP THREE
              </span>
              <p className="text-[#1B1F28] font-medium text-[20px] mt-6 ">
                Fund your account
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
              <img src="/ready.avif" alt="" className="w-120 lg:w-80" />
            </div>
            <div className="">
              <span className="bg-[#E8F0FC] text-[#082F74] font-medium text-[18px] p-2 rounded-[7px] border border-[#A0C0F3]">
                {" "}
                STEP FOUR
              </span>
              <p className="text-[#1B1F28] font-medium text-[20px] mt-6 ">
                Buy your airtime instantly
              </p>
            </div>
          </div>
        </div>

        {/* Already have the app */}
        <div
          className="bg-white flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-20 p-12 border border-blue-600"
          style={{
            borderRadius: "20px",
            borderLeft: "1px solid #7E8CB5",
            borderBottom: "0 solid #7E8CB5",
            borderTop: "0 solid #7E8CB5",
          }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-gray-700 text-center md:text-center lg:text-left font-semibold text-[18px] md:text-[26px] lg:text-[30px]">
              Already have the app?
            </h3>
            <h1 className="text-black text-center md:text-center lg:text-left font-mono text-[27px] md:text-[30px] lg:text-[40px]">
              Go to Vtu to make your <br className="hidden lg:block" />
              purchase in seconds!
            </h1>
            <div className="mt-5">
              <button className="w-fit px-6 py-3 text-white rounded-xl bg-blue-600 hover:bg-blue-700 transition mb-4">
                Buy your airtime
              </button>
            </div>
          </div>
          <div className="-mt-10">
            <img
              src="/visaa.avif"
              alt=""
              className="w-90 md:w-80 lg:w-80 hidden lg:block lg:-mb-21"
            />
          </div>
        </div>
      </section>
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
    </div>
  );
}
