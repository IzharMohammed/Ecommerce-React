import React, { useState }  from "react";

export const userContext=React.createContext(null);

const UserContextProvider = (props)=>{
    const[user,setUser]= useState('');
return(
    <userContext.Provider value={{user,setUser}}>
        {props.children}
    </userContext.Provider>
)
}

export default UserContextProvider ; 