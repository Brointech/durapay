"use clients";

const steps = [
  "Create Account",
  "Fund Wallet",
  "Convert Currency",
  "Withdraw Funds",
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F6F8FC]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-14">
          {steps.map((step, index) => (
            <div key={step} className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <h3 className="mt-6 font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
