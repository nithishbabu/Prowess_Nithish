import './css/Register.css'

import { useState } from 'react';
        
function Register(){
    const [name,setname]=useState(' ')
    const [email,setemail]=useState(' ')
    const [password,setpassword]=useState(' ')


    const handleInputChangename=(event)=>{
        setname(event.target.value)
    }
    const handleInputChangepassword=(event)=>{
        setpassword(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const json={
            "name":name,
            "email":email,
            "password":password
        }
        console.log(json)
    }


    return(
        <div>
<form onSubmit={handleSubmit}>  
        <div class="regcontainer">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" onChange={handleInputChangename} required/> 
            <label>Email : </label>   
            <input type="text" placeholder="Enter Email-Id" name="Email" onChange={handleInputChangename} required/> 
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" onChange={handleInputChangepassword }  required/>  
            <button type="submit">Login</button>   
            <input type="checkbox" checked="checked"/> Remember me   
            <button type="button" class="cancelbtn"> Cancel</button>   
            {/* Forgot <a href="#"> password? </a>    */}
        </div>   
    </form>     

        </div>

    )
}export default Register;    
