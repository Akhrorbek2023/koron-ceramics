import { Link } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import { useTranslation } from "react-i18next";
import { getDocs, collection, QuerySnapshot,DocumentData } from 'firebase/firestore';
import { db } from '../../fireStore/config';
import { useCounterStore } from '../../store/store';
import { useEffect, useState } from "react";





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
const HomeProduct = () => {
  const link = useCounterStore((state) => state.link);
  const [data, setData] = useState<Data[]>([]);
  const { t } = useTranslation();
  const aboutMe = collection(db, 'koron')
  const selectedItems = data.slice(0, 4);
  useEffect(() => {
    const getInfo = async () => {
      try {
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(aboutMe);
        const dataList = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        } as Data));
        console.log(dataList)
        setData(dataList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getInfo();
  }, [aboutMe]);
  return (
    <div className="bg-[#1D1D1D] text-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
          <h1 className="text-2xl md:text-[34px] font-[800] mb-4 md:mb-0 capitalize">{t('prod')}</h1>
          <p className="text-[#A1A1AA]">
            <Link className="cursor-pointer" to={'/products'}>{t('allProducts')}</Link>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 md:gap-6 mb-10">
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
      </div>
    </div>
  );
}

export default HomeProduct;
