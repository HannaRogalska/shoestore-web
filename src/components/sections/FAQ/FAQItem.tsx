import { FAQItemType } from "./type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData: FAQItemType[] = [
  {
    id: "1",
    question: "What are Nike's delivery options?",
    answer:
      "Nike offers several delivery options including free standard shipping for members (on orders $50+), expedited shipping ($5-$15), and express shipping ($15-$25). Options include home delivery, pickup points, and free same-day in-store pickup for eligible items.",
  },
  {
    id: "2",
    question: "What is Nike's returns policy?",
    answer:
      "When you shop Nike online, either in the Nike App or on Nike.com, you can return items that are unworn and unwashed and still have their product tags attached within 30 days of purchase (some exceptions apply). That includes custom Nike By You sneakers",
  },
  {
    id: "3",
    question: "Where is my Nike order?",
    answer:
      "Track your Nike order by logging into your Nike Member profile and checking orders or using the guest tracking page with your order number and email.",
  },
  {
    id: "4",
    question: "How do I find the right size and fit?",
    answer:
      "To find the right Nike size and fit, measure your feet in centimeters while wearing socks, then compare these measurements against the official Nike Size Charts.",
  },
];

export const FAQItem = () => {
    return (
      <Accordion
        type="single"
        collapsible
        className="mx-auto w-full max-w-[872px]"
      >
        {faqData.map((el) => (
          <AccordionItem
            value={`item-${el.id}`}
            key={el.id}
            className="bg-background mb-[8px] rounded-[8px] border border-[#EBEBEB] p-[24px] text-left last:mb-0"
          >
            <AccordionTrigger>{el.question}</AccordionTrigger>
            <AccordionContent className="text-text-gray">
              {el.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
};
