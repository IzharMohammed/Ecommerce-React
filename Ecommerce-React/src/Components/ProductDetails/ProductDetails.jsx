import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { getProductById } from "../../Apis/FakeStoreProdApis";
export default function ProductDetails() {
  const[product,setProduct] = useState(null);
const [query] = useSearchParams()
 
const fetchProductById = async (id)=>{
  const response = await axios(getProductById(id))
  console.log(response.data);
  setProduct(response.data)
}

useEffect(()=>{
  fetchProductById(query.get("id"))
},[])


  return (
    <>
    {
      product && 
      <div class="productDetails-wrapper" id="productDetails-wrapper">
      <div class="productDetails-img">
        <img
          src={product.image}
        />
      </div>
      <div class="test">
        <div class="productDetails">
          <h2 class="product-description-heading">{product.title}</h2>
          <div class="product-description-amt">&#8377; {product.price}</div>
          <div class="product-description-title">Description</div>
          <div class="product-description-data">
          {product.description}
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
    }
    </>
  );
}
