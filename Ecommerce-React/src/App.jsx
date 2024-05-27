import Header from "./Components/Header/Header";
import "./App.css";
import MainRoutes from "./Routes/MainRoutes.jsx";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { userContext } from "./Components/context/UserContext.jsx";


function App() {
  const[token , setToken] = useCookies(['jwt-token']);
  const{user,setUser}= useContext(userContext);

async function accesstoken(){
 const res =  await  axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`,{withCredentials : true})
 setToken('jwt-token', res.data.token,{httpOnly : true});
 const tokenDetails = jwtDecode(res.data.token);
 console.log('token details :',tokenDetails);
 setUser({username : tokenDetails.user , id : tokenDetails.id});
}

useEffect(()=>{
  accesstoken()
},[])

  return (
    <>
      <Header color='dark' light={true} dark={true} expand='md' container='sm' />
       <MainRoutes />
    </>
  );
}

export default App;
