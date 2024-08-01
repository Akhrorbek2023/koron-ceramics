import { useTranslation } from 'react-i18next';
import { image01, image02, image03, image04, image05, image06, image07, image08 } from "../About/AboutImage";
const HomeAbout = () => {
  const images = [
    {
      id: 1,
      img: image01,
    },
    {
      id: 2,
      img: image02,
    },
    {
      id: 3,
      img: image03,
    },
    {
      id: 4,
      img: image04,
    },
    {
      id: 5,
      img: image05,
    },
    {
      id: 6,
      img: image06,
    },
    {
      id: 7,
      img: image07,
    },
    {
      id: 8,
      img: image08,
    },
  ]
  const { t } = useTranslation();
  return (
    <div className='py-10 md:py-20 bg-[#121212] text-white'>
      <div className="container mx-auto px-4">
        <h1 className='text-2xl md:text-[34px] font-[800] mb-6 md:mb-10 capitalize'>{t('about')}</h1>
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10'>
          <p className='leading-loose w-full md:w-[50%] text-[#A1A1AA]'>
            {t('homeAboutText')}
          </p>
            <div className='grid grid-cols-2 gap-5'>
              {
                images.map((d) => (
                  <img key={d.id} className='w-full md:w-[300px] rounded-lg' src={d.img} alt="Images" />
                ))
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
