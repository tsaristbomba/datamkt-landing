import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  HeroObj,
  InfoCustomObj,
  InfoObj,
  InfoObj2,
  TestimonialObj,
} from "../data";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoCustom from "../components/InfoCustom";
import Info from "../components/Info";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHome() {
    scroll.scrollToTop();
  }

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggleHome={toggleHome} handleMenu={handleMenu} />
      <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
      <Hero {...HeroObj} />
      <InfoCustom {...InfoCustomObj} />
      <Info {...InfoObj} />
      <Info {...InfoObj2} />
      <Info {...TestimonialObj} />
      <Newsletter />
      <Footer toggleHome={toggleHome} />
    </>
  );
};

export default Home;
