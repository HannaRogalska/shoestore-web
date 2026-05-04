import { NeedHelpForm } from "./NeedHelpForm";

export const NeedHelp = () => {
  return (
    <section className="bg-brand-gray flex flex-col items-center px-[16px] py-[60px] md:p-[80px]">
      <h2 className="text-title-size mb-[32px] md:mb-[48px]">Need help?</h2>
      <NeedHelpForm />
    </section>
  );
};
