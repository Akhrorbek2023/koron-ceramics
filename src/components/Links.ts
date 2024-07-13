

interface navLink {
    nameRU: string;
    nameEN: string;
    nameUZ: string;
    path: string;
    id: number;
  }


 export const navLinks: navLink[] = [
    {
      nameRU: 'главная',
      nameEN: 'home',
      nameUZ:'asosiy',
      path: "/",
      id: 1
    },
    {
      nameRU: 'о нас',
      nameEN: 'about',
      nameUZ:'haqida',
      path: "/about",
      id: 1
    },
    {
      nameRU: 'продукция',
      nameEN: 'product',
      nameUZ:'mahsulot',
      path: "/products",
      id: 1
    },
    {
      nameRU: 'сертификаты',
      nameEN: 'certificate',
      nameUZ:'sertifikat',
      path: "/achivments",
      id: 1
    },
    {
      nameRU: 'связь',
      nameEN: 'contact',
      nameUZ:'aloqa',
      path: "/contacts",
      id: 1
    },
  ]