"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const PopupBanner = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 1000)
        return () => clearTimeout(timer);
    }, [])
    if (!isOpen) return null;
    return (
      <>
        <div
          className="fixed inset-0 z-40 bg-black/70"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="fixed top-1/2 left-1/2 z-50 flex h-[536px] w-[872px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[8px] border bg-[#FFFFFF]">
          <div className="relative w-[519px] p-[60px]">
            <h2 className="mb-[16px] text-[48px]/[48px] font-bold uppercase">
              Here’s $10 Off Your First Order!
            </h2>
            <p className="mb-[48px] text-[16px]/[24px]">
              Join our newsletter and get a $10 discount code sent straight to
              your inbox. New customers only.
            </p>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-[8px]">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="btn-ui mb-[16px] h-[56px] w-[399px] p-[16px]"
              />
              <button
                type="button"
                className="h-[56px] w-[399px] rounded-[8px] bg-[#111111] text-[#FFFFFF]"
              >
                Send
              </button>
            </div>
          </div>
          <div>
            <div className="relative h-[535px] w-[352px] shrink">
              <Image
                src="/images/popupBanner/popupImg.png"
                className="rounded-r-[8px] object-cover"
                fill
                sizes="352"
                alt="Popup banner"
              />
              <button className="absolute top-[16px] right-[16px]" onClick={()=>setIsOpen(false)}>
                <X className="rounded-[50px] bg-[#FFFFFF]" strokeWidth={0.5} />
              </button>
            </div>
          </div>
        </div>
      </>
    );
};
