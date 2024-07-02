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
        <div className=" text-white min-h-screen flex items-center justify-center">
            <div className="container">
                <div className="w-full rounded-lg shadow-lg flex justify-center items-center">
                    {item ? (
                        <>
                            <div className="w-[50%]">
                                <img
                                    src={item.src}
                                    alt={item.description}
                                    className="w-full h-[420px] rounded-2xl object-fill"
                                />
                            </div>
                            <div className="ml-6 w-[50%]">
                                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                                <p className="text-lg mb-4">
                                    {item.description}
                                </p>
                                <button
                                    onClick={openModal}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                    ЗАКАЗАТЬ
                                </button>
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
