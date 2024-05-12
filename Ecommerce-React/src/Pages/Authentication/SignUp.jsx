import React from "react";
import './Auth.css'
import { Link } from "react-router-dom";


export default function SignUp(){
    return(
        <>
<div class="container1">
      <div class="column1">
        <div class="heading1">
          <h2>Welcome to shop cart</h2>
        </div>
        <div class="heading2">
          <h2>Sign UP</h2>
        </div>
        <div class="inputs1">
          <input type="text" class="username1" placeholder="Username" />
          <input type="password" class="username1" placeholder="password" />
          <button className="button">SignUp</button>
        </div>
        <div class="lastDiv1">
            <Link to='/Login' style={{ textDecoration: 'none' , color: 'black' , fontSize : '20px' }}>  Already have an account ?  Login </Link>
          </div>
      </div>
    </div>
        </>
    )
}