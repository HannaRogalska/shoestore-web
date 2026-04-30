import { NeedHelpForm } from "./NeedHelpForm";


export const  NeedHelp = () => {
  return (
    <section className="bg-brand-gray flex flex-col items-center">
      <h2 className="text-title-size">Need help?</h2>
      <NeedHelpForm />
    </section>
  );
}

