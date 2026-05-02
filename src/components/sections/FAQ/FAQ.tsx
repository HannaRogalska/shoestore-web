import { FAQItem } from "./FAQItem";

export const FAQ = () => {
  return (
    <section className="bg-brand-gray px-[16px] py-[60px] text-center md:py-[80px]">
      <div className="mb-[32px] md:mb-[48px]">
        <h2 className="text-title-size mb-[16px]">
          Frequently asked questions
        </h2>
        <p className="text-small-size text-text-gray">
          Answers to our most frequently asked questions are just one click
          away.
        </p>
      </div>
      <FAQItem />
    </section>
  );
};
