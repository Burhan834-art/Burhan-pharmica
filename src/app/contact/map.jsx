"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./page.css";

const Map = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#0f9d58", "#34a853", "#7bc96f", "#b3e0a6"]; // Green shades for pharmacy vibes

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1.2 - 0.6;
        this.speedY = Math.random() * 1.2 - 0.6;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative container mx-auto px-6 md:mb-[70px] lg:px-10 z-10"
      >
        <div className="grid w-full h-auto gap-6 p-0 relative">
          {/* Title Section */}
          <div className="w-full my-12 text-center sm:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-white"
            >
              Contact&nbsp;
              <span className="bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
                Our Pharmacy
              </span>
            </motion.h1>
          </div>

          {/* Content Grid */}
          <div className="grid sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-10">
            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="order-2 lg:order-1 space-y-6"
            >
              <p className="bg-white/10 text-white text-lg leading-8 p-6 rounded-lg shadow-lg">
                Our pharmacy is dedicated to providing high-quality medical
                supplies and excellent customer service. Whether you need
                prescription assistance or general healthcare products, we are
                here to help.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg shadow-md">
                  <FaPhoneAlt className="text-green-400 text-xl" />
                  <p className="text-white text-lg">+44 1234 567 890</p>
                </div>

                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg shadow-md">
                  <FaEnvelope className="text-green-400 text-xl" />
                  <p className="text-white text-lg">contact@pharmacy.com</p>
                </div>

                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg shadow-md">
                  <FaMapMarkerAlt className="text-green-400 text-xl" />
                  <p className="text-white text-lg">Park Royal, London, UK</p>
                </div>
              </div>

              {/* Contact Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-hoverUnderlineColor hover:bg-hoverUnderlineColor text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all"
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative order-1 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.0702170893087!2d-0.26628656032713144!3d51.52898401390689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611edc75bb9af%3A0x14b81cfca4797c20!2sPark%20Royal%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1735554020582!5m2!1sen!2s"
                className="w-full h-80 rounded-xl border-4 border-green-500 shadow-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Map;
