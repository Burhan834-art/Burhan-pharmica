"use client";
import React from "react";
import { motion } from "framer-motion";
import "./page.css";

const Map = () => {
  return (
    
    <div className="relative w-full   bg-gray-800 overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0 animated-bg"></div>

      {/* Main Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative container mx-auto px-4 md:mb-[70px] lg:px-8 z-10"
      >
        <div className="grid w-full h-auto gap-4 p-0 relative">
          {/* Company Information Section */}
          <div className="w-full my-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center sm:text-start xl:text-left text-white"
            >
              Contact&nbsp;
              <span className="relative text-red-500 tracking-widest">
                Information
              </span>
            </motion.h1>

            {/* Content Grid */}
            <div className="w-full">
              <div className="grid grid-rows-2 sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 lg:grid-rows-1 gap-y-6 sm:gap-y-4 h-auto lg:h-auto">
                {/* Text Section */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="xl:mt-7 pr-0 order-2 lg:order-1 sm:pr-10 md:pr-32 flex sm:justify-start sm:items-start"
                >
                  <p className="w-full max-w-full sm:text-left text-center leading-8 sm:leading-10 bg-black/50 sm:bg-transparent text-base sm:text-base lg:text-lg xl:text-xl font-light sm:mb-4 mb-0 text-white p-4 rounded-lg">
                    We aim to provide a seamless and reliable healthcare service
                    that ensures customer satisfaction and promotes better
                    health outcomes. With years of expertise in pharmaceutical
                    services, we have built a reputation for being a trusted
                    name in the UK. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Culpa obcaecati alias numquam! Provident
                    enim adipisci error voluptas iure. Possimus aliquam
                    necessitatibus, blanditiis rem vero unde quos earum labore
                    omnis voluptatibus?
                  </p>
                </motion.div>

                {/* Map Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="md:mt-7 relative order-1 rounded-xl"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.0702170893087!2d-0.26628656032713144!3d51.52898401390689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611edc75bb9af%3A0x14b81cfca4797c20!2sPark%20Royal%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1735554020582!5m2!1sen!2s"
                    className="w-full rounded-xl border-4 border-red-500 shadow-lg"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div> 
  );
};

export default Map;
