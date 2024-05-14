//React imports
import React from "react";
import { Link } from "react-router-dom";

//Custom hook import
import useCategoryItems from "../../Hooks/useCategoryItems";

export default function CategoryItems() {
  const [categories] = useCategoryItems();

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
