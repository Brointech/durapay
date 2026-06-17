"use clients";

import type { Metadata } from "next";
import CurrencyConverterHero from "@/app/currencyexchange/converterhero";
// import RateTicker from "@/components/currency-exchange/RateTicker";
import HowItWorks from "@/app/currencyexchange/howitworks";
// import AccountBenefits from "@/components/currency-exchange/AccountBenefits";
// import WhyChooseUs from "@/components/currency-exchange/WhyChooseUs";
// import ReceiveConvert from "@/components/currency-exchange/ReceiveConvert";
// import Testimonials from "@/components/currency-exchange/Testimonials";
// import PopularConversions from "@/components/currency-exchange/PopularConversions";
// import FAQSection from "@/app/currencyexchange/faqsection";
import FAQSection from "@/app/currencyexchange/faqsection";
import AppDownloadCTA from "@/app/currencyexchange/appdownloadcta";
import { Nnavbar } from "@/components/nnavbar";

export const metadata: Metadata = {
  title: "Currency Converter | DuraPay",
  description:
    "Convert currencies instantly with DuraPay's free online currency converter. Get transparent rates and start converting today.",
};

export default function CurrencyExchangePage() {
  return (
    <main id="currency-converter" className="overflow-x-hidden">
      {/* Swap in your existing <Navbar /> here if you have one for the rest of the site */}
      {/* <Nnavbar /> */}
      <CurrencyConverterHero />

      {/* <RateTicker /> */}
      {/* <HowItWorks /> */}
      {/* <AccountBenefits /> */}
      {/* <WhyChooseUs /> */}
      {/* <ReceiveConvert /> */}
      {/* <Testimonials /> */}
      {/* <PopularConversions /> */}
      <FAQSection />
      <AppDownloadCTA />
      {/* Swap in your existing <Footer /> here */}
    </main>
  );
}
