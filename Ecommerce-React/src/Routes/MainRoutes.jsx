import React  from "react";
import { Route,Routes } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ProductList from "../Components/ProductsList/ProductList";
export default function MainRoutes(){
 return(
<>

<Routes>
<Route path="/"    element={<Home /> } />
<Route path="*" element={<Error />} />
<Route  path="product" element={<ProductList />}/>
</Routes>

</>
 )   
}