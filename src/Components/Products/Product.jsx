import React from "react";
import "./Product.css";

const Product = (product) => {
  const { img, name, stock, price, ratings, category } = product;
    

  return (
    <>
      <div className="product">
        <img src={img} alt="product" />
        <p>Name: {name ? name  : "Information Not Available"}</p>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>
        <p>Rating: {ratings ? ratings : "N/A"}</p>
        <p>Category : {category}</p>
        <button className="cart-btn" onClick={()=> product.handelEvent(product)}>Add To Cart</button>
      </div>
    </>
  );
};

export default Product;
