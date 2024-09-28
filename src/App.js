import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png'
import kid_banner from './Components/Assets/Frontend_Assets/banner_kids.png'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>

          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
