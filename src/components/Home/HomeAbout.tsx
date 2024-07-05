import AboutImage from '../../assets/HomeAboutImage.png';

const HomeAbout = () => {
  return (
    <div className='py-10 md:py-20 bg-[#121212] text-white'>
      <div className="container mx-auto px-4">
        <h1 className='text-2xl md:text-[34px] font-[800] mb-6 md:mb-10'>О нас</h1>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10'>
          <p className='leading-loose w-full md:w-[50%] text-[#A1A1AA]'>
            Kомпания “KORON CERAMICS” считающаясяместом, где узбекском национальное керамическоеискусство встречаются с изысканным вкусом, предлагает вам элегантное сочетание вашего интерьера и экстерьера. Центр, который основал мастер-предприниматель Равшан Таджиддинов, объединякт более 50 талантливых мастеров. На настоящее время компания “KORON CERAMICS”регулярно экспортирует свою продукцию в Россию, Грузию, Молдаву, Латвию, Фаластин, Германию и Озарбайжан.  Риштонский гончарный завод “KORON CERAMICS” занимает двухэтажное здание: на первом этаже производится продукция, а на втором этаже - галерея готовой продукции.Что здесь? В этом каталоге представлены образцы народных промыслов, изготовленные в гончарном доме“KORON CERAMICS”. Вы можете выбирать из множества предметов, радующих глаз уникальным дизайном и яркими орнаментами. Наслаждайтесь неповторимыми шикарными узорами инациональным духом!
          </p>
          <img className='w-full md:w-[500px]' src={AboutImage} alt="Images" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
