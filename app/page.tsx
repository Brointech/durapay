import Image from "next/image";

import HeroSection from "@/components/herosection";

import { Nnavbar } from "@/components/nnavbar";
import Order from "@/components/order";
import SocialProofSection from "@/components/socialproofsection";
import GlobalAccountSection from "@/components/globalaccountsection";

import CurrencyExchange from "@/components/currencyexchange";
import VirtualCardsSection from "@/components/virtualcards";
import MoneyTransfer from "@/components/moneytransfer";
import CurvedBlackSection from "@/components/create";
import Difference from "@/components/difference";
import BeyondBanking from "@/components/beyondbanking";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <section>
      <div>
        <HeroSection />
        <SocialProofSection />
        {/* <Order /> */}
        <GlobalAccountSection />
        <CurrencyExchange />
        <VirtualCardsSection />
        <MoneyTransfer />
        <CurvedBlackSection />
        <Difference />
        <BeyondBanking />
        <Testimonials />
      </div>
    </section>
  );
}
