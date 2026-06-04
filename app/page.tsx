import Image from "next/image";

import HeroSection from "@/components/herosection";

import { Nnavbar } from "@/components/nnavbar";
import Order from "@/components/order";
import SocialProofSection from "@/components/socialproofsection";
import GlobalAccountSection from "@/components/globalaccountsection";
import CurrencyExchangeSection from "@/components/currencyexchangesection";
import VirtualCardsSection from "@/components/virtualcards";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <section>
      <div>
        <HeroSection />
        <SocialProofSection />
        <Order />
        <GlobalAccountSection />
        <CurrencyExchangeSection />
        <VirtualCardsSection />
        <Testimonials />
      </div>
    </section>
  );
}
