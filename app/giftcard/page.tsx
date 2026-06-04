"use client";

import { useState, useEffect } from "react";
import {
  Gift,
  ArrowRight,
  Smartphone,
  Shield,
  Zap,
  Users,
  Check,
  Copy,
  Share2,
  X,
  Download,
  Star,
  Wallet,
  Banknote,
  Clock,
  ChevronRight,
  QrCode,
  Heart,
  Sparkles,
  TrendingUp,
  Lock,
  Globe,
  MessageCircle,
  Bell,
  Menu,
} from "lucide-react";

interface GiftOption {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const giftOptions: GiftOption[] = [
  {
    id: "cash",
    name: "Send Cash",
    description: "Transfer money instantly to anyone with a phone number",
    icon: <Banknote className="w-6 h-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: "airtime",
    name: "Buy Airtime",
    description: "Top up any Nigerian network in seconds",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "data",
    name: "Data Bundles",
    description: "Gift mobile data to friends and family",
    icon: <Globe className="w-6 h-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "voucher",
    name: "Gift Voucher",
    description: "Create redeemable vouchers for any amount",
    icon: <Gift className="w-6 h-6" />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Chioma Okafor",
    location: "Lagos",
    text: "I send money to my parents in the village every week. It arrives in seconds and they get an SMS instantly. No stress at all.",
    rating: 5,
    avatar: "CO",
  },
  {
    id: "2",
    name: "Emmanuel Adeyemi",
    location: "Abuja",
    text: "Bought airtime for my whole family during a blackout. The app worked when everything else failed. Truly reliable.",
    rating: 5,
    avatar: "EA",
  },
  {
    id: "3",
    name: "Amina Ibrahim",
    location: "Kano",
    text: "The gift vouchers are perfect for my small business. I send them to loyal customers and they love the experience.",
    rating: 5,
    avatar: "AI",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How fast do gift transfers arrive?",
    answer:
      "All transfers are instant. The recipient gets an SMS notification within seconds, and the money is available for immediate withdrawal or spending.",
  },
  {
    question: "Can I send gifts to someone without the app?",
    answer:
      "Yes. Recipients without the app receive an SMS with instructions to claim their gift. They can withdraw to any Nigerian bank account or collect cash at an agent.",
  },
  {
    question: "What networks are supported for airtime and data?",
    answer:
      "We support MTN, Airtel, Glo, and 9mobile. All bundles and top-up amounts are available at zero extra charge.",
  },
  {
    question: "Is there a limit on how much I can gift?",
    answer:
      "Basic accounts can gift up to ₦100,000 daily. Verified accounts have a ₦5,000,000 daily limit. Upgrade your KYC level in-app to increase your limits.",
  },
  {
    question: "Are there fees for sending gifts?",
    answer:
      "Transfers to other app users are free. Bank transfers attract a flat ₦10 fee. Airtime and data purchases have zero markup — you pay exactly what the network charges.",
  },
];

const stats = [
  { value: "2M+", label: "Gifts Sent", icon: <Gift className="w-5 h-5" /> },
  {
    value: "₦50B+",
    label: "Value Transferred",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    value: "99.9%",
    label: "Success Rate",
    icon: <Check className="w-5 h-5" />,
  },
  {
    value: "<3s",
    label: "Average Delivery",
    icon: <Zap className="w-5 h-5" />,
  },
];

export default function GiftPage() {
  const [selectedOption, setSelectedOption] = useState("cash");
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSendGift = () => {
    if (!amount || !phoneNumber) return;
    setShowSuccess(true);
    setAmount("");
    setPhoneNumber("");
    setMessage("");
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickAmounts = [500, 1000, 2000, 5000, 10000, 20000];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2">
          <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Gift sent successfully!</p>
              <p className="text-xs text-slate-300">
                Recipient will receive an SMS shortly
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Now available nationwide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Send money & gifts{" "}
                <span className="text-emerald-600">in seconds</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                Transfer cash, buy airtime, or send data bundles to anyone in
                Nigeria. No app required for recipients — they get an SMS and
                instant access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
                  <Download className="w-5 h-5" />
                  Download the App
                </button>
                <button className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold transition-all flex items-center justify-center gap-2">
                  Watch Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <div className="flex -space-x-3">
                  {["CO", "EA", "AI", "BJ"].map((initials, i) => (
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
                    Trusted by 2M+ Nigerians
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Phone Mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-72 sm:w-80">
                {/* Phone Frame */}
                <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/20">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="h-6 bg-slate-900 mx-auto w-32 rounded-b-2xl" />

                    {/* Screen Content */}
                    <div className="px-5 pt-6 pb-8">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <p className="text-xs text-slate-400">
                            Good afternoon
                          </p>
                          <p className="font-bold text-slate-900">Chioma</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Bell className="w-4 h-4 text-emerald-600" />
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-2xl p-5 mb-6 text-white">
                        <p className="text-xs text-slate-400 mb-1">
                          Available Balance
                        </p>
                        <p className="text-2xl font-bold">₦245,000.00</p>
                        <div className="flex gap-2 mt-4">
                          <button className="flex-1 py-2 bg-white/10 rounded-lg text-xs font-medium">
                            Add Money
                          </button>
                          <button className="flex-1 py-2 bg-emerald-500 rounded-lg text-xs font-medium">
                            Send
                          </button>
                        </div>
                      </div>

                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Quick Actions
                      </p>
                      <div className="grid grid-cols-4 gap-3">
                        {[
                          {
                            icon: <Banknote className="w-4 h-4" />,
                            label: "Send",
                            color: "bg-emerald-50 text-emerald-600",
                          },
                          {
                            icon: <Smartphone className="w-4 h-4" />,
                            label: "Airtime",
                            color: "bg-blue-50 text-blue-600",
                          },
                          {
                            icon: <Globe className="w-4 h-4" />,
                            label: "Data",
                            color: "bg-purple-50 text-purple-600",
                          },
                          {
                            icon: <Gift className="w-4 h-4" />,
                            label: "Gift",
                            color: "bg-amber-50 text-amber-600",
                          },
                        ].map((action, i) => (
                          <div key={i} className="text-center">
                            <div
                              className={`w-12 h-12 mx-auto rounded-xl ${action.color} flex items-center justify-center mb-1.5`}
                            >
                              {action.icon}
                            </div>
                            <p className="text-[10px] font-medium text-slate-600">
                              {action.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-xs font-semibold text-slate-700">
                            Recent
                          </p>
                          <p className="text-xs text-emerald-600 font-medium">
                            See all
                          </p>
                        </div>
                        {[
                          {
                            name: "Mama",
                            type: "Transfer",
                            amount: "-₦5,000",
                            color: "text-red-500",
                          },
                          {
                            name: "Airtime",
                            type: "MTN",
                            amount: "-₦1,000",
                            color: "text-red-500",
                          },
                        ].map((tx, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between py-2"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                {tx.name[0]}
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-slate-900">
                                  {tx.name}
                                </p>
                                <p className="text-[10px] text-slate-400">
                                  {tx.type}
                                </p>
                              </div>
                            </div>
                            <p className={`text-xs font-bold ${tx.color}`}>
                              {tx.amount}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Transfer Sent
                      </p>
                      <p className="text-[10px] text-slate-500">
                        ₦10,000 to Emmanuel
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 animate-bounce"
                  style={{ animationDuration: "4s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Airtime Delivered
                      </p>
                      <p className="text-[10px] text-slate-500">
                        MTN • +234 803...
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                  <div className="text-emerald-400">{stat.icon}</div>
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

      {/* Gift Options */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Four ways to give
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether it's cash, airtime, data, or a voucher — send what
              matters, instantly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                  selectedOption === option.id
                    ? "border-slate-900 bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-[1.02]"
                    : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                    selectedOption === option.id
                      ? "bg-white/10"
                      : option.bgColor
                  }`}
                >
                  <div
                    className={
                      selectedOption === option.id ? "text-white" : option.color
                    }
                  >
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{option.name}</h3>
                <p
                  className={`text-sm leading-relaxed ${selectedOption === option.id ? "text-slate-300" : "text-slate-500"}`}
                >
                  {option.description}
                </p>
                <div
                  className={`mt-5 flex items-center gap-2 text-sm font-semibold ${
                    selectedOption === option.id
                      ? "text-emerald-400"
                      : "text-slate-900"
                  }`}
                >
                  Send now <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Send Form */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Form Side */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Try it now
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                No signup required to explore. Enter an amount and see how fast
                it works.
              </p>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                {/* Gift Type Selector */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                  {giftOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOption(option.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                        selectedOption === option.id
                          ? "bg-slate-900 text-white"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {option.icon}
                      {option.name}
                    </button>
                  ))}
                </div>

                {/* Amount Input */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Amount (₦)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400">
                      ₦
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-12 pr-4 py-4 text-3xl font-bold bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder:text-slate-300"
                    />
                  </div>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {quickAmounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt.toString())}
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-semibold text-slate-700 transition-colors"
                      >
                        ₦{amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Phone Number */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Recipient Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                      +234
                    </span>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="803 123 4567"
                      className="w-full pl-16 pr-4 py-4 text-lg font-semibold bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder:text-slate-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Add a Message{" "}
                    <span className="text-slate-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Happy birthday! 🎉"
                    rows={3}
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  onClick={handleSendGift}
                  disabled={!amount || !phoneNumber}
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
                >
                  <Gift className="w-5 h-5" />
                  Send Gift
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
                  <Lock className="w-3 h-3" />
                  Secured by 256-bit encryption
                </div>
              </div>
            </div>

            {/* Preview Side */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Gift Preview</p>
                      <p className="font-bold">How your recipient sees it</p>
                    </div>
                  </div>

                  {/* SMS Preview */}
                  <div className="bg-white rounded-2xl p-5 text-slate-900 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        SMS Notification
                      </span>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                      <p className="text-sm font-bold text-slate-900">
                        {amount
                          ? `₦${parseInt(amount).toLocaleString()}`
                          : "₦0.00"}{" "}
                        from GreyWallet
                      </p>
                      <p className="text-sm text-slate-600">
                        {message ||
                          "Someone sent you a gift! Tap to claim instantly."}
                      </p>
                      <p className="text-xs text-emerald-600 font-semibold">
                        https://greywallet.ng/claim/x7k9m2
                      </p>
                    </div>
                  </div>

                  {/* Claim Screen Preview */}
                  <div className="bg-white rounded-2xl p-5 text-slate-900">
                    <div className="flex items-center gap-2 mb-4">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Claim Screen
                      </span>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Gift className="w-8 h-8 text-emerald-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900 mb-1">
                        {amount
                          ? `₦${parseInt(amount).toLocaleString()}`
                          : "₦0.00"}
                      </p>
                      <p className="text-sm text-slate-500 mb-6">
                        Gift received
                      </p>
                      <button className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm">
                        Claim to Bank Account
                      </button>
                      <button className="w-full py-3 mt-2 rounded-xl bg-slate-200 text-slate-700 font-semibold text-sm">
                        Claim as Cash
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-400">
                      Recipients without the app receive an SMS with a secure
                      link. They can claim to any Nigerian bank or collect cash
                      at 50,000+ agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-slate-600">
              Three simple steps. No complications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Enter Details",
                desc: "Type the amount, phone number, and optional message. Choose cash, airtime, data, or a voucher.",
                icon: <Banknote className="w-6 h-6" />,
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                step: "02",
                title: "Send Instantly",
                desc: "Hit send. The recipient gets an SMS in under 3 seconds with a secure claim link. No app needed.",
                icon: <Zap className="w-6 h-6" />,
                color: "bg-blue-50 text-blue-600",
              },
              {
                step: "03",
                title: "They Claim",
                desc: "They click the link, choose bank transfer or cash pickup, and receive their gift immediately.",
                icon: <Check className="w-6 h-6" />,
                color: "bg-purple-50 text-purple-600",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="mb-6">
                  <span className="text-6xl font-bold text-slate-100">
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

      {/* Trust Features */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Built for trust, <br />
                designed for speed
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Your money moves securely. Every transaction is encrypted,
                monitored, and protected.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Bank-Grade Security",
                    desc: "256-bit encryption, biometric login, and real-time fraud monitoring.",
                    color: "bg-emerald-50 text-emerald-600",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Instant Delivery",
                    desc: "Average delivery time under 3 seconds. If it fails, you get an instant refund.",
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "No App Required",
                    desc: "Recipients get an SMS. They can claim via web, no download needed.",
                    color: "bg-purple-50 text-purple-600",
                  },
                  {
                    icon: <Lock className="w-5 h-5" />,
                    title: "PIN & Biometric Protection",
                    desc: "Every transaction requires your PIN or fingerprint. Your money, your control.",
                    color: "bg-amber-50 text-amber-600",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">
                        Security Status
                      </p>
                      <p className="text-xs text-emerald-600 font-semibold">
                        All Systems Active
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-slate-500">
                      Live
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "Encryption",
                      status: "Active",
                      icon: <Lock className="w-4 h-4" />,
                    },
                    {
                      label: "Fraud Monitor",
                      status: "Scanning",
                      icon: <Shield className="w-4 h-4" />,
                    },
                    {
                      label: "Biometric Auth",
                      status: "Enabled",
                      icon: <Users className="w-4 h-4" />,
                    },
                    {
                      label: "Transaction Log",
                      status: "Recording",
                      icon: <Clock className="w-4 h-4" />,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-slate-400">{item.icon}</div>
                        <span className="text-sm font-medium text-slate-700">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-slate-900 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Protected Today</p>
                      <p className="text-xl font-bold">₦2.4 Billion</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Loved by Nigerians
            </h2>
            <p className="text-lg text-slate-600">
              Real stories from real users across the country.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Questions? Answered.
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about sending gifts.
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
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-500 flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Start sending gifts today
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                Download the app, add money, and send your first gift in under 2
                minutes. No paperwork, no branch visits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
                  <Download className="w-5 h-5" />
                  Download for iOS
                </button>
                <button className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download for Android
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-10 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Free to download
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  No monthly fees
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">GreyWallet</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Modern banking for modern Nigerians. Send, receive, and manage
                money with confidence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Gifts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Cards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2026 GreyWallet. All rights reserved. Licensed by CBN.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Shield className="w-4 h-4" />
                PCI DSS Compliant
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Lock className="w-4 h-4" />
                256-bit SSL
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
