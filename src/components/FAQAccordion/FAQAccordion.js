import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="faq-section mx-[]">
      <div className="heading mt-[12em]">
        <h1 className="text-5xl text-center relative font-extrabold before:text-[#1C1C1C] before:text-8xl before:absolute before:left-0 before:z-[-1] before:top-[-0.7em]">
          FAQs
        </h1>
      </div>
      <div className=" flex items-center flex-col">
        <Fragment>
          <Accordion className="accordion mt-12" open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              How can you contact ME ?
            </AccordionHeader>
            <AccordionBody className="body">
              Customers can easily contact me by sending a direct message (DM)
              on{" "}
              <a
                href="https://twitter.com/CodeVishnu"
                className="font-bold text-blue-400"
              >
                Twitter
              </a>{" "}
              or by emailing me at vishnugoswami6000@gmail.com
            </AccordionBody>
          </Accordion>
          <Accordion className="accordion" open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              How long does it take to build a website?
            </AccordionHeader>
            <AccordionBody className="body">
              The timeline for building a website depends on various factors
              such as the complexity of the project, design requirements, and
              functionality needed. After discussing your specific needs, I will
              provide you with a project timeline to give you an estimate of the
              development duration.
            </AccordionBody>
          </Accordion>
          <Accordion className="accordion" open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Can you provide ongoing website maintenance and support?
            </AccordionHeader>
            <AccordionBody className="body">
              Absolutely! I offer comprehensive website maintenance and support
              services to ensure your website remains secure, up-to-date, and
              functioning optimally. From regular updates to security monitoring
              and troubleshooting, I provide ongoing assistance to help you
              focus on your core business while keeping your website in top
              shape.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  );
}
