

const SinglePage = () => {
  return (
    <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md text-white">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Product Title</h2>
      <p className="text-sm md:text-base lg:text-lg mb-4">
        This is a description of the product. You can add more details here.
      </p>
      <img src="your-image-url" alt="Product Image" className="w-full h-auto rounded-md" />
      <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">
        Buy Now
      </button>
    </div>
  );
};

export default SinglePage;
