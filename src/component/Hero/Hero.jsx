"use client";

import React from "react";
import "./Hero.module.css";
import Link from "next/link";
import Heading from "./Heading";
import SubText from "./SubText";
import Button from "../Button";

const Hero = () => {
  return (
    <div
    className="relative z-10 flex justify-center items-center w-full min-h-[38rem] 
               bg-cover bg-center bg-no-repeat overflow-hidden 
               brightness-110 contrast-125 saturate-150"
    style={{
      backgroundImage: "url('/background.png')", 
      backgroundSize: "cover", 
      backgroundPosition: "center"
    }}
  >

      {/* Text Content with Fade-in Animation */}
      <div className="relative container  z-20 sm:ml-6 md:ml-0 flex flex-col text-center sm:text-left justify-center md:justify-start md:left-8">
        <div className="px-1 ">
        <Heading />
        <SubText />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
