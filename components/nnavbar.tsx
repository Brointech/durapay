// "use client";

// import { useEffect, useState, useRef, useCallback } from "react";
// import { RiMenu5Line } from "react-icons/ri";
// import { AiOutlineClose } from "react-icons/ai";
// import Link from "next/link";
// import { createPortal } from "react-dom";

// export const Nnavbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lock body scroll when menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   const navLinks = [
//     {
//       name: "Features",
//       href: "#",
//       children: [
//         { name: "Wallet", href: "/wallet" },
//         { name: "Receive", href: "/sendandreceive" },
//         { name: "Transfers", href: "/transfer" },
//         { name: "VTU", href: "/vtu" },
//         { name: "Gift Cards", href: "/giftcard" },
//         { name: "Savings", href: "/savings" },
//         { name: "Virtual Cards", href: "/features/virtual-cards" },
//         { name: "Physical Cards", href: "/features/physical-cards" },
//         { name: "Rewards", href: "/features/rewards" },
//         { name: "Cashback", href: "/features/cashback" },
//       ],
//     },

//     {
//       name: "Pricing",
//       href: "#",
//       children: [
//         {
//           name: "Personal",
//           href: "/pricing/personal",
//           description: "For individuals and freelancers",
//         },
//         {
//           name: "Business",
//           href: "/pricing/business",
//           description: "For startups and companies",
//         },
//         {
//           name: "Enterprise",
//           href: "/pricing/enterprise",
//           description: "Custom pricing for large organizations",
//         },
//         {
//           name: "Transaction Fees",
//           href: "/pricing/fees",
//           description: "Transfer and conversion charges",
//         },
//       ],
//     },
//     { name: "Help Centre", href: "/help-centre" },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//   ];

//   // The mobile menu rendered via portal — directly into document.body
//   // This escapes ALL stacking contexts including the hero's overflow-hidden
//   const MobileMenu = () => (
//     <div
//       className="fixed inset-0 bg-white z-99999 flex flex-col pt-24 px-6 pb-10 overflow-y-auto"
//       style={{ top: 0, left: 0, right: 0, bottom: 0 }}
//     >
//       {/* Close button top-right */}
//       <button
//         onClick={() => setIsOpen(false)}
//         className="absolute top-4 right-6 text-[#00246C]"
//         aria-label="Close menu"
//       >
//         <AiOutlineClose size={28} />
//       </button>

//       {/* Logo */}
//       <a href="/" className="flex items-center gap-1 mb-8 -mt-40">
//         <img
//           src="/duralogo.png"
//           alt="Durapay logo"
//           className="w-10 object-contain"
//         />
//         <span className="font-bold text-[#00246C] text-[22px]">Durapay</span>
//       </a>

//       {/* Nav links */}
//       <div className="flex flex-col divide-y divide-[#edf0f5]">
//         {navLinks.map((link) => (
//           <Link
//             key={link.name}
//             href={link.href}
//             onClick={() => setIsOpen(false)}
//             className="font-semibold text-[#00246C] text-[16px] py-4 hover:text-[#1154da] transition-colors"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>

//       {/* Auth buttons */}
//       <div className="flex flex-col gap-3 mt-8">
//         <button className="w-full font-semibold text-[#00246C] border-2 border-[#1154da] rounded-2xl px-6 py-3 hover:bg-[#f0f4ff] transition-colors text-[17px]">
//           Log in
//         </button>
//         <button className="w-full rounded-2xl bg-[#1154da] px-6 py-4 font-semibold text-white text-[17px] transition hover:bg-[#023bac]">
//           Get Durapay
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-99999 transition-all duration-300 ${
//           scrolled ? "bg-white shadow-md" : "bg-transparent"
//         }`}
//       >
//         <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 py-2">
//           {/* Logo */}
//           <a href="/" className="flex items-center gap-1">
//             <img
//               src="/duralogo.png"
//               alt="Durapay logo"
//               className="w-10 object-contain hover:scale-105 transition duration-300"
//             />
//             <span className="font-bold text-[#00246C] text-[22px]">
//               Durapay
//             </span>
//           </a>

//           {/* Desktop nav links */}
//           {/* <div className="hidden md:flex items-center gap-8 font-semibold text-[#00246C]">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="hover:text-[#1154da] transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div> */}

//           <div className="hidden md:flex items-center gap-8  text-[14px] mt-3 hover:text-[14px] transition-all duration-200 font-semibold text-[#00246C]">
//             {navLinks.map((link) => (
//               <div key={link.name} className="relative group">
//                 <Link
//                   href={link.href}
//                   className="hover:text-[#1154da] transition-colors flex items-center gap-1"
//                 >
//                   {link.name}

//                   {link.children && (
//                     <svg
//                       className="w-4 h-4 transition-transform group-hover:rotate-180"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   )}
//                 </Link>

//                 {link.children && (
//                   <div
//                     className="
//             absolute left-1/2 top-full
//             -translate-x-1/2
//             pt-4
//             opacity-0 invisible
//             group-hover:opacity-100
//             group-hover:visible
//             transition-all duration-200
//             z-50
//           "
//                   >
//                     <div className="mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5">
//                       <div
//                         className={`grid gap-2  ${
//                           link.name === "Pricing"
//                             ? "grid-cols-1 w-[320px]"
//                             : "grid-cols-2 w-[520px]"
//                         }`}
//                       >
//                         {link.children.map((child) => (
//                           <Link
//                             key={child.name}
//                             href={child.href}
//                             className="
//                     rounded-xl
//                     p-3
//                     hover:bg-[#f5f8ff]
//                     transition
//                   "
//                           >
//                             <p className="font-semibold text-[#00246C]">
//                               {child.name}
//                             </p>

//                             {"description" in child && child.description && (
//                               <p className="text-sm text-gray-500 mt-1">
//                                 {child.description}
//                               </p>
//                             )}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Desktop buttons */}
//           <div className="hidden md:flex items-center gap-6">
//             <button className="font-semibold text-[#00246C] hover:text-[#1154da] transition-colors">
//               Sign in
//             </button>
//             <button className="rounded-2xl bg-[#1154da] px-8 py-3 font-semibold text-white transition hover:bg-[#023bac]">
//               Get Durapay
//             </button>
//           </div>

//           {/* Mobile hamburger */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-[#00246C]"
//             aria-label="Toggle Menu"
//           >
//             {isOpen ? <AiOutlineClose size={28} /> : <RiMenu5Line size={28} />}
//           </button>
//         </nav>
//       </header>

//       {/* Portal renders menu directly into document.body — escapes hero stacking context */}
//       {mounted && isOpen && createPortal(<MobileMenu />, document.body)}
//     </>
//   );
// };

"use client";

import { useEffect, useState, useRef } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { Download, Wallet } from "lucide-react";

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

  // ✅ Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Features",
      href: "#",
      children: [
        { name: "Wallet", href: "/wallet" },
        { name: "Receive", href: "/sendandreceive" },
        { name: "Transfers", href: "/transfer" },
        { name: "VTU", href: "/vtu" },
        { name: "Gift Cards", href: "/giftcard" },
        { name: "Savings", href: "/savings" },
        { name: "Virtual Cards", href: "/features/virtual-cards" },
        { name: "Physical Cards", href: "/features/physical-cards" },
        { name: "Rewards", href: "/features/rewards" },
        { name: "Cashback", href: "/features/cashback" },
      ],
    },
    {
      name: "Pricing",
      href: "#",
      children: [
        {
          name: "Personal",
          href: "/pricing/personal",
          description: "For individuals and freelancers",
        },
        {
          name: "Business",
          href: "/pricing/business",
          description: "For startups and companies",
        },
        {
          name: "Enterprise",
          href: "/pricing/enterprise",
          description: "Custom pricing for large organizations",
        },
        {
          name: "Transaction Fees",
          href: "/pricing/fees",
          description: "Transfer and conversion charges",
        },
      ],
    },
    { name: "Help Centre", href: "/help-centre" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const MobileMenu = () => (
    <div
      className="fixed inset-0 bg-white z-99999 flex flex-col pt-24 px-6 pb-10 overflow-y-auto"
      style={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-6 text-[#00246C]"
        aria-label="Close menu"
      >
        <AiOutlineClose size={28} />
      </button>

      <a href="/" className="flex items-center gap-1 mb-8 -mt-40">
        {/* <img
          src="/duralogo.png"
          alt="Durapay logo"
          className="w-10 object-contain"
        /> */}
        <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
          <Wallet className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-[#00246C] text-[22px]">Durapay</span>
      </a>

      <div className="flex flex-col divide-y divide-[#edf0f5]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-semibold text-[#00246C] text-[16px] py-4 hover:text-[#1154da] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <button className="w-full font-semibold text-[#00246C] border-2 border-[#1154da] rounded-2xl px-6 py-3 hover:bg-[#f0f4ff] transition-colors text-[17px]">
          Sign in
        </button>
        <button className="w-full rounded-2xl bg-[#1154da] px-6 py-4 font-semibold text-white text-[17px] transition hover:bg-[#023bac]">
          Get Durapay
        </button>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-99999 transition-all duration-300 ${
          scrolled ? "bg-gray-200 shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-10 py-2">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1">
            {/* <img
              src="/duralogo.png"
              alt="Durapay logo"
              className="w-10 object-contain hover:scale-105 transition duration-300"
            /> */}

            <div className="w-8 h-8 rounded-lg bg-[#1154da] flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-[#1154da] text-[22px]">
              Durapay
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] mt-3 font-semibold text-[#00246C]">
            {navLinks.map((link) =>
              link.children ? (
                // ✅ Links WITH dropdowns use state-controlled NavDropdown
                <NavDropdown key={link.name} link={link} pathname={pathname} />
              ) : (
                // ✅ Plain links — no dropdown needed
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#1154da] transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="font-semibold text-[#00246C] hover:text-[#1154da] cursor-pointer transition-colors text-[14px] -mb-2">
              Sign in
            </button>

            <div className="">
              <button className=" flex item-center gap-3 rounded-2xl bg-[#1154da] px-8 py-4  font-semibold text-white transition hover:bg-[#023bac] hover:cursor-pointer">
                <Download className="w-5 h-5" />
                Download Durapay
              </button>
            </div>
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

// ✅ Separate component so each dropdown manages its own open state
type Child = { name: string; href: string; description?: string };
type NavLink = { name: string; href: string; children: Child[] };

const NavDropdown = ({
  link,
  pathname,
}: {
  link: NavLink;
  pathname: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // ✅ Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // ✅ Close on outside click
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
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 hover:text-[#1154da] transition-colors"
      >
        {link.name}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
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

      {/* ✅ Controlled by state — not CSS hover */}
      {isOpen && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 z-50">
          <div className="mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5">
            <div
              className={`grid gap-2 ${
                link.name === "Pricing"
                  ? "grid-cols-1 w-[320px]"
                  : "grid-cols-2 w-[520px]"
              }`}
            >
              {link.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  onClick={() => setIsOpen(false)} // ✅ Close on item click
                  className="rounded-xl p-3 hover:bg-[#f5f8ff] transition"
                >
                  <p className="font-semibold text-[#00246C]">{child.name}</p>
                  {child.description && (
                    <p className="text-sm text-gray-500 mt-1">
                      {child.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
