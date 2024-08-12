import { useTranslation } from "react-i18next";
import AchivmentCard from "./AchivmentCard"
import Diplom from '../../assets/DIPLOM-1.jpg'
import Diplom2 from '../../assets/DARAJALI-1.jpg'
import Diplom3 from '../../assets/GUVOHNOMA.jpg'
import { Helmet } from "react-helmet-async";
interface cerProps {
  id: number,
  title: string,
  src: string,
}
const certificates: cerProps[] = [
  {
    id: 1,
    title: '',
    src: Diplom

  },
  {
    id: 2,
    title: '',
    src: Diplom2

  },
  {
    id: 3,
    title: '',
    src: Diplom3

  }
]


const AchivmentIndex = () => {
  const { t } = useTranslation();
  return (
    <>
     <Helmet>
      <title>Koron ceramics Achivment</title>
      <meta name="description" content="Team of Koron-ceramics's achivments and certificates " />
      <link rel="canonical" href="/achivments" />
    </Helmet>
      <div>
        <div className="header bg-cover bg-center w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-[36px] font-[800] text-white uppercase">{t('certificate')}</h1>
          </div>
        </div>
        <div className="py-20 bg-[#121212] ">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 place-items-center gap-10 ">
              {
                certificates.map((item) => (
                  <AchivmentCard
                    key={item.id}
                    src={item.src}
                    title={item.title}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AchivmentIndex