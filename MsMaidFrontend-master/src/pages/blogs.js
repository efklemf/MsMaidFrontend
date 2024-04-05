import React, { useState,useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";



function Blog(){ 
 
  
 
  const navigate=useNavigate()
  const [login,setLogin]=useState(false)
  useEffect(()=>{
if (!login){
navigate("/loginPage")
}
  },[])


}

export default Blog


