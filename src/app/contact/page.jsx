"use client";
import React, { useEffect, useState } from "react";
import SimpleMap from "./map";
import Link from "next/link";
import Image from "next/image";
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import Card from "./card";
import Policy from "./policy";
import HowDoesItWorksMobile from "@/component/HowDoesItWorksMobile";

const Page = () => {
  const [information, setInformation] = useState(null);
  const [informationText, setInformationText] = useState(null);
  const [informationTiming, setinformationTiming] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/ContactInformation.json");
        const data = await response.json();
        setInformation(data.informationData);
        setInformationText(data.informationText); // Set informationText data
        setinformationTiming(data.informationTiming);
      } catch (error) {
        console.error(error.message);
        console.log("some error occurs in fetching data ");
      }
    };
    fetchData();
  }, []);
  return (
    <> 

      {/* Customer Service Opening Hours
       */}
      <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 sm:mt-[-30px]">
        <div className="flex justify-center items-center sm:my-6 ">
          <SimpleMap />
        </div>
        <div className="w-full  lg:mt-0 grid container mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-y-8 lg:gap-y-0">
          {/* Image Section */}
          <div className="  order-2 sm:order-2 xl:order-1 ml-0 ">
            <hr className="border border-hoverUnderlineColor block xl:hidden" />
            <div className="flex flex-wrap justify-between my-10 xl:my-4">
              {information &&
                information.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center w-full mb-8 md:mb-5 xl:mb-10 justify-center sm:justify-start"
                  >
                    {/* Image Section on the left, hidden on mobile */}
                    <div className="mr-4 flex items-center sm:block">
                      <Image
                        src={item.img}
                        width={20}
                        height={20}
                        alt={item.label} // Add alt text for accessibility
                        className="w-3 sm:w-4 md:w-5 lg:w-6 hidden md:block"
                      />
                    </div>

                    {/* Text Section with Label and Link */}
                    <div className="flex flex-col sm:flex-row items-center sm:text-left text-center">
                      {/* Icon and Label inline on mobile, image on the left */}
                      <div className="flex items-center sm:mr-2 sm:mb-0 mb-2">
                        <span className="text-base lg:text-xl xl:text-2xl md:text-base font-normal text-gray-800 ">
                          {item.label}&nbsp;
                        </span>
                      </div>

                      {/* Link below label on mobile, inline on larger screens */}
                      <Link
                        href={item.href}
                        className="text-hoverUnderlineColor  xl:text-base md:text-sm text-xs font-light sm:ml-2 sm:inline-block mt-1 sm:mt-0"
                      >
                        {item.href}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="grid gap-y-2 my-4 text-center sm:text-left order-1 sm:order-1 xl:order-2">
            {/* Heading */}
            <div className="sm:mb-5">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800">
                Customer Service&nbsp;
                <span className="relative text-gray-800 z-50 tracking-widest">
                  Opening Hours
                </span>
              </h1>
            </div>

            <div className="flex justify-center sm:justify-start items-center">
              {informationText &&
                informationText.map((item, index) => (
                  <div
                    key={index}
                    className="mb-4 text-center flex justify-start"
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.data, // Render HTML safely
                      }}
                      className="text-xs sm:text-base leading-4 sm:text-left font-light"
                    ></p>
                  </div>
                ))}
            </div>

            {/* Timing */}
            <div className="flex justify-center sm:justify-start mb-2">
              <div className="text-sm sm:text-sm md:text-base lg:text-base">
                {informationTiming &&
                  informationTiming.map((item) => (
                    <div
                      key={item.text}
                      className="flex w-full mb-4 items-start"
                    >
                      {/* Timing Label on the left */}
                      <div className="font-normal mr-4">
                        {item.timingLabel.split("  ").map((label, index) => (
                          <div key={index} className="text-xs sm:text-base">
                            {label}
                          </div> // Adds line breaks between different labels
                        ))}
                      </div>

                      {/* Timing Data on the right */}
                      <div className="flex flex-col">
                        {item.timingData.split("  ").map((data, index) => (
                          <div
                            key={index}
                            className="text-hoverUnderlineColor text-xs sm:text-base font-light"
                          >
                            {data}
                          </div> // Adds line breaks between different data timings
                        ))}

                        {/* Displaying item.text below timingData */}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <HowDoesItWorksMobile />
      </div>
      <div className="hidden sm:block">
        <HowDoesItWorks />
      </div>
      <Card />
      <Policy />
    </>
  );
};

export default Page;
