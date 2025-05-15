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
import { Provider } from 'react-redux';
import Store from './Store';
import Wishlist from './Components/Wishlist/Wishlist';
import AboutUs from './Pages/AboutUs/AboutUs';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import SmartWatches from './Pages/SmartWatches/SmartWatches';
import ArrivalWatches from './Pages/ArrivalWatches/ArrivalWatches';
import User from './Components/User/User';
import Franchise from './Pages/Franchise/Franchise';
import Contact from './Pages/Contact/Contact';
import CorporateGift from './Pages/CorporateGift/CorporateGift';
import TermsCondition from './Pages/TermsCondition/TermsCondition';
import ReturnRefunds from './Pages/ReturnRefunds/ReturnRefunds';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import PressReleases from './Pages/PressReleases/PressReleases';

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/findStores' element={<Findstores />} />
            <Route path='/allBrand' element={<AllBrand />} />
            <Route path='/watchAccessories' element={<WatchAccessories />} />
            <Route path='/gifting' element={<Gifting />} />
            <Route path='/mensWatches' element={<MensWatches />} />
            <Route path='/womensWatches' element={<WomensWatches />} />
            <Route path='/productDetails/:id' element={<ProductDetails />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/arrivalWatches' element={<ArrivalWatches />} />
            <Route path='/smartWatches' element={<SmartWatches />} />
            <Route path='/user' element={<User />} />
            <Route path='/franchise' element={<Franchise />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/corporateGift' element={<CorporateGift />} />
            <Route path='/termsCondition' element={<TermsCondition />} />
            <Route path='/returnRefunds' element={<ReturnRefunds />} />
            <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
            <Route path='/pressReleases' element={<PressReleases />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App