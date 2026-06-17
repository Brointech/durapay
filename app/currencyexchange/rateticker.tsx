// "use clients";

// import { POPULAR_PAIRS } from "@/.next/types/currency";

// export default function RateTicker() {
//   // duplicate the list so the marquee loops seamlessly
//   const loopPairs = [...POPULAR_PAIRS, ...POPULAR_PAIRS];

//   return (
//     <section className="border-y border-[#00246C]/10 bg-white py-10 sm:py-14">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-12">
//           <div>
//             <h2 className="text-xl font-bold text-[#00246C] sm:text-2xl">
//               Live exchange rates on DuraPay
//             </h2>
//             <p className="mt-2 text-sm text-[#00246C]/60">
//               We track mid-market rates in real time and never tuck fees into
//               the exchange rate — what you see is what you get.
//             </p>
//           </div>

//           <div className="relative overflow-hidden">
//             <div
//               aria-hidden
//               className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16"
//             />
//             <div
//               aria-hidden
//               className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16"
//             />

//             <div className="ticker-track flex w-max gap-3">
//               {loopPairs.map((pair, index) => (
//                 <div
//                   key={`${pair.from}-${pair.to}-${index}`}
//                   className="flex shrink-0 items-center gap-2 rounded-full bg-[#00246C]/[0.04] px-4 py-2.5 text-sm"
//                 >
//                   <span className="font-semibold text-[#00246C]">
//                     {pair.from} → {pair.to}
//                   </span>
//                   <span
//                     className={
//                       pair.changePercent24h >= 0
//                         ? "text-emerald-600"
//                         : "text-red-500"
//                     }
//                   >
//                     {pair.changePercent24h >= 0 ? "+" : ""}
//                     {pair.changePercent24h.toFixed(1)}% / 24h
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes ticker-scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .ticker-track {
//           animation: ticker-scroll 28s linear infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .ticker-track {
//             animation: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
