import { useRef, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

const InputForm = () => {
    const { t } = useTranslation();
    const token = '7328332975:AAHvs4qCUdtYxLsC7aPk5oNiyJpmmETKsYE'
    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const differenceRef = useRef<HTMLSelectElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = async (event: FormEvent) => {

        event.preventDefault();

        const fullName = fullNameRef.current?.value;
        const email = emailRef.current?.value;
        const phone = phoneRef.current?.value;
        const difference = differenceRef.current?.value;
        const message = messageRef.current?.value;

        if (!fullName || !email || !phone || !difference || !message) {
            alert('Please fill in all fields');
            return;
        }

        const messageData = `
      Full name: ${fullName}
      Email: ${email}
      Phone number: ${phone}
      Difference: ${difference}
      Message: ${message}
    `;

        try {
            await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: '1934079018',
                    text: messageData,
                }),
            });
            alert('Message sent successfully');

            // Clear the input fields
            if (fullNameRef.current) fullNameRef.current.value = '';
            if (emailRef.current) emailRef.current.value = '';
            if (phoneRef.current) phoneRef.current.value = '';
            if (differenceRef.current) differenceRef.current.value = '';
            if (messageRef.current) messageRef.current.value = '';
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message');
        }
    }
    return (
        <form className="w-full md:w-[60%]" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="fullName">
                        {t('formInputName')}
                    </label>
                    <input ref={fullNameRef} className="appearance-none block w-full bg-[#4e4e4e] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="fullName" type="text" placeholder={t('formNamePls')} />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                        {t('formInputEmail')}
                    </label>
                    <input ref={emailRef} className="appearance-none block w-full bg-[#4e4e4e] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="email" type="email" placeholder={t('formEmailPls')} />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="phone">
                        {t('formInputPhone')}
                    </label>
                    <input ref={phoneRef} className="appearance-none block w-full bg-[#4e4e4e] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="phone" type="text" placeholder={t('formPhonePls')} />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="difference">
                        {t('formInputSelect')}
                    </label>
                    <div className="relative">
                        <select ref={differenceRef} className="block appearance-none w-full bg-[#4e4e4e] font-[400] text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#4e4e4e] focus:border-gray-500" id="difference">
                            <option>{t('retail')}</option>
                            <option>{t('wholesale')}</option>
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
                        {t('formTextarea')}
                    </label>
                    <textarea ref={messageRef} rows={6} className="appearance-none block w-full bg-[#4e4e4e] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#4e4e4e]" id="message" placeholder={t('formTextareaPls')}></textarea>
                </div>
            </div>
            <div className="flex justify-end mt-3 px-3">
                <button type="submit" className="bg-[#71CCAE] hover:bg-[#71CCAE] text-white font-bold py-2 px-6 rounded">
                    {t('formBtn')}
                </button>
            </div>
        </form>
    )
}

export default InputForm;