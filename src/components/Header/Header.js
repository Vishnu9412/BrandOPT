import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  function getNestedDivs(count) {
    if (count <= 0) {
      return null;
    }

    return (
      <div id={`p-${count}`} className="div" key={count}>
        {getNestedDivs(count - 1)}
      </div>
    );
  }

  function getGrid() {
    return (
      <div id="p-5" className="grid-div" key={10}>
        {getNestedDivs(5)}
      </div>
    );
  }

  return (
    <div
      className={`flex xl:justify-between header lg:justify-start justify-center flex-wrap xl:flex-nowrap h-[100vh] xl:mt-0 lg:mt-[15em] sm:mt-[5em] items-center content-center xl:px-[10em] lg:px-[5em] px-[3em] xl:mb-0 lg:mb-5 mb-0`}
    >
      <div className="2xl:max-w-xl max-w-lg flex flex-col justify-center items-start lg:mb-0 mb-[5em]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exist={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <h3 className={` text-[#828282] mb-2`}>
            Your Brand{" "}
            <span className="text-white text-2xl font-bold">Made Visible</span>
          </h3>
        </motion.div>
        <h1 className="font-bold 2xl:text-5xl 2xl:mb-10 sm:text-4xl text-2xl mb-5">
          Introducing{" "}
          <span className="text-black before:rounded relative font-extrabold px-1 before:w-[100%] before:h-[100%] before:z-[-1] z-10 before:bg-white before:absolute before:bottom-0 before:left-0 hover:before:w-0 hover:text-white before:transition-all transition-all cursor-pointer">
            LG Design
          </span>
        </h1>
        <p className="2xl:text-xl sm:text-lg  text-sm 2xl:mb-10 mb-5">
          LG Design: Expert graphic design company creating memorable logos,
          banners, and business cards. We utilize the latest trends to craft
          visually appealing branding materials. Contact us for standout
          branding that captivates your target audience.
        </p>
        <a
          className="shadow-[3px_3px_0px_#fff] border-2 hover:shadow-none hover:top-[1px] hover:left-[1px] bg-[#000] px-[5em] py-[1em] text-xs rounded-lg relative transition-all 2xl:text-lg"
          href="#"
        >
          Join Discord
        </a>
      </div>
      <div>
        <Image
          src="/images/hero section image.svg"
          className="lg:h-[800px] w-full lg:w-[800px] h-full"
          alt="img"
          height={800}
          width={800}
          priority={true}
        />
      </div>
      <div className="group z-[-10]">{getGrid()}</div>
    </div>
  );
};

export default Header;
