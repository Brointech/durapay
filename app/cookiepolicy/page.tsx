"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * DuraPay — Cookie Policy
 * app/cookie-policy/page.tsx
 *
 * Same layout pattern as Terms of Use / Privacy Policy: legal doc
 * sidebar, sticky/scrollspy "on this page" contents, collapsible
 * mobile TOC. Add a matching "Cookie Policy" entry to LEGAL_DOCS in
 * your other two legal pages so the sidebar stays consistent across
 * all three.
 *
 * Brand tokens: primary #1154DA, navy #00246C
 */

const LEGAL_DOCS = [
  { label: "Terms of Use", href: "/terms-of-use", active: true },
  { label: "Privacy Policy", href: "/privacypolicy", active: true },
  { label: "Cookie Policy", href: "/cookiepolicy", active: true },
];

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "what-are-cookies", title: "What are cookies" },
  { id: "types-of-cookies", title: "Types of cookies we use" },
  { id: "cookies-table", title: "Cookies in detail" },
  { id: "other-technologies", title: "Other tracking technologies" },
  { id: "third-party", title: "Third-party cookies" },
  { id: "managing-cookies", title: "Managing your preferences" },
  { id: "do-not-track", title: "Do Not Track signals" },
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

const COOKIE_ROWS = [
  {
    category: "Essential",
    examples: "session_id, auth_token, csrf_token",
    purpose:
      "Keep you signed in, secure your session, and let core features like transfers and card funding work.",
    duration: "Session / up to 30 days",
  },
  {
    category: "Security & fraud prevention",
    examples: "device_fp, risk_session",
    purpose:
      "Recognise your device, flag unusual login or transaction patterns, and protect your account.",
    duration: "Up to 1 year",
  },
  {
    category: "Performance & analytics",
    examples: "_dp_analytics, _dp_session_id",
    purpose:
      "Understand how the app and website are used, so we can fix issues and improve features.",
    duration: "Up to 1 year",
  },
  {
    category: "Functionality",
    examples: "lang_pref, currency_pref",
    purpose:
      "Remember choices like display currency or language so you don't have to reset them each visit.",
    duration: "Up to 1 year",
  },
  {
    category: "Marketing (opt-in only)",
    examples: "_dp_campaign",
    purpose:
      "Measure the performance of campaigns you've engaged with. Only set where you've given consent.",
    duration: "Up to 90 days",
  },
];

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            This policy explains what cookies and similar technologies DuraPay
            uses, why we use them, and how you can manage your preferences.
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
                This Cookie Policy explains how DuraPay (&quot;DuraPay&quot;,
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies
                and similar tracking technologies on our website and within our
                mobile app. It should be read alongside our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-[#1154DA] underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </Link>
                , which explains more broadly how we handle your personal
                information.
              </p>
            </section>

            <section id="what-are-cookies" className="space-y-3">
              <SectionHeading id="what-are-cookies" title="What are cookies" />
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They let a site remember things about your
                visit, like whether you&apos;re signed in or what preferences
                you&apos;ve set. Our mobile app uses comparable technologies —
                such as device identifiers and local storage — that serve the
                same purposes described in this policy.
              </p>
            </section>

            <section id="types-of-cookies" className="space-y-3">
              <SectionHeading
                id="types-of-cookies"
                title="Types of cookies we use"
              />
              <p>
                <strong className="text-[#00246C]">Essential cookies.</strong>{" "}
                Required for DuraPay to function — keeping you signed in and
                letting you complete transactions. You can&apos;t opt out of
                these without affecting core functionality.
              </p>
              <p>
                <strong className="text-[#00246C]">
                  Security & fraud-prevention cookies.
                </strong>{" "}
                Help us recognise your device and detect unusual activity that
                may indicate fraud or unauthorised access.
              </p>
              <p>
                <strong className="text-[#00246C]">
                  Performance & analytics cookies.
                </strong>{" "}
                Help us understand how people use DuraPay so we can fix issues
                and prioritise improvements.
              </p>
              <p>
                <strong className="text-[#00246C]">
                  Functionality cookies.
                </strong>{" "}
                Remember your preferences, like your preferred display currency.
              </p>
              <p>
                <strong className="text-[#00246C]">Marketing cookies.</strong>{" "}
                Only set where you&apos;ve given consent, these help us measure
                how effective a campaign or promotion has been.
              </p>
            </section>

            <section id="cookies-table" className="space-y-4">
              <SectionHeading id="cookies-table" title="Cookies in detail" />
              <p>
                Here&apos;s a closer look at the categories above. Exact cookie
                names may change as we update our tools, but their purpose and
                category will stay consistent with this table.
              </p>

              {/* Mobile: stacked cards. Desktop: table. */}
              <div className="space-y-3 sm:hidden">
                {COOKIE_ROWS.map((row) => (
                  <div
                    key={row.category}
                    className="rounded-xl border border-slate-200 p-4"
                  >
                    <p className="text-sm font-semibold text-[#00246C]">
                      {row.category}
                    </p>
                    <dl className="mt-2 space-y-1.5 text-xs text-slate-600">
                      <div>
                        <dt className="font-medium text-slate-500">Examples</dt>
                        <dd>{row.examples}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-slate-500">Purpose</dt>
                        <dd>{row.purpose}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-slate-500">Duration</dt>
                        <dd>{row.duration}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>

              <div className="hidden overflow-x-auto rounded-xl border border-slate-200 sm:block">
                <table className="w-full min-w-[640px] table-fixed text-left text-sm">
                  <thead className="bg-[#F4F7FE]">
                    <tr>
                      <th className="w-1/5 px-4 py-3 font-semibold text-[#00246C]">
                        Category
                      </th>
                      <th className="w-1/5 px-4 py-3 font-semibold text-[#00246C]">
                        Examples
                      </th>
                      <th className="w-2/5 px-4 py-3 font-semibold text-[#00246C]">
                        Purpose
                      </th>
                      <th className="w-1/5 px-4 py-3 font-semibold text-[#00246C]">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {COOKIE_ROWS.map((row) => (
                      <tr key={row.category}>
                        <td className="px-4 py-3 font-medium text-slate-700">
                          {row.category}
                        </td>
                        <td className="px-4 py-3 text-slate-500">
                          {row.examples}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {row.purpose}
                        </td>
                        <td className="px-4 py-3 text-slate-500">
                          {row.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="other-technologies" className="space-y-3">
              <SectionHeading
                id="other-technologies"
                title="Other tracking technologies"
              />
              <p>
                Alongside cookies, we may use local storage, software
                development kits (SDKs) within our mobile app, and lightweight
                tracking pixels in emails to understand whether a message was
                opened. These work similarly to cookies and are covered by the
                same categories above.
              </p>
            </section>

            <section id="third-party" className="space-y-3">
              <SectionHeading id="third-party" title="Third-party cookies" />
              <p>
                Some cookies on our website are set by trusted third parties who
                help us with analytics, security, and payments. These providers
                may use cookies for their own purposes in line with their own
                privacy policies, and we encourage you to review those policies
                for more detail on how they handle data.
              </p>
            </section>

            <section id="managing-cookies" className="space-y-3">
              <SectionHeading
                id="managing-cookies"
                title="Managing your preferences"
              />
              <p>
                When you first visit our website, you can choose which
                non-essential cookie categories to allow through our cookie
                banner. You can change your choice at any time from the
                &quot;Cookie preferences&quot; link in our website footer.
              </p>
              <p>
                You can also manage or delete cookies through your browser
                settings, and control app-level tracking through your
                device&apos;s privacy settings (for example, iOS App Tracking
                Transparency or Android ad personalisation settings). Blocking
                essential cookies may prevent parts of DuraPay from working
                correctly.
              </p>
            </section>

            <section id="do-not-track" className="space-y-3">
              <SectionHeading id="do-not-track" title="Do Not Track signals" />
              <p>
                Some browsers offer a &quot;Do Not Track&quot; setting.
                There&apos;s currently no consistent industry standard for how
                to respond to this signal, so DuraPay does not change its data
                collection practices based on it. You can still manage your
                preferences directly through the cookie banner and your browser
                or device settings described above.
              </p>
            </section>

            <section id="changes" className="space-y-3">
              <SectionHeading id="changes" title="Changes to this policy" />
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in the technologies or providers we use. We&apos;ll post
                the updated version here with a new &quot;last updated&quot;
                date, and where a change is material, we&apos;ll let you know
                via the cookie banner or an in-app notice.
              </p>
            </section>

            <section id="contact" className="space-y-3 pb-4">
              <SectionHeading id="contact" title="Contact us" />
              <p>
                If you have questions about this Cookie Policy, contact our Data
                Protection Officer through in-app support or by emailing{" "}
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
