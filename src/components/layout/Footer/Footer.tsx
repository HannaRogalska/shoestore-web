import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FOOTER_DATA } from "./data";
import { Container } from "../../Container";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  if (!FOOTER_DATA || FOOTER_DATA.length === 0) {
    return null;
  }
  return (
    <footer>
      <Container>
        <div className="flex w-full flex-col px-4 pt-15 md:px-0">
          <div className="hidden gap-6 md:flex md:flex-row md:justify-between">
            {FOOTER_DATA.map((el) => (
              <div key={el.id}>
                <h3 className="mb-4">{el.title}</h3>
                <div>
                  {el.body.map((elLink) => (
                    <Link
                      className="text-text-gray mb-3 flex flex-col text-sm last:mb-0"
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
          <div className="mb-12 block w-full md:hidden">
            <Accordion type="single" className="w-full" collapsible>
              {FOOTER_DATA.map((el) => (
                <AccordionItem value={el.id} key={el.id}>
                  <AccordionTrigger variant="footer">
                    {el.title}
                  </AccordionTrigger>
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
        </div>
      </Container>
    </footer>
  );
};
