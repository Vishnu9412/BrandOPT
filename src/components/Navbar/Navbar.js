import { Work_Sans } from "next/font/google";
const work_Sans = Work_Sans({ weight: ["400"], subsets: ["latin"] });
import variables from "@/variables.module.scss";
import Image from "next/image";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import $ from "jquery"
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if(clientWindowHeight > 10){
      $('.nav-divider').css({width:"200vw",left:"calc(-70vw - 86px)"})
      $('.navbar').addClass('bg-black').removeClass('bg-transparent');
    }else{
      $('.nav-divider').css({width:"86px",left:"-14px"})
      $('.navbar').addClass('bg-transparent').removeClass('bg-black');

    }
  }, [clientWindowHeight]);



  return (
    variables.primaryColor && (
      <div
        className={`navbar ${work_Sans.className} transition-all py-[20px] flex justify-between items-center top-0 left-0 fixed w-[100vw] xl:px-[10em] px-[3em] bg-transparent  z-30 shadow-lg`}
      >
        <ul className="w-[7em]  text-md font-bold">
          <li className="me-5">
            <a href="#"> Pricing</a>
          </li>
          <li className="mx-5">
            <a href="">Testimonial</a>
          </li>
          <li className="mx-5">
            <a href="">About&nbsp;Us</a>
          </li>
        </ul>
        <div className="relative">
          <Image src="/LOGO.svg" alt="logo" height={60} width={60} />
          <hr className="nav-divider absolute bottom-[-20px] transition-all left-[-14px] w-[86px] h-[2px] bg-white border-0 rounded"></hr>
        </div>
        <div>
          <button
            className={`join-discord-btn rounded-md transition-all bg-[#007ECA] py-3 px-5 text-xs flex items-center text-white whitespace-nowrap`}
          >
            Join Discord&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faDiscord} />
          </button>
        </div>
      </div>
    )
  );
};

export default Navbar;
