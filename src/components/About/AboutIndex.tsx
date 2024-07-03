import HomeAbout from "../Home/HomeAbout"


const AboutIndex = () => {
  return (
    <div>
        <div className="header bg-cover bg-center w-full h-[50vh]">
          <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-[36px] font-[800] text-white">О нас</h1>
          </div>
       </div>
       <HomeAbout/>
    </div>
  )
}

export default AboutIndex