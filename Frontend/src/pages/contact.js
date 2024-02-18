import React, { useRef} from "react";
import {  Link } from "react-router-dom";
import {useState} from 'react';
import "../index.css";
// import TIC from "./404.png"
import img from "./Images/contact.jpg";
import emailjs from '@emailjs/browser';




 const Contact = () => {
  // meassage
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
 


 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ujjciho', 'template_dg5lfmf', form.current, 'rb6zkmOk0SK4FY8iQ')
      .then((result) => {
          console.log(result.text);
          alert("Meassage has been send");
      }, (error) => {
          console.log(error.text);
      });
      setMessage('');
      setEmail('');
      setName('');
      // popup
     
  };
    return (
      
      
      <div >
       



        {/* image part */}
       <div className="img"><img src={img} alt="Cinque Terre"  width="1247" height="300"></img> </div> 
       < div className="main">
    <div className="map-section">
      <div className="gmap-frame">
        
        <iframe id="frame2" width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
        src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Molar%20Band%20Extension,%20Badarpur,%20Delhi,%20India+(Ms.%20Maid)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
          
      </div>
        
    </div>
    <div className="contact">
        <h1>Contact Us</h1>
        
      <form ref={form} onSubmit={sendEmail} >
       
           <label >Name</label>
           <input type="text" id="fname"value={name} required  name="user_name" onChange={(event)=>setName(event.target.value)}  placeholder="Your name.."/>
           <label>Email</label>
           <input type="email" id="lname"value={email} required  name="user_email"onChange={(event)=>setEmail(event.target.value)} placeholder="Your email.."/>
           <label>Message</label>
           <textarea name="message" id="country" required  onChange={(event)=>setMessage(event.target.value)}
           value={message} placeholder="Your message.."/>
          <input type="submit" value="Submit" ></input>
    </form>
    {/* pop part */}
        {/* <div className="popup" id="popup">
         <img src={TIC} width="90"alt="popup"/>
         <h2>Thank You!</h2>
         <p>Your meassage has been sucessfully submitted Thank You..!</p>
         <button type="button" >OK</button>
        </div> */}
  </div>
        </div>
    <div className="desc">
      <h1>Feel free to Contact us</h1>
      <p>Ms. Maids  offers everything from one-time cleanings, to ongoing weekly, biweekly, 4-weekly and on-call house cleanings, to specialty services and beyond. Our London cleaners are licensed, highly trained, and dedicated to providing thorough house cleaning services in London, every time.

Contact Merry Maids today for a free in-home consultation or instant estimate.</p>
<h1>Ms.Maids is here to help</h1>
<div className="time">
  <div className="detail">
  Call us:8795804915<br/>
  WhatssApp: 9311898957
  </div>
  <div className="week">
    <ul>
      <li>MON</li>
      <li>TUE</li>
      <li>WED</li>
      <li>THU</li>
      <li>FRI</li>
      <li>SAT</li>
      <li>SUN</li>
    </ul>
    <ul>
      <li>8:00 am – 5:00 pm</li>
      <li>8:00 am – 5:00 pm</li>
      <li>8:00 am – 5:00 pm</li>
      <li>8:00 am – 5:00 pm</li>
      <li>8:00 am – 5:00 pm</li>
      <li>Closed</li>
      <li>Closed</li>
    </ul>
  </div>
</div>
    </div>
      {/* Footer Part */}
      <div className="Footer">
                <div className="container">
                  <div className="row">
                     <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <h3><span>Ms.</span>Maid</h3>
                        <p>Ms. Maid is a reputable and professional cleaning services company dedicated to providing high-quality, reliable, and customized cleaning solutions to meet the unique needs of our clients. <br/>With years of experience in the industry.</p>
                        <div className="footer-icons">
                        <a target = "blank" href = 'https://www.facebook.com/'><i class="fa-brands fa-facebook" ></i></a>

                        <a target = "blank" href = 'https://twitter.com/home'><i class="fa-brands fa-x-twitter"></i></a>

                        <a target = "blank" href = 'https://www.youtube.com/'><i class="fa-brands fa-youtube"></i></a>

                        <a target = "blank" href = 'https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>

                        <a target = "blank" href = 'https://www.linkedin.com/feed/'><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-3 col-12 ft-2">
                      <h4> <i class="fa-solid fa-link"></i> Quick Links</h4>
                      <ul>
                     <li > <  Link to="/" className="active">Home</Link> </li>

                     <li> <Link to="/blogs">Services</Link> </li> 

                     <li> <Link to="/contact">Contact</Link>  </li>

                     <li> <Link to="/about">About us</Link> </li>
                      </ul>
                     </div>
                     <div className="col-md-6 col-lg-4 col-12 ft-3">
                      <h3> <i class="fa-solid fa-address-card"></i> Contact Us</h3>
                      <p><i class="fa-solid fa-phone-volume"></i> +91 879580 4915 , 9311898957</p>
                      <p><i class="fa-solid fa-envelope"></i> chandresh1999kumar@gmail.com</p>
                      <p><i class="fa-solid fa-paper-plane"></i> Molarband Extn Badarpur New Delhi 110044</p>
                     </div>
                    </div>
                </div>
           </div>
           <div className="Last-footer">
            <p>Design By Chandresh</p>
           </div>
    </div>
   
    )
    };
 
  
  export default Contact;