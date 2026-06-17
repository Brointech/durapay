import {
  Currency,
  // PopularPair,
  FaqItem,
  Testimonial,
} from "@/.next/types/currency";

// Mock rates (units per 1 USD). Swap this for a live FX API response.
export const CURRENCIES: Currency[] = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", rateToUsd: 1 },
  { code: "EUR", name: "Euro", flag: "🇪🇺", rateToUsd: 0.93 },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", rateToUsd: 0.79 },
  { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬", rateToUsd: 1530 },
  { code: "GHS", name: "Ghanaian Cedi", flag: "🇬🇭", rateToUsd: 15.2 },
  { code: "EGP", name: "Egyptian Pound", flag: "🇪🇬", rateToUsd: 48.5 },
  { code: "KES", name: "Kenyan Shilling", flag: "🇰🇪", rateToUsd: 129 },
  { code: "ZAR", name: "South African Rand", flag: "🇿🇦", rateToUsd: 18.4 },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", rateToUsd: 1.37 },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", rateToUsd: 86.1 },
];

// export const POPULAR_PAIRS: PopularPair[] = [
//   { from: "USD", to: "NGN", changePercent24h: 0.2 },
//   { from: "GBP", to: "USD", changePercent24h: 0.3 },
//   { from: "EUR", to: "GBP", changePercent24h: -0.1 },
//   { from: "USD", to: "GHS", changePercent24h: 0.4 },
//   { from: "USD", to: "KES", changePercent24h: 0.1 },
//   { from: "GBP", to: "NGN", changePercent24h: 0.5 },
//   { from: "EUR", to: "USD", changePercent24h: -0.2 },
//   { from: "USD", to: "ZAR", changePercent24h: 0.3 },
// ];

export const FAQS: FaqItem[] = [
  {
    question: "How fast will I receive my converted funds?",
    answer:
      "Once a conversion is complete, you can withdraw to your bank account instantly, or within a few business hours depending on the currency.",
  },
  {
    question: "Can I receive payments from international clients directly?",
    answer:
      "Yes — you can receive payments in multiple currencies and convert them to your preferred currency in seconds.",
  },
  {
    question: "Can I use DuraPay in multiple countries?",
    answer:
      "Absolutely. DuraPay is built for global use, whether you're freelancing, traveling, or managing money across borders.",
  },
  {
    question: "Is DuraPay secure?",
    answer:
      "Yes. We use bank-grade encryption and partner with licensed, regulated financial institutions to keep your funds and data safe.",
  },
  {
    question: "Are there any fees for converting currencies?",
    answer:
      "DuraPay offers transparent pricing with no hidden charges — the rate you see at the time of conversion is the rate you get.",
  },
  {
    question: "What currencies can I convert with DuraPay?",
    answer:
      "DuraPay supports a growing list of major and African currencies, including USD, EUR, GBP, NGN, GHS, and KES.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Working across NGOs means I'm always juggling currencies. DuraPay's conversion tool has made it simple, fast, and genuinely stress-free.",
    name: "Nneka Bada",
    role: "NGO Facilitator",
  },
  {
    quote:
      "As a freelancer with clients abroad, getting paid used to be a headache. DuraPay's rates are fair and the fees barely register.",
    name: "Imisioluwa Adeyeri",
    role: "Content Marketer",
  },
  {
    quote:
      "I'm always on the move, and DuraPay fits that lifestyle perfectly — easy access to my money in different currencies, all in one app.",
    name: "Emeka Amadi",
    role: "Digital Nomad",
  },
  {
    quote:
      "Handling clients across countries used to mean constant exchange-rate anxiety. DuraPay took that worry off my plate entirely.",
    name: "Sophia Chiedu",
    role: "IT Consultant",
  },
];
