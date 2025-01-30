"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const CategoryProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch categories data
  const fetchCategories = async () => {
    setIsLoading(true);

    // Check for cached categories in local storage
    const cachedCategories = localStorage.getItem('categories');
    if (cachedCategories) {
      const parsedCategories = JSON.parse(cachedCategories);
      setCategories(parsedCategories);
      setSelectedCategory(parsedCategories[0]); // Default to the first category
      setIsLoading(false);
      return;
    }

    // Fetch data from API if cache is empty
    try {
      const response = await fetch("/Content.json");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();

      // Cache the fetched categories in local storage
      if (data.categories.length > 0) {
        localStorage.setItem('categories', JSON.stringify(data.categories));
        setCategories(data.categories);
        setSelectedCategory(data.categories[0]); // Default to the first category
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev !== category ? category : prev));
  };

  const renderSkeleton = (count) => (
    Array(count).fill().map((_, index) => (
      <div key={index} className="flex justify-center items-center py-2 w-full sm:w-28 md:w-32 lg:w-44">
        <Skeleton width={20} height={20} />
      </div>
    ))
  );

  // Skeleton for the Subcategory Grid items
  const renderSubcategorySkeleton = (count) => (
    Array(count).fill().map((_, index) => (
      <div key={index} className="bg-black rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-95">
        <div className="w-full">
          <Skeleton height={200} />
        </div>
        <div className="p-4">
          <Skeleton width="60%" height={20} />
          <Skeleton width="80%" height={15} className="mt-2" />
          <Skeleton width="100%" height={30} className="mt-4" />
        </div>
      </div>
    ))
  );

  const renderCategories = () =>
    categories.map((category, index) => (
      <button
        key={index}
        onClick={() => handleCategoryClick(category)}
        className={`flex justify-start items-center text-sm w-full sm:w-28 md:w-32 lg:w-44 h-8 sm:h-8 md:h-10 lg:h-12 border-2 rounded-full transition-all duration-300 ${
          selectedCategory === category ? "bg-hoverUnderlineColor text-white" : "bg-black text-white"
        }`}
      >
        <Image
          src={category.image}
          alt={category.name || "Unnamed Category"}
          width={10}
          height={10}
          className="w-4 h-4 ml-2 sm:mx-3"
          priority
        />
        <span className="truncate w-24">{category.name || "Unnamed Category"}</span>
      </button>
    ));

  const renderSubcategories = () =>
    selectedCategory?.subcategories.map((subcategory, index) => (
      <div key={index} className="bg-black rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-95">
        <div
          style={{
            backgroundImage: `url(${subcategory.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
          }}
          className="w-full"
        />
        <div className="p-4">
          <h5 className="text-lg md:text-xl font-semibold text-white">{subcategory.name}</h5>
          <p className="text-xs md:text-base text-gray-300 mt-2">
            {subcategory.description ? (
              subcategory.description.length > 60
                ? `${subcategory.description.substring(0, 70)}...`
                : subcategory.description
            ) : "No description available."}
          </p>
          <Link href={subcategory.link}>
            <button className="w-full py-2 mt-4 bg-hoverUnderlineColor text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Get to Consulting
            </button>
          </Link>
        </div>
      </div>
    ));

  return (
    <div className="container mx-auto my-8 px-4">
      {/* Categories Button Section */}
      <div className="flex overflow-x-auto space-x-2 mt-8 justify-between w-full scrollbar-thin scrollbar-thumb-hoverUnderlineColor scrollbar-track-gray-200">
        {isLoading ? renderSkeleton(5) : renderCategories()}
      </div>

      {/* Display selected category */}
      {selectedCategory && (
        <div className="mt-8">
          <h3 className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-normal text-center mb-8 text-hoverUnderlineColor">
            Subcategories Under{" "}
            <span className="text-hoverUnderlineColor">{selectedCategory.name}</span>
          </h3>
          
          {/* Responsive Grid Layout */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {isLoading ? renderSubcategorySkeleton(5) : renderSubcategories()}
          </div>
          {/* End of Grid */}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
