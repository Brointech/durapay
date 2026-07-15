"use client";

import { ArrowRightLeft, Wallet } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import {
  FiGift,
  FiCreditCard,
  FiShield,
  FiZap,
  FiPlus,
  FiX,
  FiChevronRight,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

interface Brand {
  name: string;
  logo: string; // path under /public — swap with real asset, e.g. /brands/amazon.svg
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  variant: "blue" | "gray" | "purple";
}

const brands: Brand[] = [
  { name: "Amazon", logo: "/brands/amazon.svg" },
  { name: "iTunes", logo: "/brands/itunes.svg" },
  { name: "Google Play", logo: "/brands/google-play.svg" },
  { name: "Steam", logo: "/brands/steam.svg" },
  { name: "Netflix", logo: "/brands/netflix.svg" },
  { name: "Spotify", logo: "/brands/spotify.svg" },
];

const amounts = [10, 25, 50, 100, 200, 500];

const features = [
  {
    icon: FiZap,
    title: "Instant delivery",
    desc: "Codes are issued to your wallet the moment payment clears.",
  },
  {
    icon: FiCreditCard,
    title: "Multiple brands",
    desc: "Over 30 supported gift card brands, with more added monthly.",
  },
  {
    icon: FiGift,
    title: "Send as a gift",
    desc: "Buy for yourself or send directly to a friend's DuraPay tag.",
  },
  {
    icon: FiShield,
    title: "Secure checkout",
    desc: "Every purchase is encrypted and protected end-to-end.",
  },
];

const faqs = [
  {
    q: "How fast will I receive my gift card?",
    a: "Gift cards are delivered instantly to your DuraPay wallet as soon as your payment is confirmed.",
  },
  {
    q: "Can I send a gift card to someone else?",
    a: "Yes, you can purchase a card and send it directly to any DuraPay user by their wallet tag.",
  },
  {
    q: "What happens if a code doesn't work?",
    a: "Reach out to our support team with your transaction reference and we'll resolve it or issue a replacement.",
  },
  {
    q: "Are there any extra fees?",
    a: "The price you see at checkout is the price you pay. No hidden charges.",
  },
];

const giftCards = [
  "Amazon",
  "Apple",
  "Steam",
  "Google Play",
  "iTunes",
  "Razer Gold",
];

const rates: Record<string, number> = {
  Amazon: 1520,
  Apple: 1450,
  Steam: 1480,
  "Google Play": 1400,
  iTunes: 1425,
  "Razer Gold": 1380,
};

const feature = [
  {
    icon: FiClock,
    title: "Real-time rates",
    description: "Always updated to reflect the mid-market rates.",
  },
  {
    icon: FiDollarSign,
    title: "Multiple currency support",
    description: "Over 40 supported currencies, from USD to EUR and GBP.",
  },
  {
    icon: FiZap,
    title: "User-friendly tool",
    description: "Convert funds quickly and with ease.",
  },
  {
    icon: FiShield,
    title: "Secure transactions",
    description: "Your funds and data are protected at every step.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "As a CEO, I often have to deal with international currencies. Durapay's gift card session has simplified these transactions — reliable and convenient every time.",
    name: "Tunde Bakare",
    role: "CEO",
    variant: "blue",
  },
  {
    quote:
      "As a freelancer working with clients globally, Durapay's gift card session has made receiving payments so much easier. No more currency headaches and the fees are surprisingly low!",
    name: "Imisioluwa Adeyeri",
    role: "Content Marketer",
    variant: "gray",
  },
  {
    quote:
      "As someone who's always on the move, Durapay's gift card session fits my lifestyle perfectly. Easy access to my funds in different currencies, all in one app – it's brilliant!",
    name: "Emeka Amadi",
    role: "Digital Nomad",
    variant: "purple",
  },
  {
    quote:
      "I regularly deal with clients across countries, and Durapay has made financial transactions incredibly smooth. The ability to handle various currencies without worrying about fees is fantastic.",
    name: "Sophia Chiedu",
    role: "IT Consultant",
    variant: "gray",
  },
];

const variantStyles: Record<Testimonial["variant"], string> = {
  blue: "bg-blue-600 text-white",
  purple: "bg-purple-700 text-white",
  gray: "bg-gray-100 text-gray-900",
};

const subtleTextStyles: Record<Testimonial["variant"], string> = {
  blue: "text-blue-100",
  purple: "text-purple-200",
  gray: "text-gray-500",
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className={`
        flex flex-col justify-between shrink-0
        w-[280px] sm:w-[320px] md:w-[360px]
        h-[280px] sm:h-[300px]
        rounded-2xl sm:rounded-3xl
        p-6 sm:p-8
        ${variantStyles[testimonial.variant]}
      `}
    >
      <p className="text-sm sm:text-base leading-relaxed font-medium">
        {testimonial.quote}
      </p>
      <div>
        <p className="text-sm sm:text-base font-semibold">{testimonial.name}</p>
        <p
          className={`text-xs sm:text-sm ${subtleTextStyles[testimonial.variant]}`}
        >
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}

export default function Giftcard() {
  const [selectedBrand, setSelectedBrand] = useState<string>(brands[0].name);
  const [selectedAmount, setSelectedAmount] = useState<number>(amounts[1]);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeAmount = customAmount ? Number(customAmount) : selectedAmount;

  const [card, setCard] = useState("Amazon");
  // const [amount, setAmount] = useState(100);
  const [amount, setAmount] = useState<string>("");
  const rate = rates[card];
  const receive = (Number(amount) || 0) * rate;

  const loopedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="bg-white max-w-7xl mx-auto">
      <section className="bg-[radial-gradient(circle_at_100%_100%,#c9dffa_0%,#eef4fc_35%,#ffffff_65%)] min-h-[40vh] sm:min-h-screen mx-auto px-6 md:px-10 lg:px-10 pt-28 md:pt-32 lg:pt-20 pb-20">
        {/* <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <h1 className="text-[#1F1F30] text-center font-bold text-[28px] md:text-[40px] lg:text-[56px] xl:text-[68px] leading-tight">
            Exchange gift cards
          </h1>
          <p className="text-[#363F52] font-normal text-[16px] md:text-[18px] lg:text-[20px] text-center tracking-tighter leading-7 lg:leading-9">
            Exchange gift cards from top international brands with ease. DuraPay
            offers <br /> competitive rates, fast transactions, and secure
            payouts, making it simple to get <br /> the value of your gift cards
            whenever you need it.
          </p>
        </div> */}
        <div className=" mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 sm:px-6 md:px-8">
          <h1 className="text-center font-bold text-[#1F1F30] text-[32px] leading-tight sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px]">
            Exchange gift cards
          </h1>

          <p className="max-w-3xl text-center text-[#363F52] text-[16px] leading-7 sm:text-[17px] md:text-[14px] md:leading-8 lg:text-[20px] lg:leading-8">
            Exchange gift cards from top international brands with ease. DuraPay
            offers competitive rates, fast transactions, and secure payouts,
            making it simple to get the value of your gift cards whenever you
            need it.
          </p>
        </div>
        <div className="mx-auto max-w-7xl rounded-[32px] lg:rounded-[40px] bg-white border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Converter */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-6 items-center">
              {/* YOU SELL */}
              <div className="border border-gray-200 rounded-3xl p-5 md:p-6 min-h-[170px] flex flex-col justify-between">
                <span className="uppercase text-xs md:text-sm tracking-wider text-[#7C8BA5]">
                  YOU SELL
                </span>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={amount}
                      placeholder="Enter amount"
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-transparent text-2xl sm:text-3xl md:text-4xl font-medium outline-none placeholder:text-[#7C8BA5]"
                    />

                    <p className="mt-2 text-sm text-[#7C8BA5]">
                      Card Value (USD)
                    </p>
                  </div>

                  <select
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                    className="bg-transparent text-lg sm:text-xl md:text-2xl font-medium outline-none"
                  >
                    {giftCards.map((gift) => (
                      <option key={gift}>{gift}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap */}
              <div className="flex justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#CBD5E1] flex items-center justify-center bg-white">
                  <ArrowRightLeft className="w-6 h-6 md:w-8 md:h-8 text-[#64748B] rotate-90 lg:rotate-0" />
                </div>
              </div>

              {/* YOU RECEIVE */}
              <div className="border border-gray-200 rounded-3xl p-5 md:p-6 min-h-[170px] flex flex-col justify-between">
                <span className="uppercase text-xs md:text-sm tracking-wider text-[#7C8BA5]">
                  YOU RECEIVE
                </span>

                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium break-words">
                      ₦{receive.toLocaleString()}
                    </h2>

                    <p className="mt-2 text-sm text-[#7C8BA5]">
                      Estimated payout
                    </p>
                  </div>

                  <span className="text-lg sm:text-xl md:text-2xl font-medium">
                    NGN
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mt-8">
            <button className="w-full md:w-auto rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] transition px-8 py-4 text-white font-semibold">
              Sell Now
            </button>

            <p className="text-sm md:text-base text-[#7C8BA5]">
              Last updated:
              <span className="ml-1 text-[#1E293B]">2 minutes ago</span>
            </p>
          </div>

          {/* Rates */}
          <div className="mt-14 md:mt-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.03em]">
              Live Gift Card Rates on Durapay
            </h2>

            <p className="mt-4 max-w-3xl text-base md:text-lg lg:text-xl leading-7 text-[#556274]">
              Exchange Amazon, Apple, Steam, Google Play, Razer Gold and more at
              competitive market rates. Every trade is transparent with no
              hidden fees, so the amount you see is exactly what you'll receive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
              {[
                ["Amazon $100", "₦152,000"],
                ["Apple $100", "₦145,500"],
                ["Steam $100", "₦148,300"],
                ["Google Play $100", "₦141,900"],
              ].map(([title, price]) => (
                <div
                  key={title}
                  className="rounded-[28px] bg-[#F5F7FB] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-lg md:text-xl font-medium text-[#334155]">
                    {title}
                  </p>

                  <h3 className="mt-6 text-2xl md:text-3xl font-semibold">
                    {price}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gift cards */}
      <section className="bg-white max-w-7xl mx-auto px-6 md:px-10 lg:px-10 py-20 lg:py-18">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="w-16 h-16 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-lg bg-black flex items-center justify-center order-1 md:order-2 lg:mb-6 md:-mt-4">
            <Wallet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-black/90 text-[30px] md:text-[40px] lg:text-[60px] font-bold leading-4 sm:leading-10 lg:leading-16 tracking-tight order-2 md:order-1">
            How Durapay gift cards <br className="sm:hidden block" />{" "}
            <br className="hidden:lg block" />
            converter works
          </h1>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step One */}
            <div className="rounded-2xl bg-[#F0F2F5] p-6 shadow-sm ring-1 ring-gray-100 flex flex-col gap-2 overflow-hidden">
              <h3 className="text-[#8594B4] text-[14px] font-medium">
                STEP ONE
              </h3>
              <p className="text-[#2D3443] font-semibold text-[18px]">
                Select your gift card
              </p>
              <p className="text-[#2D3443] text-[14px] leading-6">
                Choose from top global brands like Apple, Amazon, Steam, and
                Netflix
              </p>
              <div className="mt-4 flex justify-center">
                <img
                  src="/gitf3.png"
                  alt="Select your gift card"
                  className="w-full max-w-[280px] object-contain"
                />
              </div>
            </div>

            {/* Step Two */}
            <div className="rounded-2xl bg-[#F0F2F5] p-6 shadow-sm ring-1 ring-gray-100 flex flex-col gap-2 overflow-hidden">
              <h3 className="text-[#8594B4] text-[14px] font-medium">
                STEP TWO
              </h3>
              <p className="text-[#2D3443] font-semibold text-[18px]">
                Choose an amount
              </p>
              <p className="text-[#2D3443] text-[14px] leading-6">
                Pick a preset value or enter a custom amount that suits you
              </p>
              <div className="mt-4 flex justify-center">
                <img
                  src="/gift1.png"
                  alt="Choose an amount"
                  className="w-full max-w-[280px] object-contain"
                />
              </div>
            </div>

            {/* Step Three */}
            <div className="rounded-2xl bg-[#F0F2F5] p-6 shadow-sm ring-1 ring-gray-100 flex flex-col gap-2 overflow-hidden">
              <h3 className="text-[#8594B4] text-[14px] font-medium">
                STEP THREE
              </h3>
              <p className="text-[#2D3443] font-semibold text-[18px]">
                Pay and receive instantly
              </p>
              <p className="text-[#2D3443] text-[14px] leading-6">
                Get your code delivered straight to your DuraPay wallet in
                seconds.
              </p>
              <div className="mt-4 flex justify-center">
                <img
                  src="/gift2.png"
                  alt="Pay and receive instantly"
                  className="w-full max-w-[280px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* How it works                                                */}
      {/* ---------------------------------------------------------- */}
      {/* <section className="w-full px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-[#00246C] sm:text-3xl">
            How it works
          </h2>

          
        </div>
      </section> */}

      <section className="bg-white max-w-7xl mx-auto px-6 md:px-10 lg:px-10 py-20 lg:py-18">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="w-16 h-16 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-lg bg-black flex items-center justify-center order-1 md:order-2 lg:mb-6 md:-mt-4">
            <Wallet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-black/90 text-[30px] md:text-[40px] lg:text-[60px] font-bold leading-4 sm:leading-10 lg:leading-14 tracking-tight order-2 md:order-1">
            Covert gift cards <br className="sm:hidden block" />{" "}
            <br className="hidden:lg block" />
            the easy way
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-11 mt-10 lg:mt-10">
          <div className="flex flex-col bg-[#2F0D59] rounded-[12px] overflow-hidden">
            <div className="p-6">
              <h3 className="text-white text font-bold text-[22px] mb-1">
                No unnecessary hassles
              </h3>
              <p className="text-white font-medium text-[15px]">
                Receive your foreign payments in an <br />
                account you can access or withdraw from <br />
                at any time.
              </p>
            </div>
            <img
              src="/frame1.svg"
              alt=""
              className="w-[520px] md:w-[720px] lg:w-[390px] object-contain mt-14"
            />
          </div>

          <div className="flex flex-col bg-[#F0F2F5] rounded-[12px]">
            <div className="p-6">
              <h3 className="text-black text font-bold text-[22px] mb-1">
                No unnecessary hassles
              </h3>
              <p className="text-black font-medium text-[16px]">
                An account where your employers never <br />
                have to worry about your payments again.
              </p>
            </div>
            <img
              src="/frame2.svg"
              alt=""
              className="w-[520px] md:w-[720px] lg:w-[390px] object-contain"
            />
          </div>
          <div className=" flex flex-col bg-[#1B1F28] rounded-[12px]">
            <div className="p-6">
              <h3 className="text-white font-semibold text-[22px] mb-1">
                Credit from your platforms
              </h3>
              <p className="text-white font-medium text-[14px]">
                Receive payments from platforms like Deel, <br />
                Upwork, Fiverr, Amazon, and more.
              </p>
            </div>
            <img
              src="/frame3.svg"
              alt=""
              className="w-[520px] md:w-[720px] lg:w-[390px] object-contain"
            />
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------- */}
      {/* Features                                                    */}
      {/* ---------------------------------------------------------- */}
      <section className="w-full bg-[#14181F] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {/* <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Why buy gift cards on DuraPay?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#252B37] p-6 shadow-sm border border-white/9"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF3FE]">
                  <Icon className="h-5 w-5 text-[#14181F]" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div> */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 max-w-2xl leading-tight">
            Why choose DuraPay for gift cards?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {feature.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-6 min-h-[220px]"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Testimonials                                                */}
      {/* ---------------------------------------------------------- */}
      {/* <section className="w-full px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-[#00246C] sm:text-3xl">
            People who buy gift cards on DuraPay
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl bg-[#F7F9FF] p-6"
              >
                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#00246C]">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 sm:text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonial */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-10 overflow-hidden">
        {/* MARQUEE KEYFRAMES — inline so no tailwind config needed */}
        <style>{`
        @keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
} 
  
// .marquee-outer{
//     overflow:hidden;
//     -webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);
//     mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);
// }

.marquee-track{
    display:flex;
    gap:24px;
    width:max-content;
    animation:marquee 25s linear infinite;
}

.marquee-track:hover{
    animation-play-state:paused;
} 
      `}</style>
        <div className="mb-8 sm:mb-10 ">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900 text-center">
            People who exchange gift cards on Durapay
          </h2>
        </div>

        <div className="marquee-outer">
          <div className="marquee-track">
            {loopedTestimonials.map((testimonial, i) => (
              <TestimonialCard
                key={`${testimonial.name}-${i}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* FAQ                                                         */}
      {/* ---------------------------------------------------------- */}
      <section className="w-full bg-[#F7F9FF] max-w-7xl mx-auto px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#00246C] sm:text-3xl">
            Frequently asked questions
          </h2>

          <div className="mt-8 flex flex-col sm:mt-10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border-b border-gray-200 py-5 first:pt-0"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-[#00246C] sm:text-lg">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <FiX className="h-5 w-5 shrink-0 text-gray-700" />
                    ) : (
                      <FiPlus className="h-5 w-5 shrink-0 text-gray-700" />
                    )}
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="pr-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* CTA                                                         */}
      {/* ---------------------------------------------------------- */}
      <section className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-2xl bg-[#00246C] px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to send your first gift card?
          </h2>
          <p className="mt-3 max-w-md text-sm text-blue-100 sm:text-base">
            Instant delivery, transparent pricing, and it's all inside your
            DuraPay wallet.
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#00246C] transition-opacity hover:opacity-90 sm:text-base">
            Get started
          </button>
        </div>
      </section>
    </div>
  );
}
