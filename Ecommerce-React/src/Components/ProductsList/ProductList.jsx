import React from "react";
import "./ProductList.css";
import FilterProducts from "../FilterProducts/FilterProducts";
import ProductBox from "../ProductBox/ProductBox";
export default function ProductList() {
  return (
    <>
      <h1 className="heading">All Products</h1>
      <div className="container">
        <div className="Lists">
          <div className="heading1">Search Products</div>
          <input type="text" className="input" placeholder="Search by name" />
          <div className="heading2">Categories</div>

          <div className="categoryList" id="categoryList">
            <div className="products1">
              <a href="productList.html?category=electronics">Electronics</a>
            </div>
            <div className="products1">
              <a href="productList.html?category=jewelery">jewelery</a>
            </div>
            <div className="products1">
              <a href="productList.html?category=men's clothing">
                men's clothing
              </a>
            </div>
            <div className="products1">
              <a href="productList.html?category=women's clothing">
                women's clothing
              </a>
            </div>
          </div>

          <FilterProducts />

          <div className="buttons">
            <button className="search" id="search">
              Search
            </button>
            <button className="search">Clear Filters</button>
          </div>
        </div>

        <div className="product-list-box" id="productList">
      <ProductBox  name={'some Product'} price = {10000} />
        </div>
      </div>
    </>
  );
}
