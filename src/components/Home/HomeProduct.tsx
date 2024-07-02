import ProductCard from "../Products/ProductCard"
import { items } from "../apiProducts"
const selectedItems = items.slice(0, 4);

const HomeProduct = () => {



  return (
    <div className="bg-[#1D1D1D] text-white py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[34px] font-[800]">Продукция</h1>
          <p className="text-[#A1A1AA]">Все продукция</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 mb-20">
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
  )
}

export default HomeProduct