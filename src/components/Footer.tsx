import { faFacebookF, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import FooterLogo from '../assets/FooterLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useCounterStore } from '../store/store';

interface NavLink {
    nameRU: string;
    nameEN: string;
    path: string;
    id: number;
}

interface NavbarProps {
    navLinks: NavLink[];
}

const Footer = ({ navLinks }: NavbarProps) => {
    const link = useCounterStore((state) => state.link)
    return (
        <div className='py-20 bg-[#1D1D1D] text-white'>
            <div className="container">
                <div className='flex justify-between items-start'>
                    <div>
                        <img className='w-[200px] mb-3' src={FooterLogo} alt="" />
                        <p className='w-[350px] mb-2'>Частное предприятие KORON CERAMICS, производитель керамические изделия- была основана в декабре 2002 года.</p>
                        <div className='flex gap-4'>
                            <Link to={''}>
                                <FontAwesomeIcon className='rounded-[50%] bg-transparent hover:bg-[#71CCAE] p-2 px-[10px] border-[1px] border-white' icon={faFacebookF} /></Link>
                            <Link to={''}>
                                <FontAwesomeIcon className='rounded-[50%] bg-transparent hover:bg-[#71CCAE] p-2 border-[1px] border-white' icon={faInstagram} /></Link>
                            <Link to={''}>
                                <FontAwesomeIcon className='rounded-[50%] bg-transparent hover:bg-[#71CCAE] p-2 border-[1px] border-white' icon={faTelegram} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {
                                navLinks.map((item) => (
                                    <li className='mb-3'>
                                        <Link className='capitalize' to={item.path}>
                                            {
                                                link == 'en' ? item.nameEN : item.nameRU
                                            }
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-3'>
                                Контактная информация
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
                                    Мастерская-музей риштонской керамики
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer