"use client";

import { useState, useEffect } from "react";
import {
  PiggyBank,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Clock,
  Lock,
  Unlock,
  ChevronRight,
  Download,
  Check,
  Star,
  Wallet,
  ArrowRight,
  Percent,
  Calendar,
  Bell,
  Menu,
  X,
  Calculator,
  Gift,
  Smartphone,
  Banknote,
  ChevronDown,
  Eye,
  EyeOff,
  Info,
  Plus,
  Minus,
  RefreshCw,
  Award,
  Users,
  Globe,
  Heart,
} from "lucide-react";

interface SavingsPlan {
  id: string;
  name: string;
  description: string;
  interestRate: number;
  minDeposit: number;
  lockPeriod: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  features: string[];
  popular?: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  saved: string;
  avatar: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const savingsPlans: SavingsPlan[] = [
  {
    id: "flex",
    name: "Flex Save",
    description: "Save any amount, anytime. Withdraw whenever you need it.",
    interestRate: 8.5,
    minDeposit: 100,
    lockPeriod: "No lock",
    icon: <Zap className="w-6 h-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    features: [
      "8.5% annual interest",
      "Instant withdrawals",
      "No minimum balance",
      "Auto-save rules",
    ],
  },
  {
    id: "target",
    name: "Target Save",
    description: "Set a goal and save towards it automatically.",
    interestRate: 12,
    minDeposit: 500,
    lockPeriod: "Flexible",
    icon: <Target className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    features: [
      "12% annual interest",
      "Goal tracking",
      "Auto-debit setup",
      "Group savings",
    ],
    popular: true,
  },
  {
    id: "lock",
    name: "Lock Save",
    description: "Lock your money away and earn higher returns.",
    interestRate: 18,
    minDeposit: 5000,
    lockPeriod: "30-365 days",
    icon: <Lock className="w-6 h-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    features: [
      "Up to 18% interest",
      "Fixed term options",
      "Higher rates for longer",
      "Early break option",
    ],
  },
  {
    id: "vault",
    name: "Vault",
    description: "Long-term wealth building with premium rates.",
    interestRate: 22,
    minDeposit: 50000,
    lockPeriod: "1-5 years",
    icon: <Shield className="w-6 h-6" />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    features: [
      "Up to 22% interest",
      "Compound interest",
      "Wealth advisor",
      "Tax advantages",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Fatima Abdullahi",
    location: "Kano",
    text: "I used Target Save for my wedding. Set it to auto-debit ₦10,000 weekly. In 8 months, I had ₦350,000 plus interest. Stress-free.",
    saved: "₦350,000",
    avatar: "FA",
  },
  {
    id: "2",
    name: "Oluwaseun Adeleke",
    location: "Lagos",
    text: "Lock Save helped me stop touching my rent money. I lock it for 6 months, earn 16%, and pay my landlord without panic.",
    saved: "₦1,200,000",
    avatar: "OA",
  },
  {
    id: "3",
    name: "Ngozi Eze",
    location: "Enugu",
    text: "The interest rates beat every bank in Nigeria. My Flex Save alone earns more than my old savings account ever did.",
    saved: "₦850,000",
    avatar: "NE",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How is interest calculated and paid?",
    answer:
      "Interest is calculated daily on your balance and paid monthly. For Lock Save and Vault, interest is compounded and paid at maturity. You can see your daily interest accrue in real-time on the app dashboard.",
  },
  {
    question: "Can I withdraw before the lock period ends?",
    answer:
      "Flex Save allows instant withdrawals anytime. For Target Save, you can withdraw but may forfeit accrued interest. Lock Save and Vault allow early withdrawal with a small penalty fee, but your principal is always safe.",
  },
  {
    question: "Is my money safe with Durapay?",
    answer:
      "Absolutely. We are licensed by the CBN and NDIC-insured up to ₦500,000 per account. We use 256-bit encryption, biometric security, and partner with tier-1 Nigerian banks to hold your funds.",
  },
  {
    question: "What is the minimum amount to start saving?",
    answer:
      "You can start with as little as ₦100 on Flex Save. Target Save requires ₦500 minimum, Lock Save ₦5,000, and Vault ₦50,000. There are no hidden fees or charges.",
  },
  {
    question: "Can I have multiple savings plans at once?",
    answer:
      "Yes. You can create unlimited savings plans — one for rent, one for school fees, one for emergencies. Each plan earns its own interest and has its own settings.",
  },
];

const stats = [
  {
    value: "₦12B+",
    label: "Total Saved",
    icon: <PiggyBank className="w-5 h-5 text-blue-400" />,
  },
  {
    value: "850K+",
    label: "Active Savers",
    icon: <Users className="w-5 h-5" />,
  },
  {
    value: "₦2.1B",
    label: "Interest Paid",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  { value: "4.9★", label: "App Rating", icon: <Star className="w-5 h-5" /> },
];

export default function SavingsPage() {
  const [selectedPlan, setSelectedPlan] = useState("target");
  const [calculatorAmount, setCalculatorAmount] = useState("50000");
  const [calculatorMonths, setCalculatorMonths] = useState(12);
  const [showBalance, setShowBalance] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [activeTab, setActiveTab] = useState<"plans" | "calculator">("plans");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showSuccessToast) {
      const timer = setTimeout(() => setShowSuccessToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessToast]);

  const currentPlan =
    savingsPlans.find((p) => p.id === selectedPlan) || savingsPlans[0];

  const calculateReturns = () => {
    const principal = parseFloat(calculatorAmount) || 0;
    const rate = currentPlan.interestRate / 100;
    const time = calculatorMonths / 12;
    const simpleInterest = principal * rate * time;
    const total = principal + simpleInterest;
    return { interest: simpleInterest, total };
  };

  const { interest, total } = calculateReturns();

  const formatCurrency = (amount: number) => {
    return (
      "₦" +
      amount.toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 -mt-15">
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2">
          <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Savings plan created!</p>
              <p className="text-xs text-slate-300">
                Start saving and watch your money grow
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      {/* <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">Grey<span className="text-slate-400">Wallet</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Business</a>
              <a href="#" className="text-sm font-medium text-slate-900">Savings</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Help</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                Sign In
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors flex items-center gap-2">
                Get the App
                <Download className="w-4 h-4" />
              </button>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4">
            <a href="#" className="block text-sm font-medium text-slate-600">Features</a>
            <a href="#" className="block text-sm font-medium text-slate-600">Business</a>
            <a href="#" className="block text-sm font-medium text-slate-900">Savings</a>
            <a href="#" className="block text-sm font-medium text-slate-600">Help</a>
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button className="w-full py-3 text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl">
                Sign In
              </button>
              <button className="w-full py-3 text-sm font-semibold text-white bg-slate-900 rounded-xl flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Get the App
              </button>
            </div>
          </div>
        )}
      </nav> */}

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 px-6 md:px-8 lg:px-10 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10  border border-[#1154da] text-[#1154da] text-sm font-medium mb-8">
                <TrendingUp className="w-4 h-4 text-[#1154da]" />
                Up to 22% annual interest
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1154da] tracking-tight leading-[1.1] mb-6">
                Your money should{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
                  work harder
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                Earn up to 22% interest on your savings — higher than any
                traditional bank in Nigeria. Start with ₦100. Withdraw anytime
                on Flex Save.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-2xl bg-[#1154da] hover:bg-slate-800 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
                  <Download className="w-5 h-5" />
                  Start Saving Now
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("calculator");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  Calculate Returns
                </button>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <div className="flex -space-x-3">
                  {["FA", "OA", "NE", "BJ"].map((initials, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white ${
                        i === 0
                          ? "bg-emerald-500"
                          : i === 1
                            ? "bg-blue-500"
                            : i === 2
                              ? "bg-purple-500"
                              : "bg-amber-500"
                      }`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5">
                    850,000+ active savers
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Phone Mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-72 sm:w-80">
                <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/20">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="h-6 bg-slate-900 mx-auto w-32 rounded-b-2xl" />

                    <div className="px-5 pt-6 pb-8">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs text-slate-800">
                            Total Savings
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold text-slate-900">
                              {showBalance ? "₦4,545,000" : "••••••"}
                            </p>
                            <button
                              onClick={() => setShowBalance(!showBalance)}
                              className="p-1"
                            >
                              {showBalance ? (
                                <EyeOff className="w-3 h-3 text-slate-700" />
                              ) : (
                                <Eye className="w-3 h-3 text-slate-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <Bell className="w-4 h-4 text-[#1154da]" />
                        </div>
                      </div>

                      {/* Interest Card */}
                      <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl p-5 text-white mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-xs text-emerald-100">
                              This month's interest
                            </p>
                            <p className="text-xl font-bold">₦ 58,420.50</p>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-white rounded-full" />
                          </div>
                          <span className="text-xs font-medium">75%</span>
                        </div>
                        <p className="text-xs text-emerald-100 mt-2">
                          ₦2,000 to reach next tier
                        </p>
                      </div>

                      <p className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3">
                        My Plans
                      </p>
                      <div className="space-y-3">
                        {[
                          {
                            name: "Flex Save",
                            amount: "₦1,565,000",
                            rate: "8.5%",
                            color: "bg-emerald-50 border-emerald-200",
                            textColor: "text-emerald-700",
                          },
                          {
                            name: "Target: New Car",
                            amount: "₦2,980,000",
                            rate: "12%",
                            color: "bg-blue-50 border-blue-200",
                            textColor: "text-blue-700",
                          },
                        ].map((plan, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-xl border ${plan.color} flex items-center justify-between`}
                          >
                            <div>
                              <p className="text-xs font-semibold text-slate-700">
                                {plan.name}
                              </p>
                              <p className="text-sm font-bold text-slate-900">
                                {plan.amount}
                              </p>
                            </div>
                            <span
                              className={`text-xs font-bold px-2 py-1 rounded-full bg-white ${plan.textColor}`}
                            >
                              {plan.rate}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full mt-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" />
                        Create New Plan
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Interest Badge */}
                <div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10  flex items-center justify-center">
                      <Percent className="w-5 h-5 text-[#1154da]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Interest Credited
                      </p>
                      <p className="text-[10px] text-slate-900">+₦8,420.50</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 animate-bounce"
                  style={{ animationDuration: "4s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-[#1154da]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Goal Reached!
                      </p>
                      <p className="text-[10px] text-slate-600">
                        New Car: 100%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4">
                  <div className="text-blue-400">{stat.icon}</div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rate Comparison */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why our rates beat banks
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Traditional banks pay 1-4%. We pay 8.5% to 22%. Here is how we
              compare on ₦100,000 saved for one year.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="space-y-6">
              {[
                {
                  name: "Durapay Vault",
                  rate: 22,
                  amount: 22000,
                  color: "bg-emerald-500",
                  highlight: true,
                },
                {
                  name: "Durapay Lock Save",
                  rate: 18,
                  amount: 18000,
                  color: "bg-emerald-400",
                },
                {
                  name: "Durapay Target Save",
                  rate: 12,
                  amount: 12000,
                  color: "bg-emerald-300",
                },
                {
                  name: "Average Nigerian Bank",
                  rate: 3.5,
                  amount: 3500,
                  color: "bg-slate-300",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-sm font-semibold ${item.highlight ? "text-emerald-700" : "text-slate-700"}`}
                      >
                        {item.name}
                      </span>
                      {item.highlight && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                          BEST
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-sm font-bold ${item.highlight ? "text-emerald-600" : "text-slate-500"}`}
                    >
                      {item.rate}% • ₦{item.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${item.color}`}
                      style={{ width: `${(item.rate / 22) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-800">
                Based on ₦100,000 principal over 12 months. Bank rates averaged
                from top 5 Nigerian banks as of June 2026. GreyWallet rates are
                annual and compounded monthly where applicable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Plans */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Choose your savings style
            </h2>
            <p className="text-lg text-slate-600">
              Four plans designed for different goals and timelines.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savingsPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "border-slate-900 bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-[1.02]"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    selectedPlan === plan.id ? "bg-white/10" : plan.bgColor
                  }`}
                >
                  <div
                    className={
                      selectedPlan === plan.id ? "text-white" : plan.color
                    }
                  >
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm leading-relaxed mb-5 ${selectedPlan === plan.id ? "text-slate-300" : "text-slate-500"}`}
                >
                  {plan.description}
                </p>

                <div className="mb-5">
                  <p
                    className={`text-4xl font-bold ${selectedPlan === plan.id ? "text-emerald-400" : "text-slate-900"}`}
                  >
                    {plan.interestRate}%
                  </p>
                  <p
                    className={`text-xs ${selectedPlan === plan.id ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Annual interest rate
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div
                    className={`flex items-center gap-2 text-xs ${selectedPlan === plan.id ? "text-slate-300" : "text-slate-600"}`}
                  >
                    <Banknote className="w-3.5 h-3.5" />
                    Min: ₦{plan.minDeposit.toLocaleString()}
                  </div>
                  <div
                    className={`flex items-center gap-2 text-xs ${selectedPlan === plan.id ? "text-slate-300" : "text-slate-600"}`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    {plan.lockPeriod}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${selectedPlan === plan.id ? "text-emerald-400" : "text-emerald-600"}`}
                      />
                      <span
                        className={
                          selectedPlan === plan.id
                            ? "text-slate-200"
                            : "text-slate-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    selectedPlan === plan.id
                      ? "bg-emerald-500 hover:bg-emerald-400 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  Select Plan
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Calculator */}
      <section
        id="calculator"
        className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                See your money grow
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Use our calculator to see exactly how much you could earn.
                Adjust amount, duration, and plan.
              </p>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                {/* Plan Selector */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Savings Plan
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {savingsPlans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`p-3 rounded-xl text-sm font-semibold transition-all ${
                          selectedPlan === plan.id
                            ? "bg-slate-900 text-white"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {plan.icon}
                          {plan.name}
                        </div>
                        <span
                          className={`text-xs block mt-1 ${selectedPlan === plan.id ? "text-emerald-400" : "text-slate-400"}`}
                        >
                          {plan.interestRate}% p.a.
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount Input */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Amount to Save (₦)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400">
                      ₦
                    </span>
                    <input
                      type="number"
                      value={calculatorAmount}
                      onChange={(e) => setCalculatorAmount(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 text-3xl font-bold bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {[10000, 50000, 100000, 500000, 1000000].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setCalculatorAmount(amt.toString())}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
                      >
                        ₦{amt / 1000}k
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Slider */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-slate-700">
                      Duration
                    </label>
                    <span className="text-sm font-bold text-emerald-600">
                      {calculatorMonths} months
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={calculatorMonths}
                    onChange={(e) =>
                      setCalculatorMonths(parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <span>1 month</span>
                    <span>1 year</span>
                    <span>5 years</span>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-slate-400 mb-1">
                        Total Interest
                      </p>
                      <p className="text-2xl font-bold text-emerald-400">
                        {formatCurrency(interest)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Total Value</p>
                      <p className="text-2xl font-bold text-white">
                        {formatCurrency(total)}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Percent className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm text-slate-300">
                        {currentPlan.interestRate}% annual rate
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">
                      {currentPlan.name}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowSuccessToast(true)}
                  className="w-full mt-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
                >
                  <Download className="w-5 h-5" />
                  Start This Plan
                </button>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-100">
                        Projected Growth
                      </p>
                      <p className="font-bold">Your Wealth Journey</p>
                    </div>
                  </div>

                  {/* Growth Visualization */}
                  <div className="space-y-4">
                    {[
                      {
                        year: "Year 1",
                        amount: total,
                        principal: parseFloat(calculatorAmount) || 0,
                      },
                      {
                        year: "Year 2",
                        amount: total * 1.12,
                        principal: parseFloat(calculatorAmount) || 0,
                      },
                      {
                        year: "Year 3",
                        amount: total * Math.pow(1.12, 2),
                        principal: parseFloat(calculatorAmount) || 0,
                      },
                    ].map((year, i) => (
                      <div key={i} className="bg-white/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold">
                            {year.year}
                          </span>
                          <span className="text-sm font-bold">
                            {formatCurrency(year.amount)}
                          </span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white rounded-full transition-all duration-500"
                            style={{
                              width: `${Math.min((year.amount / (year.principal * 2)) * 100, 100)}%`,
                            }}
                          />
                        </div>
                        <p className="text-xs text-emerald-100 mt-1">
                          +{formatCurrency(year.amount - year.principal)}{" "}
                          interest earned
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-white/10 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-emerald-100">
                        If you save ₦
                        {parseFloat(calculatorAmount).toLocaleString()} monthly
                        for 3 years, you could have over{" "}
                        {formatCurrency(
                          (parseFloat(calculatorAmount) || 0) * 36 * 1.15,
                        )}
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      Your Money is Protected
                    </p>
                    <p className="text-xs text-slate-500">
                      Licensed by CBN • NDIC Insured
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      icon: <Lock className="w-4 h-4" />,
                      text: "256-bit encryption",
                    },
                    {
                      icon: <Shield className="w-4 h-4" />,
                      text: "NDIC insured up to ₦500,000",
                    },
                    {
                      icon: <Clock className="w-4 h-4" />,
                      text: "24/7 fraud monitoring",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <div className="text-emerald-600">{item.icon}</div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Start saving in 3 steps
            </h2>
            <p className="text-lg text-slate-600">
              No paperwork. No branch visits. Just your phone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Choose a Plan",
                desc: "Pick Flex, Target, Lock, or Vault based on your goals. Each offers different rates and access levels.",
                icon: <Target className="w-6 h-6" />,
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                step: "02",
                title: "Fund Your Plan",
                desc: "Add money via bank transfer, card, or USSD. Set up auto-debit to save without thinking about it.",
                icon: <Banknote className="w-6 h-6" />,
                color: "bg-blue-50 text-blue-600",
              },
              {
                step: "03",
                title: "Watch It Grow",
                desc: "Interest accrues daily and pays monthly. Track your progress, top up anytime, and withdraw when ready.",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "bg-purple-50 text-purple-600",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="mb-6">
                  <span className="text-6xl font-bold text-black">
                    {item.step}
                  </span>
                </div>
                <div
                  className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Built for smart savers
            </h2>
            <p className="text-lg text-slate-600">
              Tools and features that make growing wealth effortless.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <RefreshCw className="w-5 h-5" />,
                title: "Auto-Save Rules",
                desc: "Set daily, weekly, or monthly auto-debits. Save ₦500 every morning without lifting a finger.",
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "Goal Tracking",
                desc: "Visual progress bars for every goal. See exactly how close you are to your new car or rent.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: <Bell className="w-5 h-5" />,
                title: "Smart Reminders",
                desc: "Get nudges when you are close to a goal or when interest is paid. Never miss a milestone.",
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Group Savings",
                desc: "Save with family or friends towards a shared goal. Everyone contributes, everyone tracks.",
                color: "bg-amber-50 text-amber-600",
              },
              {
                icon: <Calendar className="w-5 h-5" />,
                title: "Savings Challenges",
                desc: "Join 52-week or no-spend challenges. Compete with friends and earn bonus interest.",
                color: "bg-rose-50 text-rose-600",
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: "Wealth Insights",
                desc: "Personalized reports on your saving habits, projected growth, and tips to earn more.",
                color: "bg-cyan-50 text-cyan-600",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Real people, real growth
            </h2>
            <p className="text-lg text-slate-600">
              See how Nigerians are building wealth with GreyWallet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Saved</p>
                    <p className="text-sm font-bold text-emerald-600">
                      {testimonial.saved}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Questions? Answered.
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about saving with us.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all ${
                  openFaq === idx
                    ? "border-slate-300 shadow-md"
                    : "border-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openFaq === idx
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {openFaq === idx ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28px-6 sm:px-10 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500 flex items-center justify-center">
                <PiggyBank className="w-8 h-8 text-blue-100" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Start earning more today
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                Join 850,000+ Nigerians already growing their wealth. Download
                the app and create your first savings plan in 2 minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
                  <Download className="w-5 h-5" />
                  Download for iOS
                </button>
                <button className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download for Android
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-10 text-sm text-slate-500">
                <span className="flex items-center gap-2 text-slate-400">
                  <Check className="w-4 h-4 text-blue-600" />
                  Free to download
                </span>
                <span className="flex items-center gap-2 text-slate-400">
                  <Check className="w-4 h-4 text-blue-600" />
                  Start with ₦100
                </span>
                <span className="flex items-center gap-2 text-slate-400">
                  <Check className="w-4 h-4 text-blue-600" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
