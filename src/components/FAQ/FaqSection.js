import React, { useEffect } from "react";
import FaqBubble from "./FaqBubble";
import { motion } from "framer-motion";
import $ from 'jquery'
import useWindowSize from "@/utils/useWindowSize";

const FaqSection = () => {
  // const { width } = useWindowSize();
  // const scalingFactor = 0.5; // Adjust this factor as needed

  // useEffect(() => {
  //   const scalingDiv = document.getElementById('scaling-div');
  //   if (scalingDiv) {
  //     const scaledWidth = width * scalingFactor;
  //     scalingDiv.style.width = `${scaledWidth}px`;
  //   }
  // }, [width]);
  
  return (
    <div className="faq-section">
      <div className="heading mt-[12em]">
        <h1 className="text-5xl text-center relative font-extrabold before:text-[#1C1C1C] before:text-8xl before:absolute before:left-0 before:z-[-1] before:top-[-0.7em]">
          FAQs
        </h1>
      </div>
      <div
        id="FaqBubbles scaling-div"
        className="flex flex-wrap justify-around mt-12 px-12"
      >
        <FaqBubble
          classes={`h-[21em] w-[21em] top-[20%] relative p-12 border-[#00FF9E] hover:bg-[#00FF9E] hover:text-[#000101]`}
          question="ARE YOUR DESIGNERS ABLE TO WORK IN MULTIPLE LANGUAGES?"
          id="1"
          color="#00FF9E"
        />
        <FaqBubble
          classes={`h-[12em] w-[12em] top-[10%] relative p-12 border-[#08F] hover:bg-[#08F] hover:text-[#fff]`}
          question="WHAT'S THE ORDERING PROCEDURE?"
          id="2"
          color="#08F"
        />
        <FaqBubble
          classes={`h-[18em] w-[18em] top-[50%] relative p-12 border-[#FF1E00] hover:bg-[#FF1E00] hover:text-[#000101]`}
          question="WHY WERE ASTERISKS USED IN THE TEXT?"
          id="3"
          color="#FF1E00"
        />
        <FaqBubble
          classes={`h-[11em] w-[11em] text-sm top-[0%] relative p-3 border-[#FFC700] hover:bg-[#FFC700] hover:text-[#000101]`}
          question="WHAT’S YOUR REFUND POLICY?"
          id="4"
          color="#FFC700"
        />
        <FaqBubble
          classes={`h-[20em] w-[20em] top-[40%] relative p-12 border-[#BD00FF] hover:bg-[#BD00FF] hover:text-[#fff]`}
          question="WHAT HAPPENS TO UNUSED THUMBNAILS WHEN MY SUBSCRIPTION RENEWS?"
          id="5"
          color="#BD00FF"
        />
      </div>
    </div>
  );
};

export default FaqSection;
