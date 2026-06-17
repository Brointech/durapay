"use client";

import { useMemo, useEffect, useState } from "react";
import { FiArrowDown, FiRepeat } from "react-icons/fi";
import CurrencyDropdown from "@/app/currencyexchange/currencydropdown";
import { CURRENCIES } from "@/app/currencyexchange/currency";
import { Currency } from "@/.next/types/currency";

function formatAmount(value: number) {
  if (!Number.isFinite(value)) return "0.00";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CurrencyConverterHero() {
  const [sendCurrency, setSendCurrency] = useState<Currency>(
    CURRENCIES.find((c: { code: string }) => c.code === "USD")!,
  );
  const [receiveCurrency, setReceiveCurrency] = useState<Currency>(
    CURRENCIES.find((c: { code: string }) => c.code === "EUR")!,
  );
  const [sendAmount, setSendAmount] = useState("1000");

  const rate = useMemo(
    () => receiveCurrency.rateToUsd / sendCurrency.rateToUsd,
    [sendCurrency, receiveCurrency],
  );

  const receiveAmount = useMemo(() => {
    const numeric = parseFloat(sendAmount.replace(/,/g, ""));
    if (Number.isNaN(numeric)) return 0;
    return numeric * rate;
  }, [sendAmount, rate]);

  function handleSwap() {
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(sendCurrency);
  }

  function handleAmountChange(value: string) {
    if (/^[0-9]*\.?[0-9]*$/.test(value)) {
      setSendAmount(value);
    }
  }

  const [lastUpdated] = useState<Date>(() => new Date());
  const [now, setNow] = useState<Date>(() => new Date());

  // keep "last updated" honest by ticking every 15s
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(interval);
  }, []);

  function formatRelativeTime(from: Date, to: Date) {
    const seconds = Math.max(
      0,
      Math.round((to.getTime() - from.getTime()) / 1000),
    );
    if (seconds < 60) return "just now";
    const minutes = Math.round(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    const hours = Math.round(minutes / 60);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }

  function formatRate(value: number) {
    if (value >= 100) {
      return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return value.toFixed(4);
  }

  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-28">
      {/* ambient background glow — quiet, not the signature element */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#1154da]/30 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-[#1154da]/20 blur-3xl sm:h-80 sm:w-80"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#00246C] sm:text-4xl lg:text-5xl">
            Currency converter
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#00246C] sm:text-base">
            Convert currencies seamlessly with DuraPay&apos;s free online
            converter. Whether you&apos;re getting paid by international clients
            or managing money across borders, get rates that stay close to the
            mid-market — no surprises.
          </p>
        </div>

        {/* Converter card */}
        <div className="relative mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-4 shadow-2xl sm:p-6 lg:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
            {/* You send */}
            <div className="flex-1 rounded-2xl border border-[#00246C]/10 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#00246C]/50">
                You send
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <input
                  type="text"
                  inputMode="decimal"
                  value={sendAmount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  aria-label="Amount to send"
                  className="w-full min-w-0 bg-transparent text-2xl font-semibold text-[#00246C] outline-none sm:text-3xl"
                  placeholder="0.00"
                />
                <CurrencyDropdown
                  currencies={CURRENCIES}
                  selected={sendCurrency}
                  onSelect={setSendCurrency}
                  label="Currency you are sending"
                />
              </div>
            </div>

            {/* Swap control */}
            <div className="z-10 flex items-center justify-center lg:-mx-5">
              <button
                type="button"
                onClick={handleSwap}
                aria-label="Swap currencies"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1154da] text-white shadow-lg shadow-[#1154da]/30 transition hover:bg-[#0e46b8] active:scale-95 lg:h-12 lg:w-12"
              >
                <FiArrowDown className="h-5 w-5 lg:hidden" />
                <FiRepeat className="hidden h-5 w-5 lg:block" />
              </button>
            </div>

            {/* Recipient gets */}
            <div className="flex-1 rounded-2xl border border-[#00246C]/10 bg-[#1154da]/[0.03] p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#00246C]/50">
                Recipient gets
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="w-full min-w-0 truncate text-2xl font-semibold text-[#00246C] sm:text-3xl">
                  {formatAmount(receiveAmount)}
                </p>
                <CurrencyDropdown
                  currencies={CURRENCIES}
                  selected={receiveCurrency}
                  onSelect={setReceiveCurrency}
                  label="Currency the recipient receives"
                />
              </div>
            </div>
          </div>

          {/* Rate + CTA */}
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-[#00246C]/60 sm:text-sm">
              <p>
                Today&apos;s rate: 1 {sendCurrency.code} = {formatRate(rate)}{" "}
                {receiveCurrency.code}
              </p>
              <p className="text-[#00246C]/40">
                Last updated: {formatRelativeTime(lastUpdated, now)}
              </p>
            </div>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full bg-[#1154da] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0e46b8] sm:px-7"
            >
              Convert now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
