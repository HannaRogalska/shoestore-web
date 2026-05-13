import { NeedHelpForm } from "./NeedHelpForm";

export const NeedHelp = () => {
  return (
    <section className="bg-brand-gray flex flex-col items-center px-4 py-15 md:px-15">
      <h2 className="mb-8 text-3xl md:mb-12">Need help?</h2>
      <NeedHelpForm />
    </section>
  );
};
