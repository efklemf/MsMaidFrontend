import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RegistrationPage = () => {
    const [registrationData,setRegistrationData] = useState({
        username:'',
        password:'',
        
    })


const handleRegistrationChange = (e) => {
const {name,value} = e.target;

setRegistrationData((prevData) => ({
    ...prevData,
    [name] : value,
}))

}

const handleRegistrationSubmit = async(e) => {
e.preventDefault();
try{
    const response = await axios.post('http://localhost:8000/register',registrationData);
    console.log(response.data);
    alert("Registration Sucessfull");
}
catch(error){
    console.log(error)
    alert("Allreay account have");
}
setRegistrationData({
    username:'',
    password:'',
    
})
}

  return (
    <div className='login'>
      <h1>Registration Form</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <input 
        type='email1'
        name='username'
        placeholder='Username'
        value={registrationData.username}
        onChange={handleRegistrationChange}
        required
        />

        <input 
        type='password'
        name='password'
        placeholder='Password'
        value={registrationData.password}
        onChange={handleRegistrationChange}
        required
        /><br/>
       

        <button type='submit2'>Register</button>
        <p>
            Already registered? <Link to="/loginPage">Login Here</Link>
        </p>
      </form>
    </div>
  )
}

export default RegistrationPage;