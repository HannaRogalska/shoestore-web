import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FOOTER_DATA } from "./data";


export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col px-[60px] pt-[60px]">
      <div className="hidden gap-[24px] md:flex md:flex-row md:justify-between">
        {FOOTER_DATA.map((el) => (
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
          {FOOTER_DATA.map((el) => (
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
