import Image from "next/image";
import React from "react";

const Plan = (props) => {
  const textColor = props.textColor.replace("text-[", "").replace("]", "");
  return (
    <div className="m-6 relative">
      <div
        className={`plan transition-all hover-style ${props.class} cursor-pointer flex flex-col items-center max-w-[310px] w-[310px] p-7 ${props.BG} ${props.textColor} rounded-xl`}
      >
        <h3 className="text-center text-3xl">{props.title}</h3>
        <p className="flex justify-between text-lg w-[100%]">
          <span className="mx-2">${props.previousPrice}</span>
          <span className="mx-2">{props.discount}% off</span>
        </p>
        <h1>
          {" "}
          <span className="text-6xl"> $30.00</span> <span>/logo</span>
        </h1>
        {props.slots && (
          <p className="text-end mt-3 w-[100%] me-4">
            Only {props.slots} slots left
          </p>
        )}
        <ul className="w-[100%]">
          <hr
            className={`h-[2px] my-2 ${
              textColor == "#112340" ? "bg-[#112340]" : "bg-[#fff]"
            } border-0 `}
          />
          {props.features.map((feature, key) => {
            return (
              <li className="flex my-2" key={key}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  className="me-3"
                >
                  <ellipse
                    cx="9.5"
                    cy="10"
                    rx="9.5"
                    ry="10"
                    fill={`${textColor}`}
                  />
                  <path
                    d="M5 9.66667L8.2 13L14.5 7"
                    stroke={`${
                      props.textColor == "text-[#fff]" ? "#112340" : "#fff"
                    }`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feature}
              </li>
            );
          })}
        </ul>
        {props.mostSelling && (
          <Image
            src="/images/most selling.png"
            className="absolute lg:left-[-250px] left-0 lg:bottom-0 bottom-[-100px] cursor-default"
            height={200}
            width={200}
            style={{height:"80px!important", width:"auto!important"}}
            alt="most Selling"
          />
        )}
      </div>
    </div>
  );
};

export default Plan;
