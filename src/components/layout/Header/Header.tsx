"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "./data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  if (!NAV_LINKS || NAV_LINKS.length === 0) {
    return null;
  }
  return (
    <header className="relative flex h-[84px] items-center justify-between">
      <img src="./icon.png" className="hidden h-6 w-6 sm:block" alt="Logo" />
      <button className="z-50 sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <img
            src="/images/header/menu-burger.svg"
            className="h-6 w-6"
            alt="Burger menu"
          />
        )}
      </button>
      <nav className="hidden justify-between gap-8 text-base font-normal sm:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-gray-500"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Link href="#" className="hover:text-gray-500">
        <img src="/images/header/bin.png" className="h-6 w-6" alt="Bin" />
      </Link>
      {isOpen && (
        <nav className="absolute top-full left-0 z-40 flex w-full flex-col items-center gap-6 bg-white py-8 shadow-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg hover:text-gray-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
