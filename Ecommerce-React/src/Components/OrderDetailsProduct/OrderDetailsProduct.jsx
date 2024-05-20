import React from "react";

export default function OrderDetailsProduct({id , quantity}) {
  console.log('id',id);
  console.log('quantity',quantity);
  return (
    <>
      <div class="row1">
        <div class="item-img" id="item-img">
          <img
            className="image"
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            alt=""
          />
          <div>{id}</div>
        </div>

        <div class="Product-price" id="Product-price">
          <div class="product-name">Some Product</div>
          <div class="product-price">&#8377; 10000</div>
        </div>

        <div class="quantity">
          <div class="qty">Quantity</div>
          <select name="min-price" class="quantity1" id="quantity1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <button class="btn2" id="btn2">
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
