"use clients";

import { ShieldCheck, Wallet, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Best Rates",
    icon: TrendingUp,
  },
  {
    title: "Secure Transactions",
    icon: ShieldCheck,
  },
  {
    title: "Instant Settlement",
    icon: Wallet,
  },
];

export default function ExchangeBenefits() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">Why Choose Durapay?</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {benefits.map((item) => (
            <div key={item.title} className="p-8 border rounded-3xl">
              <item.icon size={42} />

              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-gray-600">
                Enjoy seamless and transparent currency exchange.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
