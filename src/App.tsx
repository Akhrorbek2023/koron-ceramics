import './App.css'
import Index from './components/Home/Index'
import Navbar from './components/Navbar'
import { navLinks } from './components/Links'
import Footer from './components/Footer'
import { Routes, Route, useParams } from 'react-router-dom'
import AboutIndex from './components/About/AboutIndex'
import ProductIndex from './components/Products/ProductIndex'
import ContacsIndex from './components/Contacts/ContacsIndex'
import AchivmentIndex from './components/Achivment/AchivmentIndex'
import ProducstSingle from './components/Products/ProducstSingle'
import { useCounterStore } from './store/store'
// import AdminForm from './AdminPanel'
// import AdminForm from './AdminPanel'

function App() {
  console.log(navLinks)

  const link = useCounterStore((state) => state.link)

  console.log(link)
  const param = useParams()
  console.log(param)
  return (
    <>
     
          <Navbar navLinks={navLinks} />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<AboutIndex />} />
            <Route path='/products' element={<ProductIndex />} />
            <Route path='/products/:id' element={<ProducstSingle />} />
            <Route path='/achivments' element={<AchivmentIndex />} />
            <Route path='/contacts' element={<ContacsIndex />} />
            {/* <Route path='/admin' element={<AdminForm />} /> */}
          </Routes>
          <Footer navLinks={navLinks} />
      
      {/* <Routes>
      <Route path='/admin' element={<AdminForm />} />
      </Routes> */}
    </>
  )
}

export default App
