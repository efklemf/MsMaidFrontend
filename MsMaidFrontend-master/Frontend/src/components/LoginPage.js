import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginPage = ({setcurrentUser}) => {
const [loginData,setLoginData] = useState({
  username:'',
  password:'',
})

const navigate=useNavigate()

//submit function
const handleLoginSubmit = async(e) => {
 e.preventDefault();

 try{
  const response = await axios.post('https://backend-msmaid.onrender.com/login',loginData);
  const {success,message,user} = response.data;
    
  if(success){
    console.log('Login Successfully')
    
    alert("Wrong Entery");
  }
  else{
    console.log(message);
    alert("Login Sucessfully");
    setcurrentUser(true)
    navigate("/Pic");

  }
  
 }
 catch(error){
  console.error('Login error',error)
  alert("Invalid Entery");
 }
 setLoginData({
    username:'',
    password:''
 })
}

  const handleLoginChange = (e) => {
    
    const {name,value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }
  return (
    <div className='login'>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input 
        type='email1'
        name='username'
        placeholder='Username'
        value={loginData.username}
        onChange={handleLoginChange}
        required
        />
        <input 
        type='password'
        name='password'
        placeholder='Password'
        value={loginData.password}
        onChange={handleLoginChange}
        required
        /><br/>
     <button style={{
      width:"7rem"
     }} type='submit2'>Login</button>
        <p>
          Not registered yet? <Link to ='/registrationPage'>Register Here</Link>
        </p>
      </form>
    </div>
  )
}
export default LoginPage
