import React, { useEffect, useState } from "react";
import './Auth.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signUp } from "../../Apis/FakeStoreProdApis";


export default function SignUp(){
  const navigate = useNavigate()
  const[resetSignupform , setResetSignupform] = useState(false);
    const[formDetails , setFormDetails] = useState({email : "" , username : "" , password : "" , isLoading : false})

function updateEmail(newEmail){
  setFormDetails({...formDetails , email : newEmail})
}

function updatePassword(newPassword){
  setFormDetails({...formDetails , password : newPassword})
}

function updateUserName(newUsername){
  setFormDetails({...formDetails , username : newUsername})
}

  async function onFormSubmit () {
    setFormDetails({...formDetails , isLoading : true})

    try {
      const response = await axios.post(signUp() , {
        email : formDetails.email,
        password : formDetails.password , 
        username : formDetails.username
      })
   navigate('/Login') 
    } catch (error) {
      console.log(error);
      setResetSignupform(true)
    }
    console.log(response);
  }

    useEffect(()=>{
          setFormDetails({email : "" , username : "" , password : "" , isLoading : false})
    },[resetSignupform])


    return(
        <>
<div className="container1">
      <div className="column1">
        <div className="heading1">
          <h2>Welcome to shop cart</h2>
        </div>
        <div className="heading2">
          <h2>Sign UP</h2>
        </div>
        <div className="inputs1">
          <input onChange={(e)=>updateUserName(e.target.value)} value={formDetails.username} type="text" className="username1" placeholder="Username" />
          <input onChange={(e)=>updateEmail(e.target.value)} value={formDetails.email} type="email" className="username1" placeholder="email" />
          <input onChange={(e)=>updatePassword(e.target.value)} value={formDetails.password} type="password" className="username1" placeholder="password" />
          <button onClick={onFormSubmit}  class="btn btn-primary button" type="button" disabled={formDetails.isLoading} >
                   {(formDetails.isLoading) && <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                   {(formDetails.isLoading) ? 'Loading ...'  : 'Submit'}
          </button>
        </div>
        <div className="lastDiv1">
            <Link to='/Login' style={{ textDecoration: 'none' , color: 'black' , fontSize : '20px' }}>  Already have an account ?  Login </Link>
          </div>
      </div>
    </div>
        </>
    )
}