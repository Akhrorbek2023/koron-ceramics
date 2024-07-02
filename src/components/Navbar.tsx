import { Link } from "react-router-dom";
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationRU from "../locale/translationRU";
import translationEN from "../locale/translationEN";
import { useCounterStore } from "../store/store";


i18n.use(initReactI18next).init({
  resources:{
     ru: {translation: translationRU},
     en: {translation: translationEN}
  },
  lng: 'ru',
  fallbackLng:'ru'
})
interface NavLink {
  nameRU: string;
  nameEN: string;
  path: string;
  id:number;
}

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar = ({navLinks}:NavbarProps) => {
  const link = useCounterStore((state) => state.link)
  interface ChangeLangEvent extends React.ChangeEvent<HTMLSelectElement> {}
 const changeLang = (e:ChangeLangEvent) => {
  i18n.changeLanguage(e.target.value)
  useCounterStore.setState({link: e.target.value})
 }



 

  return (
    <div className="z-50 w-full absolute top-0">
      <div className="container text-white">
        <nav>
          <ul className="flex justify-between items-center">
            <li>
              <Link  to={''}>
                 <img className="w-[90px]" src="../../public/Logo.png" alt="" />
              </Link>
            </li>
            {
              navLinks.map((item) => (
                <li>
                  <Link className="uppercase" to={item.path}>
                     {
                      link == 'en' ? item.nameEN : item.nameRU
                     }
                  </Link>
                </li>
              ))
            }
            <li>
              <select onChange={changeLang} className="border-none bg-transparent leading-tight focus:outline-none">
                <option className="bg-none border-none" value="ru">RU</option>
                <option className="bg-none border-none" value="en">EN</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar