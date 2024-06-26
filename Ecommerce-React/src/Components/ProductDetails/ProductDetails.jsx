import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { getProductById } from "../../Apis/FakeStoreProdApis";
import { userContext } from "../context/UserContext";
import { addNewProduct } from "../../Apis/FakeStoreProdApis";
import { useNavigate } from "react-router-dom";
export default function ProductDetails() {

  const[product,setProduct] = useState(null);
const [query] = useSearchParams()
const navigate = useNavigate()
 const{user}=useContext(userContext);
const cartId = query.get('id');


 console.log(user);
 //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWFhIiwiaWQiOjEzLCJpYXQiOjE3MTYwMjQ5MzV9.1Vj5ekt9jSBCyoG-fIGewA_1NiMBObEC3dKeR2U3HWs";
 /* const decoded = jwtDecode(user); */
 console.log('Decoded token is :', user.id);



const fetchProductById = async (id)=>{
  const response = await axios(getProductById(id))
  console.log(response.data);
  setProduct(response.data)
}

useEffect(()=>{
  fetchProductById(query.get("id"))
},[])

 const addToCart=async()=>{
  console.log('hiba');
  const response =await axios.put(addNewProduct(),{
    userId : user.id ,
    productId :product.id
  })
  navigate(`/cart?id=${cartId}`)
  console.log('response',response);
} 

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
            <button onClick={()=>addToCart()} class="button1">Add to cart</button>
          </div>
          <Link to={`/cart?id=${cartId}` }class="button2">Go to cart</Link>
    
        </div>
      </div>
    </div>
    }
    </>
  );
}
