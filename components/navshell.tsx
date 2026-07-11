"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Subnavbar from "@/components/subnavbar";
import { Nnavbar } from "@/components/nnavbar";

// export const NavShell = () => {
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   return (
//     <div className={isHome ? "sticky top-0 z-50" : "relative"}>
//       <Subnavbar />
//       <Nnavbar />
//     </div>
//   );
// };

export const NavShell = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wrapperClass = isHome
    ? scrolled
      ? "fixed top-0 left-0 right-0 z-50"
      : "absolute top-0 left-0 right-0 z-50"
    : "sticky top-0 z-50";

  return (
    <div className={wrapperClass}>
      <Subnavbar />
      <Nnavbar />
    </div>
  );
};
