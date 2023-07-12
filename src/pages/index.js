import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Pricing from "@/components/Pricing/PricingSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import FaqSection from "@/components/FAQ/FaqSection";
import Head from "next/head";
import FooterSection from "@/components/Footer/FooterSection";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";
import { useState } from "react";

export default function Home() {
  const [openNote, setOpenNote] = useState(true);
  function handleNoteClick() {
    setOpenNote(false)
  }
  return (
    <main>
      <Head>
        <title>LG -design</title>
        <meta
          property="og:title"
          content="LG -design"
          key="title"
        />
      </Head>
      {openNote && (
        <div className="fixed z-20 bottom-0 flex justify-between text-blue-200 shadow-inner rounded p-3 bg-blue-600">
          <p className="self-center">
            <strong>Note: </strong> It is not functional Website. Just a prototype.
          </p>
          <strong
            className="text-xl align-center cursor-pointer alert-del mx-5"
            onClick={handleNoteClick}
          >
            &times;
          </strong>
        </div>
      )}
      <Navbar />
      <Header />
      <Pricing />
      <TestimonialSection />
      {/* <FaqSection/> */}
      <FAQAccordion />
      <FooterSection />
    </main>
  );
}
