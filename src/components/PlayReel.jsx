import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function PlayReel() {
  const parent = useRef(null)
  const videodiv = useRef(null)
  const play = useRef(null)
  const reel = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:parent.current,
        top:"0 0",
       
       scrub:1,
       pin:true
      }
    })
    tl.to(videodiv.current, {
     width:"95%",
     height:"95%",
     ease:Power4
    })
    tl.to(play.current,{
      x:"55%",
      
      ease:Power4
    },"a")
    tl.to(reel.current,{
      x:"-55%",

      ease:Power4
    },"a")
  })
 
 
  return (
    <div ref={parent} className="w-full h-screen overflow-hidden bg-black relative">
      <div className="overlay text-white flex flex-col justify-between w-full h-full py-10 ">
        <div ref={videodiv}
        className="video  aspect-video  overflow-hidden top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute w-48 sm:w-96">
            <video autoPlay loop muted className="scale-[2.5]" src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"></video>
        </div>
        <div className=" flex justify-center gap-3">
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
          <h3>Work in motion</h3>
        </div>
        <h2 className="flex justify-center z-[999] gap-32 sm:gap-80">
            <div ref={play} className="text-6xl sm:text-9xl text-zinc-100">Play</div>
            <div ref={reel} className="text-6xl sm:text-9xl text-zinc-100">Reel</div>
        </h2>
        <p className="text-sm px-10 text-center">Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
      </div>
    </div>
  );
}

export default PlayReel;
