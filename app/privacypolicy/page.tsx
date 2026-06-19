"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * DuraPay — Privacy Policy
 * app/privacy-policy/page.tsx
 *
 * Same layout pattern as the Terms of Use page: legal doc sidebar,
 * sticky/scrollspy "on this page" contents, collapsible mobile TOC.
 * All copy below is original, written for DuraPay's actual data
 * practices and the Nigeria Data Protection Act (NDPA) — not copied
 * from any other provider's policy.
 *
 * Brand tokens: primary #1154DA, navy #00246C
 */

const LEGAL_DOCS = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacypolicy", active: true },
  { label: "Cookie Policy", href: "/cookiepolicy" },
];

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-collect", title: "How we collect information" },
  { id: "how-we-use", title: "How we use your information" },
  { id: "legal-basis", title: "Our legal basis for processing" },
  { id: "sharing", title: "Who we share information with" },
  { id: "retention", title: "How long we keep your data" },
  { id: "security", title: "How we protect your data" },
  { id: "your-rights", title: "Your rights" },
  { id: "cookies", title: "Cookies & tracking technologies" },
  { id: "transfers", title: "International data transfers" },
  { id: "children", title: "Children's privacy" },
  { id: "marketing", title: "Marketing communications" },
  { id: "changes", title: "Changes to this policy" },
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

export default function PrivacyPolicyPage() {
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
          <p className="text-sm font-medium uppercase tracking-wide text-[#1154DA]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#00246C] sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            This policy explains what personal information DuraPay collects, why
            we collect it, how we use and protect it, and the choices and rights
            available to you.
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

          {/* Center: policy content */}
          <article className="min-w-0 space-y-10 text-sm leading-7 text-slate-700 sm:text-base">
            <section id="introduction" className="space-y-3">
              <SectionHeading id="introduction" title="Introduction" />
              <p>
                DuraPay (&quot;DuraPay&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) provides digital financial services, including
                money transfer, virtual cards, currency exchange, and bill
                payments. This Privacy Policy applies whenever you use our
                website, our mobile app, or any other service we offer
                (together, the &quot;Services&quot;).
              </p>
              <p>
                We process your personal information in line with the Nigeria
                Data Protection Act, 2023 (&quot;NDPA&quot;) and applicable
                regulations issued by the Nigeria Data Protection Commission. By
                using DuraPay, you acknowledge that you have read and understood
                how we handle your information as described here.
              </p>
            </section>

            <section id="information-we-collect" className="space-y-3">
              <SectionHeading
                id="information-we-collect"
                title="Information we collect"
              />
              <p>
                <strong className="text-[#00246C]">
                  Identity & contact information.
                </strong>{" "}
                Your full name, date of birth, gender, phone number, email
                address, residential address, and government-issued
                identification, including your Bank Verification Number (BVN)
                and National Identification Number (NIN).
              </p>
              <p>
                <strong className="text-[#00246C]">
                  Financial information.
                </strong>{" "}
                Your account balance, transaction history, linked bank accounts
                and cards, currency conversion activity, and information you
                provide about the source of funds.
              </p>
              <p>
                <strong className="text-[#00246C]">
                  Device & usage information.
                </strong>{" "}
                IP address, device identifiers, operating system, app version,
                log-in timestamps, crash logs, and how you interact with our
                app, collected automatically when you use DuraPay.
              </p>
              <p>
                <strong className="text-[#00246C]">
                  Information from third parties.
                </strong>{" "}
                Verification results from identity and credit reference
                providers, information from our partner banks and card networks,
                and information from billers when you pay for airtime, data, TV,
                or electricity through DuraPay.
              </p>
            </section>

            <section id="how-we-collect" className="space-y-3">
              <SectionHeading
                id="how-we-collect"
                title="How we collect information"
              />
              <p>
                We collect information directly from you when you register for
                an account, complete identity verification, make a transaction,
                contact our support team, or otherwise interact with our
                Services. We also collect information automatically through
                cookies, SDKs, and similar technologies, and we receive
                information from our banking, card, identity-verification, and
                biller partners as part of providing the Services to you.
              </p>
            </section>

            <section id="how-we-use" className="space-y-3">
              <SectionHeading
                id="how-we-use"
                title="How we use your information"
              />
              <ul className="list-disc space-y-2 pl-5">
                <li>To create and manage your DuraPay account.</li>
                <li>
                  To verify your identity and meet our Know Your Customer (KYC)
                  and anti-money laundering obligations.
                </li>
                <li>
                  To process your transactions, including transfers, card
                  funding, currency conversion, and bill payments.
                </li>
                <li>
                  To detect, investigate, and prevent fraud, unauthorised
                  access, and other illegal activity.
                </li>
                <li>
                  To provide customer support and respond to your enquiries.
                </li>
                <li>
                  To improve our app, develop new features, and understand how
                  our Services are used.
                </li>
                <li>
                  To send you service notifications, security alerts, and, where
                  you&apos;ve agreed to receive them, marketing communications.
                </li>
                <li>
                  To comply with our legal and regulatory obligations, including
                  reporting requirements under Nigerian financial services law.
                </li>
              </ul>
            </section>

            <section id="legal-basis" className="space-y-3">
              <SectionHeading
                id="legal-basis"
                title="Our legal basis for processing"
              />
              <p>
                We process your personal information where it&apos;s necessary
                to perform our contract with you (for example, to process a
                transfer you&apos;ve requested), where we have a legal
                obligation to do so (such as KYC and anti-money laundering
                checks), where we have a legitimate interest in keeping DuraPay
                secure and improving our Services, and where you&apos;ve given
                us your consent, such as for marketing communications.
              </p>
            </section>

            <section id="sharing" className="space-y-3">
              <SectionHeading
                id="sharing"
                title="Who we share information with"
              />
              <p>
                We don&apos;t sell your personal information. We share it only
                where necessary, including with:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Partner banks, card networks, and payment processors that help
                  us deliver transfers, virtual cards, and currency exchange.
                </li>
                <li>
                  Billers and aggregators, to fulfil airtime, data, TV, and
                  electricity payments.
                </li>
                <li>
                  Identity verification and credit reference providers, to meet
                  our KYC obligations.
                </li>
                <li>
                  Regulators and law enforcement agencies, including the Central
                  Bank of Nigeria, where required by law or a valid legal
                  request.
                </li>
                <li>
                  Service providers who support our operations, such as cloud
                  hosting, customer support tooling, and analytics — bound by
                  contractual obligations to protect your data.
                </li>
                <li>
                  A successor entity, in the event of a merger, acquisition, or
                  restructuring of our business.
                </li>
              </ul>
            </section>

            <section id="retention" className="space-y-3">
              <SectionHeading
                id="retention"
                title="How long we keep your data"
              />
              <p>
                We keep your personal information for as long as your account is
                active, and afterward for as long as needed to meet our legal,
                regulatory, accounting, and fraud-prevention obligations —
                including the record-keeping periods required of regulated
                financial institutions in Nigeria. When that period ends, we
                securely delete or anonymise your information.
              </p>
            </section>

            <section id="security" className="space-y-3">
              <SectionHeading id="security" title="How we protect your data" />
              <p>
                We use technical and organisational safeguards to protect your
                information, including encryption in transit and at rest, access
                controls limiting who within DuraPay can view your data, and
                regular security reviews. No system is completely secure, so we
                also encourage you to protect your own login details and report
                anything suspicious to us right away.
              </p>
            </section>

            <section id="your-rights" className="space-y-3">
              <SectionHeading id="your-rights" title="Your rights" />
              <p>Under the NDPA, you have the right to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Ask us to confirm what personal data we hold about you and
                  access a copy of it.
                </li>
                <li>Ask us to correct inaccurate or incomplete information.</li>
                <li>
                  Ask us to delete your information, subject to our legal and
                  regulatory retention obligations.
                </li>
                <li>
                  Object to or restrict certain types of processing, including
                  direct marketing.
                </li>
                <li>
                  Request a portable copy of information you&apos;ve provided to
                  us.
                </li>
                <li>
                  Withdraw consent at any time, where our processing relies on
                  your consent.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us using the details in
                the &quot;Contact us&quot; section below. We may need to verify
                your identity before acting on your request.
              </p>
            </section>

            <section id="cookies" className="space-y-3">
              <SectionHeading
                id="cookies"
                title="Cookies & tracking technologies"
              />
              <p>
                We use cookies and similar technologies on our website and SDKs
                within our app to keep you signed in, remember your preferences,
                understand how our Services are used, and help detect fraudulent
                activity. You can manage cookie preferences through your browser
                settings; restricting certain cookies may affect how parts of
                our website work.
              </p>
            </section>

            <section id="transfers" className="space-y-3">
              <SectionHeading
                id="transfers"
                title="International data transfers"
              />
              <p>
                Some of our service providers, such as cloud infrastructure and
                certain card or currency-exchange partners, may process data
                outside Nigeria. Where we transfer personal information
                internationally, we take steps required under the NDPA to ensure
                it remains protected, including using providers that offer an
                adequate level of data protection or are bound by appropriate
                contractual safeguards.
              </p>
            </section>

            <section id="children" className="space-y-3">
              <SectionHeading id="children" title="Children's privacy" />
              <p>
                DuraPay is intended for users aged 18 and above. We do not
                knowingly collect personal information from anyone under 18. If
                we learn that we&apos;ve collected information from a minor
                without appropriate consent, we&apos;ll take steps to delete it.
              </p>
            </section>

            <section id="marketing" className="space-y-3">
              <SectionHeading id="marketing" title="Marketing communications" />
              <p>
                With your consent, we may send you updates about new features,
                promotions, and offers by email, SMS, or push notification. You
                can opt out at any time using the unsubscribe link in our
                emails, by adjusting your notification settings in the app, or
                by contacting our support team. You&apos;ll continue to receive
                essential service and security notifications even if you opt out
                of marketing.
              </p>
            </section>

            <section id="changes" className="space-y-3">
              <SectionHeading id="changes" title="Changes to this policy" />
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable law. We&apos;ll post the
                updated version here with a new &quot;last updated&quot; date,
                and where a change is material, we&apos;ll notify you by email
                or in-app notice before it takes effect.
              </p>
            </section>

            <section id="contact" className="space-y-3 pb-4">
              <SectionHeading id="contact" title="Contact us" />
              <p>
                If you have questions about this Privacy Policy or want to
                exercise any of your data protection rights, reach out to our
                Data Protection Officer through in-app support or by emailing{" "}
                <a
                  href="mailto:privacy@durapay.com"
                  className="font-medium text-[#1154DA] underline-offset-2 hover:underline"
                >
                  privacy@durapay.com
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
