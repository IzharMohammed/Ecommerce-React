//React imports
import React from "react";
import { Link } from "react-router-dom";

//Custom hook import
import useCategoryItems from "../../Hooks/useCategoryItems";

import { jwtDecode } from "jwt-decode";

export default function CategoryItems() {
  const [categories] = useCategoryItems();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWFhIiwiaWQiOjEzLCJpYXQiOjE3MTYwMjQ5MzV9.1Vj5ekt9jSBCyoG-fIGewA_1NiMBObEC3dKeR2U3HWs";
const decoded = jwtDecode(token);
console.log('Decoded token is :', decoded);


  return (
    <>
 <div className="product-container">
        { Array.isArray(categories) && categories.length > 0 &&
          categories.map(category=> 
            <div className="products">
              <Link to={`/product?category=${category}`}>{category}</Link>
            </div>
          )
        }
      </div>
    </>
  );
}
