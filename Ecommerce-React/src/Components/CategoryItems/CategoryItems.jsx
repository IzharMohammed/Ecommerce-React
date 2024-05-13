import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios"
import  { getAllCategories } from "../../Apis/FakeStoreProdApis"

export default function CategoryItems() {
const[categories,setCategories] = useState('');


const fetchData = async () => {
const response = await axios.get(getAllCategories())
console.log(response.data);
setCategories(response.data);
}


useEffect (()=>{
fetchData()
},[])

  return (
   <>
      <div className="product-container">
    {
      categories.length>0 ?
     (
        categories.map((category)=>(
          <div class="products">
          <Link to={`/product?category=${category}`}>{category}</Link>
          </div>
        ))
       )
      : (
        <div>Loading ........</div>
      )
    }
      </div>
    </> 
  );
}
