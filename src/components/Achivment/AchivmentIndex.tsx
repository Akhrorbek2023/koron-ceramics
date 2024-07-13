import { useTranslation } from "react-i18next";
import AchivmentCard from "./AchivmentCard"


const AchivmentIndex = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="header bg-cover bg-center w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-[36px] font-[800] text-white uppercase">{t('certificate')}</h1>
          </div>
       </div>
     <div className="py-20 bg-[#121212] ">
     <div className="container">
        <div className="grid grid-cols-2 place-items-center gap-8 ">
          <AchivmentCard/>
          <AchivmentCard/>
          <AchivmentCard/>
          <AchivmentCard/>
        </div>
      </div>
     </div>
    </div>
  )
}

export default AchivmentIndex