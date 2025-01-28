import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviewsData = [
  {
    id: 1,
    text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    author: "Micheal Gough",
    position: "CEO at Google",
    imgUrl: "/path/to/image1.jpg", // Replace with your image path
  },
  {
    id: 2,
    text: "This product has significantly improved my workflow. Highly recommended for anyone looking to boost productivity.",
    author: "Jane Doe",
    position: "CTO at Facebook",
    imgUrl: "/path/to/image2.jpg", // Replace with your image path
  },
  {
    id: 3,
    text: "An incredible tool that has streamlined my design process. The flexibility it offers is unmatched.",
    author: "John Smith",
    position: "Designer at Adobe",
    imgUrl: "/path/to/image3.jpg", // Replace with your image path
  },
  // Add more reviews as needed
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
};

const Reviews = () => {
  return (
    <>
      <section className="bg-gray-800 dark:bg-gray-900 rounded-lg ">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <Slider {...settings}>
            {reviewsData.map((review) => (
              <figure key={review.id} className="max-w-screen-md mx-auto">
                <svg 
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-sm sm:text-xl font-medium text-gray-200 dark:text-white">
                    &quot;{review.text}&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <Image 
                    className="w-12 h-12 rounded-full" 
                    src={review.imgUrl} 
                    height={50} 
                    width={50} 
                    alt={`${review.author} profile picture`} 
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-xs sm:text-sm lg:text-base text-gray-200 dark:text-white">
                      {review.author}
                    </div>
                    <div className="pl-3 text-xs sm:text-sm lg:text-base font-light text-gray-200 dark:text-gray-400">
                      {review.position}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Reviews;