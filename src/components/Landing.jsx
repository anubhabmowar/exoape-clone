import { motion, stagger } from "framer-motion";
import React from "react";

function Landing() {
  return (
    <div className="w-full relative h-[150vh] sm:h-[250vh] ">
      <div className="picture h-full w-full overflow-hidden">
        
        <img
          data-scroll
          data-scroll-speed="-1"
          className="h-full w-full  object-cover object-top"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>

      <div className="para absolute mt-80 font-[poppins] text-white px-6 sm:px-32  sm:py-20 top-0">
        {[
          "Global digital design studio partnering with",
          "Brands and businesses that creates exceptional",
          "experiences where people live, work, and unwind.",
        ].map((item, index) => {
          return (
            <p className="text-lg sm:text-2xl opacity-80 leading-5 overflow-hidden tracking-tight ">
              <motion.span
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className="inline-block origin-left "
              >
                {item}
              </motion.span>
            </p>
          );
        })}

        <div className="headings  my-14 sm:my-14">
          <h1 className="text-7xl sm:text-[16vw] tracking-tighter overflow-hidden py-5 leading-1 sm:leading-none">
            {["Digital", "Design", "Experience"].map((item, index) => {
              return (
                <motion.div
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 0.8,
                    delay: 1.5 + index * 0.2,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.div>
              );
            })}
          </h1>
        </div>
        <div className="para2 text-lg sm:w-[40%] leading-6 tracking-tight mb-5 ">
          <p className="sm:text-2xl">
            {" "}
            We help Experience driven companies <br /> thrive by making their
            audience feel the refined intricacies of their brand and products in
            the digital space. unforgettable journey starts with a click.
          </p>
        </div>
        <h3 className="border-b-[0.3px] inline text-lg tracking-tighter ">
          The studio
        </h3>
      </div>
    </div>
  );
}

export default Landing;
