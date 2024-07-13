import { useTranslation } from "react-i18next";
import HomeAbout from "../Home/HomeAbout"

const AboutIndex = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="header bg-cover bg-center w-full h-[50vh] md:h-[60vh] lg:h-[70vh">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white uppercase">
            {t('about')}
          </h1>
        </div>
      </div>
      <HomeAbout />
    </div>
  )
}

export default AboutIndex
