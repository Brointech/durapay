"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Currency } from "@/.next/types/currency";

interface CurrencyDropdownProps {
  currencies: Currency[];
  selected: Currency;
  onSelect: (currency: Currency) => void;
  label: string;
}

export default function CurrencyDropdown({
  currencies,
  selected,
  onSelect,
  label,
}: CurrencyDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold text-[#00246C] shadow-sm ring-1 ring-black/5 transition hover:ring-[#1154da]/30 sm:gap-2 sm:px-3 sm:py-2"
      >
        <span className="text-base leading-none sm:text-lg">
          {selected.flag}
        </span>
        <span>{selected.code}</span>
        <FiChevronDown
          className={`h-3.5 w-3.5 text-[#00246C]/60 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-30 mt-2 max-h-64 w-52 overflow-y-auto rounded-2xl bg-white p-1.5 shadow-xl ring-1 ring-black/5 sm:w-56"
        >
          {currencies.map((currency) => (
            <li key={currency.code}>
              <button
                type="button"
                role="option"
                aria-selected={currency.code === selected.code}
                onClick={() => {
                  onSelect(currency);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition hover:bg-[#1154da]/5 ${
                  currency.code === selected.code
                    ? "bg-[#1154da]/8 font-semibold text-[#1154da]"
                    : "text-[#00246C]"
                }`}
              >
                <span className="text-base leading-none">{currency.flag}</span>
                <span className="font-medium">{currency.code}</span>
                <span className="truncate text-xs text-[#00246C]/50">
                  {currency.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
