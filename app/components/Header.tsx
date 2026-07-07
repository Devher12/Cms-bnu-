"use client";

import Image from "next/image";
import { useMemo } from "react";
import { formatOrdinalDatePKT } from "../lib/formatDate";
import BnuLogo from "./BnuLogo";
import { BellIcon, ChevronDownIcon, CollapseIcon, DotsMenuIcon, MenuIcon } from "./icons";

type HeaderProps = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  const formattedDate = useMemo(() => formatOrdinalDatePKT(), []);

  return (
    <header className="bg-[#e8eef0] px-4 py-4 sm:px-6 sm:py-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="mt-1 rounded p-1 text-[#1a237e] hover:bg-[#dde5e8] lg:hidden"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>

          <div className="hidden shrink-0 pt-0.5 lg:block">
            <BnuLogo size="sm" />
          </div>

          <div className="flex items-center gap-3 pt-1 lg:hidden">
            <BnuLogo size="sm" />
            <button
              type="button"
              aria-label="Toggle sidebar"
              className="text-[#1a237e]"
            >
              <CollapseIcon />
            </button>
            <button type="button" aria-label="Menu" className="text-[#1a237e]">
              <DotsMenuIcon />
            </button>
          </div>
        </div>

        <div className="min-w-0 flex-1 text-right sm:text-right">
          <h1 className="text-base font-bold leading-tight text-[#0d1b3e] sm:text-xl lg:text-2xl">
            Welcome Back to Student Portal,
          </h1>
          <p className="mt-1 text-xs text-[#757575] sm:text-sm">{formattedDate}</p>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1a6157] shadow-sm sm:h-10 sm:w-10"
          >
            <BellIcon />
          </button>

          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#1565c0] sm:h-10 sm:w-10">
              <Image
                src="/profile-photo.png"
                alt="Muhammad Moeed Ikram"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden min-w-0 sm:block">
              <button
                type="button"
                className="flex max-w-[180px] items-center gap-1 text-left text-sm font-medium text-gray-800"
              >
                <span className="truncate lowercase">muhammad moeed ikram</span>
                <ChevronDownIcon className="shrink-0 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
