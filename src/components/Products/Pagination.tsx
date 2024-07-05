import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { items } from '../apiProducts';
import ProductCard from './ProductCard';

const itemsPerPage = 8; // Har bir pageda ko'rsatiladigan elementlar soni

const DynamicPagination = () => {
  const [page, setPage] = useState(1);
  const handleChange = (newPage: number) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 mb-6 md:mb-10 lg:mb-12">
        {selectedItems.map((item, index) => (
          <ProductCard
            key={index}
            img={item.src}
            title={item.title}
            des={item.description}
            id={index}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center items-center">
        <div className="inline-flex items-center gap-2">
          <button
            onClick={() => handleChange(page - 1)}
            disabled={page === 1}
            className={`h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md hover:bg-[#71CCAE] ${
              page === 1 ? 'bg-gray-300' : 'bg-gray-800 text-white'
            }`}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handleChange(index + 1)}
              className={`h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md hover:bg-[#71CCAE] ${
                page === index + 1 ? 'bg-[#71CCAE] text-white' : 'bg-gray-800 text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handleChange(page + 1)}
            disabled={page === totalPages}
            className={`h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md hover:bg-[#71CCAE] ${
              page === totalPages ? 'bg-gray-300' : 'bg-gray-800 text-white'
            }`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicPagination;
