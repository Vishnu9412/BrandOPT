import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className={`flex xl:justify-between lg:justify-start justify-center flex-wrap xl:flex-nowrap h-[100vh] xl:mt-0 lg:mt-[15em] sm:mt-[5em] items-center content-center xl:px-[10em] lg:px-[5em] px-[3em] xl:mb-0 lg:mb-5 mb-0`}
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
          <span className="text-black relative font-extrabold px-1 before:w-[100%] before:h-[100%] before:z-[-1] before:bg-white before:absolute before:top-0 before:left-0 hover:before:w-0 hover:text-white before:transition-all transition-all cursor-pointer">
            BrandOPT
          </span>
        </h1>
        <p className="2xl:text-xl sm:text-lg  text-sm 2xl:mb-10 mb-5">
          BrandOPT: Expert graphic design company creating memorable logos,
          banners, and business cards. We utilize the latest trends to craft
          visually appealing branding materials. Contact us for standout
          branding that captivates your target audience.
        </p>
        <a className="primary-btn 2xl:text-lg" href="#">
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
      {/* <div className="absolute top-[80vh] right-[50vw]">
        <svg
          width="161"
          height="72"
          viewBox="0 0 161 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.599181"
            y1="71.0838"
            x2="160.599"
            y2="1.08385"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="81" cy="35" r="26" fill="#007ECA" />
        </svg>
      </div> */}
    </div>
  );
};

export default Header;
