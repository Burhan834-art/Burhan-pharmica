import React from 'react'
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
  className="text-lg sm:text-2xl md:text-4xl xl:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg shine-effect capitalize flex text-center sm:text-start  sm:max-w-[70%] md:max-w-[60%] xl:max-w-[50%]  leading-tight"
  initial="hidden"
  animate="visible"
>
  {[
    "Welcome to your trusted UK Online Pharmacy",
  ].map((line, index) => (
    <motion.span
      key={index}
      className="block text-2xl sm:text-3xl md:text-5xl xl:text-6xl leading-[1.3] sm:leading-[1.4] md:leading-[1.5] xl:leading-[1.6]"
      custom={index} // Pass index for staggered animation
      variants={textAnimation}
    >
      {line}
    </motion.span>
  ))}
</motion.h1>

    </>
  )
}

export default Heading
