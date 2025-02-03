import Image from 'next/image'
import React from 'react'
import "./Hero.module.css"; 


const SubText = () => {
  return (
    <>
      {/* Sub Text */}
      <div className='flex sm:justify-start items-start justify-center'> 
      <div className="heroSubText container flex flex-col justify-start items-start xl:text-sm md:text-sm text-xs w-auto gap-0 sm:gap-2 ml-0 sm:justify-center  md:items-start sm:items-start ">
          <div className="heroSubText flex  sm:mb-0">
            <Image
              src="/tick.png"
              width={20}
              height={20}
              alt=""
              className="hidden sm:block w-3 h-4 size-3 md:pr-1 md:mt-1 "
            />
            <span className="text-black">Fully licensed UK Online Pharmacy</span>
          </div>
          <div className="  flex sm:mb-0">
            <Image
              src="/tick.png"
              width={20}
              height={20}
              alt=""
              className="hidden sm:block w-3 h-4 size-3 md:pr-1 md:mt-1"
            />
            <span className="text-black xl:text-sm md:text-sm">
            	Secure and discreet packaging for privacy
            </span>
          </div>
          <div className="flex  sm:mb-0">
            <Image
              src="/tick.png"
              width={20}
              height={20}
              alt=""
              className="hidden sm:block w-3 h-4 size-3 md:pr-1 md:mt-1"
            />
            <span className="text-black xl:text-sm md:text-sm">
            Fast, reliable next-day delivery
            </span>
          </div> 
          <div className="flex sm:mb-0">
            <Image
              src="/tick.png"
              width={20}
              height={20}
              alt=""
              className="hidden sm:block w-3 h-4 size-3 md:pr-1 md:mt-1"
            />
            <span className="text-black xl:text-sm md:text-sm">
            Fast & Secure Shipping
            </span>
          </div> 
        </div>
          {/* Right Column */}
          <div className='flex flex-col '>
          <div className="flex border-l border-black relative sm:items-start xl:text-left justify-center items-center flex-col pl-2 ml-3 sm:flex-row sm:w-[15rem] sm:h-[95%]">
           
            <span className="flex  sm:justify-start sm:items-start flex-wrap text-black font-normal text-base sm:ml-2 md:ml-4  ">
              <span className="  sm:my-0 font-normal text-center sm:text-left text-xs sm:text-xs leading-tight sm:ml-0 md:text-sm md:w-[100%] md:text-left">
              Discover why <span className='text-hoverUnderlineColor'>iFeelShy</span> is the go-to choice for seamless and convenient online pharmacy services. 
Shop with confidence today!


              </span>
            </span>
          </div>
              {/* Main Content Grid */}
        <div className="md:text-sm xl:text-base "> 
          
            {/* Name and Rating */}
            <div className="flex justify-center items-center gap-4 ">
              <span className="text-white text-base sm:text-xl md:text-xl lg:text-3xl font-semibold">
              <span className="text-hoverUnderlineColor md:text-2xl font-extrabold tracking-widest">
  𝙸𝚏𝚎𝚎𝚑𝚜𝚑𝚢
</span>

                <span className="text-black text-base sm:text-base md:text-base lg:text-base font-normal sm:ml-[10%] sm:text-font-normal">
                  4.7
                </span>
              </span>
            </div>

            {/* Star Images */}
            <div className="flex justify-center items-center xl:space-x-2 my-2">
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
          </div>
      </div>

    
    </>
  )
}

export default SubText
