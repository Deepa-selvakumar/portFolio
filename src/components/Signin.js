import React, { useState } from 'react'

const Signin = () => {
  const[name,setname]=useState('')
  const[mail,setmail]=useState('')
  const[pass,setpass]=useState('')
  return (
    <div>
       <h1>Sign up</h1>
    <form action="/signin" method="post">
        <div>
            <label for="email">Name:</label>
            <input type="name" id="name" name="name"value={name} onClick={(e)=>setname(e.target.value)} required/>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value={mail}  onClick={(e)=>setmail(e.target.value)}required/>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value={pass}onClick={(e)=>setpass(e.target.value)}required/>
        </div>
        <button type="submit">Sign Up</button>
    </form>
    <a href="/login"> Login here</a>

    </div>
  )
}

export default Signin