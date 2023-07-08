import Image from "next/image";
import React from "react";


const Testimonial = (props) => {
  function getRatings() {
    let ratings = [];
    for (let i = 0; i < props.ratings; i++) {
      ratings.push(
        <Image
          src="/images/star.png"
          alt="star"
          height={15}
          width={15}
          className="me-1"
          key={i}
        />
      );
    }
    return ratings;
  }
  return (
    <div className="xl:max-w-[26em] lg:max-w-[20em] lg:mx-[5em] mx-[2em] my-5 bg-white text-black flex flex-col justify-center hover:text-white transition-all hover:bg-[#007ECA] px-6 h-[14em] rounded-xl hover-style-reverse cursor-pointer">
      <h1 className="font-bold text-xl mb-2">VISHNU GOSWAMI</h1>
      <div className="stars flex mb-5">{getRatings()}</div>
      <p className="text-lg">
        Exercitationem accusamus qui nemo sit rerum molestias suscipit
        voluptatem. Esse optio aspernatur voluptas unde commodi nihil.{" "}
      </p>
    </div>
  );
};

export default Testimonial;
