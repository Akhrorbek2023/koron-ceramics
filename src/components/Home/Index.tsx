
import { Helmet } from "react-helmet-async"
import Header from "./Header"
import HomeAbout from "./HomeAbout"
import HomeCantacs from "./HomeCantacs"
import HomeProduct from "./HomeProduct"


const Index = () => {
  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Koron-ceramics and koran-ceramics handmade ceramic dishes and items" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Header />
        <HomeAbout />
        <HomeProduct />
        <HomeCantacs />
      </div>
    </>
  )
}

export default Index