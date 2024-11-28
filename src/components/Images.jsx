import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function Images() {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        scrub: 1,
        top: "0 0",
      },
    });

    tl.to(first.current, {
      x:"20%",
      ease: "linear",
    },"a");
    tl.to(second.current, {
      x:"-30%",
      ease: "linear",
    },"a");
    tl.to(third.current, {
      x:"-30%",
      ease: "linear",
    },"a");
    tl.to(fourth.current, {
      x:"20%",
      ease: "linear",
    },"a");
  });
  return (
    <div
      ref={parent}
      className="w-full  sm:pt-10  h-[70vh] sm:h-[100vh] flex justify-center items-center overflow-hidden"
    >
      <div className="h-1/2 sm:h-[72%] relative sm:w-[20%] w-[40%]">
        <div
          ref={first}
          className="absolute sm:-right-[45%] -right-[35%] top-8 sm:top-14 h-[6rem] sm:h-[11rem] sm:w-[10vw] w-[4rem] bg-red-600"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={second}
          className="absolute  sm:w-[21vw] sm:top-[18%] sm:-left-[90%]  aspect-video top-[40%] -left-[55%] w-[7rem] "
        >
          <video
            autoPlay
            loop
            muted
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={third}
          className="absolute sm:-bottom-[25%] sm:-left-[100%]  aspect-video -bottom-[15%] -left-[70%] sm:w-[18rem] w-[7.2rem] "
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={fourth}
          className="absolute overflow-hidden  sm:-bottom-[40%] sm:-right-[82%] aspect-square -bottom-[32%] -right-[70%] sm:w-[17vw] w-[7rem] "
        >
          <video
            className="h-full w-full scale-125"
            autoPlay
            loop
            muted
            src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
          ></video>
        </div>
        <img
          className="h-full w-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
