"use client";

import { Shield, Wallet, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-slate-200 py-16 px-8 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-600 -mt-8 lg:-mt-16">
          <h1 className="text-white text-[40px] lg:text-[70px] font-bold text-center leading-tight">
            Get digital banking <br />
            at your fingertips
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-10">
            <div className="border border-white/30 w-full max-w-[160px] h-12 flex items-center justify-center overflow-hidden cursor-pointer rounded-[8px]">
              <img
                src="/playstore.webp"
                alt=""
                className="lg:w-30 h-10 object-cover"
              />
            </div>
            <div className="border border-white/30 w-full max-w-[160px] h-12 flex items-center justify-center overflow-hidden cursor-pointer rounded-[8px]">
              <img
                src="/appstore.webp"
                alt=""
                className="lg:w-40 h-10 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 py-8">
          {/* <div>


            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-slate-300 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-slate-100">Durapay</span>
            </div>
            <p className="text-sm text-slate-100 leading-relaxed">
              Modern banking for modern Nigerians. <br /> Save, send, and grow
              your money with confidence.
            </p>
          </div> */}

          <div className="space-y-4">
            <h1 className="text-white text-[14px]">CONTACT US</h1>
            <p className=" text-[12px] sm:text-[12px] lg:text-[14px] cursor-pointer text-blue-600">
              hello @durapay.com
            </p>
            <ul className="space-y-3 min-w-0 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  X/Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" text-[14px] font-semibold text-slate-100 mb-4">
              PRODUCTS
            </h4>
            <ul className="space-y-3 min-w-0 text-sm text-slate-400">
              <li>
                <a
                  href="/wallet"
                  className="hover:text-slate-300 transition-colors"
                >
                  Wallet
                </a>
              </li>
              <li>
                <a
                  href="/transfer"
                  className="hover:text-slate-300 transition-colors"
                >
                  Transfers
                </a>
              </li>
              <li>
                <a
                  href="/savings"
                  className="hover:text-slate-300 transition-colors"
                >
                  Savings
                </a>
              </li>
              <li>
                <a
                  href="/virtualcard"
                  className="hover:text-slate-300 transition-colors"
                >
                  Virtual Card
                </a>
              </li>
              <li>
                <a
                  href="/physicalcards"
                  className="hover:text-slate-300 transition-colors"
                >
                  Physical Card
                </a>
              </li>
              <li>
                <a
                  href="/rewards"
                  className="hover:text-slate-300 transition-colors"
                >
                  Rewards
                </a>
              </li>
              <li>
                <a
                  href="/personal"
                  className="hover:text-slate-300 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold text-slate-100 mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3 min-w-0 text-sm text-slate-400">
              <li>
                <a
                  href="/about"
                  className="hover:text-slate-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-slate-300 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-slate-300 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-slate-100 mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-3 min-w-0 text-sm text-slate-400">
              <li>
                <a
                  href="/helpcentre"
                  className="hover:text-slate-300 transition-colors"
                >
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/b-log"
                  className="hover:text-slate-300 transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-slate-100 mb-4">
              LEGAL
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="/terms-of-use"
                  className="hover:text-slate-300 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="/privacypolicy"
                  className="hover:text-slate-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookiepolicy"
                  className="hover:text-slate-300 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Durapay. All rights reserved. Licensed by CBN.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-4 h-4" />
              PCI DSS Compliant
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Lock className="w-4 h-4" />
              256-bit SSL
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
