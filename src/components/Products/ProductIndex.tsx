
import { useTranslation } from "react-i18next"
import DynamicPagination from "./Pagination"



const ProductIndex = () => {
    const {t} = useTranslation()
  return (
    <div>
    <div className="header bg-cover bg-center w-full h-[50vh]">
      <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-[36px] font-[800] text-white uppercase">{t('prod')}</h1>
      </div>
   </div>
   <div className="bg-[#121212] py-20">
     <DynamicPagination/>
   </div>
</div>
  )
}

export default ProductIndex