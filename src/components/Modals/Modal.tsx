import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#1D1D1D] bg-opacity-85 flex items-center justify-center">
      <div className="bg-[#1D1D1D] p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">СВЯЗЬ</h2>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Имя Фамилия</label>
            <input type="text" className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] leading-tight focus:outline-none text-white" placeholder="Введите свое имя" />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] leading-tight focus:outline-none text-white" placeholder="Введите свое имя" />
          </div>
          <div>
            <label className="block mb-2">Телефон</label>
            <input type="text" className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] leading-tight focus:outline-none text-white" placeholder="Введите свое имя" />
          </div>
          <div>
            <label className="block mb-2">Продукт</label>
            <input type="text" className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] leading-tight focus:outline-none text-white" placeholder="Введите свое имя" />
          </div>
          <div className="">
            <label className="block mb-2">Вид покупки</label>
            <select className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] leading-tight focus:outline-none text-white">
              <option>Розница</option>
              <option>Опт</option>
            </select>
          </div>
          <div className="col-span-2 flex justify-end">
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
