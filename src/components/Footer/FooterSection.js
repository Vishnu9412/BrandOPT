import Image from "next/image";
import React from "react";

const FooterSection = () => {
  return (
    <div className="footer-section flex justify-center items-center flex-col mt-[10em]">
      <hr className="mb-10 w-[86px] h-[2px] bg-white border-0 rounded" />
      <Image
        className="mb-10"
        src="/LOGO.svg"
        alt="logo"
        height={50}
        width={50}
      />
      <p className="max-w-lg text-center ">
        Exercitationem accusamus qui nemo sit rerum molestias suscipit
        voluptatem. Esse optio aspernatur voluptas unde commodi nihil.{" "}
      </p>
      <div className="social-media flex justify-between w-[20em] my-10">
        <div>
          <h1 className="font-extrabold text-xl ">FOLLOW US</h1>
          {/* <div className="flex justify-around">
            <div>Ista</div>
            <div>Twitter</div>
          </div> */}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-xl ">CONTACT US</h1>
          {/* <div>Email</div> */}
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
