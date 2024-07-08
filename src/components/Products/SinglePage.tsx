import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../apiProducts';
import Modal from '../Modals/Modal';

interface ItemProps {
  src: string;
  title: string;
  description: string;
}

const SinglePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const params = useParams();
  const itemId = parseInt(params.id || '0', 10);
  const item: ItemProps | undefined = items.find((_, i) => i === itemId);

  return (
    <div className=" text-white  flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto">
          {item ? (
            <>
              <div className="md:w-1/2">
                <img
                  src={item.src}
                  alt={item.description}
                  className="w-[440px] h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="flex items-center">
                  <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{item.title}</h2>
                <p className="text-base md:text-lg lg:text-xl mb-6">
                  {item.description}
                </p>
                <button
                  onClick={openModal}
                  className="inline bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
                >
                  ЗАКАЗАТЬ
                </button>
                  </div>
              </div>
            </>
          ) : (
            <p>Item not found</p>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SinglePage;
