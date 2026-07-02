"use client";

import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Globe,
  Building2,
  Users,
} from "lucide-react";

const enterpriseFeatures = [
  "Dedicated account manager",
  "Custom API integrations",
  "Multi-user permissions",
  "Bulk payments & payouts",
  "Advanced reporting",
  "Enterprise-grade security",
  "Priority support",
  "Custom transaction limits",
];

export default function Enterprise() {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 sm:px-10 lg:px-10 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/world-map.png')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl -mt-10">
        <div className="grid items-center  gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-600 -mt-20">
              Enterprise
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-[1.09] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Payment infrastructure <br className="hidden lg:block" /> built
              for <br className="hidden lg:block" />
              large organizations
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black font-semibold">
              Whether you're managing global payroll, supplier payments,
              treasury operations, or embedded finance products, DuraPay
              provides scalable infrastructure designed for enterprise growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1154da] px-8 py-4 font-semibold text-white transition hover:scale-105">
                Contact Sales
                <ArrowRight size={18} />
              </button>

              <button className="rounded-2xl border border-blue-600 px-8 py-4 font-semibold text-[#1154da] transition hover:bg-white/10">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-black">
              Everything you need to scale
            </h2>

            <div className="mt-8 space-y-5">
              {enterpriseFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-blue-600" />

                  <span className="text-slate-900 leading-[1.09]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#131F36] p-6">
              <p className="text-sm uppercase tracking-wider text-white">
                Custom Pricing
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                Tailored to your business
              </h3>

              <p className="mt-3 text-slate-200">
                Pricing is based on transaction volume, currencies,
                integrations, and operational requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-3xl p-8 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <Globe className="text-blue-600" size={32} />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Global Reach
            </h3>

            <p className="mt-3 text-slate-900">
              Move money across borders in multiple currencies.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <Shield className="text-blue-600" size={32} />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Secure Infrastructure
            </h3>

            <p className="mt-3 text-slate-900">
              Enterprise-grade security and compliance controls.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <Users className="text-blue-600" size={32} />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Team Controls
            </h3>

            <p className="mt-3 text-slate-900">
              Manage teams, permissions and approval workflows.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <Building2 className="text-blue-600" size={32} />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Custom Solutions
            </h3>

            <p className="mt-3 text-slate-900">
              Tailored integrations for complex business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
