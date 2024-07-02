

interface navLink {
    nameRU: string;
    nameEN: string;
    path: string;
    id: number;
  }


 export const navLinks: navLink[] = [
    {
      nameRU: 'главная',
      nameEN: 'home',
      path: "/",
      id: 1
    },
    {
      nameRU: 'о нас',
      nameEN: 'about',
      path: "/about",
      id: 1
    },
    {
      nameRU: 'продукция',
      nameEN: 'product',
      path: "/products",
      id: 1
    },
    {
      nameRU: 'сертификаты',
      nameEN: 'certificate',
      path: "/achivments",
      id: 1
    },
    {
      nameRU: 'связь',
      nameEN: 'contact',
      path: "/contacts",
      id: 1
    },
  ]