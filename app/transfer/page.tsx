"use client";

import { Wallet } from "lucide-react";
import { useState } from "react";

import { Shield, Bell, BadgeCheck } from "lucide-react";

// ─── Icon Components ──────────────────────────────────────────────────────────

const ArrowRightIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M12 5l7 7-7 7"
    />
  </svg>
);

const ShieldCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const ZapIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const GlobeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <circle cx="12" cy="12" r="10" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
    />
  </svg>
);

const SmartphoneIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path strokeLinecap="round" d="M12 18h.01" />
  </svg>
);

const UsersIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
    />
    <circle cx="9" cy="7" r="4" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
    />
  </svg>
);

const CreditCardIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <rect x="1" y="4" width="22" height="16" rx="2" />
    <path strokeLinecap="round" d="M1 10h22" />
  </svg>
);

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.22.99.14l12.76-7.37-2.95-2.95-10.8 10.18zM.5 1.73C.19 2.08 0 2.63 0 3.33v17.34c0 .7.19 1.25.5 1.6l.08.08 9.71-9.71v-.22L.58 1.65.5 1.73zM20.67 10.27l-2.78-1.6-3.31 3.31 3.31 3.31 2.8-1.62c.8-.46.8-1.21-.02-1.4zM3.18.24L15.99 7.6l-2.95 2.95L2.24.37C2.6.3 2.91.07 3.18.24z" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const featur = [
  {
    title: "Protected and Regulated",
    description:
      "We are regulated by CBN and NDIC, giving you the confidence to transact globally with peace of mind.",
    icon: Shield,
    image: "/protected-regulated.webp",
  },
  {
    title: "Two-Factor Authentication",
    description:
      "Protect your account with additional security verification during every transaction.",
    icon: BadgeCheck,
    image: "/two-factor.webp",
  },
  {
    title: "Instant Notification",
    description:
      "Receive real-time alerts whenever money is sent, received or converted.",
    icon: Bell,
    image: "/instant-notification.avif",
  },
];

interface Feature {
  label: string;
}

const features: Feature[] = [
  { label: "100% digital account setup" },
  { label: "Free registration wallet" },
  { label: "No hidden charges" },
  { label: "Instant money transfers" },
  { label: "Built for Fast, Everyday Payments" },
  { label: "Withdraw to Any Nigerian Bank" },
  { label: "Access Your Transaction History Anytime" },
  { label: "Instant transaction notifications" },
  { label: "Bank-Grade Security & Fraud Protection" },
  { label: "Low transaction fees" },
];

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 shrink-0 text-purple-400"
    >
      <path d="M12 2c.4 3.6 1.2 5.8 2.6 7.2C16 10.6 18.2 11.4 21.8 11.8c-3.6.4-5.8 1.2-7.2 2.6C13.2 15.8 12.4 18 12 21.6c-.4-3.6-1.2-5.8-2.6-7.2C8 13 5.8 12.2 2.2 11.8c3.6-.4 5.8-1.2 7.2-2.6C10.8 7.8 11.6 5.6 12 2z" />
    </svg>
  );
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
      "As a CEO, I often have to deal with international currencies. Durapy's account has simplified these transactions — reliable and convenient every time.",
    name: "Tunde Bakare",
    role: "CEO",
    variant: "blue",
  },
  {
    quote:
      "As a freelancer working with clients globally, Durapay's transfer process has made receiving payments so much easier. No more currency headaches and the fees are surprisingly low!",
    name: "Imisioluwa Adeyeri",
    role: "Content Marketer",
    variant: "gray",
  },
  {
    quote:
      "As someone who's always on the move, Durapay's account fits my lifestyle perfectly. Easy access to my funds in different currencies, all in one app – it's brilliant!",
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

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TransferPage() {
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

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white text-white font-sans antialiased overflow-hidden">
      // ── HERO ─────────────────────────────────────────────────────────────
      <section className="relative overflow-hidden bg-[#f8f9ff] -mt-14 lg:-mt-14">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#eef3ff_0%,transparent_45%),radial-gradient(circle_at_bottom_right,#dbe8ff_0%,transparent_35%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl ">
              <h1
                className="text-[52px] leading-[1.06] font-bold tracking-tight text-[#111827]
        sm:text-[65px]
        lg:text-[78px] w-[130%]"
              >
                Local and
                <br />
                international
                <br className="sm:hidden block" /> money
                <br /> transfers
              </h1>

              <p className="mt-10 max-w-xl text-[18px] leading-[1.49] text-[#232323]">
                Send money, receive payments, pay bills, and manage
                <br className="hidden lg:block" />
                your finances — all from your Durapay account
                <br className="hidden lg:block" />
              </p>
              <button className="mt-12 rounded-xl bg-[#1154DA] px-8 py-5 text-lg font-semibold text-white transition hover:bg-[#0f49be]">
                Make a transfer
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/mapp.webp"
                alt="World Map"
                className="w-[280px] sm:w-[260px] lg:w-[250px] lg:-mt-8"
              />
            </div>
          </div>
        </div>

        {/* Bottom curved shape */}
        <div className="absolute bottom-0 right-0 h-44 w-[45%] rounded-tl-[120px] bg-white"></div>
      </section>
      {/* Next Phase*/}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-10 py-20 lg:py-18">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="w-16 h-16 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-lg bg-black flex items-center justify-center order-1 md:order-2 lg:mb-6 md:-mt-4">
            <Wallet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-black/90 text-[26px] md:text-[40px] lg:text-[50px] font-bold leading-[1.10] tracking-tight order-2 md:order-1">
            Send money the easy way <br className="sm:hidden block" />
            any where with Durapay
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
      {/* Next phase */}
      <section className="bg-[#040B18] max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-18">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <img src="grey-logo.svg" alt="" />
          </div>

          <h1 className="text-center lg:text-center text-white text-[32px] lg:text-[75px] font-bold leading-tight tracking-tight">
            <span> Everything you can </span> <br />
            <span className="text-slate-400">do with your </span> <br />
            <span className="text-slate-400"> Durapay wallet</span>
          </h1>
        </div>
      </section>
      {/* Wallet features */}
      <section className="w-full bg-[#0b0d12] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto flex flex-wrap lg:flex-wrap  justify-center gap-2.5 sm:gap-3">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="
              flex items-center gap-2
              rounded-full border border-white/10
              bg-white/[0.03] hover:bg-white/[0.06]
              transition-colors duration-200
              px-4 py-2.5 sm:px-5 sm:py-3
              whitespace-nowrap
            "
            >
              <SparkleIcon />
              <span className="text-xs sm:text-sm md:text-[15px] text-gray-200 font-medium">
                {feature.label}
              </span>
            </div>
          ))}

          <div>
            <img
              src="/black-hand-holding-card.avif"
              alt=""
              className="mt-30 w-200 h-100 md:w-200 md:h-100 lg:w-200 lg:h-180"
            />
            <h1 className="text-center lg:text-center text-white text-[32px] md:text-[62px] lg:text-[75px] font-bold leading-10 lg:leading-21 tracking-tight">
              <span> Ready to manage your money</span> <br />
              <span className="text-slate-400">more confidently with</span>{" "}
              <br />
              <span className="text-slate-400"> Durapay?</span>
            </h1>
            <div className="text-center">
              <button className=" mt-12 rounded-xl bg-[#1154DA] px-8 py-5 text-lg font-semibold text-white transition hover:bg-[#0f49be]">
                Get started - it's free
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Next Phase */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-12 max-w-xl">
            Receive payments safely with our account security measures
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div className="space-y-6">
              {featur.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`w-full text-left rounded-3xl transition-all duration-300 ${
                      active === index
                        ? "bg-gray-100 p-8 border-b-4 border-blue-600"
                        : "p-6"
                    }`}
                  >
                    <div className="flex gap-4">
                      <Icon size={28} className="text-gray-900 shrink-0 mt-1" />

                      <div>
                        <h3 className="text-2xl text-black font-bold mb-3">
                          {feature.title}
                        </h3>

                        {active === index && (
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT VISUAL */}
            <div className="hidden lg:block sticky top-24 -mt-55 lg:-mt-47">
              <div className="rounded-3xl overflow-hidden bg-black h-[500px] xl:h-[590px] flex items-center justify-center">
                <img
                  key={active}
                  src={featur[active].image}
                  alt={featur[active].title}
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-10 lg:py-18 bg-gray-200">
        <h1 className="text-center lg:text-center text-black text-[32px] lg:text-[75px] font-semibold leading-[1.03] tracking-tight">
          <span>Join the professionals </span> <br />
          <span className="text-black">who trust Durapay with </span> <br />
          <span className="text-black"> their banking needs</span>
        </h1>
      </section>
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 text-center">
            What our customers say
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
      {/* HOW IT WORKS */}
      {/* <section
        id="how-it-works"
        className="py-24 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="text-center mb-14">
          <p className="text-[#1154da] text-sm lg:text-lg font-semibold uppercase tracking-widest mb-3">
            How it Works
          </p>
          <h2 className="text-3xl text-black sm:text-4xl font-bold">
            Three taps to transfer
          </h2>
          <p className="text-gray-800 mt-3 max-w-md mx-auto">
            We removed every unnecessary step. Sending money should feel this
            simple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 relative">
         
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-black to-transparent" />

          {steps.map((s, i) => (
            <div
              key={s.num}
              className="bg-white shadow-sm border  rounded-2xl p-6 hover:border-black transition-colors group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative w-12 h-12 rounded-2xl bg-blue-800 border border-blue-800 flex items-center justify-center mb-5 pulse-ring group-hover:bg-black transition-colors">
                <span className="text-gray-200 font-bold text-sm">{s.num}</span>
              </div>
              <h3 className="font-bold text-black text-lg mb-2">{s.title}</h3>
              <p className="text-zinc-900 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      
        <div className="text-center mt-10">
          <a
            href="#download"
            className="inline-flex items-center gap-2 text-[#1154da] font-semibold text-sm lg:text-lg transition-colors"
          >
            Download Durapay and try it now{" "}
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </section> */}
      {/* FEATURES  */}
      {/* <section
        id="features"
        className="py-24 bg-white/[0.02] border-y border-white/[0.06]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#1154da] text-sm lg:text-lg font-semibold uppercase tracking-widest mb-3">
              Features
            </p>
            <h2 className="text-3xl text-zinc-900 sm:text-4xl font-bold">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-zinc-900 mt-3 max-w-lg mx-auto">
              Built specifically for Nigerians who need fast, reliable transfers
              every single day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white shadow-sm border border-white/[0.07] rounded-2xl p-6 hover:border-white/20 transition-all hover:-translate-y-0.5 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}
                >
                  <f.icon
                    className={`w-5 h-5 bg-clip-text text-blue-600 bg-gradient-to-br ${f.color}`}
                  />
                </div>
                <h3 className="font-bold text-base text-black mb-2 group-hover:text-[#1154da] transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* ── SECURITY ───────────────────────────────────────────────────────── */}
      {/* <section id="security" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        
          <div className="order-2 lg:order-1">
            <div className="bg-[#0d0d0d] border border-white/[0.07] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <ShieldCheckIcon className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">
                    Security Overview
                  </p>
                  <p className="text-zinc-500 text-xs">
                    All systems operational
                  </p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              {[
                {
                  label: "Encryption",
                  val: "256-bit AES",
                  pct: 100,
                  color: "bg-emerald-500",
                },
                {
                  label: "Fraud Detection",
                  val: "AI-powered",
                  pct: 98,
                  color: "bg-sky-500",
                },
                {
                  label: "Uptime",
                  val: "99.98%",
                  pct: 99,
                  color: "bg-violet-500",
                },
                {
                  label: "2FA Coverage",
                  val: "100% of accounts",
                  pct: 100,
                  color: "bg-amber-500",
                },
              ].map((item) => (
                <div key={item.label} className="mb-5">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-zinc-300 font-medium">
                      {item.label}
                    </span>
                    <span className="text-zinc-500 text-xs">{item.val}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl flex gap-3">
                <ShieldCheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-xs leading-relaxed">
                  Your money and data are protected by the same security
                  standards used by top Nigerian commercial banks.
                </p>
              </div>
            </div>
          </div>

          
          <div className="order-1 lg:order-2">
            <p className="text-[#007A55] text-sm lg:text-lg font-semibold uppercase tracking-widest mb-4">
              Security
            </p>
            <h2 className="text-3xl text-gray-900 sm:text-4xl font-bold leading-tight mb-5">
              Your money is
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                fortress-level
              </span>{" "}
              safe.
            </h2>
            <p className="text-black leading-relaxed mb-8">
              We're CBN-licensed and NDIC-insured. Every transaction is
              encrypted end-to-end and monitored by our AI fraud engine in real
              time.
            </p>

            <ul className="space-y-3">
              {[
                "Biometric login — face ID & fingerprint",
                "Real-time transaction alerts",
                "Instant card & account freeze",
                "24/7 fraud monitoring team",
                "Data never sold to third parties",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-black"
                >
                  <div className="w-5 h-5 rounded-full bg-[#023bac] flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-8 inline-flex items-center gap-2 bg-[#023bac] hover:bg-[#1154da] transition-colors text-white font-bold px-6 py-3 rounded-xl text-sm"
            >
              Start transferring safely <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section> */}
      {/* ── DOWNLOAD ───────────────────────────────────────────────────────── */}
      {/* <section id="download" className="py-24 relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#1154da] text-sm lg:text-lg font-semibold uppercase tracking-widest mb-4">
            Download Durapay
          </p>
          <h2 className="text-3xl text-black sm:text-5xl font-bold leading-tight mb-5">
            Ready to send money
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
              the smart way?
            </span>
          </h2>
          <p className="text-zinc-900 text-lg mb-10 max-w-md mx-auto">
            Join over 2 million Nigerians already using Durapay to send,
            receive, and manage money effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group flex items-center gap-3 bg-white text-black hover:bg-zinc-100 transition-colors px-6 py-4 rounded-2xl font-semibold text-sm"
            >
              <AppleIcon className="w-6 h-6 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-normal text-black/90">
                  Download on the
                </p>
                <p className="font-bold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 bg-white text-black hover:bg-zinc-100 transition-colors px-6 py-4 rounded-2xl font-semibold text-sm"
            >
              <PlayStoreIcon className="w-6 h-6 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-normal text-black/90">Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </a>
          </div>

      
          <div className="mt-12 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 max-w-sm mx-auto">
            <p className="font-semibold mb-1 text-black/90 text-sm">
              Get early access
            </p>
            <p className="text-zinc-800 text-xs mb-4">
              Be first to know about new features & exclusive offers.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-blue/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-[#023bac] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#1154da] hover:bg-[#023bac] transition-colors text-white font-bold px-2 py-2.5 rounded-xl text-[12px]shrink-0"
                >
                  Notify me
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 py-2 text-emerald-400 text-sm font-medium">
                <CheckIcon className="w-4 h-4" />
                You're on the list!
              </div>
            )}
          </div>
        </div>
      </section> */}
      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      {/* <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
              <ZapIcon className="w-3.5 h-3.5 text-black" />
            </div>
            <span
              className="font-bold"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Swiftpay
            </span>
          </div>
          <p className="text-zinc-600 text-xs">
            © 2025 Swiftpay Ltd · CBN Licensed · NDIC Insured · Lagos, Nigeria
          </p>
          <div className="flex gap-5 text-xs text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
