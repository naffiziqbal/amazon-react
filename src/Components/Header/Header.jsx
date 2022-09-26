import React from 'react';
import "./Header.css"
import logo from  '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" />
           <div className="header_link">
            <a href="/shop">Shop</a>
            <a href="/order">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
           </div>
        </nav>
    );
};

export default Header;
