"use clients";

import { FiSmartphone } from "react-icons/fi";

export default function AppDownloadCTA() {
  return (
    <section id="get-started" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-[#00246C] px-6 py-12 text-center sm:px-10 sm:py-16">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <FiSmartphone className="h-6 w-6 text-white" />
          </span>
          <h2 className="max-w-md text-2xl font-bold text-white sm:text-3xl">
            Get digital banking at your fingertips
          </h2>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="https://play.google.com/store/apps"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#00246C] transition hover:bg-white/90"
            >
              Get it on Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#00246C] transition hover:bg-white/90"
            >
              Download on the App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
