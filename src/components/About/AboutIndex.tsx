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
      {/* <div className="bg-[#121212] pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center  lg:gap-5 md:gap-4 sm:gap-3 gap-y-5">
            {
              images.map((item) => (
                <img className="shadow-lg   delay-150 w-full h-[250px] rounded-[15px] hover:scale-105" key={item.id} src={item.img} alt="" />
              ))
            }
          </div>
         
        </div>
      </div> */}
    </div>
  )
}

export default AboutIndex
