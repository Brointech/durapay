"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  variant: "blue" | "gray" | "purple";
}

const testimonials: Testimonial[] = [
  {
    quote:
      "As a CEO, I often have to deal with international currencies. Grey's virtual account has simplified these transactions — reliable and convenient every time.",
    name: "Tunde Bakare",
    role: "CEO",
    variant: "blue",
  },
  {
    quote:
      "As a freelancer working with clients globally, Grey's virtual foreign account has made receiving payments so much easier. No more currency headaches and the fees are surprisingly low!",
    name: "Imisioluwa Adeyeri",
    role: "Content Marketer",
    variant: "gray",
  },
  {
    quote:
      "As someone who's always on the move, Grey's virtual foreign account fits my lifestyle perfectly. Easy access to my funds in different currencies, all in one app – it's brilliant!",
    name: "Emeka Amadi",
    role: "Digital Nomad",
    variant: "purple",
  },
  {
    quote:
      "I regularly deal with clients across countries, and Grey has made financial transactions incredibly smooth. The ability to handle various currencies without worrying about fees is fantastic.",
    name: "Sophia Chiedu",
    role: "IT Consultant",
    variant: "gray",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How do I get the DuraPay virtual card?",
    answer: (
      <>
        You can get a Durapay virtual card right in your Durapay app, and it
        takes <br /> less than 5 minutes. Start by creating a Durapay account,
        then create <br /> your virtual card directly from your dashboard.
        Already have the <br /> app? Go to Cards to create your new virtual Visa
        card in seconds.
      </>
    ),
  },
  {
    question: "Which currencies can I spend from?",
    answer: (
      <>
        You can spend directly from any balance of your choice, in USD, <br />{" "}
        EUR, GBP, or your local currency. Simply choose the balance you <br />{" "}
        want, and your card will be linked automatically.
      </>
    ),
  },
  {
    question: "Do I need to fund my card before spending?",
    answer: (
      <>
        No. Your Durapay virtual card is directly connected to your selected{" "}
        <br /> balance. If you have funds in your account, you can spend
        instantly <br /> — no extra steps.
      </>
    ),
  },
  {
    question: "Can I use my DuraPay card with Apple Pay or Google Pay?",
    answer: (
      <>
        Yes. You can add your Durapay virtual card to Apple Pay or Google <br />
        Pay in supported regions and enjoy fast, contactless payments <br />
        online and in-store.
      </>
    ),
  },
  {
    question: "Can I create more than one virtual card?",
    answer: (
      <>
        Yes. You can create multiple virtual cards for different needs like{" "}
        <br />
        subscriptions, travel, ad spend, or everyday payments. Each card <br />
        can have its own limits and controls.
      </>
    ),
  },
  {
    question: "Is my Durapay virtual card secure?",
    answer: (
      <>
        Yes. Durapay virtual cards are protected with 3D Secure, Visa’s global{" "}
        <br />
        payment network, and in-app controls that let you manage or <br />
        pause cards anytime.
      </>
    ),
  },
  {
    question: "Where can I use my Durapay virtual card?",
    answer: (
      <>
        Anywhere Visa is accepted — online, in apps, and in physical <br />
        stores worldwide.
      </>
    ),
  },

  {
    question: "How long does it take to get a Durapay virtual card?",
    answer: (
      <>
        Creating your Durapay virtual card is an instant process. Just open{" "}
        <br />
        your durapay app, go to Virtual Cards, and follow the prompts.
      </>
    ),
  },
  {
    question: "What if I need help?",
    answer: (
      <>
        Our Support team is available 24/7 to help you with anything you <br />
        need, anytime.
      </>
    ),
  },
];

export default function VirtualCardPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [active, setActive] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const [toggleOn, setToggleOn] = useState(true);

  const loopedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
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
          <p className="text-sm sm:text-base font-semibold">
            {testimonial.name}
          </p>
          <p
            className={`text-xs sm:text-sm ${subtleTextStyles[testimonial.variant]}`}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-white antialiased">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-4 sm:px-10 lg:px-10 py-16">
        <div className="absolute inset-0 bg-white" />

        <div className="relative flex flex-col items-center mx-auto max-w-4xl text-center">
          <h1 className="text-[2.5rem] font-bold leading-[1.05] tracking-tight text-[#0B0E14] sm:text-6xl md:text-7xl lg:text-[5.0rem]">
            One international <br className="hidden sm:block" />
            card for all your <br className="hidden sm:block" />
            global spending
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-500 sm:mt-8 sm:text-lg md:text-xl">
            Your Durapay card now works with Apple Pay and Google Pay. Create{" "}
            multiple cards, spend straight from your balance, and pay at 150
            million merchants worldwide
          </p>
          {/* <p className="mt-5 text-gray-600 max-w-lg text-sm sm:text-base text-center">
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
      <section className="bg-[#F8F8F8] px-4 sm:px-10 lg:px-10 py-16">
        <div className="mt-10 lg:mt-10">
          <h1 className="text-center font-semibold text-[44px] md:text-[44px] lg:text-[48px] text-black leading-12 tracking-tight">
            Cards built for the borderless
          </h1>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mt-28">
          <div className="flex flex-col">
            <div className="relative w-full max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
              <img
                src="/visacard.avif"
                alt="Virtual Card"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8 p-2">
              <h1 className="text-[26px] lg:text-[34px] text-[#1A1A1A] font-semibold leading-8 lg:leading-10">
                Create multiple cards for every
                <br className="hidden lg:block" /> part of your life
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[18px] text-[#49546C]">
                One card for subscriptions. One for travel. One for business.{" "}
                <br className="hidden lg:block" />
                Create as many as you need, each with its own limits and{" "}
                <br className="hidden lg:block" /> controls.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative w-full max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
              <img
                src="/visaphone.avif"
                alt="Virtual Card"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8 p-2">
              <h1 className="text-[26px] lg:text-[34px] text-[#1A1A1A] font-semibold leading-8">
                Add to Apple Pay or Google <br className="hidden lg:block" />{" "}
                Pay
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[18px] text-[#49546C]">
                Pay with a tap. Add your Durapay card to Apple Pay{" "}
                <br className="hidden lg:block" />
                or Google Pay for contactless payments anywhere.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="flex flex-col">
            <div className="relative w-full max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
              <img
                src="/visacard.avif"
                alt="Virtual Card"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8 p-2">
              <h1 className="text-[22px] md:text-[20px] lg:text-[32px] text-[#1A1A1A] font-semibold leading-7 lg:leading-9">
                Spend directly from your balance,{" "}
                <br className="hidden lg:block" />
                no manual top-ups
              </h1>
              <p className="text-[15px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] tracking-tight">
                Your balance is your card. Spend directly from your USD, EUR, or{" "}
                <br className="hidden lg:block" /> GBP account, no separate card{" "}
                funding needed.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative w-full max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
              <img
                src="/visaphone.avif"
                alt="Virtual Card"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8.5 p-2">
              <h1 className="text-[24px] md:text-[20px] lg:text-[31px] text-[#1A1A1A] font-semibold leading-7">
                Extra protection with 3D Secure
              </h1>
              <p className="mt-3 text-[16px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] tracking-tighter">
                Extra protection with 3D Secure. 3DS support{" "}
                <br className="sm:hidden block" />
                means you <br className="hidden lg:block" />
                personally authorize each transaction{" "}
                <br className="hidden lg:block" /> before it goes through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Card  */}
      <div className="min-h-screen bg-white text-white antialiased px-4 sm:px-10 lg:px-10 py-30">
        <div className="mt-28 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center  ">
          {/* Left Side */}
          <div>
            <h3 className="text-[#1F1F30] font-semibold text-[28px] leading-8 sm:leading-[1.15]  tracking-tight">
              How much does a Durapay <br className="hidden lg:block" />{" "}
              physical card cost?
            </h3>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              Creating a Durapay physical card costs a one-time fee{" "}
              <br className="hidden lg:block" />
              of $5. To get started, you’ll need a minimum of{" "}
              <br className="hidden lg:block" />
              $5 in your USD balance, or the equivalent in any{" "}
              <br className="hidden lg:block" />
              other currency balance. The fee is shown before{" "}
              <br className="hidden lg:block" />
              you confirm, and there are no monthly charges after that.
            </p>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              Durapay physical cards are debit cards, so your spending is
              charged directly to your account balance, with no credit check
              required. You spend in any currency you hold in your balance at
              the exchange rate shown in the Durapay app at the time of the
              transaction.
            </p>
          </div>
          {/* Right side */}
          <div>
            <img
              src="/dollar.avif"
              alt=""
              className="w-[380px] md:w-[720px] lg:w-[520px] object-contain "
            />
          </div>
        </div>
        {/* Utility Payment */}
        <div className="mt-28 lg:mt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 ">
          {/* Left Side: image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/visa-plat.avif"
              alt=""
              className="w-[380px] md:w-[720px] lg:w-[520px] object-contain"
            />
          </div>
          {/* Right content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-[#1F1F30] font-semibold text-[32px] leading-[1.05] sm:leading-[1.15] lg:leading-10  tracking-tight">
              Spend in USD, EUR, and <br className="hidden lg:block" />
              GBP with your Durapay physical card
            </h1>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              Your Durapay physical card is linked directly to your account
              balance. When creating your card, the fee is deducted from your
              USD balance; if insufficient, the currency balance with the
              highest available value is used. Card payments are also deducted
              automatically from your available balance. Currency conversion
              fees apply when making non-USD payments.
            </p>
          </div>
        </div>
        {/* Airtime APIs */}
        <div className="mt-28 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-[#1F1F30] font-semibold text-[32px] leading-[1.05] sm:leading-[1.15]  tracking-tight">
              Everything your Durapay physical card supports
            </h1>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              Your Grey virtual Visa card works wherever Visa is accepted:
              online, in apps, and in physical stores across 150 million
              merchants worldwide. That includes Netflix, Spotify, Apple,
              Amazon, Google Ads, Canva, Coursera, Uber, Namecheap, and more.
              You can also add your Grey card to Apple Pay or Google Pay for
              contactless payments in supported regions.
            </p>
          </div>
          {/* Right side */}
          <div>
            <img
              src="/supports.avif"
              alt=""
              className="w-[380px] md:w-[720px] lg:w-[520px] object-contain "
            />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        <h1 className="text-[#1A1A1A] text-center font-semibold text-[38px] md:text-[40px] lg:text-[76px] xl:text-[78px] lg:leading-19  tracking-tighter">
          Built for the way <br /> you live <br className="hidden lg:block" />{" "}
          and <br className=""/> work today
        </h1>
        <p className="text-[#49546C] font-medium text-[16px] md:text-[18px] lg:text-[18px] text-center leading-relaxed">
          We built Grey virtual cards for the freelancers, remote workers, and{" "}
          <br className="hidden lg:block" />
          digital nomads who live and spend across borders
        </p>
      </div> */}

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 sm:px-8 lg:px-0">
        <h1
          className="text-center font-semibold tracking-[-0.04em] text-[#1A1A1A]
                 text-[48px] leading-[1.05]
                 sm:text-[52px]
                 md:text-[64px]
                 lg:text-[76px]
                 xl:text-[84px]"
        >
          Built for the way you live <br className="hidden md:block" />
          and work today
        </h1>

        <p
          className="max-w-2xl text-center font-medium text-[#49546C]
                text-[18px] leading-7
                sm:text-[18px] sm:leading-8"
        >
          We built DuraPay physical cards for freelancers, remote workers, and
          digital nomads who live and spend across borders.
        </p>
      </div>

      {/* Shopping section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4  px-6 sm:px-10 lg:px-10 mt-10 lg:mt-10">
        {/* Card 1 */}
        <div className="relative overflow-hidden rounded-[22px] aspect-[4/5] group">
          <img
            src="/shop1.avif"
            alt="Shop worldwide"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/25 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <p className="text-white text-center text-2xl md:text-[18px] font-medium leading-tight">
              Shop at over 150 million merchants worldwide
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden rounded-[22px] aspect-[4/5] group">
          <img
            src="/shop2.avif"
            alt="Travel"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/25 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <p className="text-white text-center text-2xl md:text-[18px] font-medium leading-tight">
              With you on the go, from booking that flight to spending wherever
              you go
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden rounded-[22px] aspect-[4/5] group">
          <img
            src="/shop3.avif"
            alt="Visa"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/25 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <p className="text-white text-center text-2xl md:text-[18px] font-medium leading-tight">
              Use your card locally anywhere Visa is accepted, no matter the
              currency
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex xs:flex-col lg:items-center gap-2 lg:gap-2 lg:justify-between px-6 sm:px-10 lg:px-10 lg:mt-10 ">
        <div>
          <img
            src="/shop1.avif"
            alt=""
            className="w-[520px] md:w-[720px] lg:w-[380px] object-contain rounded-[20px]"
          />{" "}
          <p className="text-[#1A1A1A] font-medium text-[16px]">
            Shop at over 150 million merchants world wide
          </p>
        </div>
        <div>
          <img
            src="/shop2.avif"
            alt=""
            className="w-[520px] md:w-[720px] lg:w-[380px] object-contain  rounded-[20px]"
          />
          <p className="text-[#1A1A1A] font-medium text-[16px">
            {" "}
            With you on-the-go, from booking that flight to spending wherever
            you go
          </p>
        </div>
        <div className="">
          <img
            src="/shop3.avif"
            alt=""
            className="w-[520px] md:w-[720px] lg:w-[380px] object-contain "
          />{" "}
          <p className="text-[#1A1A1A] font-medium text-[16px">
            Use your card locally anywhere Visa is accepted, no matter the
            currency
          </p>
        </div>
      </div> */}

      <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-10 lg:mb-30 mt-10 lg:mt-50 ">
        <div className="mb-20">
          <h1 className="font-semibold text-black text-[48px] xs:text-center lg:text-[42px] leading-[1.05] tracking-[-0.04em] mb-3 lg:mb-3 ">
            Built with your security in mind
          </h1>
          <p className="text-gray-600 text-[16px] xs:text-center font-medium lg:text-[18px]">
            Your card is protected by industry-standard security, 3D Secure{" "}
            <br className="hidden lg:block" />
            verification, and secure in-app controls, so you can spend{" "}
            <br className="hidden lg:block" />
            confidently anywhere.
          </p>
        </div>
        <div className="grid xs:grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto  rounded-2xl bg-[#F3F5F9]">
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
          <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto  rounded-2xl bg-[#F6F6F9]">
            <img src="/shield.avif" alt="" className="w-60 lg:w-80 ml-6" />
            <p className="text-black font-semibold lg:text-[18px] lg:text-center mb-3 lg:mb-3">
              3D Secure Transaction <br className="hidden lg:block" />{" "}
              Verification
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center max-w-[600px] mx-auto  rounded-2xl bg-[#F6F6F9]">
            <img src="/global.avif" alt="" className="w-60 lg:w-80 ml-6" />
            <p className="text-black font-semibold lg:text-[18px] lg:text-center mb-3 lg:mb-3">
              The worldwide payment network <br className="hidden lg:block" />{" "}
              of Visa
            </p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="bg-[#F3F5F9] px-6 sm:px-10 lg:px-10 py-16">
        <h2 className="text-2xl text-black text-center text-[38px] lg:text-[74px] lg:text-center font-semibold mb-10 leading-19 tracking-tight">
          Get your physical card in <br /> less than 5 minutes
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
                Create your card instantly
              </p>
            </div>
          </div>
        </div>
        {/* 
        <div className="flex items-center justify-between gap-0">
          <div className="">
            <span className="bg-[#E8F0FC] text-[#082F74] font-medium text-[18px] p-2 rounded-[7px] border border-[#A0C0F3]">
              {" "}
              STEP ONE
            </span>
            <p className="text-[#1B1F28] font-semibold text-[18px] ">
              Download the Durapay app
            </p>
          </div>

          <div className="">
            <span className="bg-[#E8F0FC] text-[#082F74] font-medium text-[18px] p-2 rounded-[7px] border border-[#A0C0F3]">
              {" "}
              STEP TWO
            </span>
            <p className="text-[#1B1F28] font-semibold text-[18px] ">
              Create your account
            </p>
          </div>
          <div className="">
            <span className="bg-[#E8F0FC] text-[#082F74] font-medium text-[18px] p-2 rounded-[7px] border border-[#A0C0F3]">
              {" "}
              STEP THREE
            </span>
            <p className="text-[#1B1F28] font-semibold text-[18px] ">
              Fund your account
            </p>
          </div>
          <div className="">
            <span className="bg-[#E8F0FC] text-[#082F74] font-medium text-[18px] p-2 rounded-[7px] border border-[#A0C0F3]">
              {" "}
              STEP FOUR
            </span>
            <p className="text-[#1B1F28] font-semibold text-[18px] ">
              Create your card instantly
            </p>
          </div>
        </div> */}
        {/* 
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
        </div> */}

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
              new physical card in seconds!
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
      {/* <section className="px-6 sm:px-10 lg:px-20 py-20">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
            Real stories from <br /> our global community
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

      {/* FAQ */}
      <section className="bg-[#F6F9FE] w-full max-w-7xl mx-auto px-8 sm:px-8 lg:px-10 py-12">
        <div className="flex items-center gap-4">
          <img src="/Faqq.avif" alt="" className="w-90 md:w-80 lg:w-26" />
          <h2 className="py-10 text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-8 text-center lg:text-left">
            FAQs
          </h2>{" "}
        </div>
        <div className="divide-y divide-gray-200 border-t border-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <span className="text-base sm:text-lg lg:text-[32px] font-medium text-gray-900">
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
                <p className="mt-3 text-sm sm:text-base lg:text-[24px] text-gray-600 leading-relaxed tracking-tight pr-8">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="lg:py-16">
          <p className="text-[#495471] font-normal">
            Availability of card services depends on your location and supported
            jurisdictions.{" "}
            <a className="text-[#2467E3]" href="">
              {" "}
              Learn more
            </a>
          </p>{" "}
        </div>
      </section>
    </div>
  );
}

// "use clients";

// const Physicalcards = () => {
//   return (
//     <section className="relative overflow-hidden bg-white py-24 lg:py-32">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           <div>
//             <span className="inline-flex items-center px-4 py-2 rounded-full text-blue-600 bg-blue-500/10 border border-blue-400/30 text-sm font-medium mb-6">
//               Physical NGN Debit Card
//             </span>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//               Spend confidently with your
//               <span className="text-[#3574f3]"> Durapay Card</span>
//             </h1>

//             <p className="mt-6 text-lg text-slate-900 max-w-xl">
//               Shop online, withdraw cash, pay bills, and make purchases anywhere
//               cards are accepted. Earn rewards, cashback, and enjoy complete
//               control directly from your Durapay app.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="bg-[#1154da] hover:bg-[#3574f3] text-white font-semibold px-7 py-4 rounded-xl">
//                 Get Your Card
//               </button>

//               <button className="border border-white/20 hover:bg-white/10 px-7 py-4 rounded-xl">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Card Mockup */}
//           <div className="flex justify-center">
//             <div className="w-full max-w-md aspect-[1.6/1] rounded-3xl bg-gradient-to-br from-[#1154da] via-[#3e71d8] to-[#3574f3] p-8 shadow-2xl">
//               <div className="h-full flex flex-col justify-between">
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-bold text-white text-2xl">Durapay</h3>
//                   <span className="text-sm text-white font-medium">Debit</span>
//                 </div>

//                 <div>
//                   <p className="tracking-[4px] text-white text-xl font-medium">
//                     •••• •••• •••• 4587
//                   </p>
//                 </div>

//                 <div className="flex justify-between">
//                   <div>
//                     <p className="text-xs opacity-90 text-white">CARD HOLDER</p>
//                     <p className="font-medium text-white">FELIX IDEH</p>
//                   </div>

//                   <div>
//                     <p className="text-xs opacity-90 text-white">VALID THRU</p>
//                     <p className="font-medium text-white">08/31</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Physicalcards;
