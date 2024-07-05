import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

interface itemProps {
  img: string;
  title: string;
  des: string;
  id: number;
}

const ProductCard: React.FC<itemProps> = ({ img, title, des, id }) => {
  const navigate = useNavigate();
  const handleSingle = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="max-w-[300px] md:max-w-[350px] lg:max-w-[400px] p-4 bg-[#2c2c2c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto">
      <img className="w-full h-[200px] md:h-[220px] lg:h-[250px] object-cover rounded-md mb-4" src={img} alt={title} />
      <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2">{title}</h1>
      <p className="text-[#A1A1AA] text-sm md:text-base lg:text-lg mb-4">{des}</p>
      <button
        className="text-white text-sm md:text-base lg:text-lg cursor-pointer hover:text-[#71CCAE] flex items-center gap-2"
        onClick={handleSingle}
      >
        Узнать больше <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default ProductCard;
