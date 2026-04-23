"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between h-21 items-center">
      <img src="./icon.png" className="w-6 h-6" />
      <div className="flex justify-between gap-8 text-base font-normal">
        <Link href="#"></Link>
        <Link href="#" className=" hover:text-gray-500">
          New & Featured
        </Link>
        <Link href="#" className=" hover:text-gray-500">
          Men
        </Link>
        <Link href="#" className=" hover:text-gray-500">
          Women
        </Link>
        <Link href="#" className=" hover:text-gray-500">
          Kids
        </Link>
      </div>
      <Link href="#" className=" hover:text-gray-500">
        <img src="/images/header/bin.png" className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default Header;
