import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#4BA8D8]">
      {/* ── BACKGROUND LAYERS ── */}

      {/* Base sky-blue gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 72% 45%, rgba(160, 215, 245, 0.50) 0%, transparent 60%),
            radial-gradient(ellipse 55% 70% at 100% 85%, rgba(45, 130, 185, 0.40) 0%, transparent 55%),
            radial-gradient(ellipse 50% 55% at 0% 15%, rgba(180, 225, 250, 0.30) 0%, transparent 50%),
            linear-gradient(155deg, #7ecef0 0%, #4BA8D8 38%, #3490c0 68%, #2878aa 100%)
          `,
        }}
      />

      {/* Grain overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.055] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Right-side portrait light bloom */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 75% at 78% 28%, rgba(210, 238, 252, 0.28) 0%, transparent 60%)",
        }}
      />

      {/* Floor reflection */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(150, 210, 240, 0.22) 0%, transparent 100%)",
        }}
      />

      {/* ── WHITE CURVED SHAPE (bottom-right) ── */}
      {/* This replicates the large white arc that peeks up from the bottom-right
          corner in the reference, acting as a transition into the next section */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: "clamp(340px, 48vw, 720px)",
          height: "clamp(120px, 22vw, 280px)",
        }}
      >
        <svg
          viewBox="0 0 720 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Large white arc sweeping up from the bottom-right */}
          <path
            d="M720 280 H0 Q180 280 360 120 Q500 10 720 80 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2zm0 4a8 8 0 0 1 7.94 7H14V6zm0 16a8 8 0 0 1-7.94-9H14v9z"
              fill="white"
              fillOpacity="0.92"
            />
          </svg>
          <span
            className="text-white font-bold text-xl tracking-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Grey
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["Products", "Learn", "Company"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA group */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:block text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-[#1a6fcf] hover:bg-[#155db5] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 whitespace-nowrap shadow-md"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get started for free
          </a>
        </div>
      </nav>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch min-h-[calc(100vh-80px)]">
        {/* Left — text content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-10 lg:pt-0 pb-12 lg:pb-24 lg:w-[52%] xl:w-[48%]">
          <h1
            className="text-white font-black leading-[1.02] tracking-tight mb-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
            }}
          >
            Inclusive global
            <br />
            banking designed
            <br />
            just for you.
          </h1>

          <p
            className="text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-[440px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Receive, send, exchange, and manage multiple currencies in one app.
            Open a foreign bank account from your phone for free
          </p>

          <div>
            <a
              href="#"
              className="inline-block bg-[#1a6fcf] hover:bg-[#155db5] text-white font-semibold px-7 py-4 rounded-2xl text-base transition-colors duration-200 shadow-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get started — it&apos;s free
            </a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="relative lg:flex-1 flex items-end justify-center lg:justify-end overflow-hidden">
          {/*
            Replace the placeholder below with your portrait PNG, e.g.:
            <img
              src="/images/hero-portrait.png"
              alt="Person holding phone"
              className="relative z-[2] h-[75vh] max-h-[700px] w-auto object-contain object-bottom"
            />
          */}
          <div
            className="relative z-[2] flex items-end justify-center w-full h-[50vw] max-h-[580px] lg:h-[75vh]"
            aria-label="Portrait image placeholder"
          >
            <div className="w-[260px] sm:w-[320px] lg:w-[380px] h-[360px] sm:h-[440px] lg:h-[520px] rounded-3xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center gap-3">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <p
                className="text-white/30 text-sm text-center px-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Drop your portrait PNG here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
