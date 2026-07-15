// "use client";

// import { useState, useEffect } from "react";
// import {
//   PiggyBank,
//   TrendingUp,
//   Shield,
//   Zap,
//   Target,
//   Clock,
//   Lock,
//   Unlock,
//   ChevronRight,
//   Download,
//   Check,
//   Star,
//   Wallet,
//   ArrowRight,
//   Percent,
//   Calendar,
//   Bell,
//   Menu,
//   X,
//   Calculator,
//   Gift,
//   Smartphone,
//   Banknote,
//   ChevronDown,
//   Eye,
//   EyeOff,
//   Info,
//   Plus,
//   Minus,
//   RefreshCw,
//   Award,
//   Users,
//   Globe,
//   Heart,
// } from "lucide-react";

// interface SavingsPlan {
//   id: string;
//   name: string;
//   description: string;
//   interestRate: number;
//   minDeposit: number;
//   lockPeriod: string;
//   icon: React.ReactNode;
//   color: string;
//   bgColor: string;
//   features: string[];
//   popular?: boolean;
// }

// interface Testimonial {
//   id: string;
//   name: string;
//   location: string;
//   text: string;
//   saved: string;
//   avatar: string;
// }

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const savingsPlans: SavingsPlan[] = [
//   {
//     id: "flex",
//     name: "Flex Save",
//     description: "Save any amount, anytime. Withdraw whenever you need it.",
//     interestRate: 8.5,
//     minDeposit: 100,
//     lockPeriod: "No lock",
//     icon: <Zap className="w-6 h-6" />,
//     color: "text-emerald-600",
//     bgColor: "bg-emerald-50",
//     features: [
//       "8.5% annual interest",
//       "Instant withdrawals",
//       "No minimum balance",
//       "Auto-save rules",
//     ],
//   },
//   {
//     id: "target",
//     name: "Target Save",
//     description: "Set a goal and save towards it automatically.",
//     interestRate: 12,
//     minDeposit: 500,
//     lockPeriod: "Flexible",
//     icon: <Target className="w-6 h-6" />,
//     color: "text-blue-600",
//     bgColor: "bg-blue-50",
//     features: [
//       "12% annual interest",
//       "Goal tracking",
//       "Auto-debit setup",
//       "Group savings",
//     ],
//     popular: true,
//   },
//   {
//     id: "lock",
//     name: "Lock Save",
//     description: "Lock your money away and earn higher returns.",
//     interestRate: 18,
//     minDeposit: 5000,
//     lockPeriod: "30-365 days",
//     icon: <Lock className="w-6 h-6" />,
//     color: "text-purple-600",
//     bgColor: "bg-purple-50",
//     features: [
//       "Up to 18% interest",
//       "Fixed term options",
//       "Higher rates for longer",
//       "Early break option",
//     ],
//   },
//   {
//     id: "vault",
//     name: "Vault",
//     description: "Long-term wealth building with premium rates.",
//     interestRate: 22,
//     minDeposit: 50000,
//     lockPeriod: "1-5 years",
//     icon: <Shield className="w-6 h-6" />,
//     color: "text-amber-600",
//     bgColor: "bg-amber-50",
//     features: [
//       "Up to 22% interest",
//       "Compound interest",
//       "Wealth advisor",
//       "Tax advantages",
//     ],
//   },
// ];

// const testimonials: Testimonial[] = [
//   {
//     id: "1",
//     name: "Fatima Abdullahi",
//     location: "Kano",
//     text: "I used Target Save for my wedding. Set it to auto-debit ₦10,000 weekly. In 8 months, I had ₦350,000 plus interest. Stress-free.",
//     saved: "₦350,000",
//     avatar: "FA",
//   },
//   {
//     id: "2",
//     name: "Oluwaseun Adeleke",
//     location: "Lagos",
//     text: "Lock Save helped me stop touching my rent money. I lock it for 6 months, earn 16%, and pay my landlord without panic.",
//     saved: "₦1,200,000",
//     avatar: "OA",
//   },
//   {
//     id: "3",
//     name: "Ngozi Eze",
//     location: "Enugu",
//     text: "The interest rates beat every bank in Nigeria. My Flex Save alone earns more than my old savings account ever did.",
//     saved: "₦850,000",
//     avatar: "NE",
//   },
// ];

// const faqs: FAQItem[] = [
//   {
//     question: "How is interest calculated and paid?",
//     answer:
//       "Interest is calculated daily on your balance and paid monthly. For Lock Save and Vault, interest is compounded and paid at maturity. You can see your daily interest accrue in real-time on the app dashboard.",
//   },
//   {
//     question: "Can I withdraw before the lock period ends?",
//     answer:
//       "Flex Save allows instant withdrawals anytime. For Target Save, you can withdraw but may forfeit accrued interest. Lock Save and Vault allow early withdrawal with a small penalty fee, but your principal is always safe.",
//   },
//   {
//     question: "Is my money safe with Durapay?",
//     answer:
//       "Absolutely. We are licensed by the CBN and NDIC-insured up to ₦500,000 per account. We use 256-bit encryption, biometric security, and partner with tier-1 Nigerian banks to hold your funds.",
//   },
//   {
//     question: "What is the minimum amount to start saving?",
//     answer:
//       "You can start with as little as ₦100 on Flex Save. Target Save requires ₦500 minimum, Lock Save ₦5,000, and Vault ₦50,000. There are no hidden fees or charges.",
//   },
//   {
//     question: "Can I have multiple savings plans at once?",
//     answer:
//       "Yes. You can create unlimited savings plans — one for rent, one for school fees, one for emergencies. Each plan earns its own interest and has its own settings.",
//   },
// ];

// const stats = [
//   {
//     value: "₦12B+",
//     label: "Total Saved",
//     icon: <PiggyBank className="w-5 h-5 text-blue-400" />,
//   },
//   {
//     value: "850K+",
//     label: "Active Savers",
//     icon: <Users className="w-5 h-5" />,
//   },
//   {
//     value: "₦2.1B",
//     label: "Interest Paid",
//     icon: <TrendingUp className="w-5 h-5" />,
//   },
//   { value: "4.9★", label: "App Rating", icon: <Star className="w-5 h-5" /> },
// ];

// export default function SavingsPage() {
//   const [selectedPlan, setSelectedPlan] = useState("target");
//   const [calculatorAmount, setCalculatorAmount] = useState("50000");
//   const [calculatorMonths, setCalculatorMonths] = useState(12);
//   const [showBalance, setShowBalance] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const [showSuccessToast, setShowSuccessToast] = useState(false);
//   const [activeTab, setActiveTab] = useState<"plans" | "calculator">("plans");

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (showSuccessToast) {
//       const timer = setTimeout(() => setShowSuccessToast(false), 4000);
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccessToast]);

//   const currentPlan =
//     savingsPlans.find((p) => p.id === selectedPlan) || savingsPlans[0];

//   const calculateReturns = () => {
//     const principal = parseFloat(calculatorAmount) || 0;
//     const rate = currentPlan.interestRate / 100;
//     const time = calculatorMonths / 12;
//     const simpleInterest = principal * rate * time;
//     const total = principal + simpleInterest;
//     return { interest: simpleInterest, total };
//   };

//   const { interest, total } = calculateReturns();

//   const formatCurrency = (amount: number) => {
//     return (
//       "₦" +
//       amount.toLocaleString("en-NG", {
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2,
//       })
//     );
//   };

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
    <div className="min-h-screen max-w-7xl mx-auto bg-white text-white antialiased">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-4 sm:px-10 lg:px-10 py-18">
        <div className="absolute inset-0 bg-white" />

        <div className="relative flex flex-col items-center mx-auto max-w-4xl text-center">
          <h1 className="text-[2.5rem] font-bold leading-[1.05] tracking-tight text-[#0B0E14] sm:text-6xl md:text-7xl lg:text-[4.5rem]">
            Build better financial <br className="hidden sm:block" />
            habits with every <br className="hidden sm:block" />
            deposit
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-500 sm:mt-6 sm:text-lg md:text-lg">
            Grow your money with flexible savings plans designed for your
            lifestyle. Set goals, automate your savings, and watch your balance
            increase—all from one secure app.
          </p>
          {/* <p className="mt-5 text-gray-600 max-w-lg text-sm sm:text-base text-center">
                Your Durapay card now works with Apple Pay and Google Pay. Create
                multiple cards, spend straight from your balance, and pay at 150
                million merchants worldwide.
              </p> */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
              Start saving today
            </button>
          </div>
        </div>
      </section>

      {/* Savings that work */}
      <section className="bg-[#F8F8F8] px-4 sm:px-10 lg:px-10 py-16">
        <div className="mt-10 lg:mt-10">
          <h1 className="text-center font-semibold text-[44px] md:text-[44px] lg:text-[48px] text-black leading-12 tracking-tight">
            Savings that work as hard as you do
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
                Target Savings
                <br className="hidden lg:block" />
                Save with a clear goal in mind
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[16px] text-[#49546C]">
                Whether you're planning for a new phone, rent, school fees, a
                vacation,
                <br className="hidden lg:block" />
                or your dream car, Target Savings helps you stay disciplined and
                <br className="hidden lg:block" /> reach your financial goals
                faster..
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
              <h1 className="text-[26px] lg:text-[34px] text-[#1A1A1A] font-semibold leading-8 lg:leading-10">
                Fixed Savings <br className="hidden lg:block" />
                Lock your savings for huge returns
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[18px] text-[#49546C]">
                Set aside money for a fixed period and earn higher interest
                while <br className="hidden lg:block" />
                avoiding the temptation to spend before your maturity date.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="flex flex-col">
            <div className="relative w-full max-w-[600px] mx-auto border border-black/10 rounded-2xl bg-[#F6F6F9]">
              <img
                src="/balance.avif"
                alt="Virtual Card"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8 p-2">
              <h1 className="text-[22px] md:text-[20px] lg:text-[32px] text-[#1A1A1A] font-semibold leading-7 lg:leading-9">
                Flexible Savings <br className="hidden lg:block" />
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
                src="/visa.avif"
                alt="Virtual Card"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8 p-2">
              <h1 className="text-[24px] md:text-[20px] lg:text-[31px] text-[#1A1A1A] font-semibold leading-7 lg:leading-9">
                Ajo (Thrift) <br className="hidden lg:block" /> Save together,
                achieve more
              </h1>
              <p className="text-[16px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] tracking-tighter">
                Contribute regularly, stay on track with scheduled payouts,
                <br className="sm:hidden block" />{" "}
                <br className="hidden lg:block" />
                and enjoy the convenience
                <br className="sm:hidden block" /> of modern group savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How durapay Savings work  */}
      <div className="min-h-screen  max-w-7xl mx-auto bg-white text-white antialiased px-4 sm:px-10 lg:px-10 py-30">
        <div className="mt-28 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center  ">
          {/* Left Side */}
          <div>
            <h3 className="text-[#1F1F30] font-semibold text-[28px] leading-8 sm:leading-[1.15]  tracking-tight">
              How does Durapay Savings work?
            </h3>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              Saving with Durapay is simple. Choose the savings plan that{" "}
              <br className="hidden lg:block" />
              matches your goals—Target Savings, fixed savings, flexible{" "}
              <br className="hidden lg:block" />
              Savings, or Ajo (Thrift), and start building your savings{" "}
              <br className="hidden lg:block" />
              in just a few taps.{" "}
            </p>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              You can make one-time deposits or automate your savings to stay
              consistent. Your money remains secure, and depending on the plan
              you choose, you may earn competitive interest while working toward
              your financial goals
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
        {/*   Save smarter with Durapay */}
        <div className="mt-28   max-w-7xl mx-auto lg:mt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-32 ">
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
              Save smarter with Durapay
            </h1>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              Your Durapay Savings account gives you the flexibility to save the
              way you want. Fund your savings directly from your wallet,
              automate regular deposits, and track every contribution in real
              time.
            </p>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              Whether you're building an emergency fund with Flexible Savings,
              committing to long-term growth with Fixed Savings, saving towards
              a personal milestone with Target Savings, or contributing through
              Ajo (Thrift), your money stays secure while helping you achieve
              your financial goals.
            </p>
          </div>
        </div>
        {/* Everything Durapay Savings */}
        <div className="mt-28 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-[#1F1F30] font-semibold text-[32px] leading-[1.05] sm:leading-[1.15]  tracking-tight">
              Everything Durapay Savings helps you achieve
            </h1>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              Durapay Savings is built to support every stage of your financial
              journey. Whether you're saving for a major purchase, building an
              emergency fund, planning for future expenses, or contributing to a
              group savings plan, there's a savings option designed for you.
            </p>
            <p className="text-[17px] md:text-[20px] lg:text-[18px] font-medium text-[#49546C] mt-6 lg:leading-6 leading-6">
              With Target Savings, Fixed Savings, Flexible Savings, and Ajo
              (Thrift), you can automate your deposits, track your progress in
              real time, earn competitive returns on eligible plans, and manage
              all your savings goals from one secure app. No matter what you're
              saving for, Durapay makes it easier to stay consistent and reach
              your goals faster.
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

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 sm:px-8 lg:px-0">
        <h1
          className="text-center font-semibold tracking-[-0.04em] text-[#1A1A1A]
                     text-[48px] leading-[1.05]
                     sm:text-[52px]
                     md:text-[64px]
                     lg:text-[76px]
                     xl:text-[84px]"
        >
          Built to help you save <br className="hidden md:block" />& grow your
          money
        </h1>

        <p
          className="max-w-2xl text-center font-medium text-[#49546C]
                    text-[18px] leading-7
                    sm:text-[18px] sm:leading-8"
        >
          We built Durapay Savings for people who want to save with purpose,
          grow their wealth, and achieve every financial milestone with
          confidence.
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

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-10 lg:mb-30 mt-10 lg:mt-50 ">
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
          Get your virtual card in <br /> less than 5 minutes
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

{/* Already have the app */}
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

    // <div className="min-h-screen bg-white font-sans text-slate-900 -mt-15">

    //   {/* {showSuccessToast && (
    //     <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2">
    //       <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
    //         <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
    //           <Check className="w-4 h-4 text-white" />
    //         </div>
    //         <div>
    //           <p className="font-semibold text-sm">Savings plan created!</p>
    //           <p className="text-xs text-slate-300">
    //             Start saving and watch your money grow
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   )} */}

    //   {/* Navigation */}
    //   {/* <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
    //     isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
    //   }`}>
    //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex items-center justify-between h-16">
    //         <div className="flex items-center gap-2">
    //           <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center">
    //             <Wallet className="w-5 h-5 text-white" />
    //           </div>
    //           <span className="font-bold text-lg tracking-tight">Grey<span className="text-slate-400">Wallet</span></span>
    //         </div>

    //         <div className="hidden md:flex items-center gap-8">
    //           <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
    //           <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Business</a>
    //           <a href="#" className="text-sm font-medium text-slate-900">Savings</a>
    //           <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Help</a>
    //         </div>

    //         <div className="hidden md:flex items-center gap-3">
    //           <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
    //             Sign In
    //           </button>
    //           <button className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors flex items-center gap-2">
    //             Get the App
    //             <Download className="w-4 h-4" />
    //           </button>
    //         </div>

    //         <button
    //           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    //           className="md:hidden p-2 rounded-lg hover:bg-slate-100"
    //         >
    //           {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    //         </button>
    //       </div>
    //     </div>

    //     {mobileMenuOpen && (
    //       <div className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4">
    //         <a href="#" className="block text-sm font-medium text-slate-600">Features</a>
    //         <a href="#" className="block text-sm font-medium text-slate-600">Business</a>
    //         <a href="#" className="block text-sm font-medium text-slate-900">Savings</a>
    //         <a href="#" className="block text-sm font-medium text-slate-600">Help</a>
    //         <div className="pt-4 border-t border-slate-100 space-y-3">
    //           <button className="w-full py-3 text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl">
    //             Sign In
    //           </button>
    //           <button className="w-full py-3 text-sm font-semibold text-white bg-slate-900 rounded-xl flex items-center justify-center gap-2">
    //             <Download className="w-4 h-4" />
    //             Get the App
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </nav> */}

    //   {/* Hero Section */}
    //   {/* <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 px-6 md:px-8 lg:px-10 bg-gradient-to-b from-emerald-50/50 to-white">
    //     <div className="max-w-6xl mx-auto">
    //       <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    //         <div className="order-2 lg:order-1">
    //           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10  border border-[#1154da] text-[#1154da] text-sm font-medium mb-8">
    //             <TrendingUp className="w-4 h-4 text-[#1154da]" />
    //             Up to 22% annual interest
    //           </div>
    //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1154da] tracking-tight leading-[1.1] mb-6">
    //             Your money should{" "}
    //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
    //               work harder
    //             </span>
    //           </h1>
    //           <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
    //             Earn up to 22% interest on your savings — higher than any
    //             traditional bank in Nigeria. Start with ₦100. Withdraw anytime
    //             on Flex Save.
    //           </p>
    //           <div className="flex flex-col sm:flex-row gap-4">
    //             <button className="px-8 py-4 rounded-2xl bg-[#1154da] hover:bg-slate-800 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
    //               <Download className="w-5 h-5" />
    //               Start Saving Now
    //             </button>
    //             <button
    //               onClick={() => {
    //                 const el = document.getElementById("calculator");
    //                 el?.scrollIntoView({ behavior: "smooth" });
    //               }}
    //               className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold transition-all flex items-center justify-center gap-2"
    //             >
    //               <Calculator className="w-4 h-4" />
    //               Calculate Returns
    //             </button>
    //           </div>
    //           <div className="flex items-center gap-6 mt-10">
    //             <div className="flex -space-x-3">
    //               {["FA", "OA", "NE", "BJ"].map((initials, i) => (
    //                 <div
    //                   key={i}
    //                   className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white ${
    //                     i === 0
    //                       ? "bg-emerald-500"
    //                       : i === 1
    //                         ? "bg-blue-500"
    //                         : i === 2
    //                           ? "bg-purple-500"
    //                           : "bg-amber-500"
    //                   }`}
    //                 >
    //                   {initials}
    //                 </div>
    //               ))}
    //             </div>
    //             <div>
    //               <div className="flex items-center gap-1">
    //                 {[1, 2, 3, 4, 5].map((i) => (
    //                   <Star
    //                     key={i}
    //                     className="w-4 h-4 fill-amber-400 text-amber-400"
    //                   />
    //                 ))}
    //               </div>
    //               <p className="text-sm text-slate-500 mt-0.5">
    //                 850,000+ active savers
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="order-1 lg:order-2 flex justify-center">
    //           <div className="relative w-72 sm:w-80">
    //             <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/20">
    //               <div className="bg-white rounded-[2.5rem] overflow-hidden">
    //                 <div className="h-6 bg-slate-900 mx-auto w-32 rounded-b-2xl" />

    //                 <div className="px-5 pt-6 pb-8">
    //                   <div className="flex items-center justify-between mb-6">
    //                     <div>
    //                       <p className="text-xs text-slate-800">
    //                         Total Savings
    //                       </p>
    //                       <div className="flex items-center gap-2">
    //                         <p className="text-2xl font-bold text-slate-900">
    //                           {showBalance ? "₦4,545,000" : "••••••"}
    //                         </p>
    //                         <button
    //                           onClick={() => setShowBalance(!showBalance)}
    //                           className="p-1"
    //                         >
    //                           {showBalance ? (
    //                             <EyeOff className="w-3 h-3 text-slate-700" />
    //                           ) : (
    //                             <Eye className="w-3 h-3 text-slate-400" />
    //                           )}
    //                         </button>
    //                       </div>
    //                     </div>
    //                     <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
    //                       <Bell className="w-4 h-4 text-[#1154da]" />
    //                     </div>
    //                   </div>

    //                   <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl p-5 text-white mb-6">
    //                     <div className="flex items-center justify-between mb-4">
    //                       <div>
    //                         <p className="text-xs text-emerald-100">
    //                           This month's interest
    //                         </p>
    //                         <p className="text-xl font-bold">₦ 58,420.50</p>
    //                       </div>
    //                       <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
    //                         <TrendingUp className="w-5 h-5" />
    //                       </div>
    //                     </div>
    //                     <div className="flex items-center gap-2">
    //                       <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
    //                         <div className="h-full w-3/4 bg-white rounded-full" />
    //                       </div>
    //                       <span className="text-xs font-medium">75%</span>
    //                     </div>
    //                     <p className="text-xs text-emerald-100 mt-2">
    //                       ₦2,000 to reach next tier
    //                     </p>
    //                   </div>

    //                   <p className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3">
    //                     My Plans
    //                   </p>
    //                   <div className="space-y-3">
    //                     {[
    //                       {
    //                         name: "Flex Save",
    //                         amount: "₦1,565,000",
    //                         rate: "8.5%",
    //                         color: "bg-emerald-50 border-emerald-200",
    //                         textColor: "text-emerald-700",
    //                       },
    //                       {
    //                         name: "Target: New Car",
    //                         amount: "₦2,980,000",
    //                         rate: "12%",
    //                         color: "bg-blue-50 border-blue-200",
    //                         textColor: "text-blue-700",
    //                       },
    //                     ].map((plan, i) => (
    //                       <div
    //                         key={i}
    //                         className={`p-3 rounded-xl border ${plan.color} flex items-center justify-between`}
    //                       >
    //                         <div>
    //                           <p className="text-xs font-semibold text-slate-700">
    //                             {plan.name}
    //                           </p>
    //                           <p className="text-sm font-bold text-slate-900">
    //                             {plan.amount}
    //                           </p>
    //                         </div>
    //                         <span
    //                           className={`text-xs font-bold px-2 py-1 rounded-full bg-white ${plan.textColor}`}
    //                         >
    //                           {plan.rate}
    //                         </span>
    //                       </div>
    //                     ))}
    //                   </div>

    //                   <button className="w-full mt-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold flex items-center justify-center gap-2">
    //                     <Plus className="w-4 h-4" />
    //                     Create New Plan
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 animate-bounce"
    //               style={{ animationDuration: "3s" }}
    //             >
    //               <div className="flex items-center gap-3">
    //                 <div className="w-10 h-10 rounded-full bg-blue-500/10  flex items-center justify-center">
    //                   <Percent className="w-5 h-5 text-[#1154da]" />
    //                 </div>
    //                 <div>
    //                   <p className="text-xs font-bold text-slate-900">
    //                     Interest Credited
    //                   </p>
    //                   <p className="text-[10px] text-slate-900">+₦8,420.50</p>
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 animate-bounce"
    //               style={{ animationDuration: "4s" }}
    //             >
    //               <div className="flex items-center gap-2">
    //                 <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
    //                   <Target className="w-4 h-4 text-[#1154da]" />
    //                 </div>
    //                 <div>
    //                   <p className="text-xs font-bold text-slate-900">
    //                     Goal Reached!
    //                   </p>
    //                   <p className="text-[10px] text-slate-600">
    //                     New Car: 100%
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section> */}

    //   {/* Stats Bar */}
    //   {/* <section className="py-12 bg-slate-900">
    //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    //         {stats.map((stat, i) => (
    //           <div key={i} className="text-center">
    //             <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4">
    //               <div className="text-blue-400">{stat.icon}</div>
    //             </div>
    //             <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
    //               {stat.value}
    //             </p>
    //             <p className="text-sm text-slate-400">{stat.label}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section> */}

    //   {/* Interest Rate Comparison */}
    //   {/* <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10">
    //     <div className="max-w-6xl mx-auto">
    //       <div className="text-center mb-16">
    //         <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
    //           Why our rates beat banks
    //         </h2>
    //         <p className="text-lg text-slate-600 max-w-2xl mx-auto">
    //           Traditional banks pay 1-4%. We pay 8.5% to 22%. Here is how we
    //           compare on ₦100,000 saved for one year.
    //         </p>
    //       </div>

    //       <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
    //         <div className="space-y-6">
    //           {[
    //             {
    //               name: "Durapay Vault",
    //               rate: 22,
    //               amount: 22000,
    //               color: "bg-emerald-500",
    //               highlight: true,
    //             },
    //             {
    //               name: "Durapay Lock Save",
    //               rate: 18,
    //               amount: 18000,
    //               color: "bg-emerald-400",
    //             },
    //             {
    //               name: "Durapay Target Save",
    //               rate: 12,
    //               amount: 12000,
    //               color: "bg-emerald-300",
    //             },
    //             {
    //               name: "Average Nigerian Bank",
    //               rate: 3.5,
    //               amount: 3500,
    //               color: "bg-slate-300",
    //             },
    //           ].map((item, i) => (
    //             <div key={i} className="relative">
    //               <div className="flex items-center justify-between mb-2">
    //                 <div className="flex items-center gap-3">
    //                   <span
    //                     className={`text-sm font-semibold ${item.highlight ? "text-emerald-700" : "text-slate-700"}`}
    //                   >
    //                     {item.name}
    //                   </span>
    //                   {item.highlight && (
    //                     <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
    //                       BEST
    //                     </span>
    //                   )}
    //                 </div>
    //                 <span
    //                   className={`text-sm font-bold ${item.highlight ? "text-emerald-600" : "text-slate-500"}`}
    //                 >
    //                   {item.rate}% • ₦{item.amount.toLocaleString()}
    //                 </span>
    //               </div>
    //               <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
    //                 <div
    //                   className={`h-full rounded-full transition-all duration-1000 ${item.color}`}
    //                   style={{ width: `${(item.rate / 22) * 100}%` }}
    //                 />
    //               </div>
    //             </div>
    //           ))}
    //         </div>

    //         <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-3">
    //           <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
    //           <p className="text-sm text-emerald-800">
    //             Based on ₦100,000 principal over 12 months. Bank rates averaged
    //             from top 5 Nigerian banks as of June 2026. GreyWallet rates are
    //             annual and compounded monthly where applicable.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section> */}

    //   {/* Savings Plans */}
    //   {/* <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10 bg-slate-50">
    //     <div className="max-w-6xl mx-auto">
    //       <div className="text-center mb-16">
    //         <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
    //           Choose your savings style
    //         </h2>
    //         <p className="text-lg text-slate-600">
    //           Four plans designed for different goals and timelines.
    //         </p>
    //       </div>

    //       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //         {savingsPlans.map((plan) => (
    //           <div
    //             key={plan.id}
    //             onClick={() => setSelectedPlan(plan.id)}
    //             className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
    //               selectedPlan === plan.id
    //                 ? "border-slate-900 bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-[1.02]"
    //                 : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
    //             }`}
    //           >
    //             {plan.popular && (
    //               <div className="absolute -top-3 left-1/2 -translate-x-1/2">
    //                 <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-lg">
    //                   MOST POPULAR
    //                 </span>
    //               </div>
    //             )}

    //             <div
    //               className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
    //                 selectedPlan === plan.id ? "bg-white/10" : plan.bgColor
    //               }`}
    //             >
    //               <div
    //                 className={
    //                   selectedPlan === plan.id ? "text-white" : plan.color
    //                 }
    //               >
    //                 {plan.icon}
    //               </div>
    //             </div>

    //             <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
    //             <p
    //               className={`text-sm leading-relaxed mb-5 ${selectedPlan === plan.id ? "text-slate-300" : "text-slate-500"}`}
    //             >
    //               {plan.description}
    //             </p>

    //             <div className="mb-5">
    //               <p
    //                 className={`text-4xl font-bold ${selectedPlan === plan.id ? "text-emerald-400" : "text-slate-900"}`}
    //               >
    //                 {plan.interestRate}%
    //               </p>
    //               <p
    //                 className={`text-xs ${selectedPlan === plan.id ? "text-slate-400" : "text-slate-500"}`}
    //               >
    //                 Annual interest rate
    //               </p>
    //             </div>

    //             <div className="space-y-2 mb-6">
    //               <div
    //                 className={`flex items-center gap-2 text-xs ${selectedPlan === plan.id ? "text-slate-300" : "text-slate-600"}`}
    //               >
    //                 <Banknote className="w-3.5 h-3.5" />
    //                 Min: ₦{plan.minDeposit.toLocaleString()}
    //               </div>
    //               <div
    //                 className={`flex items-center gap-2 text-xs ${selectedPlan === plan.id ? "text-slate-300" : "text-slate-600"}`}
    //               >
    //                 <Clock className="w-3.5 h-3.5" />
    //                 {plan.lockPeriod}
    //               </div>
    //             </div>

    //             <ul className="space-y-2 mb-6">
    //               {plan.features.map((feature, idx) => (
    //                 <li key={idx} className="flex items-center gap-2 text-sm">
    //                   <Check
    //                     className={`w-4 h-4 flex-shrink-0 ${selectedPlan === plan.id ? "text-emerald-400" : "text-emerald-600"}`}
    //                   />
    //                   <span
    //                     className={
    //                       selectedPlan === plan.id
    //                         ? "text-slate-200"
    //                         : "text-slate-600"
    //                     }
    //                   >
    //                     {feature}
    //                   </span>
    //                 </li>
    //               ))}
    //             </ul>

    //             <button
    //               className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
    //                 selectedPlan === plan.id
    //                   ? "bg-emerald-500 hover:bg-emerald-400 text-white"
    //                   : "bg-slate-100 hover:bg-slate-200 text-slate-700"
    //               }`}
    //             >
    //               Select Plan
    //               <ArrowRight className="w-4 h-4" />
    //             </button>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section> */}

    //   {/* Interest Calculator */}
    //   {/* <section
    //     id="calculator"
    //     className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10"
    //   >
    //     <div className="max-w-6xl mx-auto">
    //       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
    //         <div>
    //           <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
    //             See your money grow
    //           </h2>
    //           <p className="text-lg text-slate-600 mb-10">
    //             Use our calculator to see exactly how much you could earn.
    //             Adjust amount, duration, and plan.
    //           </p>

    //           <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">

    //             <div className="mb-8">
    //               <label className="block text-sm font-semibold text-slate-700 mb-3">
    //                 Savings Plan
    //               </label>
    //               <div className="grid grid-cols-2 gap-2">
    //                 {savingsPlans.map((plan) => (
    //                   <button
    //                     key={plan.id}
    //                     onClick={() => setSelectedPlan(plan.id)}
    //                     className={`p-3 rounded-xl text-sm font-semibold transition-all ${
    //                       selectedPlan === plan.id
    //                         ? "bg-slate-900 text-white"
    //                         : "bg-slate-50 text-slate-600 hover:bg-slate-100"
    //                     }`}
    //                   >
    //                     <div className="flex items-center justify-center gap-2">
    //                       {plan.icon}
    //                       {plan.name}
    //                     </div>
    //                     <span
    //                       className={`text-xs block mt-1 ${selectedPlan === plan.id ? "text-emerald-400" : "text-slate-400"}`}
    //                     >
    //                       {plan.interestRate}% p.a.
    //                     </span>
    //                   </button>
    //                 ))}
    //               </div>
    //             </div>

    //             <div className="mb-8">
    //               <label className="block text-sm font-semibold text-slate-700 mb-3">
    //                 Amount to Save (₦)
    //               </label>
    //               <div className="relative">
    //                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400">
    //                   ₦
    //                 </span>
    //                 <input
    //                   type="number"
    //                   value={calculatorAmount}
    //                   onChange={(e) => setCalculatorAmount(e.target.value)}
    //                   className="w-full pl-12 pr-4 py-4 text-3xl font-bold bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
    //                 />
    //               </div>
    //               <div className="flex gap-2 mt-3 flex-wrap">
    //                 {[10000, 50000, 100000, 500000, 1000000].map((amt) => (
    //                   <button
    //                     key={amt}
    //                     onClick={() => setCalculatorAmount(amt.toString())}
    //                     className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
    //                   >
    //                     ₦{amt / 1000}k
    //                   </button>
    //                 ))}
    //               </div>
    //             </div>

    //             <div className="mb-8">
    //               <div className="flex items-center justify-between mb-3">
    //                 <label className="text-sm font-semibold text-slate-700">
    //                   Duration
    //                 </label>
    //                 <span className="text-sm font-bold text-emerald-600">
    //                   {calculatorMonths} months
    //                 </span>
    //               </div>
    //               <input
    //                 type="range"
    //                 min="1"
    //                 max="60"
    //                 value={calculatorMonths}
    //                 onChange={(e) =>
    //                   setCalculatorMonths(parseInt(e.target.value))
    //                 }
    //                 className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-emerald-600"
    //               />
    //               <div className="flex justify-between mt-2 text-xs text-slate-400">
    //                 <span>1 month</span>
    //                 <span>1 year</span>
    //                 <span>5 years</span>
    //               </div>
    //             </div>

    //             <div className="bg-slate-900 rounded-2xl p-6 text-white">
    //               <div className="grid grid-cols-2 gap-4 mb-4">
    //                 <div>
    //                   <p className="text-xs text-slate-400 mb-1">
    //                     Total Interest
    //                   </p>
    //                   <p className="text-2xl font-bold text-emerald-400">
    //                     {formatCurrency(interest)}
    //                   </p>
    //                 </div>
    //                 <div>
    //                   <p className="text-xs text-slate-400 mb-1">Total Value</p>
    //                   <p className="text-2xl font-bold text-white">
    //                     {formatCurrency(total)}
    //                   </p>
    //                 </div>
    //               </div>
    //               <div className="pt-4 border-t border-white/10 flex items-center justify-between">
    //                 <div className="flex items-center gap-2">
    //                   <Percent className="w-4 h-4 text-emerald-400" />
    //                   <span className="text-sm text-slate-300">
    //                     {currentPlan.interestRate}% annual rate
    //                   </span>
    //                 </div>
    //                 <span className="text-xs text-slate-500">
    //                   {currentPlan.name}
    //                 </span>
    //               </div>
    //             </div>

    //             <button
    //               onClick={() => setShowSuccessToast(true)}
    //               className="w-full mt-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
    //             >
    //               <Download className="w-5 h-5" />
    //               Start This Plan
    //             </button>
    //           </div>
    //         </div>

    //         <div className="lg:sticky lg:top-24 space-y-6">
    //           <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
    //             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

    //             <div className="relative">
    //               <div className="flex items-center gap-3 mb-6">
    //                 <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
    //                   <TrendingUp className="w-6 h-6" />
    //                 </div>
    //                 <div>
    //                   <p className="text-sm text-emerald-100">
    //                     Projected Growth
    //                   </p>
    //                   <p className="font-bold">Your Wealth Journey</p>
    //                 </div>
    //               </div>

    //               <div className="space-y-4">
    //                 {[
    //                   {
    //                     year: "Year 1",
    //                     amount: total,
    //                     principal: parseFloat(calculatorAmount) || 0,
    //                   },
    //                   {
    //                     year: "Year 2",
    //                     amount: total * 1.12,
    //                     principal: parseFloat(calculatorAmount) || 0,
    //                   },
    //                   {
    //                     year: "Year 3",
    //                     amount: total * Math.pow(1.12, 2),
    //                     principal: parseFloat(calculatorAmount) || 0,
    //                   },
    //                 ].map((year, i) => (
    //                   <div key={i} className="bg-white/10 rounded-xl p-4">
    //                     <div className="flex items-center justify-between mb-2">
    //                       <span className="text-sm font-semibold">
    //                         {year.year}
    //                       </span>
    //                       <span className="text-sm font-bold">
    //                         {formatCurrency(year.amount)}
    //                       </span>
    //                     </div>
    //                     <div className="h-2 bg-white/20 rounded-full overflow-hidden">
    //                       <div
    //                         className="h-full bg-white rounded-full transition-all duration-500"
    //                         style={{
    //                           width: `${Math.min((year.amount / (year.principal * 2)) * 100, 100)}%`,
    //                         }}
    //                       />
    //                     </div>
    //                     <p className="text-xs text-emerald-100 mt-1">
    //                       +{formatCurrency(year.amount - year.principal)}{" "}
    //                       interest earned
    //                     </p>
    //                   </div>
    //                 ))}
    //               </div>

    //               <div className="mt-6 p-4 bg-white/10 rounded-xl">
    //                 <div className="flex items-start gap-3">
    //                   <Award className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
    //                   <p className="text-sm text-emerald-100">
    //                     If you save ₦
    //                     {parseFloat(calculatorAmount).toLocaleString()} monthly
    //                     for 3 years, you could have over{" "}
    //                     {formatCurrency(
    //                       (parseFloat(calculatorAmount) || 0) * 36 * 1.15,
    //                     )}
    //                     .
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
    //             <div className="flex items-center gap-3 mb-4">
    //               <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
    //                 <Shield className="w-5 h-5 text-emerald-600" />
    //               </div>
    //               <div>
    //                 <p className="font-bold text-slate-900">
    //                   Your Money is Protected
    //                 </p>
    //                 <p className="text-xs text-slate-500">
    //                   Licensed by CBN • NDIC Insured
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="space-y-3">
    //               {[
    //                 {
    //                   icon: <Lock className="w-4 h-4" />,
    //                   text: "256-bit encryption",
    //                 },
    //                 {
    //                   icon: <Shield className="w-4 h-4" />,
    //                   text: "NDIC insured up to ₦500,000",
    //                 },
    //                 {
    //                   icon: <Clock className="w-4 h-4" />,
    //                   text: "24/7 fraud monitoring",
    //                 },
    //               ].map((item, i) => (
    //                 <div
    //                   key={i}
    //                   className="flex items-center gap-3 text-sm text-slate-600"
    //                 >
    //                   <div className="text-emerald-600">{item.icon}</div>
    //                   {item.text}
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section> */}

    //   {/* How It Works */}
    //   {/* <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10 bg-slate-50">
    //     <div className="max-w-6xl mx-auto">
    //       <div className="text-center mb-16">
    //         <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
    //           Start saving in 3 steps
    //         </h2>
    //         <p className="text-lg text-slate-600">
    //           No paperwork. No branch visits. Just your phone.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
    //         {[
    //           {
    //             step: "01",
    //             title: "Choose a Plan",
    //             desc: "Pick Flex, Target, Lock, or Vault based on your goals. Each offers different rates and access levels.",
    //             icon: <Target className="w-6 h-6" />,
    //             color: "bg-emerald-50 text-emerald-600",
    //           },
    //           {
    //             step: "02",
    //             title: "Fund Your Plan",
    //             desc: "Add money via bank transfer, card, or USSD. Set up auto-debit to save without thinking about it.",
    //             icon: <Banknote className="w-6 h-6" />,
    //             color: "bg-blue-50 text-blue-600",
    //           },
    //           {
    //             step: "03",
    //             title: "Watch It Grow",
    //             desc: "Interest accrues daily and pays monthly. Track your progress, top up anytime, and withdraw when ready.",
    //             icon: <TrendingUp className="w-6 h-6" />,
    //             color: "bg-purple-50 text-purple-600",
    //           },
    //         ].map((item, i) => (
    //           <div key={i} className="relative">
    //             <div className="mb-6">
    //               <span className="text-6xl font-bold text-black">
    //                 {item.step}
    //               </span>
    //             </div>
    //             <div
    //               className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5`}
    //             >
    //               {item.icon}
    //             </div>
    //             <h3 className="text-xl font-bold text-slate-900 mb-3">
    //               {item.title}
    //             </h3>
    //             <p className="text-slate-600 leading-relaxed">{item.desc}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section> */}

    //   {/* Features Grid */}
    //   {/* <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10">
    //     <div className="max-w-6xl mx-auto">
    //       <div className="text-center mb-16">
    //         <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
    //           Built for smart savers
    //         </h2>
    //         <p className="text-lg text-slate-600">
    //           Tools and features that make growing wealth effortless.
    //         </p>
    //       </div>

    //       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {[
    //           {
    //             icon: <RefreshCw className="w-5 h-5" />,
    //             title: "Auto-Save Rules",
    //             desc: "Set daily, weekly, or monthly auto-debits. Save ₦500 every morning without lifting a finger.",
    //             color: "bg-emerald-50 text-emerald-600",
    //           },
    //           {
    //             icon: <Target className="w-5 h-5" />,
    //             title: "Goal Tracking",
    //             desc: "Visual progress bars for every goal. See exactly how close you are to your new car or rent.",
    //             color: "bg-blue-50 text-blue-600",
    //           },
    //           {
    //             icon: <Bell className="w-5 h-5" />,
    //             title: "Smart Reminders",
    //             desc: "Get nudges when you are close to a goal or when interest is paid. Never miss a milestone.",
    //             color: "bg-purple-50 text-purple-600",
    //           },
    //           {
    //             icon: <Users className="w-5 h-5" />,
    //             title: "Group Savings",
    //             desc: "Save with family or friends towards a shared goal. Everyone contributes, everyone tracks.",
    //             color: "bg-amber-50 text-amber-600",
    //           },
    //           {
    //             icon: <Calendar className="w-5 h-5" />,
    //             title: "Savings Challenges",
    //             desc: "Join 52-week or no-spend challenges. Compete with friends and earn bonus interest.",
    //             color: "bg-rose-50 text-rose-600",
    //           },
    //           {
    //             icon: <TrendingUp className="w-5 h-5" />,
    //             title: "Wealth Insights",
    //             desc: "Personalized reports on your saving habits, projected growth, and tips to earn more.",
    //             color: "bg-cyan-50 text-cyan-600",
    //           },
    //         ].map((feature, i) => (
    //           <div
    //             key={i}
    //             className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow group"
    //           >
    //             <div
    //               className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
    //             >
    //               {feature.icon}
    //             </div>
    //             <h3 className="text-lg font-bold text-slate-900 mb-2">
    //               {feature.title}
    //             </h3>
    //             <p className="text-sm text-slate-600 leading-relaxed">
    //               {feature.desc}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section> */}

    //   {/* Testimonials */}
    //   {/* <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10 bg-slate-50">
    //     <div className="max-w-6xl mx-auto">
    //       <div className="text-center mb-16">
    //         <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
    //           Real people, real growth
    //         </h2>
    //         <p className="text-lg text-slate-600">
    //           See how Nigerians are building wealth with GreyWallet.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-3 gap-6">
    //         {testimonials.map((testimonial) => (
    //           <div
    //             key={testimonial.id}
    //             className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-shadow"
    //           >
    //             <div className="flex items-center gap-1 mb-4">
    //               {[...Array(5)].map((_, i) => (
    //                 <Star
    //                   key={i}
    //                   className="w-4 h-4 fill-amber-400 text-amber-400"
    //                 />
    //               ))}
    //             </div>
    //             <p className="text-slate-700 leading-relaxed mb-6">
    //               "{testimonial.text}"
    //             </p>
    //             <div className="flex items-center justify-between">
    //               <div className="flex items-center gap-3">
    //                 <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-sm font-bold">
    //                   {testimonial.avatar}
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold text-slate-900 text-sm">
    //                     {testimonial.name}
    //                   </p>
    //                   <p className="text-xs text-slate-500">
    //                     {testimonial.location}
    //                   </p>
    //                 </div>
    //               </div>
    //               <div className="text-right">
    //                 <p className="text-xs text-slate-400">Saved</p>
    //                 <p className="text-sm font-bold text-emerald-600">
    //                   {testimonial.saved}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section> */}

    //   {/* FAQ Section */}
    //   {/* <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10">
    //     <div className="max-w-3xl mx-auto">
    //       <div className="text-center mb-12">
    //         <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
    //           Questions? Answered.
    //         </h2>
    //         <p className="text-lg text-slate-600">
    //           Everything you need to know about saving with us.
    //         </p>
    //       </div>

    //       <div className="space-y-4">
    //         {faqs.map((faq, idx) => (
    //           <div
    //             key={idx}
    //             className={`bg-white rounded-2xl border transition-all ${
    //               openFaq === idx
    //                 ? "border-slate-300 shadow-md"
    //                 : "border-slate-200"
    //             }`}
    //           >
    //             <button
    //               onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
    //               className="w-full flex items-center justify-between p-6 text-left"
    //             >
    //               <span className="font-semibold text-slate-900 pr-4">
    //                 {faq.question}
    //               </span>
    //               <div
    //                 className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
    //                   openFaq === idx
    //                     ? "bg-slate-900 text-white"
    //                     : "bg-slate-100 text-slate-500"
    //                 }`}
    //               >
    //                 {openFaq === idx ? (
    //                   <X className="w-4 h-4" />
    //                 ) : (
    //                   <ChevronRight className="w-4 h-4" />
    //                 )}
    //               </div>
    //             </button>
    //             {openFaq === idx && (
    //               <div className="px-6 pb-6 text-slate-600 leading-relaxed">
    //                 {faq.answer}
    //               </div>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section> */}

    //   {/* CTA Section */}
    //   {/* <section className="py-20 sm:py-28px-6 sm:px-10 lg:px-10">
    //     <div className="max-w-4xl mx-auto">
    //       <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
    //         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

    //         <div className="relative">
    //           <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500 flex items-center justify-center">
    //             <PiggyBank className="w-8 h-8 text-blue-100" />
    //           </div>
    //           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
    //             Start earning more today
    //           </h2>
    //           <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
    //             Join 850,000+ Nigerians already growing their wealth. Download
    //             the app and create your first savings plan in 2 minutes.
    //           </p>

    //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //             <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
    //               <Download className="w-5 h-5" />
    //               Download for iOS
    //             </button>
    //             <button className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold transition-all flex items-center justify-center gap-2">
    //               <Download className="w-5 h-5" />
    //               Download for Android
    //             </button>
    //           </div>

    //           <div className="flex items-center justify-center gap-6 mt-10 text-sm text-slate-500">
    //             <span className="flex items-center gap-2 text-slate-400">
    //               <Check className="w-4 h-4 text-blue-600" />
    //               Free to download
    //             </span>
    //             <span className="flex items-center gap-2 text-slate-400">
    //               <Check className="w-4 h-4 text-blue-600" />
    //               Start with ₦100
    //             </span>
    //             <span className="flex items-center gap-2 text-slate-400">
    //               <Check className="w-4 h-4 text-blue-600" />
    //               Cancel anytime
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section> */}
    // </div>
  );
}
