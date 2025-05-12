
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Product from './Pages/Product/Product'

function App() {
  

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

      </Routes>
    </>
  )
}

export default App
