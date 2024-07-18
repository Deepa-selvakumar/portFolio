import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Signin = () => {
  const navigate = useNavigate()
     const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:7000/register',{name, email, password})
    .then(result => {console.log(result)
    navigate('/login')
  })
  }
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  return (
    <div>
       <h1>Sign up</h1>
    <form onClick={handlesubmit}>
        <div>
            <label for="email">Name:</label>
            <input type="name" id="name" name="name"value={name} onClick={(e)=>setname(e.target.value)} required/>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value={email}  onClick={(e)=>setemail(e.target.value)}required/>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value={password}onClick={(e)=>setpassword(e.target.value)}required/>
        </div>
        <button type="submit">Sign Up</button>
    </form>
    <a href="/login"> Login here</a>

    </div>
  )
}

export default Signin