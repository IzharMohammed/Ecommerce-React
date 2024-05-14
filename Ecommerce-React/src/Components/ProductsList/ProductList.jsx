//React imports
import React from "react";

//Component imports
import FilterProducts from "../FilterProducts/FilterProducts";
import ProductBox from "../ProductBox/ProductBox";

//CSS imports
import "./ProductList.css";

//Custom hook import
import useCategoryItems from "../../Hooks/useCategoryItems";

export default function ProductList() {
  const categories = useCategoryItems();

  return (
    <>
      <h1 className="heading">All Products</h1>
      <div className="container">
        <div className="Lists">
          <div className="heading1">Search Products</div>
          <input type="text" className="input" placeholder="Search by name" />
          <div className="heading2">Categories</div>

          <div className="categoryList" id="categoryList">
            {categories &&
              categories.map((category) => (
                <div key={category} className="products1">
                  <a href="productList.html?category=electronics">{category}</a>
                </div>
              ))}

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
          <ProductBox />
        </div>
      </div>
    </>
  );
}
