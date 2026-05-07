
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_DATA } from "./data";



export const FAQItem = () => {
  if (!FAQ_DATA || FAQ_DATA.length === 0) {
    return null;
  }
    return (
      <Accordion
        type="single"
        collapsible
        className="mx-auto w-full max-w-[872px]"
      >
        {FAQ_DATA.map((el) => (
          <AccordionItem
            value={`item-${el.id}`}
            key={el.id}
            className="bg-background mb-[8px] rounded-[8px] border border-[#EBEBEB] p-[24px] text-left last:mb-0"
          >
            <AccordionTrigger>{el.question}</AccordionTrigger>
            <AccordionContent className="text-text-gray text-justify">
              {el.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
};
