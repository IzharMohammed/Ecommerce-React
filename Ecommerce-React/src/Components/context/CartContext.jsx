import React, { useState }  from "react";

export const cartContext=React.createContext(null);

const CartContextProvider = (props)=>{
    const[cart,setCart]= useState(null);
return(
    <cartContext.Provider value={{cart,setCart}}>
        {props.children}
    </cartContext.Provider>
)
}

export default CartContextProvider ; 