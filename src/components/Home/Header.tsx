import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header bg-cover bg-center w-full h-[100vh] overflow-hidden flex items-center justify-center">
      {/* Kontentingizni bu yerga joylashtiring */}
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">{t('homeHeader')}</h1>
      </div>
    </div>
  );
};

export default Header;
