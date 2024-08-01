
import { faFacebookF, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import InputForm from './InputForm';

const Form: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="mx-auto max-w-7xl lg:px-8">
            <div className="flex flex-col md:flex-row justify-between lg:p-5 md:p-5 p-2 bg-[#1D1D1D] rounded-xl">
                <div className="formImage w-full md:w-[35%] bg-cover bg-center h-[400px] md:h-[600px] rounded-xl text-white lg:p-7 md:p-7 p-3 relative mb-8 md:mb-0">
                    <h1 className="lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] mb-3">{t('formInfoHead')}</h1>
                    <p className="mb-8">{t('formChatStart')}</p>
                    <div>
                        <div className="flex lg:mb-8 md:mb-6 sm:4 mb-2 w-full md:w-[200px] gap-5 items-start">
                            <FontAwesomeIcon icon={faPhone} />
                            <div>
                                <div className='lg:block md:block sm:flex flex'>
                                    <p>Director:</p>
                                    <p>+998 93 374 93 05</p>
                                </div>
                                <div className='lg:block md:block sm:flex flex'>
                                    <p>Manager:</p>
                                    <p>+998 91 668 61 25</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-8 w-full md:w-[200px] gap-5 items-start">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <div>
                                <p>info:koronceramics,</p>
                                <p>sales:koronceramics</p>
                            </div>
                        </div>
                        <div className="flex mb-8 w-full md:w-[200px] gap-5 items-start">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <div>
                                <p>{t('formMuseum')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 absolute bottom-8">
                        <Link to={'https://www.facebook.com/koronrishtan'}>
                            <FontAwesomeIcon className="rounded-[50%] hover:bg-[#71CCAE] p-2 px-[10px] border-[1px] border-white" icon={faFacebookF} />
                        </Link>
                        <Link to={'https://www.instagram.com/koronrishtan'}>
                            <FontAwesomeIcon className="rounded-[50%] hover:bg-[#71CCAE] p-2 border-[1px] border-white" icon={faInstagram} />
                        </Link>
                        <Link to={'https://t.me/koronrishtan'}>
                            <FontAwesomeIcon className="rounded-[50%] hover:bg-[#71CCAE] p-2 border-[1px] border-white" icon={faTelegram} />
                        </Link>
                    </div>
                </div>
                <InputForm/>
            </div>
            
        </div>
    );
}

export default Form;
