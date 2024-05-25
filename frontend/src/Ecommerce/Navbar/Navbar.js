// Navbar.js
import React from 'react';
import './Navbar.css';

function HomeProduct() {
    return (
        <div className="navbar">
            <nav className="main-nav">
                <div className="product-details">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menproducts">Men</a></li>
                        <li><a href="/womenProducts">Women</a></li>
                    </ul>
                </div>
                <div className="product-store">
                    <ul>
                        <li><a href="/wishList">Wishlist</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </div>
                <div className="logout">
                    <ul>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default HomeProduct;
