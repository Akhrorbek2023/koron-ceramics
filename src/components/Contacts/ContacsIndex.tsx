import Form from "./Form";

const ContacsIndex = () => {
  return (
    <div>
      <div className="header bg-cover bg-center w-full h-[50vh] flex items-center justify-center">
        <h1 className="text-[36px] md:text-[48px] font-[800] text-white uppercase">
          СВЯЗЬ
        </h1>
      </div>
      <div className="bg-[#121212] py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContacsIndex;
