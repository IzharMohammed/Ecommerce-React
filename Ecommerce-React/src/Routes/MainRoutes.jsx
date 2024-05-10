import React  from "react";
import { Route,Routes } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

export default function MainRoutes(){
 return(
<>

<Routes>
<Route path="/"    element={<Home /> } />
<Route path="*" element={<Error />} />
</Routes>

</>
 )   
}