"use client";

import { Shield, Wallet, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-slate-300 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-slate-100">Durapay</span>
            </div>
            <p className="text-sm text-slate-100 leading-relaxed">
              Modern banking for modern Nigerians. Save, send, and grow your
              money with confidence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">PRODUCTS</h4>
            <ul className="space-y-3 text-sm text-slate-100">
              <li>
                <a
                  href="/transfer"
                  className="hover:text-slate-300 transition-colors"
                >
                  Money Transfer
                </a>
              </li>
              <li>
                <a
                  href="/virtualcard"
                  className="hover:text-slate-300 transition-colors"
                >
                  Virtual Cards
                </a>
              </li>
              <li>
                <a
                  href="/currencyexchange"
                  className="hover:text-slate-300 transition-colors"
                >
                  Currency Exchange
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Foreign accounts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">COMPANY</h4>
            <ul className="space-y-3 text-sm text-slate-100">
              <li>
                <a
                  href="/about"
                  className="hover:text-slate-300 transition-colors"
                >
                  About us
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
                  href="/b-log"
                  className="hover:text-slate-300 transition-colors"
                >
                  Blog
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
            <h4 className="font-semibold text-slate-100 mb-4">SUPPORT</h4>
            <ul className="space-y-3 text-sm text-slate-100">
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
