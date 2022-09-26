import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Products/Product';
import "./Shop.css"
// import Header from '../header/header';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then( data => setProducts(data))
    } ,[])

  const handelCart = (product) =>{
    const newCart = [...cart, product];
    setCart( newCart);
    console.log(newCart);
    
    
    };

    
    return (
      
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map( product => 
                    <Product 
                        img = {product.img}
                        name = {product.name}
                        stock = {product.stock}
                        price = {product.price}
                        ratings = {product.ratings}
                        category = {product.category}
                        key = {product.id}
                        handelEvent = {handelCart} />)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summery</h3>
                <p>Items in Cart: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
