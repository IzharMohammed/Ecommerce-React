import React from "react";
import { Link } from "react-router-dom";

export default function ProductBox({name , price}){
    return(
        <>
        <Link to="/productDetails" className="product-list-item">
        <div className="imgDiv">
          <img
            src="https://th.bing.com/th/id/OIP.qZ22ZrAVSKLRbjX5qyAgigHaEf?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
        </div>
        <div className="product-name">{name}</div>
        <div className="product-price">&#8377; {price}</div>
      </Link>
        </>
    )
}