
import { useState } from 'react';
import './css/Login.css'
function Login(){
    const [name,setname]=useState(' ')
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
            "password":password
        }
        console.log(json)
    }


    return(
        <div>
<form onSubmit={handleSubmit}>  
        <div class="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" onChange={handleInputChangename} required/>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            <button type="submit">Login</button>   
            <input type="checkbox" checked="checked"/> Remember me   
            <button type="button" class="cancelbtn"> Cancel</button>   
            {/* Forgot <a href="#"> password? </a>    */}
        </div>   
    </form>     

        </div>

    )


}export default Login;
























