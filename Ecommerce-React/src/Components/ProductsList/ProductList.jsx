import React from "react";
import './ProductList.css'
import { Link } from "react-router-dom";
import FilterProducts from "../FilterProducts/FilterProducts";
export default function ProductList() {
  return (
    <>
  <h1 className="heading">All Products</h1>  
<div className="container">
<div className="Lists">
<div className="heading1">
    Search Products
</div>
<input type="text" className="input" placeholder="Search by name" />
<div className="heading2">
    Categories
</div>

<div className="categoryList" id="categoryList">
 <div className="products1"><a href="productList.html?category=electronics">Electronics</a></div>
 <div className="products1"><a href="productList.html?category=jewelery">jewelery</a></div>
 <div className="products1"><a href="productList.html?category=men's clothing">men's clothing</a></div>
 <div className="products1"><a href="productList.html?category=women's clothing">women's clothing</a></div>
</div>

<FilterProducts />

<div className="buttons">
<button className="search" id="search">Search</button>
<button className="search">Clear Filters</button>
</div>
</div>

<div className="product-list-box" id="productList">



<Link  to="/productDetails" className="product-list-item">
<div className="imgDiv"><img src="https://th.bing.com/th/id/OIP.qZ22ZrAVSKLRbjX5qyAgigHaEf?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
<div className="product-name">Some Product</div>
<div className="product-price">&#8377; 10000</div>
</Link>

</div>
</div>

    </>
  );
}
