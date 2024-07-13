import { useTranslation } from "react-i18next";
import Form from "../Contacts/Form";

const HomeContacts = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#121212] py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className='text-2xl md:text-[34px] font-[800] text-white mb-6 capitalize'>{t('contact')}</h1>
        <div className="">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default HomeContacts;
