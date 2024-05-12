import React from "react";
import './Auth.css'
import { Link } from "react-router-dom";
export default function Login(){
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
          <input type="text" className="username1" placeholder="Username" />
          <input type="password" className="username1" placeholder="password" />
          <button className="button">Login</button>
        </div>
        <div className="lastDiv1">
            <Link to='/SignUp' style={{ textDecoration: 'none'  , color: 'black' , fontSize : '20px'}}>Don't have an account? sign up here</Link>
            </div>
      </div>
    </div>
        </>
    )
}