// "use client";

// import { useState } from "react";
// import { HiPlus, HiMinus } from "react-icons/hi";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqs: FAQItem[] = [
//   {
//     question: "How do I get the DuraPay virtual card?",
//     answer:
//       "Download the DuraPay app, complete your KYC verification, and navigate to the Cards section. You can create a virtual card in seconds with no physical card required.",
//   },
//   {
//     question: "Which currencies can I spend from?",
//     answer:
//       "You can spend from USD, EUR, GBP, and NGN wallets. DuraPay automatically selects the best wallet based on the merchant's currency.",
//   },
//   {
//     question: "Do I need to fund my card before spending?",
//     answer:
//       "Yes, your virtual card draws from your DuraPay wallet balance. Ensure your wallet is funded before making any transactions.",
//   },
//   {
//     question: "Can I use my DuraPay card with Apple Pay or Google Pay?",
//     answer:
//       "Yes! DuraPay virtual cards are compatible with both Apple Pay and Google Pay. Simply add your card details in your device's wallet settings.",
//   },
//   {
//     question: "Is my virtual card secure?",
//     answer:
//       "Absolutely. Each virtual card comes with unique card details, and you can freeze or delete your card instantly from the app at any time.",
//   },
// ];

// const FAQSection: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
// };

// export default function VirtualCardPage() {
//   return (
//     <div className="min-h-screen bg-white text-white">
//       {/* HERO SECTION */}
//       <section className="relative overflow-hidden px-6 sm:px-10 lg:px-10 py-30">
//         <div className="absolute inset-0 bg-white" />

//         <div className="relative z-10 flex flex-col items-center ">
//           <h1 className="text-4xl sm:text-5xl lg:text-[73px] text-black font-bold leading-tight">
//             <span>One international </span> <br />
//             <span className="ml-6"> card for all your </span> <br />
//             <span className="ml-4"> foreign spending </span>
//           </h1>

//           <p className="mt-5 text-gray-600 max-w-lg">
//             <span className="">
//               Your Durapay card now works with Apple Pay and Google Pay.
//               Create{" "}
//             </span>
//             <span className="ml-4">
//               multiple cards, spend straight from your balance, and pay at 150
//             </span>
//             <span className="ml-36"> million merchants worldwide. </span>
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row gap-4">
//             <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
//               Get your new card
//             </button>
//           </div>

//           {/* RIGHT CARD PREVIEW */}
//           {/* <div className="flex justify-center lg:justify-end">
//             <div className="relative w-[320px] sm:w-[380px] h-[220px] rounded-2xl bg-gradient-to-br from-[#1a2a4a] to-[#0f172a] shadow-2xl border border-white/10 p-6">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-xs text-gray-400">VIRTUAL CARD</p>
//                   <p className="text-lg font-semibold mt-1">Grey USD</p>
//                 </div>
//                 <div className="text-xs px-2 py-1 bg-blue-600/30 rounded-lg">
//                   VISA
//                 </div>
//               </div>
//               <div className="mt-10 tracking-widest text-lg">
//                 4242 •••• •••• 4242
//               </div>

//               <div className="flex justify-between mt-8 text-sm text-gray-300">
//                 <div>
//                   <p className="text-xs text-gray-400">CARD HOLDER</p>
//                   <p>Samuel A.</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-400">EXPIRES</p>
//                   <p>09/29</p>
//                 </div>
//               </div>

//               // glow
//               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full" />
//             </div>
//           </div> */}
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="bg-[#F8F8F8] px-6 sm:px-10 lg:px-10 py-16">
//         <h1 className="text-center font-semibold text-[48px] text-black">
//           Cards made for the borderless
//         </h1>
//         <div className="grid md:grid-cols-2 gap-6 mt-8">
//           <div className="relative w-full max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
//             <img
//               src="/visacard.avif"
//               alt="Virtual Card"
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="relative w-full max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
//             <img
//               src="/visaphone.avif"
//               alt="Virtual Card"
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-[20px] lg:text-[30px] text-black font-semibold">
//               Create multiple cards for every part <br /> of your life
//             </h1>
//             <p className="text-[14px] lg:text-[18px] text-black">
//               One card for subscriptions. One for travel. One for business.{" "}
//               <br />
//               Create as many as you need, each with its own limits and <br />{" "}
//               controls.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="bg-[#F8F8F8] px-6 sm:px-10 lg:px-10 py-16">
//         <h2 className="text-2xl text-black font-bold mb-10">How it works</h2>

//         <div className="grid md:grid-cols-4 gap-6">
//           {[
//             "Download the Durapay app",
//             "Create your account",
//             "Fund your account",
//             "Create your card instantly",
//           ].map((step, i) => (
//             <div
//               key={i}
//               className="p-5 rounded-xl border border-white/10 bg-black"
//             >
//               <p className="text-white text-sm">Step {i + 1}</p>
//               <p className="mt-2 font-medium">{step}</p>
//             </div>
//           ))}
//         </div>

//         <div
//           className=" bg-white flex  flex-col lg:flex-row items-center justify-between mt-10 lg:mt-10 p-12 border border-blue-600"
//           style={{
//             borderRadius: "20px",
//             borderLeft: "1px solid #7E8CB5",
//             borderBottom: "0 solid #7E8CB5",
//             borderTop: "0 solid #7E8CB5",
//           }}
//         >
//           <div className="flex flex-col items-center lg:items-start">
//             <h3 className="text-gray-700 text-center md:text-center lg:text-left font-semibold text-[18px] md:text-[26px] lg:text-[30px]">
//               Already have the app?
//             </h3>
//             <h1 className="text-black text-center md:text-center lg:text-left font-mono text-[27px] md:text-[30px] lg:text-[40px]">
//               Go to Cards to create your <br className="hidden lg:block" />
//               new virtual card in seconds!
//             </h1>

//             <div className="mt-5">
//               <button className="w-fit sm:self-center  px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition mb-4">
//                 Create your card
//               </button>
//             </div>
//           </div>
//           <div className="-mt-10">
//             <img
//               src="/visaa.avif"
//               alt=""
//               className="w-90 md:w-80 lg:w-80 hidden lg:block lg:-mb-21"
//             />
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 sm:px-10 lg:px-20 py-20">
//         <div className="rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-10 text-center">
//           <h2 className="text-3xl text-black font-bold">
//             Start spending globally in minutes
//           </h2>
//           <p className="text-gray-900 mt-3">
//             Get your virtual card and start paying anywhere in the world.
//           </p>

//           <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
//             Create Virtual Card
//           </button>
//         </div>
//       </section>

//  <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
//         Frequently Asked Questions
//       </h2>

//       <div className="divide-y divide-gray-200 border-t border-gray-200">
//         {faqs.map((faq, index) => (
//           <div key={index} className="py-5">
//             <button
//               onClick={() => toggle(index)}
//               className="w-full flex items-center justify-between gap-4 text-left"
//             >
//               <span className="text-base sm:text-lg font-medium text-gray-900">
//                 {faq.question}
//               </span>
//               <span className="flex-shrink-0 text-gray-500">
//                 {openIndex === index ? (
//                   <HiMinus className="w-5 h-5" />
//                 ) : (
//                   <HiPlus className="w-5 h-5" />
//                 )}
//               </span>
//             </button>

//             {openIndex === index && (
//               <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed pr-8">
//                 {faq.answer}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>

//     </section>

//     </div>
//   );
// };

// export default FAQSection;

"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I get the DuraPay virtual card?",
    answer:
      "Download the DuraPay app, complete your KYC verification, and navigate to the Cards section. You can create a virtual card in seconds with no physical card required.",
  },
  {
    question: "Which currencies can I spend from?",
    answer:
      "You can spend from USD, EUR, GBP, and NGN wallets. DuraPay automatically selects the best wallet based on the merchant's currency.",
  },
  {
    question: "Do I need to fund my card before spending?",
    answer:
      "Yes, your virtual card draws from your DuraPay wallet balance. Ensure your wallet is funded before making any transactions.",
  },
  {
    question: "Can I use my DuraPay card with Apple Pay or Google Pay?",
    answer:
      "Yes! DuraPay virtual cards are compatible with both Apple Pay and Google Pay. Simply add your card details in your device's wallet settings.",
  },
  {
    question: "Is my virtual card secure?",
    answer:
      "Absolutely. Each virtual card comes with unique card details, and you can freeze or delete your card instantly from the app at any time.",
  },
  {
    question: "Where can I use my Grey virtual card?",
    answer:
      "Anywhere Visa is accepted — online, in apps, and in physical stores worldwide.",
  },
  {
    question: "How long does it take to get a Grey virtual card?",
    answer:
      "Creating your Grey virtual card is an instant process. Just open your Durapay app, go to Cards, and follow the prompts.",
  },
  {
    question: "Where can I use my Grey virtual card?",
    answer:
      "Anywhere Visa is accepted — online, in apps, and in physical stores worldwide.",
  },
  {
    question: "What if I need help?",
    answer:
      "Our Support team is available 24/7 to help you with anything you need, anytime.",
  },
];

export default function VirtualCardPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 sm:px-10 lg:px-10 py-30">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 flex flex-col items-center ">
          <h1 className="text-[40px] text-sm sm:text-5xl lg:text-[73px] text-black font-bold leading-tight">
            <span>One international </span> <br />
            <span className="ml-6"> card for all your </span> <br />
            <span className="ml-4"> foreign spending </span>
          </h1>
          <p className="mt-5 text-gray-600 font-semibold max-w-lg text-center text-[13px] sm:text-base lg:text-[16px]">
            <span>
              Your Durapay card now works with Apple Pay and Google Pay.
              Create{" "}
            </span>
            <span className="ml-4">
              multiple cards, spend straight from your balance, and pay at 150
            </span>
            <span className="ml-6"> million merchants worldwide. </span>
          </p>
          {/* <p className="mt-5 text-gray-600 max-w-lg text-sm sm:text-base text- center">
            Your Durapay card now works with Apple Pay and Google Pay. Create
            multiple cards, spend straight from your balance, and pay at 150
            million merchants worldwide.
          </p> */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
              Get your new card
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#F8F8F8] px-6 sm:px-10 lg:px-10 py-16">
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

      <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-10 lg:mb-30 ">
        <div className="mt-30 mb-20">
          <h1 className="font-semibold text-black text-[40px] xs:text-center lg:text-[42px] leading-tight tracking-tight mb-3 lg:mb-3 ">
            Designed with your safety in mind
          </h1>
          <p className="text-gray-600 text-[16px] xs:text-center font-medium lg:text-[18px] ">
            Your card is safeguarded by industry-standard security measures,{" "}
            <br className="hidden lg:block" />
            such as 3D Secure verification and secure in-app controls, allowing{" "}
            <br className="hidden lg:block" />
            you to spend with confidence anywhere.
          </p>
        </div>
        <div className="grid xs:grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
            <img
              src="/card-creation.avif"
              alt=""
              className="w-60 lg:w-80 ml-2"
            />
            <p className="text-black text-center font-semibold text-[18px] lg:text-[18px] lg:text-center mb-3 lg:mb-3">
              Safe card generation and in-app <br className="" />
              administration
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
            <img src="/shield.avif" alt="" className="w-60 lg:w-80 ml-6" />
            <p className="text-black font-semibold lg:text-[18px] lg:text-center mb-3 lg:mb-3">
              3D Secure Transaction <br className="hidden lg:block" />{" "}
              Verification
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
            <img src="/global.avif" alt="" className="w-60 lg:w-80 ml-6" />
            <p className="text-black font-semibold lg:text-[18px] lg:text-center mb-3 lg:mb-3">
              The worldwide payment network <br className="hidden lg:block" />{" "}
              of Visa
            </p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="bg-[#F8F8F8] px-6 sm:px-10 lg:px-10 py-16">
        <h2 className="text-2xl text-black text-center text-[38px] lg:text-[60px] lg:text-center font-semibold mb-10">
          Receive your virtual card <br /> in less than five minutes.
        </h2>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 lg:mb-10">
          <div className="w-full flex flex-col items-center justify-center max-w-[600px]  mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
            <img src="/download-dura.avif" alt="" className="w-120 lg:w-80" />
          </div>
          <div className="w-full flex flex-col items-center justify-center  max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
            <img src="/createdura.avif" alt="" className="w-120 lg:w-80 " />
          </div>
          <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
            <img src="/fund.avif" alt="" className="w-120 lg:w-80" />
          </div>
          <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
            <img src="/ready.avif" alt="" className="w-120 lg:w-80" />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Download the Durapay app",
            "Create your account",
            "Fund your account",
            "Create your card instantly",
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
              Go to Cards to create your <br className="hidden lg:block" />
              new virtual card in seconds!
            </h1>
            <div className="mt-5">
              <button className="w-fit px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition mb-4">
                Create your card
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

      {/* FAQ */}
      <section className="w-full max-w-3xl mx-auto px-8 sm:px-8 lg:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <span className="text-base sm:text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-gray-500">
                  {openIndex === index ? (
                    <HiMinus className="w-5 h-5" />
                  ) : (
                    <HiPlus className="w-5 h-5" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* <p>
        Availability of card services depends on your location and supported
        jurisdictions. <a href=""> Learn more</a>
      </p> */}
    </div>
  );
}
