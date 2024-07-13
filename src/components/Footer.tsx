import { faFacebookF, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import FooterLogo from '../assets/FooterLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useCounterStore } from '../store/store';
import { useTranslation } from 'react-i18next';

interface NavLink {
    nameRU: string;
    nameEN: string;
    nameUZ: string;
    path: string;
    id: number;
}

interface NavbarProps {
    navLinks: NavLink[];
}

const Footer = ({ navLinks }: NavbarProps) => {
    const { t } = useTranslation();
    const link = useCounterStore((state) => state.link)
    return (
        <div className='py-10 bg-[#1D1D1D] text-white'>
            <div className="container mx-auto px-4">
                <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
                    <div className='mb-4 md:mb-0'>
                        <img className='w-[150px] md:w-[200px] mb-3' src={FooterLogo} alt="Logo" />
                        <p className='w-full md:w-[350px] mb-2'>
                            {t('footerDesc')}
                        </p>
                        <div className='flex gap-4'>
                            <Link to={'https://www.facebook.com/koronrishtan'}>
                                <FontAwesomeIcon className='rounded-[50%] bg-transparent hover:bg-[#71CCAE] p-2 px-[10px] border-[1px] border-white' icon={faFacebookF} />
                            </Link>
                            <Link to={'https://www.instagram.com/koronrishtan'}>
                                <FontAwesomeIcon className='rounded-[50%] bg-transparent hover:bg-[#71CCAE] p-2 border-[1px] border-white' icon={faInstagram} />
                            </Link>
                            <Link to={'https://t.me/koronrishtan'}>
                                <FontAwesomeIcon className='rounded-[50%] bg-transparent hover:bg-[#71CCAE] p-2 border-[1px] border-white' icon={faTelegram} />
                            </Link>
                        </div>
                    </div>
                    <div className='mb-4 md:mb-0'>
                        <ul>
                            {
                                navLinks.map((item) => (
                                    <li key={item.id} className='mb-3'>
                                        <Link className='capitalize hover:text-[#71CCAE]' to={item.path}>
                                        {link === 'en' ? item.nameEN : link == 'uz' ? item.nameUZ : item.nameRU  }
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-3'>
                                {t('formInfoHead')}
                            </li>
                            <li className='mb-2 w-[200px]'>
                                <Link className='flex' to={''}>
                                    <FontAwesomeIcon className='mr-4' icon={faPhone} />
                                    +37064003674
                                </Link>
                            </li>
                            <li className='mb-2 w-[250px]'>
                                <Link className='flex' to={''}>
                                    <FontAwesomeIcon className='mr-4' icon={faEnvelope} />
                                    info:koronceramics, sales:koronceramics
                                </Link>
                            </li>
                            <li className='w-[250px]'>
                                <Link className='flex' to={''}>
                                    <FontAwesomeIcon className='mr-4' icon={faLocationDot} />
                                    {t('formMuseum')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
