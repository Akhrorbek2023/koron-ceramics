import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../apiProducts';
import Modal from '../Modals/Modal';
import { useTranslation } from 'react-i18next';

interface ItemProps {
    src: string;
    title: string;
    description: string;
}

const SinglePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const { t } = useTranslation();

    const params = useParams();
    const itemId = parseInt(params.id || '0', 10);
    const item: ItemProps | undefined = items.find((_, i) => i === itemId);

    return (
        <div className="bg-[#1f1f1f] text-white min-h-screen flex items-center justify-center p-4">
            <div className="header bg-cover bg-center w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
                <div className="w-full h-full flex justify-center items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase">{t('prod')}</h1>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                    {item ? (
                        <>
                            <div className="md:w-1/2">
                                <img
                                    src={item.src}
                                    alt={item.description}
                                    className="w-full h-auto rounded-2xl object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 flex flex-col justify-center">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{item.title}</h2>
                                <p className="text-base md:text-lg lg:text-xl mb-6">
                                    {item.description}
                                </p>
                                <button
                                    onClick={openModal}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
                                >
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
