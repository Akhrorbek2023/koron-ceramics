
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const CarouselText = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Slider {...settings}>
        <div className="relative">
          <img src="path/to/your/image.jpg" alt="Slide 1" className="w-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-2xl md:text-4xl mb-4">Ocenite krasotu nashix privlekatel'nyx i izyskannyx dizajnov.</h2>
            <p className="text-base md:text-lg mb-4">Sozdateli "Korona" pridumali i eshhe odno izdeliye s chudesnym dizajnom, kotorye dobavit krasoty stolu</p>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded">Podrobno</button>
          </div>
        </div>
        {/* Qo'shimcha slaydlar shu yerda */}
      </Slider>
    </div>
  );
}

export default CarouselText;
