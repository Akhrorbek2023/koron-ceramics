import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface itemProps {
  img: string;
  title: string;
  desc: string;
  id: string | number;
}

const ProductCard: React.FC<itemProps> = ({ img, title, desc, id }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleSingle = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="max-w-[300px] md:max-w-[350px] lg:max-w-[400px] p-4 bg-[#2c2c2c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto">
      <img className="w-full h-[200px] md:h-[220px] lg:h-[250px] object-cover rounded-md mb-4" src={img} alt={title} />
      <h1 className="text-white text-xl md:text-2xl lg:text-2xl font-bold mb-2">{title}</h1>
      <p className="text-[#A1A1AA] text-sm md:text-base lg:text-lg mb-4">{desc}</p>
      <button
        className="text-white text-sm md:text-base lg:text-lg cursor-pointer hover:text-[#71CCAE] flex items-center gap-2"
        onClick={handleSingle}
      >
        {t('learnMore')} <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default ProductCard;
