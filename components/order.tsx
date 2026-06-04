import { CreditCard, PieChart, Grid3X3, Send, PiggyBank } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: (
      <>
        Get a durapay card on the app with pickup and{" "}
        <br className="hidden md:block" />
        <span className="sm:inline block"> delivery options.</span>
      </>
    ),
  },
  {
    icon: PieChart,
    title:
      "Make seamless cashless payments anytime, anywhere — online and in-store.",
  },
  {
    icon: Grid3X3,
    title: "Pay bills, top up services, and purchase gift cards in seconds.",
  },
  {
    icon: Send,
    title: "Enjoy free bank transfers every month with no hidden charges.",
  },
  {
    icon: PiggyBank,
    title:
      "Grow your savings effortlessly with automated smart-saving features.",
  },
];

export default function Order() {
  return (
    <section className="bg-[#f7f7f7] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* First Row */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {features.slice(0, 3).map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#c1dff7] flex items-center justify-center mb-6">
                  <Icon size={22} className="text-[#00246C]" />
                </div>

                <h3 className="text-[#00246C] lg:text-[16px] font-bold leading-relaxed">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div> */}

        {/* Second Row */}
        {/* <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
          {features.slice(3).map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-[45%]"
              >
                <div className="w-12 h-12 rounded-full bg-[#c1dff7] flex items-center justify-center mb-6">
                  <Icon size={22} className="text-[#00246C]" />
                </div>

                <h3 className="text-[#00246C] lg:text-[16px] font-bold leading-relaxed">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 px-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`
          bg-white h-full rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300
          ${
            index < 3
              ? "lg:col-span-2"
              : index === 3
                ? "lg:col-start-2 lg:col-span-2"
                : "lg:col-start-4 lg:col-span-2"
          }
        `}
              >
                <div className="w-9 h-9 rounded-full bg-[#c1dff7] flex items-center justify-center mb-3">
                  <Icon size={22} className="text-[#00246C]" />
                </div>

                <h3 className="text-[#00246C] lg:text-[14px] md:text-[14px] text-[14px] font-bold leading-relaxed">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
