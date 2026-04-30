import { NeedHelpForm } from "./NeedHelpForm";

export const NeedHelp = () => {
  return (
    <section className="bg-brand-gray flex flex-col items-center p-[60px] md:p-[80px]">
      <h2 className="text-title-size">Need help?</h2>
      <NeedHelpForm />
    </section>
  );
};
