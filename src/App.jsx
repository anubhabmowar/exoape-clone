import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Images from "./components/Images";
import Media from "./components/Media";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
