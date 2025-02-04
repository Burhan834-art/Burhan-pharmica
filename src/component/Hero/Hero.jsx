"use client";

import React from "react";
import "./Hero.module.css";
import Heading from "./Heading";
import SubText from "./SubText";
import Button from "../Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div
    style={{
      backgroundImage: "url('/hero/background (1).svg')",
      backgroundSize: "contain", // Ensures the image scales and doesn't overflow 
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      padding: "240px 0", 
    }}
  >

   
<div className="container mx-auto relative">
  {/* Left Content - First Section (Takes More Width) */}
  <div className="flex flex-col justify-center container mx-auto gap-5 text-left">
    <Heading className="text-4xl sm:text-3xl md:text-2xl lg:text-xl xl:text-lg" />
    <SubText className="text-lg sm:text-base md:text-sm lg:text-xs xl:text-xs" />
    <Button />
  </div>
</div>
    
    </div>
  );
};

export default Hero;
