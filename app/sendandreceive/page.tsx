"use client";

const Sendandreceive = () => {
  return (
    <section className="bg-white relative overflow-hidden min-h-screen flex items-center pt-24">
      <div className=" container mx-auto py-16">
        {/* first row */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 px-6 sm:px-10 lg:px-14 bg-white lg:py-26 lg:-mt-40 ">
          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold lg:text-[52px] text-[#00246C] leading-tight">
              SRecharge your phone easily with Durapay
            </h1>
            <p className="mt-8 md:mt-8 text-base sm:text-lg  text-[#00246C] font-semibold lg:text-[16px] leading-relaxed">
              One app. Unlimited reach. Move money <br />
              across cities, countries, and continents effortlessly.
            </p>
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/sendandreceive.png"
              alt="Send and Receive"
              className="sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[600px] h-auto"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex items-center justify-center gap-30 mt-10 px-6 sm:px-10 ">
          {/* left Side */}
          <div>
            <img src="/transfer.webp" alt="" className="w-120" />
          </div>
          {/* Right side */}
          <div className="flex flex-col gap-4">
            <div className="font-bold md:text-[30px] lg:text-[46px] text-[#00246C] leading-tight">
              Lightning-fast, Secure <br /> Money Transfers
            </div>
            <p className="font-semibold lg:text-[16px] text-[#00246C] leading-relaxed">
              Enjoy free transfers and the lowest cross-border rates. <br />
              More money stays in your pocket, and more arrives in theirs.
            </p>
          </div>
        </div>

        {/* Forth Row */}
        <div className="flex items-center justify-between px-6 sm:px-10 mt-18">
          {/* send and receive:left side */}
          <div className="flex flex-col gap-4">
            <div className="font-bold lg:text-[50px] text-[#00246C] leading-tight">
              Smarter way to <br /> move cash
            </div>
            <p className="font-semibold lg:text-[16px] text-[#00246C] leading-relaxed">
              Send money across cities, across Africa, <br />
              and across the world—fast, seamless, and without borders.
            </p>
          </div>
          {/* Right side */}
          <div>
            <img src="/sendandreceive.png" alt="" className="w-120" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-10 px-6 sm:px-10 ">
          {/* left side */}
          <div>
            <img src="/sendandreceive.png" alt="" className="w-120" />
          </div>
          {/* Right side */}
          <div className="flex flex-col gap-4">
            <div className="font-bold lg:text-[50px] text-[#00246C] leading-tight">
              Smarter way to <br /> move cash
            </div>
            <p className="font-semibold lg:text-[16px] text-[#00246C] leading-relaxed">
              Send money across cities, across Africa, <br />
              and across the world—fast, seamless, and without borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sendandreceive;
