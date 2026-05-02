import Link from "next/link";
import { FooterDataType } from "./type";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const footerData: FooterDataType[] = [
  {
    id: "1",
    title: "Resources",
    body: [
      { id: "1", link: "Find a Store" },
      { id: "2", link: "Nike Journal" },
      { id: "3", link: "Become a Member" },
      { id: "4", link: "Feedback" },
      { id: "5", link: "Promo Codes" },
    ],
  },
  {
    id: "2",
    title: "Help",
    body: [
      { id: "1", link: "Get Help" },
      { id: "2", link: "Order Status" },
      { id: "3", link: "Shipping and Delivery" },
      { id: "4", link: "Returns" },
      { id: "5", link: "Payment Options" },
    ],
  },
  {
    id: "3",
    title: "Company",
    body: [
      { id: "1", link: "About Nike" },
      { id: "2", link: "News" },
      { id: "3", link: "Careers" },
      { id: "4", link: "Investors" },
      { id: "5", link: "Sustainability" },
    ],
  },
  {
    id: "4",
    title: "Menu",
    body: [
      { id: "1", link: "New & Featured" },
      { id: "2", link: "Men" },
      { id: "3", link: "Women" },
      { id: "4", link: "Kids" },
    ],
  },
];
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col px-[60px] pt-[60px]">
      <div className="hidden gap-[24px] md:flex md:flex-row md:justify-between">
        {footerData.map((el) => (
          <div key={el.id}>
            <h3 className="text-small-size mb-[16px]">{el.title}</h3>
            <div>
              {el.body.map((elLink) => (
                <Link
                  className="text-text-gray mb-[12px] flex flex-col text-[14px] last:mb-0"
                  href="#"
                  key={elLink.id}
                >
                  {elLink.link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mb-[48px] block md:hidden">
        <Accordion type="single" collapsible>
          {footerData.map((el) => (
            <AccordionItem value={el.id} key={el.id}>
              <AccordionTrigger variant="footer">{el.title}</AccordionTrigger>
              <AccordionContent key={el.id} className="text-text-gray">
                {el.body.map((elLink) => (
                  <div key={elLink.id} className="flex flex-col">
                    <Link href="#">{elLink.link}</Link>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="text-text-gray mb-[24px] flex flex-col gap-[12px] md:mt-[48px] md:flex-row md:gap-[32px]">
        <p>© {currentYear} Nike, Inc. All rights reserved</p>
        <Link href="#">Terms of Use</Link>
        <Link href="#">Privacy & Cookie Policy</Link>
      </div>
    </footer>
  );
};
