import SinglePage from "./SinglePage"


const ProducstSingle = () => {
  return (
    <div>
    <div className="bg-[url('../../../public/HeaderImage.png')] bg-cover bg-center w-full h-[50vh]">
      <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-[36px] font-[800] text-white">ПРОДУКЦИЯ</h1>
      </div>
   </div>
   <div className="bg-[#121212] py-20">
     <SinglePage/>
   </div>
</div>
  )
}

export default ProducstSingle