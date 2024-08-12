import { useTranslation } from "react-i18next";
import Form from "./Form";
import { Helmet } from "react-helmet-async";

const ContacsIndex = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Koron creamics Contacts</title>
        <meta name="description" content="Koron-ceramics form for buying ceramic dishes and items" />
        <link rel="canonical" href="/contacts" />
      </Helmet>
      <div>
        <div className="header bg-cover bg-center w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white uppercase">
              {t('contact')}
            </h1>
          </div>
        </div>
        <div className="bg-[#121212] py-20">
          <div className="container">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContacsIndex;
