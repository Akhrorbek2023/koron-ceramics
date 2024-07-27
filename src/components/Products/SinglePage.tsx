import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../Modals/Modal';
import { getDocs, collection, QuerySnapshot,DocumentData } from 'firebase/firestore';
import { db } from '../../fireStore/config';
import { useCounterStore } from '../../store/store';
import { useTranslation } from 'react-i18next';

interface Data {
  id: string ;
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

const SinglePage: React.FC = () => {
  const { t } = useTranslation();
  const link = useCounterStore((state) => state.link);
  const [data, setData] = useState<Data[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const params = useParams();
  const itemId = params.id;
  console.log(typeof itemId)
  const aboutMe = collection(db, 'koron')
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
  const item: Data | undefined = data.find((d) => d.id == itemId);
 

  return (
    <div className=" text-white  flex items-center justify-center">
      <div className="container">
        <div className="flex lg:justify-between flex-col md:flex-row gap-4 mx-auto">
          {item ? (
            <>
              <div className="w-[100%]">
                <img
                  src={item.src}
                  alt={link === 'en' ? item.en.desc : link == 'uz' ? item.uz.desc : item.ru.desc}
                  className="w-[440px] h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="flex items-center lg:w-9/10 w-full ">
                  <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{link === 'en' ? item.en.title : link == 'uz' ? item.uz.title : item.ru.title }</h2>
                <p className="text-base md:text-lg lg:text-xl mb-6">
                  {link === 'en' ? item.en.def : link == 'uz' ? item.uz.def : item.ru.def }
                </p>
                <button
                  onClick={openModal}
                  className="inline bg-[#71CCAE] hover:bg-[#71CCAE] text-white font-bold py-2 px-4 rounded-md"
                >
                  {t('singleBtn')}
                </button>
                  </div>
              </div>
            </>
          ) : (
            <p>Item not found</p>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SinglePage;
