import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Pricing from "@/components/Pricing/PricingSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import FaqSection from "@/components/FAQ/FaqSection";
import Head from 'next/head'
import FooterSection from "@/components/Footer/FooterSection";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";

export default function Home() {
  return(
    <main>
      <Head>
        <title>BrandOPT - Your Brand, Made Visible</title>
        <meta property="og:title" content="BrandOPT - Your Brand, Made Visible" key="title" />
      </Head>
      <Navbar/>
      <Header/>
      <Pricing/>
      <TestimonialSection/>
      {/* <FaqSection/> */}
      <FAQAccordion/>
      <FooterSection/>
    </main>
  )
}
