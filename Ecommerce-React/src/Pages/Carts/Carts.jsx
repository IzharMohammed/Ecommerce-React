//React imports
import { userContext } from "../../Components/context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
//CSS imports
import "./Carts.css";
//component imports
import OrderDetailsProduct from "../../Components/OrderDetailsProduct/OrderDetailsProduct";
//API imports
import { getUserCart } from "../../Apis/FakeStoreProdApis";
import { getProductById } from "../../Apis/FakeStoreProdApis";
//JWT token import
import { jwtDecode } from "jwt-decode";


export default function Carts() {

const[productDetails,setProductDetails] = useState([]);
const[cart,setCart] = useState([]);

const {userToken} = useContext(userContext)
const decoded = jwtDecode(userToken);
console.log('Decoded token is :', decoded);


const  getUserCartFunc = async ()=>{
const response = await axios.get(getUserCart(decoded.id));
setCart(response.data[0].products);
console.log('yaha ', response.data[0].products);
const id = response.data[0].products[0].productId;
console.log(response.data[0].products[0].productId);
console.log(response.data[0].products[0].quantity);
return id ;
}

const getProduct = async (id) =>{
  const response = await axios.get(getProductById(id));
  setProductDetails(response.data);

}

useEffect(()=>{
const fetchData = async ()=>{
 const id =  await getUserCartFunc()
 console.log(id);
getProduct(id);
}
fetchData()
  getProduct()
},[])

console.log('details',productDetails);

  
  return (
    <>
      <div class="outerContainer" id="outerContainer">
        <div class="container" id="container">
          <div class="left-portion">
            <h2 class="heading2">OrderDetails</h2>
            <hr />

        {
          cart && 
          cart.map((cart)=>{
            <OrderDetailsProduct id={cart.productId} quantity={cart.quantity}/>

          })
        }


          </div>
          <div class="innerPortion-col">
            <div class="innerContainer1">
              <h3>Price Details</h3>
              <div class="price1" id="price">
                <div>Price</div>
                <div>&#8377; 10000</div>
              </div>
              <div class="discount">
                <div>Discount</div>
                <div>&#8377; 10</div>
              </div>
              <div class="charges">
                <div>Delivery Charges</div>
                <div>Free</div>
              </div>
              <div class="total" id="total">
                <div>Total</div>
                <div>&#8377; 9990</div>
              </div>
            </div>

            <div class="buttons2">
              <a href="productList.html" class="Continue-shopping-btn">
                Continue Shopping
              </a>
              <a href="#" class="checkout-btn">
                Check out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
