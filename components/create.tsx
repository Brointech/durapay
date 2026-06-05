"use client";

import { Download } from "lucide-react";

export default function CurvedBlackSection() {
  return (
    <section className="relative w-full bg-white pt-16">
      {/* Black section with curved top-left edge */}
      <div className="flex items-center justify-between relative w-full bg-[#111111] rounded-tl-[150px] pt-24 px-8 md:px-16 lg:px-24">
        {/* Content */}
        <div className="max-w-2xl">
          <h1 className="text-white text-[32px] md:text-6xl lg:text-[60px] font-semibold leading-[1.1] tracking-tight">
            A foreign account that is <br className="hidden lg:block" />{" "}
            genuinely global in scope.
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-md">
            Get a global overseas account, which gives you ultimate control over
            your money.
          </p>

          <div className="mb-4">
            <button className="flex items-center gap-3 mt-8 rounded-2xl bg-[#1154da] px-5 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-[#023bac]">
              Create an account
            </button>
          </div>
        </div>

        <div className="flex-wrap justify-start -mt-50">
          <img
            src="
            /purplehand.avif"
            alt=""
            className="max-w-150 h-150 hidden lg:block object-fill"
          />
        </div>
      </div>
    </section>
  );
}

// CurvedBlackSectionAdvanced.tsx
// export default function CurvedBlackSectionAdvanced() {
//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* White area with curved bottom */}
//       <div className="absolute top-0 left-0 w-[55%] h-24 bg-white rounded-br-[80px]" />

//       {/* Blue accent pill in top-right (from the screenshot) */}
//       <div className="absolute top-0 right-[10%] w-32 h-8 bg-[#2563eb] rounded-b-xl" />

//       {/* Main black background */}
//       <div className="w-full bg-[#111111] pt-32 pb-32 px-8 md:px-16 lg:px-24">
//         <div className="max-w-2xl">
//           <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
//             A truly global
//             <br />
//             foreign account.
//           </h1>
//           <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-md">
//             Get a global foreign account that puts you in total control of your
//             money.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
