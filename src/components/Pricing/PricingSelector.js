import React, { useState } from "react";
import $ from "jquery";

export const PricingSelector = () => {
  const [pricingPosition, setPricingPosition] = useState("left-0");
  function setPricing(value, title) {
    setPricingPosition(value);
    $(".pricing-selector span").html(title);
  }
  return (
    <div>
      <ul className="pricing-selector flex border-2 sm:w-fit w-[95vw] justify-between sm:mx-0 py-1 rounded-xl relative pricing-selector">
        <li
          className="px-10 py-3 mx-1 cursor-pointer rounded-lg z-10 text-center"
          style={{ userSelect: "none" }}
          onClick={() => {
            setPricing("left-0", "Logo Designing");
            $(".pricing-selector li:nth-child(1)").removeClass("text-white").addClass("text-black")
            $(".pricing-selector li:nth-child(2)").removeClass("text-black").addClass("text-white")

          }}
        >
          Logo&nbsp;Designing
        </li>
        <li
          className="px-10 py-3 mx-1 cursor-pointer rounded-lg z-10 text-center"
          style={{ userSelect: "none" }}
          onClick={() => {
            setPricing("left-[50%]", "Banner Designing");
            $(".pricing-selector li:nth-child(1)").removeClass("text-black").addClass("text-white")
            $(".pricing-selector li:nth-child(2)").removeClass("text-white").addClass("text-black")
          }}
        >
          Banner&nbsp;Designing
        </li>
        <span
          style={{ userSelect: "none" }}
          className={`bg-[#fff] absolute h-[87%] text-[transparent] z-1 px-10 py-3 mx-1 cursor-pointer rounded-lg transition-all user-select-none ${pricingPosition}`}
        >
          Logo&nbsp;Designing
        </span>
      </ul>
    </div>
  );
};
