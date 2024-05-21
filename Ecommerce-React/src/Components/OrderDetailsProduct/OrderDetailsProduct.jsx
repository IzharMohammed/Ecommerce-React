import React from "react";
import { getUserCart } from "../../Apis/FakeStoreProdApis";
import {  useEffect, useState } from "react";
import {   useSearchParams } from "react-router-dom";
import { getProductById } from "../../Apis/FakeStoreProdApis";
import axios from "axios";


export default function OrderDetailsProduct() {
  const[cart,setCart] = useState([]);
const[ productDetails,setProductDetails] = useState([]);
  const [query]=useSearchParams();
  
  const  getUserCartFunc = async ()=>{
  const response = await axios.get(getUserCart(query.get('id')));
  setCart(response.data[0].products);
  }
  console.log('cart',cart);
  


 const getProduct = async () =>{
  const response = await axios.all(cart.map((cart)=>axios.get(getProductById(cart.productId))))
    console.log('uuuuuuuuuu',response);
    setProductDetails(response)
  } 
  console.log('llllll',productDetails);



  useEffect(()=>{
const fetchData = async ()=>{
    await getUserCartFunc()

  getProduct();
  }
  fetchData()
   /*  getProduct() 
    getUserCartFunc() */
  },[])
  
productDetails.map((details)=>console.log(details.data.title))



  return (
    <>
       {
        productDetails &&
        productDetails.map((details)=>(
          <div class="row1">
          <div class="item-img" id="item-img">
            <img
              className="image"
              src={details.data.image}

            />
          </div>
  
          <div class="Product-price" id="Product-price">
            <div class="product-name">{details.data.title}</div>
            <div class="product-price">&#8377; {details.data.price}</div>
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
        
        ))

       }



{/* 
      <div class="row1">
        <div class="item-img" id="item-img">
          <img
            className="image"
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            alt=""
          />

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
      </div> */}


    </>
  );
}
