"use client";

import { Wallet } from "lucide-react";
import { useState } from "react";

interface Card {
  id: number;
  type: "feature" | "image";
  label?: string;
  title?: string;
  description?: string;
  bgColor?: string;
  imageUrl?: string;
  phoneMockup?: boolean;
}

const cards: Card[] = [
  {
    id: 1,
    type: "image",
    imageUrl: "/AI.jpg",
    description: "Physical Card.",
  },
  {
    id: 2,
    type: "feature",
    label: "BILL PAYMENT",
    title: "Pay the important bills before they are due.",
    bgColor: "bg-[#5B4F8C]",
    phoneMockup: true,
  },
  {
    id: 3,
    type: "feature",
    label: "VIRTUAL CARDS",
    title: "Create virtual cards for secure online payments.",
    bgColor: "bg-[#2D2D3A]",
    phoneMockup: true,
  },
  {
    id: 4,
    type: "feature",
    label: "GLOBAL TRANSFERS",
    title: "Send money across borders instantly.",
    bgColor: "bg-[#1E3A5F]",
    phoneMockup: true,
  },
];

export default function BeyondBanking() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      <div>
        <div className=" w-full px-6 lg:px-10 py-16 bg-white">
          <div className="w-18 h-18 rounded-lg bg-black flex items-center justify-center">
            <Wallet className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-bold text-black text-[70px]">Beyond banking</h1>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[calc(100vh-100px)] flex items-center">
          {/* Cards Track */}
          <div
            className="flex gap-4 sm:gap-6 px-6 sm:px-10 lg:px-16 transition-transform duration-700 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`
                relative flex-shrink-0 rounded-3xl overflow-hidden
                ${card.type === "image" ? "w-[85vw] sm:w-[45vw] lg:w-[35vw]" : "w-[90vw] sm:w-[55vw] lg:w-[45vw] xl:w-[40vw]"}
                h-[60vh] sm:h-[65vh] lg:h-[70vh]
                ${card.bgColor || "bg-gray-100"}
                transition-all duration-500
                ${index === currentIndex ? "scale-100 opacity-100" : "scale-95 opacity-70"}
              `}
              >
                {card.type === "image" && card.imageUrl ? (
                  <>
                    <img
                      src={card.imageUrl}
                      alt="Feature"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                        {card.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Feature Card Content */}
                    <div className="relative w-full h-full flex flex-col p-6 sm:p-8 lg:p-10">
                      {/* Label */}
                      <span className="text-white/80 text-xs sm:text-sm lg:text-[20px] font-medium tracking-widest uppercase">
                        {card.label}
                      </span>

                      {/* Phone Mockup */}
                      {card.phoneMockup && (
                        <div className="absolute top-1/2 right-4 sm:right-8 lg:right-0 -translate-y-1/2">
                          <div className="relative w-36 sm:w-44 lg:w-56 xl:w-64">
                            {/* Phone Frame */}
                            <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl">
                              {/* Notch */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-black rounded-b-xl z-10" />

                              {/* Screen */}
                              <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden aspect-[9/19]">
                                {/* App Header */}
                                <div className="bg-white pt-8 sm:pt-10 pb-3 px-4 flex items-center justify-between">
                                  <button className="text-gray-800 text-lg">
                                    ←
                                  </button>
                                  <span className="text-gray-900 font-semibold text-sm sm:text-base">
                                    Bill Payment
                                  </span>
                                  <button className="text-gray-800">⌄</button>
                                </div>

                                {/* App Content - Scrollable area */}
                                <div className="px-3 pb-4 space-y-3">
                                  {/* Country Selector */}
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">
                                      Nigeria
                                    </span>
                                    <button className="text-[#2563EB] text-xs font-medium">
                                      View all
                                    </button>
                                  </div>

                                  {/* Provider Grid */}
                                  <div className="space-y-2">
                                    <p className="text-xs text-gray-500 font-medium px-1">
                                      Buy Data
                                    </p>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="bg-[#FFCC00] rounded-xl p-2 flex items-center justify-center">
                                        <span className="text-[8px] sm:text-[10px] font-bold text-black">
                                          MTN
                                        </span>
                                      </div>
                                      <div className="bg-white border border-gray-200 rounded-xl p-2 flex items-center justify-center">
                                        <span className="text-[#E60000] text-[8px] sm:text-[10px] font-bold">
                                          airtel
                                        </span>
                                      </div>
                                      <div className="bg-[#00B050] rounded-xl p-2 flex items-center justify-center">
                                        <span className="text-[8px] sm:text-[10px] font-bold text-white">
                                          9mobile
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Electricity Section */}
                                  <div className="space-y-2">
                                    <p className="text-xs text-gray-500 font-medium px-1">
                                      Electricity Bills
                                    </p>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="bg-white border border-gray-200 rounded-xl p-2 flex items-center justify-center">
                                        <span className="text-[8px] sm:text-[10px] font-bold text-orange-600">
                                          IKEDC
                                        </span>
                                      </div>
                                      <div className="bg-white border border-gray-200 rounded-xl p-2 flex items-center justify-center">
                                        <span className="text-[8px] sm:text-[10px] font-bold text-blue-800">
                                          EKEDC
                                        </span>
                                      </div>
                                      <div className="bg-white border border-gray-200 rounded-xl p-2 flex items-center justify-center">
                                        <span className="text-[8px] sm:text-[10px] font-bold text-gray-600">
                                          BEDC
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Recharge Section */}
                                  <div className="space-y-2">
                                    <p className="text-xs text-gray-500 font-medium px-1">
                                      Recharge your phone
                                    </p>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="bg-[#FFCC00] rounded-xl p-2 flex items-center justify-center">
                                        <span className="text-[8px] sm:text-[10px] font-bold text-black">
                                          MTN
                                        </span>
                                      </div>
                                      <div className="bg-white border border-gray-200 rounded-xl p-2 flex items-center justify-center">
                                        <span className="text-[#E60000] text-[8px] sm:text-[10px] font-bold">
                                          airtel
                                        </span>
                                      </div>
                                      <div className="bg-[#00B050] rounded-xl p-2 flex items-center justify-center">
                                        <span className="text-[8px] sm:text-[10px] font-bold text-white">
                                          9mobile
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Hand overlay (optional - use an image instead for realism) */}
                            <div className="absolute -bottom-4 -right-4 w-20 sm:w-28 lg:w-36 pointer-events-none">
                              {/* Replace with actual hand holding phone image */}
                              <div className="bg-gradient-to-t from-black/40 to-transparent rounded-full aspect-square" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom Text */}
                      <div className="mt-auto max-w-[70%] sm:max-w-[60%]">
                        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[16px] font-medium leading-tight mr-4">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Grey Navigation Button - Right Side */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20
                     w-12 h-20 sm:w-14 sm:h-24 lg:w-16 lg:h-28
                     bg-gray-300 hover:bg-gray-400 
                     rounded-xl sm:rounded-2xl
                     flex items-center justify-center
                     transition-all duration-200 hover:scale-105 active:scale-95
                     shadow-lg"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
              h-1.5 sm:h-2 rounded-full transition-all duration-300
              ${index === currentIndex ? "w-6 sm:w-8 bg-[#2563EB]" : "w-1.5 sm:w-2 bg-gray-300"}
            `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="w-full px-6 lg:px-10 py-16 bg-white">
  <div className="">
    <div className="w-18 h-18 rounded-lg bg-black flex items-center justify-center">
      <Wallet className="w-10 h-10 text-white" />
    </div>
    <h1 className="font-bold text-black text-[70px]">Beyond banking</h1>
  </div>
</section>; */
}
