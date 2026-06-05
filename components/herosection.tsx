"use client";

import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#4BA8D8] -mt-0 min-h-screen min-h-[90vh]">
      {/* MOBILE BLOB — top sweep, hidden on lg+ */}
      {/* <svg
        className="absolute top-0 left-0 w-full h-[52%] lg:hidden mb-2"
        viewBox="0 0 375 280"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,0 L375,0 L375,280 Q280,220 200,200 Q100,180 0,280 Z"
          fill="#e8f1fd"
        />
      </svg> */}

      {/* TABLET BLOB — right side, md to lg */}
      {/* <svg
        className="absolute top-0 right-0 w-[58%] h-full hidden md:block lg:hidden"
        viewBox="0 0 440 360"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M440,0 L440,360 L0,360 Q60,300 120,220 Q160,160 140,100 Q160,40 280,10 Q360,0 440,0 Z"
          fill="#e8f1fd"
        />
      </svg> */}

      {/* DESKTOP BLOB — right side, lg+ */}
      {/* <svg
        className="absolute inset-y-0 right-0 h-full w-[62%]"
        viewBox="0 0 620 560"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="
            M 620,0
            L 620,560
            L 0,560
            Q 80,480 160,400
            Q 220,340 200,240
            Q 180,140 300,80
            Q 420,20 520,0
            Z
          "
          fill="#e8f1fd"
        />
      </svg> */}

      {/* ── BACKGROUND LAYERS ── */}

      {/* Base sky-blue gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 72% 45%, rgba(160, 215, 245, 0.50) 0%, transparent 60%),
            radial-gradient(ellipse 55% 70% at 100% 85%, rgba(45, 130, 185, 0.40) 0%, transparent 55%),
            radial-gradient(ellipse 50% 55% at 0% 15%, rgba(180, 225, 250, 0.30) 0%, transparent 50%),
            linear-gradient(155deg, #7ecef0 0%, #4BA8D8 38%, #3490c0 68%, #2878aa 100%)
          `,
        }}
      />

      {/* Grain overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.055] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Right-side portrait light bloom */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 75% at 78% 28%, rgba(210, 238, 252, 0.28) 0%, transparent 60%)",
        }}
      />

      {/* Floor reflection */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(150, 210, 240, 0.22) 0%, transparent 100%)",
        }}
      />

      {/* ── WHITE CURVED SHAPE (bottom-right) ── */}
      {/* This replicates the large white arc that peeks up from the bottom-right
          corner in the reference, acting as a transition into the next section */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: "clamp(340px, 48vw, 720px)",
          height: "clamp(120px, 22vw, 280px)",
        }}
      >
        <svg
          viewBox="0 0 720 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          // Large white arc sweeping up from the bottom-right //
          <path
            d="M720 280 H0 Q180 280 360 120 Q500 10 720 80 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto grid lg:min-h-[100vh] max-w-7xl md:px-8 lg:px-10  grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2">
        {/* Left Side:Content */}
        <div className="lg:mt-2 mt-20">
          <h1 className="text-[38px] font-bold -mt-2 leading-[1.15] tracking-[-1px] text-white sm:text-[44px] md:text-[52px] lg:text-[68px]">
            Modern banking
            <br />
            built around
            <br />
            your lifestyle.
          </h1>

          <p className="mt-10 max-w-xl sm:text-[18px] lg:text-[18px] font-medium leading-relaxedtracking-[-1px] text-white">
            Make transfers, pay bills, fund wallets, use virtual <br />
            cards, and earn cashback effortlessly from your <br />
            phone for free
          </p>
          <div className="">
            <button className="flex items-center gap-3 mt-8 rounded-2xl bg-[#1154da] px-5 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-[#023bac]">
              <Download className="w-5 h-5" /> Get started for free
            </button>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex justify-center lg:justify-end w-full">
          <img
            src="/bluehero.png"
            alt="DuraPay App"
            loading="lazy"
            className=" lg:mt-20 -mt-20
      w-full
      max-w-[350px]
      sm:max-w-[500px]
      md:max-w-[600px]
      lg:max-w-[800px]
      h-auto
      object-cover object-center
      lg:translate-x-16
      xl:translate-x-24
    "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// "use client";

// const HeroSection = () => {
//   return (
//     <section className="relative  bg-white mt-20 min-h-screen lg:min-h-[90vh]">
//       {/* MOBILE BLOB — only on screens below md */}
//       <svg
//         className="absolute top-0 left-0 w-full h-[52%] block md:hidden"
//         viewBox="0 0 375 280"
//         preserveAspectRatio="none"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
//         <path
//           d="M0,0 L375,0 L375,280 Q280,220 200,200 Q100,180 0,280 Z"
//           fill="#e8f1fd"
//         />
//       </svg>

//       {/* TABLET BLOB — only on md to lg */}
//       <svg
//         className="absolute top-0 right-0 w-[58%] h-full hidden md:block lg:hidden"
//         viewBox="0 0 440 360"
//         preserveAspectRatio="none"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
//         <path
//           d="M440,0 L440,360 L0,360 Q60,300 120,220 Q160,160 140,100 Q160,40 280,10 Q360,0 440,0 Z"
//           fill="#e8f1fd"
//         />
//       </svg>

//       {/* DESKTOP BLOB — only on lg+ */}
//       <svg
//         className="absolute inset-y-0 right-0 h-full w-[62%] hidden lg:block"
//         viewBox="0 0 620 560"
//         preserveAspectRatio="none"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
//         <path
//           d="M 620,0 L 620,560 L 0,560 Q 80,480 160,400 Q 220,340 200,240 Q 180,140 300,80 Q 420,20 520,0 Z"
//           fill="#e8f1fd"
//         />
//       </svg>

//       {/* HERO CONTENT */}
//       <div className="relative z-10 mx-auto grid min-h-screen lg:min-h-[90vh] max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 sm:px-10 pt-10 pb-16 lg:py-0">
//         {/* Left Side */}
//         <div className="pt-[50%] md:pt-16 lg:pt-0">
//           <h1 className="text-[40px] sm:text-[52px] md:text-[60px] lg:text-[70px] font-bold leading-[1.15] tracking-[-1px] text-[#00246C]">
//             Complete Global <br />
//             Banking designed <br />
//             for your lifestyle.
//           </h1>

//           <p className="mt-6 lg:mt-10 max-w-xl text-[16px] sm:text-[18px] lg:text-[22px] font-semibold leading-[1.50] tracking-[-0.5px] text-[#00246C]">
//             Make transfers, pay bills, fund wallets, use virtual cards, and earn
//             cashback effortlessly from your phone for free
//           </p>

//           <button className="mt-8 rounded-2xl bg-[#1154da] px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-[#023bac]">
//             Get started for free
//           </button>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-end justify-center h-full">
//           <img
//             src="/img.png"
//             alt="App preview"
//             className="w-full max-w-sm lg:max-w-md object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
