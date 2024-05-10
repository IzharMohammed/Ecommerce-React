import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="main-heading">
        <h1>Welcome to Shopping cart</h1>
      </div>

      <div className="row" id="row">
        <div className="product-container">
          <div className="products">
            <a href="">Electronics</a>
          </div>

          <div className="products">
            <a href="">Electronics</a>
          </div>
          <div className="products">
            <a href="">Electronics</a>
          </div>
          <div className="products">
            <a href="">Electronics</a>
          </div>
        </div>
      </div>
    </>
  );
}
