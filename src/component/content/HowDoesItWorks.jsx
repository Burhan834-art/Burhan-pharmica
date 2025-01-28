import Image from "next/image";
import "../../app/about/page.css";
import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';  // Import the skeleton loader library
import ProductVisual from "./product/productVisual";

const HowDoesItWorks = () => {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from JSON file with caching
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading
      const cachedSections = localStorage.getItem('howDoesItWorksSections');

      // Use cached data if available
      if (cachedSections) {
        setSections(JSON.parse(cachedSections));
        setIsLoading(false); // Stop loading if using cache
        return;
      }

      try {
        const response = await fetch("/HowDoesItWorks.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSections(data.categories || []); // Set sections if available

        // Cache data in local storage
        localStorage.setItem('howDoesItWorksSections', JSON.stringify(data.categories));
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  // Render skeleton loader for the product card
  const renderSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array(3).fill().map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gray-800 p-6 rounded-lg transition-all shadow-lg hover:scale-105"
        >
          <Skeleton height={160} width="100%" className="mb-4 rounded-md" />
          <Skeleton width="60%" height={20} className="mb-2" />
          <Skeleton width="80%" height={40} className="mb-4" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto h-auto my-24 lg:px-12 relative">
      <div className="relative z-10">
        <h2 className="text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-semibold text-center sm:mb-12 text-gray-800">
          How Does It&nbsp;
          <span className="relative text-gray-800 tracking-widest">Work?</span>
        </h2>

        {/* Product Visual Section */}
        <ProductVisual />

        {/* Display loading skeleton or content */}
        {isLoading ? renderSkeleton() : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg transition-all shadow-lg hover:scale-105 hover:bg-gray-900"
              >
                <Image
                  src={section.image}
                  alt={section.name || "Section image"}
                  width={400}
                  height={160}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 text-center">
                  {section.name}
                </h3>
                <p className="text-sm font-light sm:text-base lg:text-base text-gray-300 text-center">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HowDoesItWorks;