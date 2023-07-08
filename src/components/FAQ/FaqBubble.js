import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import $ from "jquery";

const FaqBubble = ({ classes, question, id,color }) => {


  return (
    id && (
      <motion.div
        onClick={() => {
          $(`.parent:not(#parent-${id})`).removeClass("open");
          // when bubble closed
          if($(`#parent-${id}`).hasClass('open')){
            $(`.answer`).addClass('hidden')
            $(`#parent-${id}`).removeClass("open");
          }else{
            // when bubble open
            $(`.answer`).addClass('hidden') // hide all answers
            $(`#answer-${id}`).removeClass('hidden'); // show only clicked one
            $(`#parent-${id}`).addClass(`open`); // show only clicked one
          }
        }}
        layout
        id={`parent-${id}`}
        className={`parent ${classes} transition-all rounded-full border-2 cursor-pointer  flex justify-center items-center text-center`}
      >
        <motion.div layout className="child">
          {question}
          <div className="hidden answer" id={`answer-${id}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum inventore sapiente.
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default FaqBubble;
