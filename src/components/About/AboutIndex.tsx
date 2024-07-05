import HomeAbout from "../Home/HomeAbout"

const AboutIndex = () => {
  return (
    <div>
      <div className="header bg-cover bg-center w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-gray-800">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
            О нас
          </h1>
        </div>
      </div>
      <HomeAbout />
    </div>
  )
}

export default AboutIndex
