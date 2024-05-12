import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllProducts } from "../../Apis/FakeStoreProdApis";

export default function ProductBox({name , price}){
  const[products,setProducts] = useState([]);

const fetchAllProducts = async () =>{
 const response =  await axios.get(getAllProducts())
 setProducts(response.data)
 console.log(products);
}


useEffect(()=>{
  fetchAllProducts();
},[])


    return(
        <>
        
          {
        products.length>0 ? (
            products.map((product)=>(
            <Link to="/productDetails" className="product-list-item">
            <div className="imgDiv">
              <img
                src={product.image}
              />
            </div>
            <div className="product-name">{product.title}</div>
            <div className="product-price">&#8377; {product.price}</div>
          </Link>
            ))
          ) : (
            <div>Loading ...</div>
          )
        }
        
        </>
    )
}