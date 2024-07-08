import SinglePage from "./SinglePage";

const ProducstSingle = () => {
  return (
    <div>
      {/* Header */}
      <div className="header bg-cover bg-center w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            ПРОДУКЦИЯ
          </h1>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-[#121212] py-10 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <SinglePage />
        </div>
      </div>
    </div>
  );
};

export default ProducstSingle;
