import { motion } from "framer-motion";
import React from "react";

function Footer() {
  return (
    
    <div
 
 
     className="h-[80vh] sm:min-h-[110vh]  bg-[#070707] relative w-full overflow-hidden ">
      <div

      className="container w-[70%] sm:w-[75%] right-0 top-10 absolute aspect-video ">
        <video
          autoPlay
          muted
          loop
          className="object-cover  object-center"
          src="https://www.exoape.com/video/video-6.mp4"
        ></video>
      </div>
      <div className="overlay w-full z-[999]  px-8 sm:px-[8%] h-full left-0 top-0 absolute">
        <div className="text-[#e0ccbb] text-6xl sm:text-[8rem] font-medium leading-none mt-14  sm:mt-24">
          <h1 className="tracking-tight overflow-hidden">{["Our","Story"].map((item,index)=>{
            return  <motion.span
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
          })}</h1>
          
          <p className="text-[4.8vw] sm:w-[30%] sm:text-xl leading-6 mt-10 text-[#e0ccbb] font-medium">
            The story behind Exo Ape is one of exploration, creativity and
            curiosity.
          </p>
          <a className="text-base sm:hidden inline-block border-b-[1.5px] border-b-[#e0ccbb]" href="#">
            Our story
          </a>
        </div>
        <div className="h-[1px] w-full my-10 bg-[#e0ccbb]"></div>
        <div className="flex text-[#e0ccbb]  sm:pb-5 mt-10 w-1/2 sm:w-2/3  gap-20">
          <div className=" w-1/2 hidden sm:flex sm:w-2/3   flex-col">
            <a href="#">XYZ street UK</a>
            <a href="#">502***,Luke</a>
            <a href="#">South Africa</a>
            <a href="#">abc@exoape.com</a>
          </div>
          <div className=" flex w-1/2   flex-col">
            <a href="#">Work</a>
            <a href="#">Studio</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex w-1/2  flex-col">
            <a href="#">Behance</a>
            <a href="#">Dribble</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
