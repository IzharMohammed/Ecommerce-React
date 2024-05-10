import React from "react";
import './ProductList.css'
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

<div className="ranges">
    <select name='min-price' class="min-range" id="min-price">
        <option value="0">0</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
    </select>
        <select name='max-price' class="max-price" id="max-price">
          <option value="0">0</option>
         <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
         <option value="100">100</option>
        <option value="200">200</option>
         <option value="1000">1000</option>
            </select>
</div>
<div className="buttons">
<button className="search" id="search">Search</button>
<button className="search">Clear Filters</button>
</div>
</div>

<div className="product-list-box" id="productList">

<a href="productDetails.html" className="product-list-item">
<div className="imgDiv"><img src="https://th.bing.com/th/id/OIP.qZ22ZrAVSKLRbjX5qyAgigHaEf?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
<div className="product-name">Some Product</div>
<div className="product-price">&#8377; 10000</div>
</a>

</div>
</div>

    </>
  );
}
