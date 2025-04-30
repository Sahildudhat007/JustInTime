import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components import
import Findstores from './Components/Findstores/Findstores'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home';
import AllBrand from './Components/AllBrand/AllBrand';
import WatchAccessories from './Pages/WatchAccessories/WatchAccessories';
import Gifting from './Pages/Gifting/Gifting';
import MensWatches from './Pages/MensWatches/MensWatches';
import WomensWatches from './Pages/WomensWatches/WomensWatches';
import Offers from './Pages/Offers/Offers';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/findStores' element={<Findstores />} />
          <Route path='/allBrand' element={<AllBrand />} />
          <Route path='/watchAccessories' element={<WatchAccessories />} />
          <Route path='/gifting' element={<Gifting />} />
          <Route path='/mensWatches' element={<MensWatches />} />
          <Route path='/womensWatches' element={<WomensWatches />} />
          <Route path='/offers' element={<Offers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App