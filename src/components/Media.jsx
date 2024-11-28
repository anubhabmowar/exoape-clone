import { motion } from "framer-motion";
import React from "react";

function Media() {
  return (
    <div className="min-h-[50vh] mt-10 w-full ">
      <div className="flex gap-3 justify-center items-center">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-3"
          data-v-669b4a84=""
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
            data-v-669b4a84=""
          ></path>
        </svg>
        <h1 className="">In the media</h1>
      </div>
      <div className="texts mt-10">
        <h1 className="text-6xl sm:text-[9rem] overflow-hidden text-center tracking-tight">
          {["Spread", "the News"].map((item,index) => {
            return (
              <motion.span
                initial={{ y: "20%", rotate: 90, opacity: 0 }}
                whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className="origin-left block"
              >
                {item}
              </motion.span>
            );
          })}
        </h1>
  
        <div className="mt-5">
          <h1 className="px-16 leading-[5.8vw] text-zinc-800 text-center sm:text-2xl text-[4.5vw] sm:ml-[50%] sm:-translate-x-1/2 sm:w-[45%] ">
            Find out more about our work on these leading design and technology
            platforms.
          </h1>
          <h2 className="ml-[50%] mb-10 -translate-x-1/2 sm:mt-10 mt-5 font-medium border-b-[1px] border-b-zinc-600 inline-block text-zinc-700">
            Browse all media
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Media;
