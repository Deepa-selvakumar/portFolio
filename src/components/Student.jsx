import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Student = () => {
    const[name,setName]=useState()
    const[sin,setSin]=useState()
    const[dep,setDep]=useState()
    const navigate = useNavigate()
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:7000/stuform',{name, sin, dep})
        .then(result => {console.log(result)
        navigate('/profile')
      })
      }
  return (
    <div>
        <form onClick={handlesubmit}>
        <h1>Student Details</h1>
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value={name}required/>
        </div>
        <div>
            <label for="sin">SIN:</label>
            <input type="sin" id="sin" name="sin" value={sin}required/>
        </div>
        <div>
            <label for="dep">Department:</label>
            <input type="text" id="dep" name="dep"value={dep} required/>
        </div>
        {/* <div>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required/>
        </div> */}
        <button  type="submit">submit</button>
    </form>
    </div>
  )
}

export default Student