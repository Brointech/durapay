// components/PhoneMockup.tsx

const quickActions = [
  {
    label: "Airtime",
    bg: "rgba(17,84,218,0.18)",
    stroke: "#5a9aff",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5a9aff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
      </svg>
    ),
  },
  {
    label: "Electricity",
    bg: "rgba(245,158,11,0.18)",
    stroke: "#f59e0b",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    label: "Cable TV",
    bg: "rgba(16,185,129,0.18)",
    stroke: "#10b981",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: "Internet",
    bg: "rgba(99,102,241,0.18)",
    stroke: "#818cf8",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#818cf8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const transactions = [
  {
    initials: "AO",
    bg: "#1154da",
    name: "Adeola Okafor",
    date: "Today, 9:41 AM",
    amount: "+₦50,000",
    credit: true,
  },
  {
    initials: "KU",
    bg: "#f59e0b",
    name: "Kuda Utilities",
    date: "Yesterday",
    amount: "−₦8,500",
    credit: false,
  },
  {
    initials: "NF",
    bg: "#10b981",
    name: "Netflix",
    date: "Jun 5",
    amount: "−₦4,200",
    credit: false,
  },
];

const cardActions = [
  {
    label: "Send",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    ),
  },
  {
    label: "Top up",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    ),
  },
  {
    label: "Cards",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    label: "More",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function PhoneMockup() {
  return (
    <div className="relative w-[300px]">
      {/* Floating card — cashback (top right) */}
      <div className="absolute top-[8%] -right-[22%] min-w-[150px] bg-white/97 rounded-[18px] px-4 py-3.5 shadow-[0_12px_40px_rgba(10,15,30,0.15)] animate-float z-10">
        <p className="text-[10px] text-[#6b7a99] font-medium mb-1">
          This month's cashback
        </p>
        <p className="font-display text-[18px] font-extrabold text-[#0a0f1e] tracking-tight">
          ₦4,820
        </p>
        <p className="flex items-center gap-1 text-[10.5px] font-semibold text-[#1154da] mt-0.5">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          +12% vs last month
        </p>
      </div>

      {/* Phone shell */}
      <div
        className="w-[300px] h-[600px] rounded-[44px] overflow-hidden relative"
        style={{
          background: "linear-gradient(160deg, #1a2340 0%, #0d1529 100%)",
          border: "1.5px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 40px 80px rgba(10,15,30,0.22), 0 0 0 8px rgba(17,84,218,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-7 bg-black/60 rounded-[20px] z-10" />

        <div className="pt-14 px-5 pb-6 h-full flex flex-col gap-3.5 overflow-hidden">
          {/* Balance card */}
          <div
            className="rounded-[22px] p-5 text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1154da 0%, #3a7ffa 100%)",
            }}
          >
            {/* decorative circle */}
            <div className="absolute w-[140px] h-[140px] bg-white/[0.07] rounded-full -top-10 -right-8 pointer-events-none" />
            <p className="text-[11px] uppercase tracking-[0.8px] opacity-70 mb-1.5">
              Total Balance
            </p>
            <p className="font-display text-[28px] font-extrabold tracking-tight">
              ₦ 1,284,600
            </p>
            <p className="text-[11px] opacity-60 mt-1">
              NGN • Updated just now
            </p>
            <div className="flex gap-2.5 mt-3.5">
              {cardActions.map((a) => (
                <button
                  key={a.label}
                  className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl text-white text-[11px] font-semibold cursor-pointer border-none"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  {a.icon}
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-2">
            {quickActions.map((q) => (
              <div key={q.label} className="flex flex-col items-center gap-1.5">
                <div
                  className="w-[46px] h-[46px] rounded-[14px] flex items-center justify-center"
                  style={{ background: q.bg }}
                >
                  {q.icon}
                </div>
                <span className="text-[9.5px] text-white/55 text-center">
                  {q.label}
                </span>
              </div>
            ))}
          </div>

          {/* Transactions */}
          <p className="text-[12px] font-semibold text-white/50 uppercase tracking-[0.6px]">
            Recent
          </p>
          <div className="flex flex-col gap-2.5">
            {transactions.map((t) => (
              <div key={t.name} className="flex items-center gap-2.5">
                <div
                  className="w-[34px] h-[34px] rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold text-white"
                  style={{ background: t.bg }}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-white/90 truncate">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-white/40 mt-px">{t.date}</p>
                </div>
                <span
                  className={`font-display text-[13px] font-bold ${
                    t.credit ? "text-emerald-400" : "text-white/70"
                  }`}
                >
                  {t.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating card — transfer (bottom left) */}
      <div
        className="absolute bottom-[18%] -left-[22%] min-w-[160px] bg-white/97 rounded-[18px] px-4 py-3.5 shadow-[0_12px_40px_rgba(10,15,30,0.15)] z-10"
        style={{ animation: "floatY 3s ease-in-out 1.4s infinite" }}
      >
        <p className="text-[10px] text-[#6b7a99] font-medium mb-1">
          Transfer successful
        </p>
        <p className="font-display text-[18px] font-extrabold text-[#0a0f1e] tracking-tight">
          ₦120,000
        </p>
        <p className="flex items-center gap-1 text-[10.5px] font-semibold text-[#1154da] mt-0.5">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Sent to Tolu Nwosu
        </p>
      </div>
    </div>
  );
}
