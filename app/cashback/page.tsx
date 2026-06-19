"use clients";

import {
  Gift,
  Wallet,
  CreditCard,
  Smartphone,
  PiggyBank,
  ArrowRight,
  Trophy,
  Sparkles,
} from "lucide-react";

export default function Rewards() {
  const rewards = [
    {
      icon: Wallet,
      title: "Transfers",
      description:
        "Earn reward points whenever you send or receive money through Durapay.",
    },
    {
      icon: Smartphone,
      title: "VTU & Bills",
      description:
        "Get rewarded every time you buy airtime, data bundles, or pay bills.",
    },
    {
      icon: CreditCard,
      title: "Cards",
      description:
        "Unlock exclusive points when spending with your Durapay virtual or physical cards.",
    },
    {
      icon: PiggyBank,
      title: "Savings",
      description:
        "Grow your savings and receive bonus rewards for consistency.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* ================================= */}
      {/* SECTION 1 - HERO */}
      {/* ================================= */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1154da] px-4 py-2 rounded-full mb-6">
                <Sparkles size={18} />
                <span className="font-medium">
                  Rewards that grow with every transaction
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Every payment deserves a reward.
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Earn points, unlock perks, and enjoy exclusive benefits every
                time you use Durapay. Whether you're transferring money, buying
                airtime, saving, or spending with your cards, rewards follow
                every transaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
                <button className="bg-[#1154da] text-white px-7 py-4 rounded-full font-medium hover:bg-blue-800 transition cursor-pointer">
                  Start Earning Rewards
                </button>

                <button className="border border-[#1154da] text-[#1154da] px-7 py-4 rounded-full font-medium hover:bg-gray-50 transition cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-300 via-blue-200 to-blue-300 rounded-[40px] p-8 lg:p-4">
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-semibold text-lg">Durapay Rewards</h3>

                    <div className="bg-blue-100 text-[#1154da] px-3 py-1 rounded-full text-sm">
                      Gold Tier
                    </div>
                  </div>

                  <div className="text-center py-6">
                    <Trophy className="mx-auto text-[#1154da]" size={60} />

                    <h2 className="text-5xl font-bold mt-5">12,450</h2>

                    <p className="text-gray-500 mt-2">
                      Available Reward Points
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-gray-500 text-sm">Cashback Earned</p>
                      <h4 className="font-bold text-2xl mt-1">₦28,500</h4>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-gray-500 text-sm">
                        Gift Cards Redeemed
                      </p>
                      <h4 className="font-bold text-2xl mt-1">18</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* SECTION 2 - EARN REWARDS */}
      {/* ================================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Earn rewards from everyday activities
            </h2>

            <p className="mt-5 text-lg text-gray-800">
              The more you use Durapay, the more rewards you unlock.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {rewards.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                  <item.icon className="text-blue-600" size={26} />
                </div>

                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>

                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* SECTION 3 - REWARD TYPES */}
      {/* ================================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-blue-500 font-bold">
                Redeem rewards your way
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                Turn points into real value.
              </h2>

              <p className="text-lg text-gray-600 mt-6">
                Use your earned points across the Durapay ecosystem. Enjoy
                cashback, gift cards, fee discounts, premium benefits, and more.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Cashback Rewards",
                "Gift Cards",
                "Transfer Fee Discounts",
                "Premium Account Perks",
                "Savings Bonuses",
                "Card Spending Rewards",
              ].map((reward, index) => (
                <div key={index} className="bg-blue-50 rounded-3xl p-6">
                  <Gift className="text-blue-600 mb-4" size={26} />

                  <h3 className="font-semibold text-lg">{reward}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* SECTION 4 - HOW IT WORKS */}
      {/* ================================= */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              How Durapay Rewards work
            </h2>

            <p className="text-gray-400 mt-5 text-lg">
              Start earning rewards in just a few steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Use Durapay",
                text: "Make transfers, pay bills, save money, or spend with your cards.",
              },
              {
                step: "02",
                title: "Earn Points",
                text: "Points are automatically added to your rewards balance.",
              },
              {
                step: "03",
                title: "Redeem Rewards",
                text: "Convert points into cashback, perks, gift cards, and more.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-white/60 rounded-3xl p-8"
              >
                <span className="text-blue-500 text-sm lg:text-lg font-bold">
                  {item.step}
                </span>

                <h3 className="text-2xl font-semibold mt-3 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* SECTION 5 - CTA */}
      {/* ================================= */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Start earning rewards today.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Join thousands of users already earning cashback, rewards points,
            and exclusive perks on every transaction.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition">
            Create Free Account
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
