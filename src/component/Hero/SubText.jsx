import Image from "next/image";
import React from "react";
import "./Hero.module.css";

const SubText = () => {
  return (
    <>
      {/* Sub Text */}
      <div className="flex flex-col  sm:flex-col sm:justify-start justify-center items-center sm:items-start text-center sm:text-left  ">
{/* First Column */}
<div className="w-[35rem] mb-7 ">
  <p className="font-semibold" style={{lineHeight:"30.86px"}}>Discover why <span className="text-hoverUnderlineColor"> iFeelShy </span>  is the go-to choice for seamless and convenient online pharmacy services. Shop with confidence today!</p>
</div>

        {/* Second Column - Features List */}
        <div className="heroSubText container flex flex-col xl:text-sm md:text-sm text-xs w-auto gap-2 sm:gap-3 ml-0">
          {[
            "Fully licensed UK Online Pharmacy",
            "Secure and discreet packaging for privacy",
            "Fast, reliable next-day delivery"
          ].map((text, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start">
              <Image
                src="/heroTick.png"
                width={20}
                height={20}
                alt=""
                className="w-4 h-4 md:pr-1 md:mt-1 hidden sm:block"
              />
              <span className="text-black xl:text-sm md:text-sm mt-2 sm:mt-0"> 
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column - Branding and Rating */}

        {/* <div className="flex flex-col sm:items-start items-center sm:text-left text-center mt-6 sm:mt-0">
      
          <div className="flex  sm:items-start items-center flex-col pl-2 ml-3 sm:flex-row sm:w-[15rem] sm:h-[95%]">
            <span className="text-black font-normal text-xs sm:text-sm md:text-sm md:w-[100%]">
              Discover why{" "}
              <span className="text-hoverUnderlineColor font-semibold">
                iFeelShy
              </span>{" "}
              is the go-to choice for seamless and convenient online pharmacy
              services. Shop with confidence today!
            </span>
          </div>
 
          <div className="md:text-sm xl:text-base mt-12 sm:ml-5">
            <div className="flex justify-center sm:justify-start items-center gap-4">
              <span className="text-white text-base sm:text-xl md:text-xl lg:text-3xl font-semibold">
                <span className="text-hoverUnderlineColor md:text-2xl font-extrabold tracking-widest">
                  𝙸𝚏𝚎𝚎𝚕𝚜𝚑𝚢
                </span>
                <span className="text-black text-base sm:text-base md:text-base lg:text-base font-normal sm:ml-[10%]">
                  4.7
                </span>
              </span>
            </div>
 
            <div className="flex justify-center sm:justify-start items-center xl:space-x-2 my-2">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/icons/staricn.png"
                  height={20}
                  width={29}
                  alt="star-icon"
                  className="w-4 sm:w-4 md:w-5"
                />
              ))}
            </div>
          </div>

        </div> */}

      </div>
    </>
  );
};

export default SubText;
