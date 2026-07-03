// "use client";

// import { Download } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="relative overflow-hidden w-full bg-[#4BA8D8] -mt-0 min-h-screen min-h-[90vh]">
//       {/* ── BACKGROUND LAYERS ── */}

//       {/* Base sky-blue gradient */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `
//             radial-gradient(ellipse 80% 80% at 72% 45%, rgba(160, 215, 245, 0.50) 0%, transparent 60%),
//             radial-gradient(ellipse 55% 70% at 100% 85%, rgba(45, 130, 185, 0.40) 0%, transparent 55%),
//             radial-gradient(ellipse 50% 55% at 0% 15%, rgba(180, 225, 250, 0.30) 0%, transparent 50%),
//             linear-gradient(155deg, #7ecef0 0%, #4BA8D8 38%, #3490c0 68%, #2878aa 100%)
//           `,
//         }}
//       />

//       {/* Grain overlay for depth */}
//       <div
//         className="absolute inset-0 opacity-[0.055] pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "128px 128px",
//         }}
//       />

//       {/* Right-side portrait light bloom */}
//       <div
//         className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse 65% 75% at 78% 28%, rgba(210, 238, 252, 0.28) 0%, transparent 60%)",
//         }}
//       />

//       {/* Floor reflection */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to top, rgba(150, 210, 240, 0.22) 0%, transparent 100%)",
//         }}
//       />

//       {/* ── WHITE CURVED SHAPE (bottom-right) ── */}
//       {/* This replicates the large white arc that peeks up from the bottom-right
//           corner in the reference, acting as a transition into the next section */}
//       <div
//         className="absolute bottom-0 right-0 pointer-events-none"
//         style={{
//           width: "clamp(340px, 48vw, 720px)",
//           height: "clamp(120px, 22vw, 280px)",
//         }}
//       >
//         <svg
//           viewBox="0 0 720 280"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-full"
//           preserveAspectRatio="none"
//         >
//           // Large white arc sweeping up from the bottom-right //
//           <path
//             d="M720 280 H0 Q180 280 360 120 Q500 10 720 80 Z"
//             fill="white"
//           />
//         </svg>
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-10 mx-auto grid lg:min-h-[100vh] max-w-7xl md:px-8 lg:px-10  grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2">
//         {/* Left Side:Content */}
//         <div className="lg:mt-2 mt-20">
//           <h1 className="text-[38px] font-bold -mt-2 leading-[1.15] tracking-[-1px] text-white sm:text-[44px] md:text-[52px] lg:text-[68px]">
//             Modern banking
//             <br />
//             built around
//             <br />
//             your lifestyle.
//           </h1>

//           <p className="mt-10 max-w-xl sm:text-[18px] lg:text-[18px] font-medium leading-relaxedtracking-[-1px] text-white">
//             Make transfers, pay bills, fund wallets, use virtual <br />
//             cards, and earn cashback effortlessly from your <br />
//             phone for free
//           </p>
//           <div className="">
//             <button className="flex items-center gap-3 mt-8 rounded-2xl bg-[#1154da] px-5 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-[#023bac]">
//               <Download className="w-5 h-5" /> Get started for free
//             </button>
//           </div>
//         </div>

//         {/* Right Side */}

//         <div className="flex justify-center lg:justify-end w-full">
//           <img
//             src="/bluehero.png"
//             alt="DuraPay App"
//             loading="lazy"
//             className=" lg:mt-20 -mt-20
//       w-full
//       max-w-[350px]
//       sm:max-w-[500px]
//       md:max-w-[600px]
//       lg:max-w-[800px]
//       h-auto
//       object-cover object-center
//       lg:translate-x-16
//       xl:translate-x-24
//     "
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#DCE8FD] min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex flex-col">
      {/* ── BACKGROUND LAYERS ── */}

      {/* Base periwinkle-blue gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
      radial-gradient(ellipse 80% 80% at 72% 45%, rgba(180, 200, 245, 0.50) 0%, transparent 60%),
      radial-gradient(ellipse 55% 70% at 100% 85%, rgba(90, 120, 200, 0.40) 0%, transparent 55%),
      radial-gradient(ellipse 50% 55% at 0% 15%, rgba(210, 220, 250, 0.30) 0%, transparent 50%),
      linear-gradient(155deg,  #A4B0D0 0%, #8D9CC2 38%, #7E8CB5 68%, #6B7AA8 100%)
    `,
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.055] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Right-side light bloom */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 75% at 78% 28%, rgba(220, 232, 253, 0.28) 0%, transparent 60%)",
        }}
      />

      {/* Floor reflection */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(160, 185, 240, 0.22) 0%, transparent 100%)",
        }}
      />

      {/* ── WHITE CURVED SHAPE — desktop only ── */}
      {/* <div
        className="absolute bottom-0 right-0 pointer-events-none hidden lg:block"
        style={{
          width: "clamp(260px, 48vw, 720px)",
          height: "clamp(90px, 22vw, 280px)",
        }}
      >
        <svg
          viewBox="0 0 375 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M0 80 Q187.5 0 375 80 Z" fill="white" />
        </svg>
      </div> */}

      {/* ── MOBILE/TABLET: full white bottom curve spanning full width ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none lg:hidden">
        <svg
          viewBox="0 0 375 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 80 Q187.5 0 375 80 Z" fill="white" />
        </svg>
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col md:grid md:grid-cols-2 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-10">
        {/* IMAGE — mobile: full-bleed background behind text */}
        <div className="absolute inset-0 flex sm:hidden pointer-events-none">
          <img
            src="/somos.png"
            alt="DuraPay App"
            loading="lazy"
            className="
      absolute
      left-20
      bottom-0
      w-65%
      max-w-none
      object-contain
    object-bottom lg:ml-20 h-[50vh] md:h-[80vh] lg:h-[80vh] max-h-[700px]
      "
          />
        </div>

        {/* TEXT — top section on mobile, overlaid on image */}
        <div className="relative z-10 flex flex-col justify-start pt-16 pb-8 sm:pt-18 lg:pt-10 lg:pb-0">
          <h1 className="text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-white sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[73px]">
            Inclusive global <br />
            banking designed <br />
            just for you.
          </h1>

          <p className="mt-6 sm:mt-8 lg:mt-10 max-w-[440px] sm:max-w-[480px] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-[1.12] text-white/90">
            Receive, send, exchange, and manage multiple currencies in one app.
            Open a foreign bank account from your phone for free
          </p>

          <div className="mt-6 sm:mt-8 lg:mt-16">
            <button className="flex items-center gap-3 rounded-[10px] bg-[#1154da] px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
              Get started - it's free
            </button>
          </div>
        </div>

        {/* IMAGE — desktop: pinned to bottom-right (unchanged) */}
        <div className="hidden sm:flex items-end justify-center lg:justify-end">
          <img
            src="/somos.png"
            alt="DuraPay App"
            loading="lazy"
            className="w-full lg:ml-20 h-[60vh] lg:h-[80vh] max-h-[700px] object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>
      {/* Bottom curved shape */}
      <div className="absolute bottom-0 right-0 h-44 w-[45%] rounded-tl-[120px] bg-white"></div>
    </section>
  );
};

export default HeroSection;
