
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom';
interface itemProps {
    img: string;
    title: string;
    des: string;
    id: number;
}


const ProductCard: React.FC<itemProps> = ({ img, title, des, id }) => {
    const navigate = useNavigate()
    const handleSingle = () => {
        navigate(`/products/${id}`)
    }
     return (
        <div className='max-w-[300px] p-2 bg-[#2c2c2c] rounded-[14px]'>
            <img className='w-full' src={img} alt="" />
            <h1 className='text-white'>{title}</h1>
            <p className='text-[#A1A1AA]'>{des}</p>
            <h1 
            className='text-white cursor-pointer hover:text-[#71CCAE]'
            onClick={() => handleSingle()}
            >Узнать больше <FontAwesomeIcon icon={faArrowRight} />
            </h1>
        </div>
    )
}

export default ProductCard