"use client";

import {
  Wallet,
  ShieldCheck,
  Globe,
  Gift,
  CreditCard,
  TrendingUp,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

import { Quote } from "lucide-react";

<Quote size={32} className="text-[#007BFF] mb-6" />;

const testimonials = [
  {
    quote: (
      <>
        DuraPay has completely changed how I manage <br />
        my finances. Transfers are instant, <br />
        reliable, and stress-free.
      </>
    ),
    name: "Chinedu Okafor",
    role: "Business Owner",
  },
  {
    quote:
      "Receiving payments from clients has never been easier. The app is fast, secure, and incredibly intuitive.",
    name: "Amina Bello",
    role: "Freelancer",
  },
  {
    quote:
      "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
    name: "David Johnson",
    role: "Software Engineer",
  },
  {
    quote:
      "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
    name: "David Johnson",
    role: "Software Engineer",
  },
  {
    quote:
      "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
    name: "David Johnson",
    role: "Software Engineer",
  },
  {
    quote:
      "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
    name: "David Johnson",
    role: "Software Engineer",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "We protect every transaction and every account with industry-grade security and fraud monitoring.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Obsessed",
    description:
      "Every feature we build starts with solving real financial challenges for everyday users.",
  },
  {
    icon: Sparkles,
    title: "Keep Innovating",
    description:
      "We continuously improve our products to make banking faster, smarter, and more rewarding.",
  },
  {
    icon: Globe,
    title: "Financial Inclusion",
    description:
      "We believe everyone deserves access to modern banking tools regardless of location.",
  },
];

const stats = [
  {
    value: "24/7",
    label: "Instant Transfers",
  },
  {
    value: "NGN + USD",
    label: "Multi-currency Cards",
  },
  {
    value: "100%",
    label: "Digital Banking",
  },
  {
    value: "∞",
    label: "Growth Opportunities",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Hero */}
        <div className="text-center max-w-5xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-blue-50 text-[#1154da] lg:text-[16px] px-4 py-2 text-sm font-bold mb-6">
            ABOUT US
          </span>

          {/* <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight">
            Banking built for
            <span className="text-blue-800"> everyday life</span>
          </h2> */}

          <h2 className="text-4xl md:text-5xl lg:text-[68px] font-bold text-black leading-tight">
            Building financial inclusion for
            <span className="text-blue-800"> modern workers</span>
          </h2>

          {/* <p className="mt-8 text-lg lg:text-xl text-black leading-relaxed">
            Durapay is a modern personal banking platform designed to make
            managing money simple, rewarding, and accessible. From transfers and
            savings to virtual cards, gift cards, rewards, and cashback, we help
            people do more with their money every day.
          </p> */}
          <p className="mt-8 text-lg lg:text-[19px] text-gray-700 leading-tight">
            We empower global professionals (remote workers, digital{" "}
            <br className="hidden lg:block" /> nomads, freelancers) and
            individuals to live a location- <br className="hidden lg:block" />
            independent lifestyle.
          </p>
        </div>

        {/* Story Section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-800 font-bold uppercase tracking-wider">
              Our Story
            </span>

            <h3 className="mt-4 text-3xl lg:text-[40px] font-bold text-black leading-tight">
              More than just a banking app
            </h3>

            <div className="mt-8 space-y-6 text-gray-800 text-[15px] leading-relaxed">
              <p>
                We started Durapay with a simple vision: give people complete
                control over their money through one seamless platform.
              </p>

              <p>
                Traditional banking often feels slow, fragmented, and
                restrictive. Managing transfers, bill payments, savings,
                rewards, and cards usually requires multiple apps and endless
                processes.
              </p>

              <p>
                Durapay changes that by bringing everything together in one
                secure experience. Whether you're paying bills, sending money,
                saving towards goals, buying gift cards, or spending globally
                with virtual and physical cards, we make every transaction
                effortless.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-blue-800 to-blue-600 p-10 text-white overflow-hidden">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                  <Wallet className="w-10 h-10 mb-4" />
                  <h4 className="font-bold text-lg">Wallet</h4>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                  <CreditCard className="w-10 h-10 mb-4" />
                  <h4 className="font-bold text-lg">Cards</h4>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                  <Gift className="w-10 h-10 mb-4" />
                  <h4 className="font-bold text-lg">Gift Cards</h4>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                  <TrendingUp className="w-10 h-10 mb-4" />
                  <h4 className="font-bold text-lg">Savings</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-28 bg-gray-100 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl">
            <span className="text-blue-800 font-bold uppercase tracking-wider">
              Our Mission
            </span>

            <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Helping people move, save, and grow money effortlessly
            </h3>

            <p className="mt-8 text-lg text-gray-800 leading-relaxed">
              Our mission is to make modern banking simple, accessible, and
              rewarding. We build products that remove financial barriers and
              empower users to manage their money confidently—from daily
              transactions to long-term financial goals.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-28">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-800 font-bold uppercase tracking-wider">
              Core Values
            </span>

            <h3 className="mt-4 text-3xl md:text-5xl font-bold text-black">
              What drives everything we do
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-black">
                    {value.title}
                  </h4>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-28">
          <div className="rounded-3xl bg-black text-white p-8 md:p-12 lg:p-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-4xl lg:text-5xl font-bold">
                    {stat.value}
                  </h4>

                  <p className="mt-3 text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="mt-28 text-center max-w-4xl mx-auto mb-10">
          <span className="text-blue-800 font-bold uppercase tracking-wider">
            Our Vision
          </span>

          <h3 className="text-4xl md:text-5xl lg:text-[58px] font-bold text-black leading-tight">
            Creating a future where banking
            <span className="text-blue-800"> feels effortless</span>
          </h3>

          <p className="mt-8 text-lg text-gray-800 leading-relaxed">
            We envision a world where managing money is simple,{" "}
            <br className="hidden lg:block" /> transparent, and rewarding for
            everyone. Durapay <br className="hidden lg:block" /> is building the
            financial ecosystem that helps <br className="hidden lg:block" />{" "}
            people spend smarter, save better, and unlock{" "}
            <br className="hidden lg:block" /> greater opportunities every day.
          </p>
        </div>

        {/* Next Phase */}
        <div
          className="mx-auto
    max-w-7xl
    bg-[#2A3141]
    rounded-[32px]
    overflow-hidden
    grid
    grid-cols-1
    lg:grid-cols-[1.1fr_0.9fr]
    items-stretch lg:mt-10"
        >
          {/* LEFT — content */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-14 lg:py-24">
            <h2 className="text-[32px] xs:text-center sm:text-[32px] md:text-[40px] font-bold text-white leading-[1.1] mb-5">
              Collaborating <br className="hidden md:block" /> to make a change
            </h2>

            <p className="text-[16px] text-zinc-100 font-semibold leading-relaxed mb-5 max-w-sm">
              At Durapay, we are committed to supporting meaningful causes and
              giving back. Through our dedicated social impact programs and
              corporate social responsibility initiatives, we strive to make a
              difference in the communities we serve. By choosing Durapay,
              you're not just simplifying your global transactions but
              contributing to a better world
            </p>
            <img src="/heart.avif" alt="" className="w-25 " />
          </div>

          {/* RIGHT — floating brands behind image */}
          <div className="relative min-h-[420px] lg:min-h-full">
            {/* Image — z-[2] so it sits ON TOP of the bubbles */}
            <img
              src="/diff.webp"
              alt="Virtual card on phone"
              className="w-full
      h-full
      object-cover
      object-center"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto lg:mt-10 md:mt-10 mt-10">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-[28px] font-bold text-[#00246C]">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1.5 bg-[#1154da] rounded-full mx-auto mt-5" />
          </div>

          {/* Testimonials Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <span
                key={index}
                className="bg-white rounded-3xl p-8 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote
                    size={30}
                    strokeWidth={1.5}
                    className="text-[#1154da]"
                  />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-900 font-semibold text-[14px] leading-relaxed">
                  "{testimonial.quote}"
                </p>
                {/* Customer */}
                <div className="mt-8">
                  <h4 className="text-[#1154da] font-bold text-xl">
                    - {testimonial.name}
                  </h4>
                  <p className="text-gray-600 mt-1">{testimonial.role}</p>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
