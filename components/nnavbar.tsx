"use client";

import { useEffect, useState, useRef } from "react";

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
} from "lucide-react";

// Child type now includes optional icon
type Child = {
  name: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

type NavLink = { name: string; href: string; children?: Child[] };

export const Nnavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { name: "Home", href: "/" },
    {
      name: "Features",
      href: "#",
      children: [
        { name: "Wallet", href: "/wallet", icon: Wallet },
        { name: "Receive", href: "/sendandreceive", icon: ArrowDownCircle },
        { name: "Transfers", href: "/transfer", icon: Send },
        { name: "VTU", href: "/vtu", icon: Smartphone },
        { name: "Gift Cards", href: "/giftcard", icon: Gift },
        { name: "Savings", href: "/savings", icon: PiggyBank },
        { name: "Virtual Cards", href: "/virtualcard", icon: CreditCard },
        {
          name: "Physical Cards",
          href: "/physicalcards",
          icon: Banknote,
        },
        { name: "Rewards", href: "/rewards", icon: Award },
        {
          name: "Cashback",
          href: "/cashback",
          icon: CircleDollarSign,
        },
      ],
    },
    {
      name: "Pricing",
      href: "#",
      children: [
        {
          name: "Personal",
          href: "/personal",
          description: "For individuals and freelancers",
          icon: User,
        },
        {
          name: "Business",
          href: "/business",
          description: "For startups and companies",
          icon: Building2,
        },
        {
          name: "Enterprise",
          href: "/enterprise",
          description: "Custom pricing for large organizations",
          icon: Globe,
        },
        {
          name: "Transaction Fees",
          href: "/transaction",
          description: "Transfer and conversion charges",
          icon: Receipt,
        },
      ],
    },
    { name: "Help Centre", href: "/helpcentre" },
    { name: "Blog", href: "/vlog" },
    { name: "Contact", href: "/contact" },
  ];

  const MobileMenu = () => (
    <div className="fixed inset-0 bg-white z-[99999] flex flex-col overflow-y-auto shadow-lg">
      {/* Header row with logo + close */}
      <div className="flex items-center justify-between px-5 py-2 border-b border-[#edf0f5]">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-[#00246C] text-[20px]">Durapay</span>
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
      <div className="flex flex-col justify-between divide-y divide-[#edf0f5] px-5">
        {navLinks.map((link) =>
          link.children ? (
            <NavDropdown
              key={link.name}
              link={link}
              pathname={pathname}
              triggerClassName="flex items-center justify-between w-full font-semibold text-black text-[17px] py-2 transition-colors"
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
        <Link
          href="/signin"
          onClick={() => setIsOpen(false)}
          className="w-full flex items-center justify-center font-medium text-[#1154da] border-2 border-[#1154da] rounded-xl px-6 py-3 text-[15px] mb-3 "
        >
          Sign in
        </Link>
      </div>

      {/* CTA button */}
      <div className="px-5 mt-0 pb-4">
        <button className="w-full rounded-xl bg-[#1154da] px-6 py-4 font-semibold text-white text-[15px] cursor-pointer transition hover:bg-[#023bac]">
          Download Durapay - it's free
        </button>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 w-screen z-99999 transition-all duration-300 ${
          scrolled ? "bg-[#8C9CC5] shadow-md" : "bg-[#8C9CC5]"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 sm:px-10 lg:px-10 lg:py-3 py-2">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#1154da] flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-[22px]">Durapay</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-white">
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
            <button className="font-semibold text-white cursor-pointer transition-colors text-[14px]">
              Sign in
            </button>
            <button className="flex items-center gap-1 rounded-[10px] bg-[#1154da] px-4 py-2.5 lg:text-[14px] font-semibold text-white transition hover:bg-[#023bac] hover:cursor-pointer">
              Download Durapay
            </button>
          </div>

          {/* Mobile + Tablet hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#00246C]"
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
          <div className="lg:mt-4 bg-white lg:rounded-2xl lg:shadow-2xl lg:border lg:border-gray-100 lg:p-5">
            <div
              className={`grid gap-1 ${
                link.name === "Pricing"
                  ? "grid-cols-1 lg:w-[320px]"
                  : "grid-cols-2 lg:w-[520px]"
              }`}
            >
              {link.children?.map((child) => {
                const IconComponent = child.icon;
                return (
                  <Link
                    key={child.name}
                    href={child.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-xl p-2 hover:bg-[#f5f8ff] transition"
                  >
                    {IconComponent && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                        <IconComponent className="h-4 w-4 text-[#1154da]" />
                      </div>
                    )}
                    <p className="font-semibold text-[#1154da] text-[14px]">
                      {child.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
