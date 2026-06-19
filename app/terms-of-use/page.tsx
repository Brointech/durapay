"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * DuraPay — Terms of Use
 * app/terms-of-use/page.tsx
 *
 * Layout reference: structure inspired by Grey.co's legal page pattern
 * (legal doc sidebar nav + sectioned terms + sticky in-page contents +
 * "last updated" footer). All legal copy below is original, written for
 * DuraPay's actual product set and Nigerian regulatory context — none of
 * it is copied from Grey or any other provider's terms.
 *
 * Brand tokens: primary #1154DA, navy #00246C
 */

const LEGAL_DOCS = [
  { label: "Terms of Use", href: "/terms-of-use", active: true },
  { label: "Privacy Policy", href: "/privacypolicy", active: true },
  { label: "Cookie Policy", href: "/cookiepolicy", active: true },
];

const SECTIONS = [
  { id: "welcome", title: "Welcome to DuraPay" },
  { id: "scope", title: "What these Terms cover" },
  { id: "eligibility", title: "Eligibility & age restriction" },
  { id: "registration", title: "Account registration & verification" },
  { id: "security", title: "Keeping your account secure" },
  { id: "services", title: "Our services" },
  { id: "fees", title: "Fees & charges" },
  { id: "transactions", title: "Deposits, transfers & transactions" },
  { id: "ip", title: "Intellectual property" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of liability" },
  { id: "indemnity", title: "Indemnity" },
  { id: "suspension", title: "Suspension & termination" },
  { id: "closing", title: "Closing your account" },
  { id: "errors", title: "Errors & how we resolve them" },
  { id: "reversals", title: "Reversals & chargebacks" },
  { id: "changes", title: "Changes to these Terms" },
  { id: "data", title: "Data protection" },
  { id: "third-party", title: "Third-party services" },
  { id: "law", title: "Governing law" },
  { id: "contact", title: "Contact us" },
];

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl font-semibold text-[#00246C] sm:text-2xl"
    >
      {title}
    </h2>
  );
}

export default function TermsOfUsePage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const headings = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Page header */}
      <header className="border-b border-slate-100 bg-gradient-to-b from-[#F4F7FE] to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm  font-medium uppercase tracking-wide text-[#1154DA]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#00246C] sm:text-4xl lg:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            These Terms govern your access to and use of DuraPay — our website,
            mobile app, and any related services. Please read them carefully
            before creating an account.
          </p>
          <p className="mt-4 text-xs text-slate-400 sm:text-sm">
            Last updated: June 18, 2026
          </p>
        </div>
      </header>

      {/* Mobile: legal doc switcher + collapsible contents */}
      <div className="border-b border-slate-100 px-4 py-4 sm:px-6 lg:hidden">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Legal documents" className="flex flex-wrap gap-2">
            {LEGAL_DOCS.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  doc.active
                    ? "bg-[#1154DA] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {doc.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setTocOpen((open) => !open)}
            aria-expanded={tocOpen}
            className="mt-4 flex w-full items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-[#00246C]"
          >
            On this page
            <svg
              className={`h-4 w-4 transition-transform ${tocOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {tocOpen && (
            <ul className="mt-2 space-y-1 rounded-lg border border-slate-200 p-3">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setTocOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm ${
                      activeSection === section.id
                        ? "bg-[#1154DA]/10 font-medium text-[#1154DA]"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Main layout: sidebar (desktop) + content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_minmax(0,1fr)_220px]">
          {/* Left: legal doc directory — desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Legal
              </p>
              <nav aria-label="Legal documents" className="mt-4 space-y-1">
                {LEGAL_DOCS.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      doc.active
                        ? "bg-[#1154DA]/10 font-medium text-[#1154DA]"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {doc.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Center: terms content */}
          <article className="min-w-0 space-y-10 text-sm leading-7 text-slate-700 sm:text-base">
            <section id="welcome" className="space-y-3">
              <SectionHeading id="welcome" title="Welcome to DuraPay" />
              <p>
                These Terms of Use (&quot;Terms&quot;) form a binding agreement
                between you and DuraPay (&quot;DuraPay&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;). They apply to your use of
                our website, our mobile app, and any other service we offer
                (together, the &quot;Services&quot;).
              </p>
              <p>
                By creating a DuraPay account or using any of our Services, you
                confirm that you have read, understood, and agree to be bound by
                these Terms, along with our Privacy Policy and Acceptable Use
                Policy. If you do not agree with any part of these Terms, please
                do not use our Services.
              </p>
              <p>
                You also confirm that you are at least 18 years old and legally
                able to enter into this agreement, and you consent to receiving
                communications from us electronically, including by email, SMS,
                and in-app notification.
              </p>
            </section>

            <section id="scope" className="space-y-3">
              <SectionHeading id="scope" title="What these Terms cover" />
              <p>
                These Terms set out the rules that apply to your use of DuraPay,
                what we&apos;re responsible for, what you&apos;re responsible
                for, and the risks involved in using a digital payments
                platform. Some features may come with additional terms specific
                to that feature; where they apply, we will make them available
                to you and they will form part of this agreement.
              </p>
              <p>
                Through DuraPay, you can hold a Naira balance, send and receive
                money, exchange currency, fund and manage virtual cards, and pay
                for everyday services like airtime, data, TV subscriptions, and
                electricity. We may add, change, or discontinue features at any
                time, and we may decline to process any instruction at our
                discretion, particularly where we suspect fraud or a breach of
                these Terms.
              </p>
            </section>

            <section id="eligibility" className="space-y-3">
              <SectionHeading
                id="eligibility"
                title="Eligibility & age restriction"
              />
              <p>
                DuraPay is intended for people aged 18 and above who can form a
                legally binding contract under Nigerian law. We do not knowingly
                open accounts for, or otherwise provide Services to, anyone
                under 18.
              </p>
              <p>
                You also confirm that opening and using a DuraPay account does
                not violate any law or regulation that applies to you, and that
                you are not on any sanctions or watch list maintained by a
                Nigerian or international regulatory authority.
              </p>
            </section>

            <section id="registration" className="space-y-3">
              <SectionHeading
                id="registration"
                title="Account registration & verification"
              />
              <p>
                To use DuraPay, you&apos;ll need to create an account and
                provide accurate information about yourself, which may include
                your full name, phone number, email address, date of birth,
                BVN/NIN, and government-issued identification. This helps us
                verify who you are and meet our obligations as a regulated
                financial service provider.
              </p>
              <p>
                You authorise us to verify your information directly or through
                third parties, and to carry out the customer due diligence
                checks required under Nigerian anti-money laundering and
                counter-terrorism financing regulations. We may decline to open
                an account, or may suspend an existing one, if we&apos;re unable
                to verify your information or if we consider the account to
                present an unacceptable risk.
              </p>
              <p>
                If any of your details change — your phone number, address, or
                means of identification, for example — you agree to update us
                promptly so your account information stays accurate.
              </p>
            </section>

            <section id="security" className="space-y-3">
              <SectionHeading
                id="security"
                title="Keeping your account secure"
              />
              <p>
                You&apos;re responsible for keeping your login details, PIN,
                password, and one-time passwords (OTPs) confidential, and for
                taking reasonable steps to secure the device you use to access
                DuraPay, including enabling device-level security features such
                as biometrics or a passcode.
              </p>
              <p>
                Contact us immediately if you notice unauthorised activity on
                your account, lose access to your registered phone number or
                device, or suspect that your login details have been
                compromised. We may suspend or restrict your account where we
                have reasonable grounds to believe its security has been
                compromised, including to protect you from further loss.
              </p>
            </section>

            <section id="services" className="space-y-3">
              <SectionHeading id="services" title="Our services" />
              <p>
                <strong className="text-[#00246C]">Money transfer.</strong> You
                can send and receive money to and from bank accounts and other
                DuraPay users. You&apos;re responsible for making sure recipient
                details are correct before confirming a transfer — once
                processed, a transfer generally cannot be reversed.
              </p>
              <p>
                <strong className="text-[#00246C]">Virtual cards.</strong> We
                issue Naira and US Dollar virtual cards, in partnership with our
                card-issuing and banking partners, for online spending. Repeated
                failed transactions due to insufficient funds may result in a
                temporary freeze, and persistent misuse may lead to card
                termination. A new card creation fee may apply if you request a
                replacement card.
              </p>
              <p>
                <strong className="text-[#00246C]">Currency exchange.</strong>{" "}
                You can convert balances between supported currencies at the
                rate displayed at the time of your transaction. Exchange rates
                fluctuate and we do not guarantee that a previously displayed
                rate will be available when you complete your transaction.
              </p>
              <p>
                <strong className="text-[#00246C]">Bill payments & VTU.</strong>{" "}
                You can pay for airtime, mobile data, cable TV subscriptions,
                electricity, and similar services through DuraPay. These
                services rely on third-party billers and networks, and delivery
                times are outside our direct control.
              </p>
              <p>
                DuraPay is a financial technology company. Where any Service
                involves the holding of funds, those funds are safeguarded in
                partnership with NDIC-insured deposit money banks and other
                licensed financial institutions, and are not used by DuraPay for
                its own operating expenses.
              </p>
            </section>

            <section id="fees" className="space-y-3">
              <SectionHeading id="fees" title="Fees & charges" />
              <p>
                Our current fees for transfers, currency conversion, card
                issuance, and bill payments are shown in the app before you
                confirm a transaction, or on our pricing page. We may revise our
                fees from time to time; where we do, we&apos;ll let you know
                with reasonable notice before the change takes effect for
                transactions you initiate afterward.
              </p>
              <p>
                If you believe a fee was charged in error, contact our support
                team and we&apos;ll investigate.
              </p>
            </section>

            <section id="transactions" className="space-y-3">
              <SectionHeading
                id="transactions"
                title="Deposits, transfers & transactions"
              />
              <p>
                You can fund your DuraPay balance by bank transfer, card
                funding, or other methods we make available. We credit your
                balance once we&apos;ve received and confirmed your deposit;
                we&apos;re not responsible for delays caused by your bank or
                card issuer.
              </p>
              <p>
                You&apos;re responsible for the accuracy of any instruction you
                give us, including account numbers, recipient names, and
                amounts. Except where required by law, once a transaction has
                been processed in accordance with your instructions, we
                won&apos;t be liable for losses arising from incorrect details
                you provided.
              </p>
              <p>
                We may ask you for additional information or evidence of the
                source of funds for certain transactions, to meet our regulatory
                obligations. We may also place a temporary hold on a transaction
                or your account while we review it for security or compliance
                reasons.
              </p>
            </section>

            <section id="ip" className="space-y-3">
              <SectionHeading id="ip" title="Intellectual property" />
              <p>
                DuraPay and its licensors own all rights to our brand, website,
                app, and the content within them, including our logo, design,
                and software. You may use the Services for their intended
                personal or business purpose, but you may not copy, modify,
                reverse-engineer, or redistribute any part of our platform
                without our written permission.
              </p>
            </section>

            <section id="disclaimers" className="space-y-3">
              <SectionHeading id="disclaimers" title="Disclaimers" />
              <p>
                We work to keep DuraPay available, accurate, and free of errors,
                but our Services are provided on an &quot;as is&quot; and
                &quot;as available&quot; basis. We don&apos;t guarantee that the
                app will be uninterrupted, timely, or error-free, and your use
                of it is at your own risk.
              </p>
              <p>
                We may suspend, modify, or discontinue any part of our Services
                at any time, including for maintenance or security reasons, and
                we won&apos;t be liable for any unavailability that results.
              </p>
            </section>

            <section id="liability" className="space-y-3">
              <SectionHeading id="liability" title="Limitation of liability" />
              <p>
                To the maximum extent permitted by Nigerian law, DuraPay will
                not be liable for indirect, incidental, or consequential losses
                arising from your use of the Services — including lost profits,
                lost data, or business interruption — even if we&apos;ve been
                advised such losses were possible.
              </p>
              <p>
                Nothing in these Terms limits any liability that cannot lawfully
                be limited, such as liability for fraud or gross negligence on
                our part.
              </p>
            </section>

            <section id="indemnity" className="space-y-3">
              <SectionHeading id="indemnity" title="Indemnity" />
              <p>
                You agree to indemnify and hold DuraPay, its staff, and
                affiliates harmless from any claim, loss, or expense (including
                reasonable legal costs) arising from your breach of these Terms,
                your misuse of the Services, or your violation of any law or
                third party&apos;s rights.
              </p>
            </section>

            <section id="suspension" className="space-y-3">
              <SectionHeading
                id="suspension"
                title="Suspension & termination"
              />
              <p>We may suspend, restrict, or close your account if:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>you breach any part of these Terms;</li>
                <li>
                  we&apos;re required to do so by a regulator, court, or law
                  enforcement agency;
                </li>
                <li>
                  we reasonably suspect fraud, money laundering, or other
                  illegal activity on your account; or
                </li>
                <li>
                  continuing to provide Services to you would expose DuraPay or
                  our partners to legal or regulatory risk.
                </li>
              </ul>
              <p>
                Where we close or suspend your account, we&apos;ll let you know
                and make any available balance accessible to you, except where
                we&apos;re legally required to withhold funds — for example,
                during an active investigation.
              </p>
            </section>

            <section id="closing" className="space-y-3">
              <SectionHeading id="closing" title="Closing your account" />
              <p>
                You can close your DuraPay account at any time from the Settings
                menu in the app. Before doing so, we recommend withdrawing any
                remaining balance, as unused funds left in a closed account may
                take longer to recover.
              </p>
              <p>
                We may continue to retain certain account records after closure,
                where required for compliance, audit, or fraud prevention
                purposes under applicable Nigerian regulations.
              </p>
            </section>

            <section id="errors" className="space-y-3">
              <SectionHeading
                id="errors"
                title="Errors & how we resolve them"
              />
              <p>
                If you notice an incorrect debit or credit, a missing
                transaction, or a transaction you didn&apos;t authorise, contact
                us as soon as possible. We&apos;ll investigate and aim to
                resolve genuine errors within 10 business days; more complex
                cases may take longer, and we&apos;ll keep you updated
                throughout.
              </p>
              <p>
                Routine balance enquiries, delays caused by your bank, and
                mistakes you make when entering transaction details (such as an
                incorrect account number) are not treated as DuraPay errors,
                though our support team is still happy to help where we can.
              </p>
            </section>

            <section id="reversals" className="space-y-3">
              <SectionHeading id="reversals" title="Reversals & chargebacks" />
              <p>
                If a payment made to you is later reversed, invalidated, or
                disputed — for example, due to fraud or a card chargeback — you
                agree that the relevant amount, along with any associated fee,
                may be deducted from your DuraPay balance. If your balance is
                insufficient, the shortfall becomes an amount you owe us, which
                you agree to repay promptly.
              </p>
            </section>

            <section id="changes" className="space-y-3">
              <SectionHeading id="changes" title="Changes to these Terms" />
              <p>
                We may update these Terms from time to time to reflect changes
                in our Services or in applicable regulation. We&apos;ll post the
                updated version here with a new &quot;last updated&quot; date,
                and notify you of material changes by email or in-app notice.
                Continuing to use DuraPay after a change takes effect means you
                accept the revised Terms.
              </p>
            </section>

            <section id="data" className="space-y-3">
              <SectionHeading id="data" title="Data protection" />
              <p>
                We handle your personal information in line with the Nigeria
                Data Protection Act and our Privacy Policy, which explains what
                we collect, how we use it, and the choices available to you. By
                using DuraPay, you consent to that processing.
              </p>
            </section>

            <section id="third-party" className="space-y-3">
              <SectionHeading id="third-party" title="Third-party services" />
              <p>
                Some features rely on third parties — banks, card networks,
                billers, and identity verification providers, for example. We
                carefully select our partners, but we don&apos;t control their
                services and aren&apos;t responsible for failures or delays
                caused by them, beyond what&apos;s required by law.
              </p>
            </section>

            <section id="law" className="space-y-3">
              <SectionHeading id="law" title="Governing law" />
              <p>
                These Terms are governed by the laws of the Federal Republic of
                Nigeria. Our Services are provided in compliance with applicable
                Central Bank of Nigeria (CBN) regulations, and qualifying
                deposits are protected in line with NDIC insurance arrangements
                held by our partner banks.
              </p>
            </section>

            <section id="contact" className="space-y-3 pb-4">
              <SectionHeading id="contact" title="Contact us" />
              <p>
                If you have questions about these Terms or need help with your
                account, reach out to us through in-app support or by emailing{" "}
                <a
                  href="mailto:support@durapay.com"
                  className="font-medium text-[#1154DA] underline-offset-2 hover:underline"
                >
                  support@durapay.com
                </a>
                .
              </p>
            </section>
          </article>

          {/* Right: sticky on-page contents — desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                On this page
              </p>
              <ul className="mt-4 space-y-1 border-l border-slate-100 pl-3">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`block py-1 text-sm transition-colors ${
                        activeSection === section.id
                          ? "font-medium text-[#1154DA]"
                          : "text-slate-500 hover:text-[#00246C]"
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Back to top */}
      <div className="border-t border-slate-100 px-4 py-8 text-center sm:px-6">
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#1154DA] hover:text-[#00246C]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          Back to top
        </a>
      </div>
    </main>
  );
}
