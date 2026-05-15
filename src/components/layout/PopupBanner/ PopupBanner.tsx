"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const PopupBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/70"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="fixed top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-134 md:w-218">
        <div className="relative w-[359px] rounded-[8px] bg-white px-6 py-15 md:w-[519px] md:rounded-r-none md:p-15">
          <h2 className="mb-4 text-3xl font-bold uppercase md:text-5xl">
            Here’s $10 Off Your First Order!
          </h2>
          <p className="mb-12">
            Join our newsletter and get a $10 discount code sent straight to
            your inbox. New customers only.
          </p>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="border-stroke mb-4 h-14 w-[311px] rounded-[8px] border p-4 md:w-[399px]"
            />
            <button
              type="button"
              className="bg-foreground hover:bg-text-gray h-14 w-[311px] cursor-pointer rounded-[8px] text-white md:w-[399px]"
            >
              Send
            </button>
            <button
              className="absolute top-4 right-4 md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X
                className="border-stroke rounded-[50px] border bg-white"
                strokeWidth={0.5}
              />
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative h-[535px] w-88 shrink">
            <Image
              src="/images/popupBanner/nike-just-do-it.jpg"
              className="rounded-r-[8px] object-cover"
              fill
              sizes="352"
              alt="Popup banner"
            />
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="rounded-[50px] bg-white" strokeWidth={0.5} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
