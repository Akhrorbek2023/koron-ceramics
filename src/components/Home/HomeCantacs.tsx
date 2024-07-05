import Form from "../Contacts/Form";

const HomeContacts = () => {
  return (
    <div className="bg-[#121212] py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className='text-2xl md:text-[34px] font-[800] text-white mb-6'>СВЯЗЬ</h1>
        <div className="">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default HomeContacts;
