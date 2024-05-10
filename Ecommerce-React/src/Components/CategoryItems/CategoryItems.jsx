import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItems({ itemname }) {
  return (
    <>
      <div className="product-container">
        <div class="products">
          <Link to="/product">Electronics</Link>
        </div>
      </div>
    </>
  );
}
