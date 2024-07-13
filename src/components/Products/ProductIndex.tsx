import { useTranslation } from "react-i18next";
import DynamicPagination from "./Pagination";

const ProductIndex = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#121212] min-h-screen flex flex-col">
      <div className="header bg-cover bg-center w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase">{t('prod')}</h1>
        </div>
      </div>
      <div className="py-12 md:py-16 lg:py-20 flex-1">
        <div className="container mx-auto px-4">
          <DynamicPagination />
        </div>
      </div>
    </div>
  );
};

export default ProductIndex;
