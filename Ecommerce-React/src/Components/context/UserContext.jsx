import React, { useState }  from "react";

export const userContext=React.createContext(null);

const UserContextProvider = (props)=>{
    const[userToken,setUserToken]= useState('');
return(
    <userContext.Provider value={{userToken,setUserToken}}>
        {props.children}
    </userContext.Provider>
)
}

export default UserContextProvider ; 