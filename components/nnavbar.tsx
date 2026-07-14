"use client";

import { useEffect, useState, useRef, Children } from "react";

import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import {
  Download,
  Wallet,
  ArrowDownCircle,
  Send,
  Smartphone,
  Gift,
  CircleDollarSign,
  Award,
  CreditCard,
  PiggyBank,
  Banknote,
  User,
  Building2,
  Globe,
  Receipt,
  type LucideIcon,
  MessageCircle,
  Newspaper,
} from "lucide-react";

const HOME_HERO_GRADIENT = `
  radial-gradient(ellipse 80% 80% at 72% 45%, rgba(180, 200, 245, 0.50) 0%, transparent 60%),
  radial-gradient(ellipse 55% 70% at 100% 85%, rgba(90, 120, 200, 0.40) 0%, transparent 55%),
  radial-gradient(ellipse 50% 55% at 0% 15%, rgba(210, 220, 250, 0.30) 0%, transparent 50%),
  linear-gradient(155deg, #A4B0D0 0%, #8D9CC2 38%, #7E8CB5 68%, #6B7AA8 100%)
`;

const NAVBAR_THEMES: Record<string, { bg: string; text: string }> = {
  "/": { bg: "", text: "text-white" },
  "/wallet": { bg: "bg-[#F8F9FF]", text: "text-black" },
  "/gift-card": { bg: "bg-white", text: "text-[#00246C]" },
  "/transfer": { bg: "bg-[#F8F9FF]", text: "text-black" },
  "/v-tu": { bg: "bg-white", text: "text-[#00246C]" },
  "/savings": { bg: "bg-white", text: "text-[#00246C]" },
  "/virtualcard": { bg: "bg-white", text: "text-[#00246C]" },
  "/physicalcards": { bg: "bg-white", text: "text-[#00246C]" },
  "/help-centre": { bg: "bg-white", text: "text-[#00246C]" },
  "/contact": { bg: "bg-white", text: "text-[#00246C]" },
  "/about": { bg: "bg-white", text: "text-[#00246C]" },
  "/vlog": { bg: "bg-white", text: "text-[#00246C]" },
  "/terms-of-use": { bg: "bg-white", text: "text-[#00246C]" },
  "/privacypolicy": { bg: "bg-white", text: "text-[#00246C]" },
  "/cookiepolicy": { bg: "bg-white", text: "text-[#00246C]" },
};

const DEFAULT_THEME = { bg: "bg-[#8C9CC5]", text: "text-white" };

// Child type now includes optional icon
type Child = {
  name: string;
  href: string;
  description?: React.ReactNode;
  icon?: LucideIcon;
};

type discover = {
  name: string;
  href: string;
};

type NavLink = { name: string; href: string; children?: Child[] };

export const Nnavbar = ({ scrolled: scrolledProp }: { scrolled?: boolean }) => {
  const [internalScrolled, setInternalScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const theme = NAVBAR_THEMES[pathname] ?? DEFAULT_THEME;

  // Use the prop when provided (home page), otherwise track scroll internally (all other pages)
  const scrolled = scrolledProp !== undefined ? scrolledProp : internalScrolled;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only run the internal listener when no scrolled prop is being passed in
    if (scrolledProp !== undefined) return;
    const handleScroll = () => setInternalScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledProp]);

  // export const Nnavbar = () => {
  //   const [scrolled, setScrolled] = useState(false);
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [mounted, setMounted] = useState(false);
  //   const pathname = usePathname();
  //   const theme = NAVBAR_THEMES[pathname] ?? DEFAULT_THEME;

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  //   useEffect(() => {
  //     const handleScroll = () => setScrolled(window.scrollY > 20);
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // navLinks with icons added to every child
  const navLinks: NavLink[] = [
    {
      name: "Products",
      href: "#",
      children: [
        {
          name: "Wallet",
          description: "Send and receive money instantly.",
          href: "/wallet",
          icon: Wallet,
        },

        {
          name: "Transfers",
          description: "send money locally",
          href: "/transfer",
          icon: Send,
        },
        {
          name: "VTU",
          description: "Buy Data and Vtu in seconds.",
          href: "/v-tu",
          icon: Smartphone,
        },
        {
          name: "Gift Cards",
          description: "Buy and redeem gift cards globally",
          href: "/gift-card",
          icon: Gift,
        },
        {
          name: "Savings",
          description: "Automate savings and reach your goals",
          href: "/savings",
          icon: PiggyBank,
        },
        {
          name: "Virtual Cards",
          description: "Secure digital payment solution",
          href: "/virtualcard",
          icon: CreditCard,
        },
        {
          name: "Physical Cards",
          description: "Spend anywhere with your Durapay card.",
          href: "/physicalcards",
          icon: Banknote,
        },
      ],
    },
    {
      name: "Learn",
      href: "#",
      children: [
        {
          name: "Help Centre",
          description: "Explore our support resources",
          href: "/help-centre",
          icon: User,
        },
      ],
    },
    {
      name: "Company",
      href: "#",
      children: [
        {
          name: "About",
          description: "Learn about the team",
          href: "/about",
          icon: Building2,
        },
        {
          name: "Blog",
          description: "Get a deep dive into our updates",
          href: "/vlog",
          icon: Newspaper,
        },
        {
          name: "Contact",
          description: "Get in touch with us for support or business inqiuries",
          href: "/contact",
          icon: MessageCircle,
        },
      ],
    },
  ];

  const MobileMenu = () => (
    <div className="fixed inset-0 bg-white z-[99999] flex flex-col overflow-y-auto shadow-lg">
      {/* Header row with logo + close */}
      <div className="flex items-center justify-between px-5 py-2 border-b border-[#edf0f5]">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-black text-[20px]">Durapay</span>
        </a>
        <button
          onClick={() => setIsOpen(false)}
          className="text-[#1154da]"
          aria-label="Close menu"
        >
          <AiOutlineClose size={26} />
        </button>
      </div>

      {/* Nav links */}
      <div className="flex flex-col justify-between gap-6 divide-y divide-[#dcdee0] text-black px-5 overflow-hidden">
        {navLinks.map((link) =>
          link.children ? (
            <NavDropdown
              key={link.name}
              link={link}
              pathname={pathname}
              triggerClassName="flex items-center justify-between w-full font-semibold text-black text-[17px] py-3 transition-colors"
            />
          ) : (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center font-semibold text-[#00246C] text-[17px] py-2 transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ),
        )}

        {/* Sign In as a nav-style row */}
        {/* <Link
          href="/signin"
          onClick={() => setIsOpen(false)}
          className="w-full flex items-center justify-center font-medium text-[#1154da] border-2 border-[#1154da] rounded-xl px-6 py-3 text-[15px] mb-3 "
        >
          Sign in
        </Link> */}
      </div>

      {/* CTA button */}
      <div className="px-5 mt-0 pb-4">
        <button
          onClick={() =>
            window.open("https://play.google.com/store/apps?hl=en", "_blank")
          }
          className="w-full rounded-xl bg-[#1154da] px-6 py-4 font-semibold text-white text-[15px] cursor-pointer transition hover:bg-[#023bac]"
        >
          Download Durapay - it's free
        </button>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : theme.bg
        }`}
        style={
          !scrolled && pathname === "/"
            ? { background: HOME_HERO_GRADIENT }
            : undefined
        }
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 sm:px-10 lg:px-10 lg:py-1.5 py-2">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#1154da] flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <span
              className={`font-bold text-[22px] transition-colors ${
                scrolled ? "text-black" : theme.text
              }`}
            >
              Durapay
            </span>
          </a>

          {/* Desktop nav links */}
          <div
            className={`hidden lg:flex items-center gap-8 text-[14px] font-semibold transition-colors ${
              scrolled ? "text-black" : theme.text
            }`}
          >
            {navLinks.map((link) =>
              link.children ? (
                <NavDropdown key={link.name} link={link} pathname={pathname} />
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <button className="font-semibold text-white cursor-pointer transition-colors text-[14px]">
              Sign in
            </button> */}
            <button
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps?hl=en",
                  "_blank",
                )
              }
              className="flex items-center gap-1 rounded-[10px] bg-[#1154da] px-4 py-2.5 lg:text-[14px] font-semibold text-white transition hover:bg-[#023bac] hover:cursor-pointer"
            >
              Download Durapay
            </button>
          </div>

          {/* Mobile + Tablet hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors ${
              scrolled ? "text-black" : theme.text
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <AiOutlineClose size={28} /> : <RiMenu5Line size={28} />}
          </button>
        </nav>
      </header>

      {mounted && isOpen && createPortal(<MobileMenu />, document.body)}
    </>
  );
};

// Separate NavDropdown with icon support
const NavDropdown = ({
  link,
  pathname,
}: {
  link: NavLink;
  pathname: string;
  triggerClassName?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) setIsOpen(false);
      }}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between gap-2 w-full font-semibold text-[15px] py-3 transition-colors"
      >
        <span>{link.name}</span>
        <svg
          className={`w-4 h-4  transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="lg:absolute lg:left-1/2 lg:top-full lg:-translate-x-1/2 lg:pt-4 lg:z-50">
          <div className="lg:mt-4 bg-white lg:rounded-2xl lg:shadow-2xl lg:border lg:border-gray-100 lg:p-3">
            {/* <div
              className={`grid gap-1 ${
                link.name === "Pricing"
                  ? "grid-cols-1 lg:w-[320px]"
                  : "grid-cols-2 lg:w-[520px]"
              }`}
            > */}
            <div className="grid lg:grid-cols-[1fr_1fr] w-[820px] overflow-hidden rounded-3xl bg-white p-2">
              {link.children?.map((child) => {
                const IconComponent = child.icon;
                return (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="group flex items-start gap-4 rounded-xl p-2 hover:bg-gray-50 transition"
                  >
                    {IconComponent && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                        <IconComponent className="h-5 w-5 text-black group-hover:text-[#1154da]" />
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-black ">
                        {child.name}
                      </h4>

                      <p className="text-sm text-[#495C7F]">
                        {child.description}
                      </p>
                    </div>
                  </Link>
                );
              })}

              {/* <div className="bg-[#F7F9FC] p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Discover
                </p>

                <div className="mt-6 space-y-5">
                  {link.discover?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-[16px] hover:text-[#1154da]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
