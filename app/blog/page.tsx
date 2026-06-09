"use client";

// import PhoneMockup from "./PhoneMockup";

const avatars = [
  { initials: "AO", bg: "#1154da" },
  { initials: "TN", bg: "#f59e0b" },
  { initials: "CK", bg: "#10b981" },
  { initials: "RM", bg: "#6366f1" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(160deg, #f0f6ff 0%, #e4eefb 40%, #dceaf9 100%)",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(17,84,218,0.12) 0%, transparent 70%)",
          top: "10%",
          right: -80,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle, rgba(17,84,218,0.08) 0%, transparent 70%)",
          bottom: "10%",
          left: -60,
        }}
      />

      {/* Grid */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-12 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        {/* ── LEFT ── */}
        <div className="flex flex-col items-start animate-fade-up text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(17,84,218,0.08)] border border-[rgba(17,84,218,0.18)] text-[#1154da] text-[12.5px] font-semibold tracking-[0.3px] px-3.5 py-1.5 rounded-full mb-7">
            <span className="w-[7px] h-[7px] bg-[#1154da] rounded-full animate-pulse" />
            Now live — instant transfers
          </div>

          {/* Heading */}
          <h1
            className="font-display font-extrabold leading-[1.06] tracking-[-2px] text-[#0a0f1e] mb-6"
            style={{ fontSize: "clamp(40px, 5.5vw, 68px)" }}
          >
            Modern banking
            <br />
            built around
            <br />
            <span className="text-[#1154da] relative inline-block after:content-[''] after:absolute after:bottom-0.5 after:left-0 after:right-0 after:h-[3px] after:bg-[#1154da] after:rounded-sm after:opacity-30">
              your lifestyle.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[17px] font-normal leading-[1.65] text-[#3b4a6b] max-w-[440px] mb-9">
            Make transfers, pay bills, fund wallets, use virtual cards, and earn
            cashback effortlessly from your phone — for free.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-4 mb-12 flex-wrap">
            <button
              className="inline-flex items-center gap-2.5 bg-[#1154da] hover:bg-[#023bac] text-white font-semibold text-[15.5px] px-7 py-3.5 rounded-full border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{ boxShadow: "0 4px 18px rgba(17,84,218,0.28)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Get started for free
            </button>

            <button className="inline-flex items-center gap-2 text-[#1154da] font-semibold text-[15px] bg-transparent border-none cursor-pointer p-0 transition-[gap] duration-200 hover:gap-3 group">
              See how it works
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-5 flex-wrap">
            {/* Avatars */}
            <div className="flex">
              {avatars.map((a, i) => (
                <div
                  key={a.initials}
                  className="w-[34px] h-[34px] rounded-full border-[2.5px] border-white flex items-center justify-center text-[12px] font-bold text-white"
                  style={{
                    background: a.bg,
                    marginLeft: i === 0 ? 0 : -10,
                  }}
                >
                  {a.initials}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-[14px] font-bold text-[#0a0f1e]">
                500k+ users
              </span>
              <span className="text-[12.5px] text-[#3b4a6b]">
                trust DuraPay daily
              </span>
            </div>

            <div className="w-px h-[30px] bg-black/10" />

            {/* Rating */}
            <div className="flex items-center gap-1 text-[13px] font-semibold">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#f59e0b"
                stroke="none"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-[#0a0f1e]">4.9</span>
              <span className="text-[#6b7a99] font-normal">App Store</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Phone mockup ── */}
        <div
          className="flex justify-center lg:justify-end items-end"
          style={{ animation: "fadeUp 0.9s ease 0.15s both" }}
        >
          {/* <PhoneMockup /> */}
        </div>
      </div>
    </section>
  );
}
