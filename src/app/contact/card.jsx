import Image from "next/image";
import React from "react";

const Card = () => {
  const data = [
    {
      firstHeading: "Call NHS 111",
      description: "Call NHS 111 if you urgently need medical help or advice but it's not a life-threatening situation.",
      img:"/contact/tickIcon.svg",
      additionalInfo: [
        "About NHS 111.",
        "Visit the NHS 111 BSL interpreter service." 
      ]
    },
    {
      firstHeading: "Emergency Contact",
      description: "If you are experiencing a life-threatening emergency, please call 999 immediately.",
      img:"/contact/tickIcon.svg",
      additionalInfo: [
        "For critical medical situations.",
        "Ambulance, police, or fire services available." 
      ]
    },
    {
      firstHeading: "Mental Health Support",
      description: "For urgent mental health support, call NHS 111 or visit your nearest mental health crisis service.",
      img:"/contact/tickIcon.svg",
      additionalInfo: [
        "24/7 mental health support services.",
        "Speak to trained professionals." 
      ]
    }
  ];
  
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto px-4 py-8">
      {/* First Grid */}
      <div className="flex flex-col space-y-10 ">
        {/*First Grid First col */}
        <div className="flex justify-start ">
          <h2 className="text-4xl text-start sm:text-6xl font-semibold leading-tight lg:leading-[91px]  ">
            Quick Help, <br /> Our Priority!
          </h2>
        </div>
        {/*First Grid Second col */}
        <div>
          <Image
            src="/contact/image.svg"
            alt="image"
            height={200}
            width={200}
            className="w-[30rem] "
          />
        </div>
      </div>

      {/* Second Grid */}

      <div className="flex flex-col space-y-10 ">
        {/*Second Grid First col */}
        <div>
          <p className="" style={{ lineHeight: "42.8px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;s standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/*Second Grid Second col */}
        <div className="w-[539px] h-[592px] flex flex-col justify-start items-start ">
        {
  data.map((item, index) => (
    <div key={index} className="my-8">
      <h1 className="text-3xl font-semibold leading-10 ">{item.firstHeading}</h1>
      <p className="tracking-wider leading-8 ">{item.description}</p>
      <ul>
        {item.additionalInfo.map((info, idx) => (
         <li key={idx} className="flex items-center font-semibold  my-2 ">
         <div className="lg:w-4 lg:h-4 h-3 w-3 flex items-center justify-center bg-hoverUnderlineColor rounded-full mr-2">
           <Image src={item.img} alt="tick" height={20} width={20} className="w-6 " />
         </div>
         {info}
       </li>
       
        ))}
      </ul>
    </div>
  ))
}

      </div>
      </div>
    </div>
  );
};

export default Card;
