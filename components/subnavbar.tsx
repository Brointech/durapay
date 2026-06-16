"use client";

import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";

type Tab = "individuals" | "businesses";

interface SubNavProps {
  onTabChange?: (tab: Tab) => void;
}

export default function SubNav({ onTabChange }: SubNavProps) {
  const [activeTab, setActiveTab] = useState<Tab>("individuals");
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = ["EN", "FR", "ES", "HA", "YO", "IG"];

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="w-full bg-[#EEF2FF] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Tabs */}
          <div className="flex items-center h-full gap-1 sm:gap-2">
            {(
              [
                { key: "individuals", label: "For Individuals" },
                { key: "businesses", label: "For Businesses" },
              ] as { key: Tab; label: string }[]
            ).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`relative h-full px-3 sm:px-4 text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap
                  ${
                    activeTab === key
                      ? "text-[#1154da]"
                      : "text-gray-500 hover:text-gray-700"
                  }
                `}
              >
                {label}
                {/* Active underline */}
                {activeTab === key && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1154da] rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-600 hover:text-[#1154da] transition-colors duration-150 px-2 py-1 rounded"
            >
              <TbWorld className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden xs:inline sm:inline">{selectedLang}</span>
              <MdKeyboardArrowDown
                className={`w-4 h-4 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown */}
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[80px] py-1">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-1.5 text-xs sm:text-sm transition-colors duration-100
                      ${
                        selectedLang === lang
                          ? "text-[#1154da] bg-blue-50 font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
