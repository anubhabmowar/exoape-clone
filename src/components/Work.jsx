import { motion } from "framer-motion";
import React from "react";

function Work() {
  return (
    <div className="w-full relative py-5 min-h-screen">
      <div className="max-w-screen-2xl ">
        <div className="flex gap-5 mt-10 sm:hidden px-5  items-center">
          <span>
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
          </span>
          <h1 className="text-lg  font-semibold">Featured</h1>
        </div>
        <h1 className="text-6xl mx-5 sm:text-[16vw] sm:ml-44 overflow-hidden sm:my-20 my-6">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.8,
              // delay: 1 + index * 0.2,
            }}
            className="inline-block origin-left"
          >
            Work
          </motion.span>
        </h1>
        <p className="w-[90%] ml-5 sm:hidden">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems  mt-20 ">
          <div className="elem p-5 sm:px-32 w-full sm:flex  sm:gap-32   sm:my-40">
            <div className="w-full h-[104vw] sm:h-[80vh]  overflow-hidden relative">
              <motion.img
              initial={{ opacity: 1 }}
              whileHover={{opacity:0}}
             
                className="w-full hidden sm:absolute top-0 left-0  z-[2] sm:block object-cover h-full sm:w-[85vh] sm:h-[80vh]"
                src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1100x1370/filters:quality(90)"
                alt=""
              />
              <video
             
                muted
                autoPlay
                loop
                className="w-full h-full z-[0]  scale-[1.3]"
                src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
              ></video>
            </div>
            <div className="text sm:hidden mt-4">
              <h3 className="text-base font-semibold">Columbia Pictures</h3>
              <h4 className="text-sm font-semibold opacity-60">
                Celebrating a picture of Cinema
              </h4>
            </div>
            <div className="w-full mt-5 h-[104vw] sm:h-[95vh] overflow-hidden relative">
              <div className="hidden sm:flex sm:flex-col sm:mb-32 sm:w-[70%]  ">
                <div className=" hidden sm:flex  gap-5 my-2 items-center">
                  <span>
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
                  </span>
                  <h1 className="text-base  font-semibold">Featured</h1>
                </div>
                <p className="text-xl font-medium ">
                  {" "}
                  Highlights of cases that we passionately built with
                  forward-thinking clients and friends over the years.
                </p>
              </div>
              <motion.img
              initial={{ opacity: 1 }}
              whileHover={{opacity:0}}
         
                className="w-full hidden  sm:absolute top-[33%] left-0 z-[2] sm:block object-cover h-full sm:w-[55vh] sm:h-[65vh]"
                src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              <video
                muted
                autoPlay
                loop
                className="w-full h-full sm:w-[58vh] sm:h-[50vh]  z-[1] scale-[1.3]"
                src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
              ></video>
            </div>
            <div className="text sm:hidden mt-4">
              <h3 className="text-base font-semibold">Rino and pelle</h3>
              <h4 className="text-sm font-semibold opacity-60">
                Effortless chic Lifestyle
              </h4>
            </div>
          </div>
          <div className="elem p-5 sm:px-32 w-full sm:flex  sm:gap-2  sm:mt-14">
            <div className="sm:w-1/2 w-full h-[104vw] sm:h-[60vh] sm:mt-44   overflow-hidden relative">
              <motion.img
              initial={{ opacity: 1 }}
              whileHover={{opacity:0}}
                className="w-full hidden sm:absolute top-0 left-0 z-[2] sm:block object-cover h-full sm:w-[35vh] sm:h-[45vh]"
                src="https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""  
              />
              <video
                muted
                autoPlay
                loop
                className="w-full h-full sm:w-[30vh] sm:h-[40vh] z-[1] scale-[1.3]"
                src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"
              ></video>
            </div>
            <div className="text sm:hidden my-5">
              <h3 className="text-base font-semibold"> Aebele Interiors</h3>
              <h4 className="text-sm font-semibold opacity-60">
                Luxurious design experience
              </h4>
            </div>
            <div className="w-full  h-[104vw] sm:h-[80vh] overflow-hidden relative">
              <div className="hidden sm:flex  sm:w-[70%]  "></div>
              <motion.img
              initial={{ opacity: 1 }}
              whileHover={{opacity:0}}
              
                className="w-full hidden sm:absolute top-0 left-0 z-[2] sm:block object-cover h-full sm:w-[70vh] sm:h-[90vh]"
                src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              <video
                muted
                autoPlay
                loop
                className="w-full h-full sm:w-[60vh] sm:h-[90vh] z-[1] scale-[1.3]"
                src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
              ></video>
            </div>
            <div className="text sm:hidden mt-4">
              <h3 className="text-base font-semibold">Pixelflakes</h3>
              <h4 className="text-sm font-semibold opacity-60">
                Architectural marketing agency
              </h4>
            </div>
          </div>
          <div className="flex gap-1   sm:mt-5 sm:absolute  sm:right-[5%] sm:bottom-5 w-full sm:w-fit justify-center ">
            {" "}
            <span>º</span>{" "}
            <h3 className="border-b-[0.8px]  border-zinc-600 leading-none font-medium inline-block">
              {" "}
              Browse all Work
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
