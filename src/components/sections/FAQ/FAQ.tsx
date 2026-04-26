import { FAQItem } from "./FAQItem";

export const FAQ = () => {
  return (
    <section className="bg-brand-gray md:py-[80px] py-[60px] px-[16px] text-center">
      <div className="md:mb-[48px] mb-[32px]">
        <h2 className="text-title-size mb-[16px]">
          Frequently asked questions
        </h2>
        <p className="text-small-size text-[#737373]">
          Answers to our most frequently asked questions are just one click
          away.
        </p>
      </div>
      <FAQItem />
    </section>
  );
};
