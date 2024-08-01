import React, { FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const token = '7328332975:AAHvs4qCUdtYxLsC7aPk5oNiyJpmmETKsYE'
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const differenceRef = useRef<HTMLSelectElement>(null);
  const prodRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {

    event.preventDefault();

    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const difference = differenceRef.current?.value;
    const prod = prodRef.current?.value;

    if (!fullName || !email || !phone || !difference || !prod) {
      alert('Please fill in all fields');
      return;
    }

    const message = `
      Full name: ${fullName}
      Email: ${email}
      Phone number: ${phone}
      Product: ${prod}
      Difference: ${difference}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '1934079018',
          text: message,
        }),
      });
      alert('Message sent successfully');

      // Clear the input fields
      if (fullNameRef.current) fullNameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (phoneRef.current) phoneRef.current.value = '';
      if (differenceRef.current) differenceRef.current.value = '';
      if (prodRef.current) prodRef.current.value = '';
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
    
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-[#1D1D1D] bg-opacity-85 flex items-center justify-center z-50">
      <div className="bg-[#1D1D1D] p-4 md:p-6 lg:p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase">{t('contact')}</h2>
          <button onClick={onClose} className="text-white text-2xl md:text-3xl lg:text-4xl">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">{t('formInputName')}</label>
            <input
              ref={fullNameRef}
              type="text"
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
              placeholder={t('formNamePls')}
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">{t('formInputEmail')}</label>
            <input
              ref={emailRef}
              type="email"
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
              placeholder={t('formEmailPls')}
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2"> {t('formInputPhone')}</label>
            <input
              ref={phoneRef}
              type="text"
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
              placeholder={t('formPhonePls')}
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">{t('formInputProd')}</label>
            <input
              ref={prodRef}
              type="text"
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
              placeholder={t('formProdPls')}
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">{t('formInputSelect')}</label>
            <select
              ref={differenceRef}
              className="w-full p-2 rounded bg-[#4e4e4e] focus:bg-[#4e4e4e] text-white placeholder-gray-400 focus:outline-none"
            >
              <option>{t('retail')}</option>
              <option>{t('wholesale')}</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
            >
              {t('formBtn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
