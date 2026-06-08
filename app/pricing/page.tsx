// export default function Page() {
//   return null;
// }

// "use client";

// import { Check } from "lucide-react";

// const plans = [
//   {
//     name: "Starter",
//     price: "Free",
//     description: "Perfect for personal use and getting started.",
//     features: [
//       "Free account creation",
//       "Multi-currency wallet",
//       "Local transfers",
//       "Virtual card access",
//       "24/7 support",
//     ],
//     featured: false,
//   },
//   {
//     name: "Premium",
//     price: "$9",
//     duration: "/month",
//     description: "For freelancers and professionals.",
//     features: [
//       "Everything in Starter",
//       "International transfers",
//       "Priority support",
//       "Advanced analytics",
//       "Higher transaction limits",
//       "Free virtual cards",
//     ],
//     featured: true,
//   },
//   {
//     name: "Business",
//     price: "$29",
//     duration: "/month",
//     description: "Built for growing businesses.",
//     features: [
//       "Everything in Premium",
//       "Bulk payments",
//       "Team accounts",
//       "Dedicated manager",
//       "Business reporting",
//       "API access",
//     ],
//     featured: false,
//   },
// ];

// export default function PricingSection() {
//   return (
//     <section className="bg-white py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         // Heading
//         {/* <div className="mx-auto max-w-3xl text-center">
//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
//             Pricing Plans
//           </span>

//           <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//             Transparent Pricing for Everyone
//           </h2>

//           <p className="mt-4 text-lg text-gray-600">
//             Whether you're sending money across borders or managing business
//             payments, choose a plan that works for you.
//           </p>
//         </div> */}

//         // Cards
//         <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {plans.map((plan) => (
//             <div
//               key={plan.name}
//               className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
//                 plan.featured
//                   ? "border-blue-600 bg-blue-600 text-white shadow-2xl"
//                   : "border-gray-200 bg-white"
//               }`}
//             >
//               // Badge
//               {plan.featured && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                   <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-md">
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               <h3 className="text-2xl font-bold">{plan.name}</h3>

//               <p
//                 className={`mt-3 ${
//                   plan.featured ? "text-blue-100" : "text-gray-600"
//                 }`}
//               >
//                 {plan.description}
//               </p>

//               <div className="mt-8 flex items-end">
//                 <span className="text-5xl font-bold">{plan.price}</span>
//                 {plan.duration && (
//                   <span
//                     className={`ml-2 text-lg ${
//                       plan.featured ? "text-blue-100" : "text-gray-500"
//                     }`}
//                   >
//                     {plan.duration}
//                   </span>
//                 )}
//               </div>

//               // Features
//               <ul className="mt-8 space-y-4">
//                 {plan.features.map((feature) => (
//                   <li key={feature} className="flex items-center gap-3">
//                     <Check
//                       size={18}
//                       className={
//                         plan.featured ? "text-white" : "text-green-600"
//                       }
//                     />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//              // Button
//               <button
//                 className={`mt-10 w-full rounded-xl py-4 font-semibold transition-all duration-300 ${
//                   plan.featured
//                     ? "bg-white text-blue-600 hover:bg-gray-100"
//                     : "bg-gray-900 text-white hover:bg-black"
//                 }`}
//               >
//                 Get Started
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
