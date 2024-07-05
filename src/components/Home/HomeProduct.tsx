import { Link } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import { items } from "../apiProducts";
const selectedItems = items.slice(0, 4);

const HomeProduct = () => {
  return (
    <div className="bg-[#1D1D1D] text-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
          <h1 className="text-2xl md:text-[34px] font-[800] mb-4 md:mb-0">Продукция</h1>
          <p className="text-[#A1A1AA]">
            <Link className="cursor-pointer" to={'/products'}>Все продукция</Link>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 md:gap-6 mb-10">
          {selectedItems.map((item, index) => (
            <ProductCard
              key={index}
              img={item.src}
              title={item.title}
              des={item.description}
              id={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
