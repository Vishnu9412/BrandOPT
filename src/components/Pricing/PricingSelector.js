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
      <ul className="flex border-2 w-fit sm:mx-0 py-1 rounded-xl relative pricing-selector">
        <li
          className="px-10 py-3 mx-1 cursor-pointer rounded-lg z-10"
          style={{ userSelect: "none" }}
          onClick={() => {
            setPricing("left-0", "Logo Designing");
          }}
        >
          Logo&nbsp;Designing
        </li>
        <li
          className="px-10 py-3 mx-1 cursor-pointer rounded-lg z-10"
          style={{ userSelect: "none" }}
          onClick={() => {
            setPricing("left-[197px]", "Banner Designing");
          }}
        >
          Banner&nbsp;Designing
        </li>
        <span
          style={{ userSelect: "none" }}
          className={`bg-[#007ECA] absolute h-[87%] text-[transparent] z-1 px-10 py-3 mx-1 cursor-pointer rounded-lg transition-all user-select-none ${pricingPosition}`}
        >
          Logo&nbsp;Designing
        </span>
      </ul>
    </div>
  );
};
