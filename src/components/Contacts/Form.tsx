import { faFacebookF, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Form = () => {
    const { t } = useTranslation();
    return (
        <div className="mx-auto max-w-7xl  lg:px-8">
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
                               <div  className='lg:block md:block sm:flex flex'>
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
                <form className="w-full md:w-[60%]" action="">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="fullName">
                                {t('formInputName')}
                            </label>
                            <input className="appearance-none block w-full bg-[#4e4e4e] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="fullName" type="text" placeholder={t('formNamePls')} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                                {t('formInputEmail')}
                            </label>
                            <input className="appearance-none block w-full bg-[#4e4e4e] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="email" type="email" placeholder={t('formEmailPls')} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="phone">
                                {t('formInputPhone')}
                            </label>
                            <input className="appearance-none block w-full bg-[#4e4e4e] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="phone" type="text" placeholder={t('formPhonePls')} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="difference">
                                {t('formInputSelect')}
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-[#4e4e4e] font-[400] text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#4e4e4e] focus:border-gray-500 " id="difference">
                                    <option>Розница</option>
                                    <option>Опт</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                                {t('formTexarea')}
                            </label>
                            <textarea rows={6} className="appearance-none block w-full bg-[#4e4e4e] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="message" placeholder={t('formTextareaPls')}></textarea>
                        </div>
                    </div>
                    <div className="flex justify-end mt-3 px-3">
                        <button className="bg-[#71CCAE] hover:bg-[#71CCAE] text-white font-bold py-2 px-6 rounded">
                            {t('formBtn')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
