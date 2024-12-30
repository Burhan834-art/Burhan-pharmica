"use client";
import React from "react";
import "./page.css";
import Image from "next/image";
import Link from "next/link";
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import QualifiedTeamAboutPage from "@/component/qualifiedTeamAboutPage";
import PharmacyRegulationsMobile from "@/component/PharmacyRegulationsMobile";
import HowDoesItWorksMobile from "@/component/HowDoesItWorksMobile";
const Page = () => {
  return (
<div>
  {/* Image Section */}
  <div
    className="relative z-10 flex justify-center items-center w-full h-[38rem] bg-cover bg-center overflow-hidden"
    style={{ backgroundImage: "url('/DoctorImages/doctorImg4.jpg')" }}
  >
    {/* Transparent Overlay */}
    <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div>
    <div className="relative container w-full z-20 flex flex-col text-center sm:text-left justify-center md:justify-start md:left-0 xl:left-8 md:left-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold tracking-wider leading-relaxed text-white xl:mb-5 md:mb-4">
        <span className="block xl:text-5xl md:text-3xl tracking-wide text-xl">
          The UK&apos;s Trusted
        </span>
        <span className="block text-xl xl:mt-2 xl:text-5xl md:text-3xl tracking-wide">
          Online Pharmacy
        </span>
        <span className="mt-2 text-xl xl:text-5xl md:text-3xl tracking-wide">
          Since 2015
        </span>
      </h1>
      <div className="justify-start lg:w-[40dvw] pt-2 mb-2 sm:mb-0 block">
        <span className="text-white text-xs sm:text-base px-1 xl:px-0">
          Pharmica offers a wide range of treatments through our free online
          prescription service. Our ethos is that by providing cutting-edge
          technology to automate and innovate, we can deliver a safer, more
          affordable health care experience. Our service is safe, discreet, and
          convenient. All medicines are dispensed from our Central
          London-based registered pharmacy.
        </span>
        {/* Button or Call to Action */}
        <div className="xl:mt-5 sm:mt-6 md:mt-4 flex justify-center items-center w-full sm:justify-start ">
          <button className="flex items-center justify-center px-4 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-2 mt-2 w-[30vw] sm:w-1/5 lg:w-48 sm:h-[6vh] h-[4vh] lg:h-[5vh] text-xs sm:text-sm lg:text-base text-white font-semibold rounded-lg shadow-lg bg-hoverUnderlineColor hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] transition-transform duration-300 ease-in-out sm:leading-[1rem]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Main Content Section */}
  <div className="container mx-auto mb-[70px] px-4 sm:px-6 lg:px-8">
    <div className="grid w-full h-auto gap-4 p-0 relative">
      {/* Company Information Section */}
      <div className="w-full my-8">
        <h1 className="block ml-2 xl:ml-0 justify-start text-xl lg:text-[48px] font-extrabold">
          Company&nbsp;
          <span className="relative text-hoverUnderlineColor underline-background tracking-widest">
            Information
          </span>
        </h1>
        <div className="grid grid-rows-2 sm:grid-cols-1 xl:grid-cols-[30%_70%]  lg:grid-cols-[40%_60%] lg:grid-rows-1 gap-y-6 sm:gap-y-4 h-auto lg:h-auto">
          {/* Text Section */}
          <div className="mt-7 pr-20 order-2 lg:order-1">
            <p className="tracking-wide">
              <span className="block">
                This website is operated by Pharmica Ltd. Pharmica Ltd is registered
              </span>
              <span className="block">
                in England and Wales under company number{" "}
                <span className="text-hoverUnderlineColor">9668055</span>
              </span>
              <span className="block">
                DUNS Number:{" "}
                <span className="text-hoverUnderlineColor">22-097-8327</span>
              </span>
              VAT Number:{" "}
              <span className="text-hoverUnderlineColor">GB 217 7259 95</span>
            </p>
            <h1 className="block lg:text-xl font-bold my-2">Registered Office:</h1>
            <p className="tracking-wide w-full sm:w-[276px]">
              <span className="block">
                Registered Office: 236 Gray&apos;s Inn Rd London WC1X 8HB United
              </span>
              <span className="block">
                Kingdom 020 7112 9014
                <span className="block text-hoverUnderlineColor font-semibold">
                  help@pharmica.co.uk
                </span>
              </span>
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-7 w-full relative order-1 lg:order-2">
            <Image
              src="/bg3.png"
              width={400}
              height={60}
              className="w-full bg-cover h-[260px] sm:h-[300px] lg:h-[260px]"
              alt="Building"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  {/* Customer Reviews */}
<div className="bg-gray-100 px-4 sm:px-6 lg:px-8">
  <div className="w-full grid container mx-auto lg:grid-cols-2 grid-rows-1 gap-y-8 lg:gap-y-0 md:h-72 lg:h-auto">
    {/* Image Section */}
    <div className="my-12 flex justify-center items-center">
      <Image
        src="/customerReview.png"
        width={400}
        height={60}
        alt="Customer Review Image"
        className="ml-0 bg-cover block w-full max-w-md"
      />
    </div>

   {/* Text Section */}
<div className="grid grid-rows-5 gap-y-2 md:ml-10 my-8 text-center lg:text-left">
  {/* Heading */}
  <div className="mb-4">
    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold">
      Customer&nbsp;
      <span className="text-2xl sm:text-5xl relative text-black redunderline-background z-50 tracking-widest">
        Reviews
      </span>
    </h1>
  </div>

  {/* Star Ratings */}
  <div className="flex justify-center lg:justify-start items-center mb-4">
    {[...Array(5)].map((_, index) => (
      <Image
        key={index}
        src="/rankStarIcon.png"
        width={100}
        height={60}
        alt="Star Icon"
        className="w-8 sm:w-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
      />
    ))}
  </div>

  {/* Review Count */}
  <div className="flex justify-center lg:justify-start mb-4">
    <span className="text-3xl sm:text-3xl lg:text-[48px] font-bold text-hoverUnderlineColor">
      234,0094+
    </span>
  </div>

  {/* Description */}
  <div className="mb-4">
    <span className="text-sm sm:text-base lg:text-lg" style={{ lineHeight: "1.3" }}>
      <span className="block lg:w-[504px] mx-auto lg:mx-0">
        Our customers trust us to deliver top-quality service.
      </span>
      Read more reviews on Google and{" "}
      <span className="text-green-500">TrustPilot!</span>
    </span>
  </div>

  {/* Learn More Button */}
  <div className="border border-hoverUnderlineColor bg-hoverUnderlineColor w-36 h-9 rounded-lg mx-auto lg:mx-0 mt-4">
    <Link href="/" className="flex justify-center items-center h-full">
      <span className="text-white text-base">Learn More</span>
    </Link>
  </div>
</div>

  </div>
</div>

 {/* Pharmacy Regulations */}
<div
  className="bg-cover bg-center bg-no-repeat hidden sm:block" // Hide on mobile, show on larger screens
  style={{
    backgroundImage: "url('/bg.png')",
  }}
>
  <div className="container mx-auto grid lg:grid-cols-2 grid-rows-1 gap-8 md:h-72 lg:h-full px-4 sm:px-6 lg:px-8">
    {/* First Section */}
    <div className="text-white py-14">
      <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold leading-relaxed pb-5">
        Pharmacy&nbsp;
        <span className="text-white redunderline-background tracking-widest">
          Regulation
        </span>
      </h1>
      <div className="tracking-wide space-y-3">
        <p className="max-w-[504px] text-lg sm:text-xl lg:text-[20px] font-semibold" style={{ lineHeight: "1.8" }}>
          The pharmacy is registered with the General Pharmaceutical Council
          with number 9012030. The superintendent pharmacist for Pharmica is:
          Ana Carolina Osorio De Faria Goncalves (GPhC Number: 2088658).
        </p>
        <ul className="space-y-2">
          <li className="text-lg sm:text-xl text-white">
            Dr Munawar Iqbal&nbsp;
            <span className="text-hoverUnderlineColor">(GPhC Number 2059871)</span>
          </li>
          <li className="text-lg sm:text-xl text-white">
            Rehma Gill&nbsp;
            <span className="text-hoverUnderlineColor">(GPhC Number 2225869)</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Second Section */}
    <div className="grid grid-rows-3 gap-6 md:ml-10 text-white w-full lg:max-w-[504px] justify-start items-center py-14">
      {/* Informational Text */}
      <div>
        <p className="text-lg sm:text-xl lg:text-[20px] font-semibold" style={{ lineHeight: "1.8" }}>
          For more information or to view registration details, visit the
          General Pharmaceutical Council’s website. Responsible Pharmacist:
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-start items-center">
        <Image
          src="/registeredPharma.png"
          width={400}
          height={60}
          alt="Registered Pharma"
          className="w-[166px] h-[66px]"
        />
      </div>

      {/* Pharmacist Details */}
      <div>
        <p className="text-lg sm:text-xl lg:text-[20px]">
          <span className="block">Rehma Gill&nbsp;</span>
          (GPhC Number 2225869)
        </p>
      </div>
    </div>
  </div>
</div>

{/* Pharmacy Regulations Mobile */}
<div className="sm:hidden">  {/* Only visible on mobile */}
  <PharmacyRegulationsMobile />
</div>


  {/* How Does It Work */}
  <div className="w-full relative bg-gray-50 px-4 sm:px-6 lg:px-8">
    {/* Background Image */}
    <div className="absolute top-0 left-0">
      <Image
        src="/bg1.png"
        height={60}
        width={100}
        alt="Background Graphic"
        className="w-40"
      />
    </div>

    {/* Content Component */}
    {/* Content Component for Desktop */}
<div className="container mx-auto hidden lg:block">
  <HowDoesItWorks />
</div>

{/* Content Component for Mobile */}
<div className="container mx-auto block lg:hidden">
  <HowDoesItWorksMobile />
</div>

  </div>

  {/* Our Qualified Team */}
  <div className="my-64 sm:my-0 mb-[-20] sm:mb-0 ">

  <div className="w-full border border-black bg-black px-4 sm:px-6 lg:px-8  sm:py-0">
    <div className="container mx-auto  ">
      <QualifiedTeamAboutPage />
    </div>
  </div>
  </div>
  
</div>

  );
};

export default Page;
