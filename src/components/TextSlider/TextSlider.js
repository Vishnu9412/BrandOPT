/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import React from "react";
const BrandOPT_Text = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
const TextSlider = ({rotate,position}) => {
  return (
    <div className={`text-slider bg-[#FDCE02] text-black w-[100vw] absolute py-2 ${position} ${rotate}`}>
      <div className="marquee overflow-hidden">
        <div className="marquee-inner">
          {BrandOPT_Text.map((item,index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <h1 className="font-extrabold text-2xl flex items-center mx-7" key={index}>
                <Image
                  src="/LOGO.svg"
                  alt="logo"
                  height={25}
                  width={25}
                  className="mx-3"
                />
                Brand&nbsp;OPT
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
