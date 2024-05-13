import React from "react";
import "./ProductDetails.css";
export default function ProductDetails() {
  return (
    <>
      <div class="productDetails-wrapper" id="productDetails-wrapper">
        <div class="productDetails-img">
          <img
            src="https://th.bing.com/th/id/OIP.qZ22ZrAVSKLRbjX5qyAgigHaEf?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
        </div>
        <div class="test">
          <div class="productDetails">
            <h2 class="product-description-heading">Some Product</h2>
            <div class="product-description-amt">&#8377; 10000</div>
            <div class="product-description-title">Description</div>
            <div class="product-description-data">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              debitis culpa voluptatibus natus distinctio quisquam in vero autem
              impedit quo! Vitae sunt debitis ex quaerat eveniet nobis at
              nesciunt dolorum.
            </div>
            <div class="buttons">
              <button class="button1">Add to cart</button>
            </div>
            <a href="#" class="button2">
              Go to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
