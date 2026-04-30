"use client";
import React from "react";

import { useState } from "react";
export const NeedHelpForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error("Access Key is missing!");
      return;
    }
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey as string);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Success!");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="ite flex flex-col items-center gap-[24px]"
    >
      <div>
        <div className="mb-[8px] flex flex-col items-center gap-[8px] md:flex-row md:gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="btn-ui h-[56px] w-[343px] bg-[#FFFFFF] p-[16px] md:w-[424px]"
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="number">Enter Number</label>
            <input
              type="number"
              id="number"
              name="number"
              required
              className="btn-ui h-[56px] w-[343px] bg-[#FFFFFF] p-[16px] md:w-[424px]"
              placeholder="Enter name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="btn-ui w-[343px] bg-[#FFFFFF] p-[16px] md:w-[424px]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="btn-ui h-[152px] resize-none bg-[#FFFFFF] p-[16px]"
            placeholder="Enter Message"
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="btn-ui h-[56px] w-[121px] bg-[#111111] text-[#FFFFFF]"
      >
        Submit
      </button>
      <p>{result}</p>
    </form>
  );
};
