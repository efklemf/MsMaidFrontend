
import video from "./video/homeV.mp4"
import {  Link } from "react-router-dom";
import phot2 from "./Images/servent.jpg";
import india from "./Images/india.jpg"
import noida from "./Images/AdobeStock_540307170_Preview_Editorial_Use_Only.jpeg"
import guru from "./Images/gurugram.jpeg"
import clean from "./Images/clean.jpg";



const Home = () => {
    return <>
    <div className="hom">
    <video controls  id="myVideo"  loop style={{
      zIndex:"-1"
    }} >
        <source src= {video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    

     
<div className="front">
<img src={clean} alt="..."/>
  
  <p>Hello, welcome to Maid in the Delhi NCR, this is a domestic and commercial cleaning agency that provides first class cleaning across South London. Our team of thorough and fabulous cleaners will come to your home or office and thoroughly clean and disinfect all areas in your property from top to bottom!</p>
  <p>Whether you live in a large house or a modest flat, alone with a pet or four (messy) children; whether you need weekly cleaning or a single deep cleaning—you can rely on us to be there to help you out. Our flexible cleaning plans will easily suit your busy schedule and specific cleaning needs.</p>
  <p>We offer services of the highest standards at affordable prices across the South London Area. Get in touch with our team now.</p>
 
</div>
<div className="place">
        <h1>We are avaible In</h1>
        <div class="card-group">
  <div class="card">
    <img src={india} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Delhi</h5>
      <p class="card-text">That's great to hear that we are providing maid services in Delhi. Maid services can be quite valuable for people who need assistance with cleaning, cooking, and other household tasks. If you have any specific questions or if there's anything you'd like to know or discuss related to providing maid services in Delhi, please feel free to ask, and I'd be happy to assist you.</p>
    </div>
    <div class="card-footer">
      
    </div>
  </div>
  <div class="card">
    <img src={noida} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Noida</h5>
      <p class="card-text">Thank you for the clarification. Providing maid services in Noida, which is a city adjacent to Delhi, can also be a valuable service for local residents. If you have any questions or if there's anything specific you'd like to discuss regarding providing maid services in Noida, please feel free to ask, and I'll do my best to provide you with information and assistance.</p>
    </div>
    <div class="card-footer">
      
    </div>
  </div>
  <div class="card">
    <img src={guru} class="card-img-top" alt="..."/>
    
    <div class="card-body">
      <h5 class="card-title">Gurugram</h5>
      <p class="card-text">Thank you for sharing that you are providing maid services in Gurugram (also known as Gurgaon). Gurugram is a rapidly growing city in the National Capital Region of India and has a high demand for various services, including maid services. If you have any questions, need advice, or would like to discuss anything related to providing maid services in Gurugram, please feel free to ask, and I'll be happy to help.</p>
    </div>
    <div class="card-footer">
     
    </div>
  </div>
</div>
      </div>
     <div className="testmonial">
      <h1>Happy Clients</h1>
      <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
    centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
    <swiper-slide> <div className="heading"><p>Hansen’s disease (also known as leprosy) is an infection caused by slow-growing bacteria called Mycobacterium leprae. It can affect the nerves, skin, eyes, and lining of the nose (nasal mucosa). With early diagnosis and treatment, the disease can be cured. People with Hansen’s disease can continue to work and lead an active life during and after treatment.</p>
    <img  src ={phot2} alt="ck.png" /><h2>Pankaj singh</h2>
    </div> </swiper-slide>
    <swiper-slide><div className="heading"><p>Hansen’s disease (also known as leprosy) is an infection caused by slow-growing bacteria called Mycobacterium leprae. It can affect the nerves, skin, eyes, and lining of the nose (nasal mucosa). With early diagnosis and treatment, the disease can be cured. People with Hansen’s disease can continue to work and lead an active life during and after treatment.</p>
    <img  src ={phot2} alt="ck.png" /><h2>Reena singh</h2></div></swiper-slide>
    <swiper-slide><div className="heading"><p>Hansen’s disease (also known as leprosy) is an infection caused by slow-growing bacteria called Mycobacterium leprae. It can affect the nerves, skin, eyes, and lining of the nose (nasal mucosa). With early diagnosis and treatment, the disease can be cured. People with Hansen’s disease can continue to work and lead an active life during and after treatment.</p>
    <img  src ={phot2} alt="ck.png" /><h2>Ajay Gupta</h2></div></swiper-slide>
    <swiper-slide><div className="heading"><p>Hansen’s disease (also known as leprosy) is an infection caused by slow-growing bacteria called Mycobacterium leprae. It can affect the nerves, skin, eyes, and lining of the nose (nasal mucosa). With early diagnosis and treatment, the disease can be cured. People with Hansen’s disease can continue to work and lead an active life during and after treatment.</p>
    <img  src ={phot2} alt="ck.png" /><h2>Pankaj singh</h2></div></swiper-slide>
    <swiper-slide><div className="heading"><p>Hansen’s disease (also known as leprosy) is an infection caused by slow-growing bacteria called Mycobacterium leprae. It can affect the nerves, skin, eyes, and lining of the nose (nasal mucosa). With early diagnosis and treatment, the disease can be cured. People with Hansen’s disease can continue to work and lead an active life during and after treatment.</p>
    <img  src ={phot2} alt="ck.png" /><h2>Pankaj singh</h2></div></swiper-slide>
    <swiper-slide><div className="heading"><p>Hansen’s disease (also known as leprosy) is an infection caused by slow-growing bacteria called Mycobacterium leprae. It can affect the nerves, skin, eyes, and lining of the nose (nasal mucosa). With early diagnosis and treatment, the disease can be cured. People with Hansen’s disease can continue to work and lead an active life during and after treatment.</p>
    <img  src ={phot2} alt="ck.png" /><h2>Pankaj singh</h2></div></swiper-slide>
    <swiper-slide><div className="heading"><p>Hansen’s disease (also known as leprosy) is an infection caused by slow-growing bacteria called Mycobacterium leprae. It can affect the nerves, skin, eyes, and lining of the nose (nasal mucosa). With early diagnosis and treatment, the disease can be cured. People with Hansen’s disease can continue to work and lead an active life during and after treatment.</p>
    <img  src ={phot2} alt="ck.png" /><h2>Pankaj singh</h2></div></swiper-slide>
    <swiper-slide><div className="heading"><p>Hansen’s disease (also known as leprosy) is an infection caused by slow-growing bacteria called Mycobacterium leprae. It can affect the nerves, skin, eyes, and lining of the nose (nasal mucosa). With early diagnosis and treatment, the disease can be cured. People with Hansen’s disease can continue to work and lead an active life during and after treatment.</p>
    <img  src ={phot2} alt="ck.png" /><h2>Pankaj singh</h2></div></swiper-slide>
    <swiper-slide><div className="heading"><p>Hansen’s disease (also known as leprosy) is an infection caused by slow-growing bacteria called Mycobacterium leprae. It can affect the nerves, skin, eyes, and lining of the nose (nasal mucosa). With early diagnosis and treatment, the disease can be cured. People with Hansen’s disease can continue to work and lead an active life during and after treatment.</p>
    <img  src ={phot2} alt="ck.png" /><h2>Pankaj singh</h2></div></swiper-slide>
  </swiper-container>
 
  </div>
   

      

   {/* footer */}
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
    </>
  };
  
  export default Home;
