//React imports
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
//API import
import { getUserCart } from "../../Apis/FakeStoreProdApis";
import { getProductById } from "../../Apis/FakeStoreProdApis";
//Context import
import { userContext } from "../context/UserContext";

export default function OrderDetailsProduct() {
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [query] = useSearchParams();

  const { user } = useContext(userContext);

  const getUserCartFunc = async () => {
    console.log("id", query.get("id"));
    const response = await axios.get(getUserCart(user.id));
    console.log("response :-", response);
    setCart(response.data[0].products);
  };

  console.log("cart", cart);

  const getProduct = async (cartItems) => {
    try {
      const response = await axios.all(
        cartItems.map((cart) => axios.get(getProductById(cart.productId)))
      );
      console.log("uuuuuuuuuu", response);
      setProductDetails(response);
    } catch (error) {
      console.log("Something error :-", error);
    }
  };
  console.log("llllll", productDetails);

  useEffect(() => {
    getUserCartFunc();
  }, []);

  useEffect(() => {
    if (cart) {
      getProduct(cart);
    }
  }, [cart]);

  return (
    <>
      {productDetails &&
        productDetails.map((details) => (
          <div class="row1">
            <div class="item-img" id="item-img">
              <img className="image" src={details.data.image} />
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
        ))}

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
