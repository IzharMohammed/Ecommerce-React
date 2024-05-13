import React  from "react";
import { Route,Routes } from "react-router-dom";

// component imports 
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ProductList from "../Components/ProductsList/ProductList";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";

export default function MainRoutes(){
 return(
<>

<Routes>
<Route path="/"    element={<Home /> } />
<Route path="*" element={<Error />} />
<Route  path="product" element={<ProductList />}/>
<Route  path="productDetails" element={<ProductDetails/>}   />
<Route  path="Login" element={<Login/>}   />
<Route  path="SignUp" element={<SignUp/>}   />
</Routes>

</>
 )   
}