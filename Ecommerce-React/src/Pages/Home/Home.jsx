import React from "react";
import "./Home.css";
import CategoryItems from "../../Components/CategoryItems/CategoryItems";
export default function Home() {
  return (
    <>
      <div className="main-heading">
        <h1>Welcome to Shopping cart</h1>
        <CategoryItems itemName='All Products' />
      </div>

    
    </>
  );
}
