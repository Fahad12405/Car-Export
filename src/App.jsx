import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import HowToBuy from './Pages/HowToBuy'
import WhyChooseUs from './Pages/WhyChooseUs'
import ContactSection from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import SearchCars from './Pages/SearchCars'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-to-buy' element={<HowToBuy />} />
        <Route path='/why-choose-us' element={<WhyChooseUs />} />
        <Route path='/contact' element={<ContactSection />} /> 
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/Search-Cars' element={<SearchCars />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
