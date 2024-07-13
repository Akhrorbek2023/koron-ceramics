import { useTranslation } from 'react-i18next';
import AboutImage from '../../assets/HomeAboutImage.png';

const HomeAbout = () => {
  const { t } = useTranslation();
  return (
    <div className='py-10 md:py-20 bg-[#121212] text-white'>
      <div className="container mx-auto px-4">
        <h1 className='text-2xl md:text-[34px] font-[800] mb-6 md:mb-10 capitalize'>{t('about')}</h1>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10'>
          <p className='leading-loose w-full md:w-[50%] text-[#A1A1AA]'>
            {t('homeAboutText')}
          </p>
          <img className='w-full md:w-[500px]' src={AboutImage} alt="Images" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
