"use client";
import { useState, useEffect } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const Opening = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-full mx-auto h-screen flex flex-col justify-center items-center ">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <img
          className="w-full h-full object-cover object-center"
          src={images[currentImage]}
          alt="Gallery Image"
        />
      </div>
      <div className="z-10 text-center p-4 bg-white bg-opacity-80 rounded-lg shadow mx-4">
        <h2 className="text-gray-800 text-4xl font-semibold mb-4">
          Discover Elegance & Style
        </h2>
        <p className="mb-6 text-gray-600 font-light">
          Your journey to radiance begins here. Let us pamper you with our
          signature nail care services.
        </p>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Book Your Experience
        </button>
      </div>
    </div>
  );
};

export default Opening;
