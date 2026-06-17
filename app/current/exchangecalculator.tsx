"use client";

import { useState } from "react";

export default function ExchangeCalculator() {
  const [amount, setAmount] = useState(1000);

  const rate = 1550;

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white shadow-xl rounded-3xl p-8 border">
          <h2 className="text-3xl font-bold mb-8">Calculate Exchange</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">You Send</label>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full mt-2 border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Recipient Gets</label>

              <div className="mt-2 border rounded-xl p-4 bg-gray-50">
                ₦ {(amount * rate).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-4">
            Current Rate: ₦{rate}/$
          </div>
        </div>
      </div>
    </section>
  );
}
