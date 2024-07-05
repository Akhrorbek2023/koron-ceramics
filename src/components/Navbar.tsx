import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRU from '../locale/translationRU';
import translationEN from '../locale/translationEN';
import { useCounterStore } from '../store/store';
import NavLogo from '../assets/Logo.png';
import Modal from './Modals/ModalNavbar'; // Modalni import qilamiz

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRU },
    en: { translation: translationEN }
  },
  lng: 'ru',
  fallbackLng: 'ru'
});

interface NavLink {
  nameRU: string;
  nameEN: string;
  path: string;
  id: number;
}

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar = ({ navLinks }: NavbarProps) => {
  const link = useCounterStore((state) => state.link);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    useCounterStore.setState({ link: e.target.value });
  };

  return (
    <div className="z-50 w-full absolute top-0">
      <div className="container mx-auto px-4 text-white">
        <nav>
          <div className="flex items-center justify-between">
            <Link to="">
              <img className="w-[90px]" src={NavLogo} alt="Logo" />
            </Link>
            {/* Hamburger icon */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Navbar links */}
            <ul className="hidden md:flex flex-row justify-between items-center lg:space-x-20 md:space-x-10 sm:space-x-10">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link className="uppercase" to={item.path}>
                    {link === 'en' ? item.nameEN : item.nameRU}
                  </Link>
                </li>
              ))}
              <li>
                <select
                  onChange={changeLang}
                  className="border-none bg-transparent leading-tight focus:outline-none text-black"
                >
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                </select>
              </li>
            </ul>
          </div>
          {/* Modal */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ul className="flex flex-col items-center space-y-4">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    className="uppercase text-black"
                    to={item.path}
                    onClick={() => setIsModalOpen(false)}
                  >
                    {link === 'en' ? item.nameEN : item.nameRU}
                  </Link>
                </li>
              ))}
              <li>
                <select
                  onChange={changeLang}
                  className="border-none bg-transparent leading-tight focus:outline-none text-black"
                >
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                </select>
              </li>
            </ul>
          </Modal>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
