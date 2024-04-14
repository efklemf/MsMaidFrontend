import phot from "./Images/ck.png"
import house from "./Images/house.jpg";
import phot2 from "./Images/servent.jpg";
import photo3 from "./Images/chandresh.jpeg";
import photo5 from "./Images/radhika.jpg";
import photo4 from "./Images/sagar.jpeg";
import {  Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';


const about = () => {
  
    return (
    <>
      <div className="data">
      
          <img src={house} alt="Snow" ></img>
          <h1>About Us </h1>
        </div>

        <div className="main">
          <div className="img">
           <h1>This is our Services</h1>
           <p>Ms. Maid Cleaning Company The Ms. Maid cleaning company has been working in this industry <br/> for more than 20 years ago, providing supreme cleaning services. We help people <br/>take care of their homes by <br/>offering them a wide range of expert cleaning services.
             We serve domestic and commercial<br/><br/> clients in Delhi NCR  using high-quality equipment that customers don’t have <br/> and cannot use themselves.<br/> Our staff practice professionalism in all they do, and they are committed to respecting <br/>your space and cleaning for health. </p>
              <div className="ho">
              <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Housekeeping Maid</SwiperSlide>
        <SwiperSlide>Corporate Maid</SwiperSlide>
        <SwiperSlide>Baby Care</SwiperSlide>
        <SwiperSlide>Personal Care</SwiperSlide>
        <SwiperSlide>Elderly Care Maid</SwiperSlide>
        <SwiperSlide>Part-time Maid</SwiperSlide>
        <SwiperSlide>pet care maid</SwiperSlide>
        <SwiperSlide>Garden Maintenance Maid</SwiperSlide>
        <SwiperSlide>House Keeping maid</SwiperSlide>
      </Swiper>
  
              </div>
          </div>
        
           <div className="imgc"> <img  src ={phot} alt="ck.png" />
            </div>
            
        </div>
      <div className="services">
      <img src ={phot2} alt="ck.png" />
      <div className="work">
       {/* <h2>What do you get out of our Maid Services?</h2> */}
       <p>
       <h5>Easy Rescheduling:</h5> When you use our maid services in London, you can easily reschedule your cleaner or any other trades after you have booked them. We promise you a hassle-free experience while using the Klean Keepers' services.
       <h5>Professional and vetted:</h5>By using the Klean Keepers services, you can rest assured about the quality of our cleaners.
       <h5>Special Instruction:</h5> The Klean Keepers app and website allows you to add any special requirements or instructions. You can also provide photographs along with the instructions if required. All pieces of information added will be directly passed on to the cleaner.
       <h5>Fully insured:</h5> All of our service providers are covered by liability insurance. They can claim insurance for any damage caused by them to your home or any other property.
       </p>
       </div>
       
       
      </div>
      <div className="team">
        <h1>Our Top Mangements</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <img style={{ width: 300, height: 300 }} src ={photo3} alt="ck.png" />
      <div class="card-body">
        <h5 class="card-title">Chandresh Kumar (Founder)</h5>
        <p class="card-text">Welcome and warm greetings. It is a pleasure meeting you via this website and I am thankful for the opportunity given to me for penning down my message here.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <img style={{ width: 300, height: 300 }} src ={photo4} alt="ck.png" />
      <div class="card-body">
        <h5 class="card-title">Sagar Singh (Co-Founder)</h5>
        <p class="card-text">When introducing myself as a startup founder, I keep it simple and genuine. I start by sharing my name and mentioning that I'm the founder of Ms. Maid. I like to give a brief overview of what my startup does – you know, the problem we're solving and how we're making things better.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <img style={{ width: 300, height: 300 }} src ={photo5} alt="ck.png" />
      <div class="card-body">
        <h5 class="card-title">Radhika (CEO)</h5>
        <p class="card-text">Radhika's work experience starts in 2021 when they worked as an Associate Software Engineer at Bebo Technologies Pvt Ltd. Radhika held this role from June 2021 to June 2022. Following this, they joined QASource in 2022 as a Software Engineer, and their current role is ongoing as the end date is not specified.
        Radhika attended Punjabi University in Patiala from 2018 to 2021, where they pursued a Bachelor of Technology (BTech) degree in computer science.</p>
      </div>
    </div>
  </div>
  
</div>
      </div>
    
        {/* Footer part */}
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

    </>
     )
   
  };
  
  export default about;