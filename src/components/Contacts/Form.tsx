import { faFacebookF, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <div className="mx-auto">
            <div className="flex justify-between p-5 bg-[#1D1D1D] rounded-xl">
                <div className="formImage w-[35%] bg-cover bg-center h-[600px] rounded-xl text-white p-7 relative">
                   <h1 className='text-[26px] mb-3'>Контактная информация</h1>
                   <p className='mb-8'>Скажите что-нибудь, чтобы начать чат!</p>
                   <div>
                    <div className='flex mb-8 w-[200px] gap-5 items-start'>
                    <FontAwesomeIcon icon={faPhone} />
                    <div className=''>
                        <p>Director:</p>
                        <p>+998 93 374 93 05</p>
                        <p>Manager:</p>
                        <p>+998 91 668 61 25</p>
                    </div>
                    </div>
                    <div className='flex mb-8 w-[200px] gap-5 items-start'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div className=''>
                        <p>info:koronceramics,</p>
                        <p>sales:koronceramics</p>
                    </div>
                    </div>
                    <div className='flex mb-8 w-[200px] gap-5 items-start'>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <div className=''>
                        <p>Мастерская-музей риштонской керамики</p>
                    </div>
                    </div>
                   </div>
                   <div className='flex gap-6 absolute bottom-8'>
                            <Link to={''}>
                                <FontAwesomeIcon className='rounded-[50%] hover:bg-[#71CCAE] p-2 px-[10px] border-[1px] border-white' icon={faFacebookF} /></Link>
                            <Link to={''}>
                                <FontAwesomeIcon className='rounded-[50%] hover:bg-[#71CCAE] p-2 border-[1px] border-white' icon={faInstagram} /></Link>
                            <Link to={''}>
                                <FontAwesomeIcon className='rounded-[50%] hover:bg-[#71CCAE] p-2 border-[1px] border-white' icon={faTelegram} />
                            </Link>
                        </div>
                </div>
                <form className="w-[60%]" action="">
                    <div>
                        <div className="flex">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="fullName">
                                Имя Фамилия
                                </label>
                                <input className="appearance-none block w-full bg-[#4e4e4e] text-white  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="fullName" type="text" placeholder="Введите свое имя" />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                                Email
                                </label>
                                <input className="appearance-none block w-full bg-[#4e4e4e] text-white  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="email" type="email" placeholder="Введите Email" />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="phone">
                                Телефон
                                </label>
                                <input className="appearance-none block w-full bg-[#4e4e4e] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="phone" type="text" placeholder="Введите свое имя" />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="difference">
                                    Вид покупки
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-[#4e4e4e] font-[400] text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#4e4e4e] focus:border-gray-500 " id="difference">
                                        <option>Розница</option>
                                        <option>Missouri</option>
                                        <option>Texas</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                                Сообщения
                            </label>
                            <textarea rows={6} className="appearance-none block w-full bg-[#4e4e4e] text-white  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="message" placeholder="Сообщения.."></textarea>
                        </div>
                        <div className="flex justify-end mt-3 px-3">
                            <button className="bg-[#71CCAE] hover:bg-[#71CCAE] text-white font-bold py-2 px-6 rounded">
                            Отправить
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form