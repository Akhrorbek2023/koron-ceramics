import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#1D1D1D] bg-opacity-85 flex items-center justify-center z-50">
      <div className="bg-[#1D1D1D] p-4 md:p-6 lg:p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">СВЯЗЬ</h2>
          <button onClick={onClose} className="text-white text-2xl md:text-3xl lg:text-4xl">
            &times;
          </button>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">Имя Фамилия</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Введите свое имя"
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Введите свой email"
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">Телефон</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Введите свой телефон"
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">Продукт</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Введите продукт"
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">Вид покупки</label>
            <select
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
            >
              <option>Розница</option>
              <option>Опт</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
