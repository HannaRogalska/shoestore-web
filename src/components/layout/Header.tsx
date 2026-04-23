"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "New & Featured", href: "#" },
    { name: "Men", href: "#" },
    { name: "Women", href: "#" },
    { name: "Kids", href: "#" },
  ];
  return (
    <div className="flex justify-between h-21 items-center relative">
      <img src="./icon.png" className="hidden sm:block w-6 h-6" alt="Logo" />
      <button className="sm:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <img
            src="/images/header/menu-burger.svg"
            className="w-6 h-6"
            alt="Burger menu"
          />
        )}
      </button>
      <div className="sm:flex justify-between gap-8 text-base font-normal hidden">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-gray-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Link href="#" className=" hover:text-gray-500">
        <img src="/images/header/bin.png" className="w-6 h-6" />
      </Link>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl z-40 flex flex-col items-center gap-6 py-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg hover:text-gray-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
