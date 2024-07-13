import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getDocs, collection, QuerySnapshot,DocumentData } from 'firebase/firestore';
import { db } from '../../fireStore/config';
import { useCounterStore } from '../../store/store';

const itemsPerPage = 8; // Har bir pageda ko'rsatiladigan elementlar soni
interface Data {
  id: string;
  src: string;
  ru: {
    title: string;
    desc: string;
    def: string
  },
  en: {
    title: string;
    desc: string;
    def: string
  },
  uz: {
    title: string;
    desc: string;
    def: string
  },
}
const DynamicPagination = () => {
  const link = useCounterStore((state) => state.link);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Data[]>([]);
  const handleChange = (newPage: number) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const aboutMe = collection(db, 'koron')
  console.log(data)
  useEffect(() => {
    const getInfo = async () => {
      try {
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(aboutMe);
        const dataList = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        } as Data));
        setData(dataList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getInfo();
  }, [aboutMe]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 mb-6 md:mb-10 lg:mb-12">
        {selectedItems.map((item) => (
          <ProductCard
            key={item.id}
            img={item.src}
            title={link === 'en' ? item.en.title : link == 'uz' ? item.uz.title : item.ru.title  }
            desc={link === 'en' ? item.en.desc : link == 'uz' ? item.uz.desc : item.ru.desc }
            id={item.id}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center items-center">
        <div className="inline-flex items-center gap-2">
          <button
            onClick={() => handleChange(page - 1)}
            disabled={page === 1}
            className={`h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md hover:bg-[#71CCAE] ${
              page === 1 ? 'bg-gray-300' : 'bg-gray-800 text-white'
            }`}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handleChange(index + 1)}
              className={`h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md hover:bg-[#71CCAE] ${
                page === index + 1 ? 'bg-[#71CCAE] text-white' : 'bg-gray-800 text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handleChange(page + 1)}
            disabled={page === totalPages}
            className={`h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md hover:bg-[#71CCAE] ${
              page === totalPages ? 'bg-gray-300' : 'bg-gray-800 text-white'
            }`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicPagination;
