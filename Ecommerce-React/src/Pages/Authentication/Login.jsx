//React imports
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './Auth.css'

import {  toast } from 'react-toastify';
import axios from "axios";
import { signin } from "../../Apis/FakeStoreProdApis";
import { useCookies } from "react-cookie";

export default function Login(){
  const[formDetails , setFormDetails] = useState({email : "" , username : "" , password : "" , isLoading : false})
  const[token , setToken , removeToken] = useCookies(['jwt-token']);
const navigate = useNavigate()
  function updateEmail(newEmail){
    setFormDetails({...formDetails , email : newEmail})
  }
  
  function updatePassword(newPassword){
    setFormDetails({...formDetails , password : newPassword})
  }
  
  function updateUserName(newUsername){
    setFormDetails({...formDetails , username : newUsername})
  }
  console.log('tokrn',token)

  async function onFormSubmit () {
    const apiEndpoint = signin();
    console.log('API Endpoint:', apiEndpoint);
   
    try {
      const response = await axios.post(signin() , {
        email : formDetails.email,
        password : formDetails.password , 
        username : formDetails.username
      })
      setToken('jwt-token',response.data.token)
      console.log('Server response:', response.data.token);
   navigate('/') 
    } catch (error) {
      toast.error('Server is off', {
        theme: 'dark', // Apply dark theme
      });
   
    }
  }



    return(
        <>
<div className="container1">
      <div className="column1">
        <div className="heading1">
          <h2>Welcome to shop cart</h2>
        </div>
        <div className="heading2">
          <h2>Login</h2>
        </div>
        <div className="inputs1">
        <input onChange={(e)=>updateUserName(e.target.value)} value={formDetails.username} type="text" className="username1" placeholder="Username" />
          <input onChange={(e)=>updateEmail(e.target.value)} value={formDetails.email} type="email" className="username1" placeholder="email" />
          <input onChange={(e)=>updatePassword(e.target.value)} value={formDetails.password} type="password" className="username1" placeholder="password" />
          <button onClick={onFormSubmit} className="button">Login</button>
        </div>
        <div className="lastDiv1">
            <Link to='/SignUp' style={{ textDecoration: 'none'  , color: 'black' , fontSize : '20px'}}>Don't have an account? sign up here</Link>
            </div>
      </div>
    </div>
        </>
    )
}