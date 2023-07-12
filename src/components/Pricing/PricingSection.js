import React from "react";
import TextSlider from "../TextSlider/TextSlider";
import { PricingSelector } from "./PricingSelector";
import { Varela } from "next/font/google";
const verala = Varela({ subsets: ["latin"], weight: ["400"] });
import Plan from "./Plan";


const Pricing = () => {
  // function getNestedDivs(count) {
  //   if (count <= 0) {
  //     return null;
  //   }
  
  //   return (
  //     <div id={`p-${count}`} className="div" key={count}>
  //       {getNestedDivs(count - 1)}
  //     </div>
  //   );
  // }
  
  // function getGrid() {
  //   return (
  //     <div id="p-10" className="grid-div" key={10}>
  //       {getNestedDivs(10)}
  //     </div>
  //   );
  // }
  

  return (
    <div className="pricing-section relative py-[16em]">
      <TextSlider rotate="rotate-[-1deg]" position="top-0 left-0" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold 2xl:text-5xl 2xl:mb-10 sm:text-4xl text-4xl mb-5">
          Our{" "}
          <span className="text-black relative font-extrabold px-1 before:w-[100%] z-10 before:h-[100%] before:z-[-1] before:bg-white before:absolute before:bottom-0 before:rounded before:left-0 hover:before:w-0 hover:text-white before:transition-all transition-all cursor-pointer">
            Pricing
          </span>
        </h1>
        {/* <PricingSelector /> */}
        <div className={`plans ${verala.className} flex flex-wrap justify-center mt-7`}>
          <Plan
            BG="bg-[#fff]"
            textColor="text-[#112340]"
            border="before:border-[#112340]"
            title="STARTER"
            previousPrice="60.00"
            discount="50"
            slots="10"
            class="shadow-[8px_8px_0px_black,10px_10px_0px_#fff] hover:shadow-none relative hover:top-1 hover:left-1 "
            features={[
              "2 Concept Art",
              "2 Revisions",
              "Printable file",
              "Vector file",
            ]}
          />
          <Plan
            BG="bg-[#000]"
            border="before:border-[#fff]"
            textColor="text-[#fff]"
            title="PLATINUM"  
            previousPrice="160.00"
            discount="50"
            slots="9"
            mostSelling="true"
            class="border-2 border-white shadow-[8px_8px_0px_white] hover:shadow-none relative hover:top-1 hover:left-1"
            features={[
              "Logo transparency",
              "Vector file",
              "Printable file",
              "Include 3D mockup",
              "Include source file",
              "4 Concept Art",
              "4 Revisions",
            ]}
          />
          <Plan
            BG="bg-[#fff]"
            border="before:border-[#fff]"
            textColor="text-[#000]"
            title="PLATINUM"  
            previousPrice="160.00"
            discount="50"
            slots="9"
            class="shadow-[8px_8px_0px_black,10px_10px_0px_#fff] hover:shadow-none relative hover:top-1 hover:left-1"
            features={[
              "Logo transparency",
              "Vector file",
              "Printable file",
              "Include 3D mockup",
              "Include source file",
              "4 Concept Art",
              "4 Revisions",
            ]}
          />
        </div>
      </div>
      {/* <div className="group z-[-10]">{getGrid()}</div> */}
      <TextSlider rotate="rotate-[-1deg]" position="bottom-[20px] left-0" />
    </div>
  );
};

export default Pricing;
