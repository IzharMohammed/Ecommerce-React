import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllProducts, getAllProductsByCategory } from "../../Apis/FakeStoreProdApis";

export default function ProductBox() {
  const [products, setProducts] = useState([]);
  const [query] = useSearchParams();

  const fetchAllProducts = async (category) => {
    const downloadUrl = category ? getAllProductsByCategory(category ): getAllProducts()
    const response = await axios.get(downloadUrl);
    setProducts(response.data);
    console.log(products);
  };

  useEffect(() => {
    fetchAllProducts(query.get("category"));
  }, [query.get("category")]);

  return (
    <div key={products.id}>
      {products.length > 0 ? (
        products.map((product) => (
          <Link to="/productDetails" className="product-list-item">
            <div className="imgDiv">
              <img src={product.image} />
            </div>
            <div className="product-name">{product.title}</div>
            <div className="product-price">&#8377; {product.price}</div>
          </Link>
        ))
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}
