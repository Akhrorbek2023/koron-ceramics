import React, { useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: 'https://source.unsplash.com/random/1920x1080', alt: 'Image 1' },
  { src: 'https://source.unsplash.com/random/1920x1080', alt: 'Image 2' },
  { src: 'https://source.unsplash.com/random/1920x1080', alt: 'Image 3' },
  { src: 'https://source.unsplash.com/random/1920x1080', alt: 'Image 4' },
];

const Carousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-96">
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-4 flex justify-center gap-4">
        <button
          onClick={handlePrevClick}
          className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L5 10.586V13H15v-2.414l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <span className="text-white">{currentImageIndex + 1}/{images.length}</span>
        <button
          onClick={handleNextClick}
          className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L15 10.586V13H5v-2.414l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
