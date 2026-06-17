"use clients";

const currencies = ["USD", "GBP", "EUR", "CAD", "AUD", "NGN"];

export default function SupportedCurrencies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">Supported Currencies</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">
          {currencies.map((currency) => (
            <div
              key={currency}
              className="bg-white p-8 rounded-2xl text-center shadow-sm"
            >
              <h3 className="font-semibold text-xl">{currency}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
