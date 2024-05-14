//React imports
import React from "react";
import { Link } from "react-router-dom";

//Custom hook import
import useCategoryItems from "../../Hooks/useCategoryItems";

export default function CategoryItems() {
  const categories = useCategoryItems();

  return (
    <>
      <div className="product-container">
        {categories.length > 0 ? (
          /*   (<div class="products">
          <Link to={`/product?category=`}>All Products</Link>
          </div>) */
          categories.map((category) => (
            <div class="products">
              <Link to={`/product?category=${category}`}>{category}</Link>
            </div>
          ))
        ) : (
          <div>Loading ........</div>
        )}
      </div>
    </>
  );
}
