import React, { useContext, useEffect } from "react";
import "./Home.css";
import CategoryItems from "../../Components/CategoryItems/CategoryItems";
import { userContext } from "../../Components/context/UserContext";

export default function Home() {
const{user}=useContext(userContext);
useEffect(()=>{},[user])
  return (
    <>
      <div className="main-heading">
        <h1>Welcome to Shopping cart</h1>
        <CategoryItems itemName='All Products' />
      </div>

    
    </>
  );
}
