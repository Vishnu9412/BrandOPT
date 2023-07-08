import React from "react";
import Testimonial from "./Testimonial";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="heading mt-[8em]">
        <h1 className="text-5xl text-center relative font-extrabold before:text-[#1C1C1C] before:text-9xl before:absolute before:left-0 before:z-[-1] before:top-[-0.6em]">
          TESTIMONIALS
        </h1>
      </div>
      <div>
        <div className="testimonials flex justify-around flex-wrap mt-[5em]">
          <Testimonial ratings="4" />
          <Testimonial ratings="4" />
          <Testimonial ratings="4" />
        </div>
        {/* <div className="controller flex items-center justify-center mt-[6em]">
          <Image
          className="mx-3 hover:scale-[1.2] cursor-pointer transition-all"
            src="/images/left arrow.svg"
            alt="left"
            height={60}
            width={60}
          />
          <Image
            src="/images/circle-blue-bg.png"
            alt="left"
            height={30}
            width={30}
          />
          <Image
          className="mx-3 hover:scale-[1.2] cursor-pointer transition-all"
            src="/images/right arrow.svg"
            alt="left"
            height={60}
            width={60}
          />
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialSection;
