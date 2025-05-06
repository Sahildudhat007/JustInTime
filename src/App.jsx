import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components import
import Findstores from './Components/Findstores/Findstores';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import AllBrand from './Components/AllBrand/AllBrand';
import WatchAccessories from './Pages/WatchAccessories/WatchAccessories';
import Gifting from './Pages/Gifting/Gifting';
import MensWatches from './Pages/MensWatches/MensWatches';
import WomensWatches from './Pages/WomensWatches/WomensWatches';
import Offers from './Pages/Offers/Offers';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import { Provider } from 'react-redux';
import Store from './Store'
import Wishlist from './Components/Wishlist/Wishlist';
import AboutUs from './Pages/AboutUs/AboutUs';


function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/findStores' element={<Findstores />} />
            <Route path='/allBrand' element={<AllBrand />} />
            <Route path='/watchAccessories' element={<WatchAccessories />} />
            <Route path='/gifting' element={<Gifting />} />
            <Route path='/mensWatches' element={<MensWatches />} />
            <Route path='/productDetails/:id' element={<ProductDetails />} />
            <Route path='/womensWatches' element={<WomensWatches />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/aboutUs' element={<AboutUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App