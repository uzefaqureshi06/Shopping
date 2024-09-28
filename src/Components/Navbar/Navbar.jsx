import React, { useState, useContext, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import nav_drop from '../Assets/Frontend_Assets/dropdown_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef(null);

  
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };
 

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_drop} alt="Menu" />

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu('shop')}>
          <Link style={{ textDecoration: 'none' }} to="/mens" className={menu === 'mens' ? 'active-menu' : ''}>Shop</Link>
        </li>
        
        <li onClick={() => setMenu('mens')}>
          <Link style={{ textDecoration: 'none' }} to="/mens" className={menu === 'mens' ? 'active-menu' : ''}>Men</Link>
        </li>

        <li onClick={() => setMenu('womens')}>
          <Link style={{ textDecoration: 'none' }} to="/womens" className={menu === 'womens' ? 'active-menu' : ''}>Women</Link>
        </li>

        <li onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: 'none' }} to="/kids" className={menu === 'kids' ? 'active-menu' : ''}>Kids</Link>
        </li>
      </ul>

      <div className="nav-logo-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
