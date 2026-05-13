"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "./data";
import { Container } from "../../Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!NAV_LINKS || NAV_LINKS.length === 0) {
    return null;
  }
  return (
    <header>
      <Container>
        <div className="relative flex h-21 items-center justify-between px-4 md:px-0">
          <img
            src="./icon.png"
            className="hidden h-6 w-6 sm:block"
            alt="Logo"
          />
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
          <nav className="hidden justify-between gap-8 font-normal sm:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="cursor-pointer hover:text-gray-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link href="#" className="cursor-pointer hover:text-gray-500">
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
