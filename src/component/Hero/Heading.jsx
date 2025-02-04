import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Heading = () => {
  // Define the text animation for the bounce effect
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: [50, -20, 0], // Bounce effect
      transition: {
        delay: i * 0.1, // Stagger animation for each line
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67], // Smooth bounce easing
      },
    }),
  };

  return (
    <>
      <motion.h1
        className="text-lg sm:text-2xl md:text-4xl  xl:text-6xl font-extrabold text-black tracking-tight drop-shadow-lg capitalize leading-tight
                   text-center sm:text-left  // Center on small screens, left on larger screens
                   max-w-[90%] sm:max-w-[70%] md:max-w-[70%]" 
        initial="hidden"
        animate="visible"
      >
        {[
          "Welcome to your trusted UK Online Pharmacy",
        ].map((line, index) => (
          <motion.span
            key={index}
            
            custom={index} // Pass index for staggered animation
            variants={textAnimation}
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>
    </>
  );
};

export default Heading;
