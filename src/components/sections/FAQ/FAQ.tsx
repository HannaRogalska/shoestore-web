import { FAQItem } from "./FAQItem";

export const FAQ = () => {
  return (
    <section className="bg-brand-gray px-4 py-15 text-center md:py-20">
      <div className="mb-8 md:mb-12">
        <h2 className="mb-4 text-2xl md:text-3xl">
          Frequently asked questions
        </h2>
        <p className="text-text-gray">
          Answers to our most frequently asked questions are just one click
          away.
        </p>
      </div>
      <FAQItem />
    </section>
  );
};
