
import '../style/Profile.css';
import { Link } from 'react-router-dom';
import photo1 from '../pages/Images/house.jpg';
import photo2 from '../pages/Images/ck.png';
import photo3 from '../pages/Images/serve2.jpeg';
import photo4 from '../pages/Images/serve3.jpeg';
import photo5 from '../pages/Images/serve4.jpeg';
// Import more images as needed
import { useState } from 'react';

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
];

const profiles = [
  {
    id: 1,
    name: 'Swati',
    image: photo1,
    hoverContent: {
      mobile: '+91879587****',
      money: 'Rs:15000/ Month',
      email: 'sg32620@gmail.com',
      idCard: 'Adhar Verified Customer',
      city: 'Neharu Place',
    },
    text: 'Welcome and warm greetings. It is a pleasure meeting you via this website, and I am thankful for the opportunity given to me for penning down my message here.',
  },
  // Add more profiles with different images and content as needed
  {
    id: 2,
    name: 'Sheema',
    image: photo2,
    hoverContent: {
      mobile: '+91879580****',
      money: 'Rs:2000/ Month',
      email: 'aknkumar@gmail.com',
      idCard: 'Adhar Verified Customer',
      city: 'Mangolpuri',
    },
    text: 'Welcome and warm greetings. It is a pleasure meeting you via this website, and I am thankful for the opportunity given to me for penning down my message here.',
  },
  {
    id: 3,
    name: 'Ashini',
    image: photo3,
    hoverContent: {
      mobile: '+91879580****',
      money: 'Rs:5000/ Month',
      email: 'sg32620@gmail.com',
      idCard: 'Adhar Verified Customer',
      city: 'North-west Delhi',
    },
    text: 'Welcome and warm greetings. It is a pleasure meeting you via this website, and I am thankful for the opportunity given to me for penning down my message here.',
  },
  {
    id: 4,
    name: 'Payal Verma',
    image: photo4,
    hoverContent: {
      mobile: '+91879580****',
      money: 'Rs:5000/ Month',
      email: 'sg32620@gmail.com',
      idCard: 'Adhar Verified Customer',
      city: 'Noida',
    },
    text: 'Welcome and warm greetings. It is a pleasure meeting you via this website, and I am thankful for the opportunity given to me for penning down my message here.',
  },
  {
    id: 5,
    name: 'Neha',
    image: photo1,
    hoverContent: {
      mobile: '+91879580****',
      money: 'Rs:5000/ Month',
      email: 'sg32620@gmail.com',
      idCard: 'Adhar Verified Customer',
      city: 'South Delhi',
    },
    text: 'Welcome and warm greetings. It is a pleasure meeting you via this website, and I am thankful for the opportunity given to me for penning down my message here.',
  },
  {
    id: 6,
    name: 'Niharika',
    image: photo5,
    hoverContent: {
      mobile: '+91879580****',
      money: 'Rs:15000/ Month',
      email: 'sg32620@gmail.com',
      idCard: 'Adhar Verified Customer',
      city: 'South Delhi',
    },
    text: 'Welcome and warm greetings. It is a pleasure meeting you via this website, and I am thankful for the opportunity given to me for penning down my message here.',
  },
];

const Profile = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="conts">
      <h6>Thanks For Visiting our site</h6>
      <div className='client'>
        {/*  */}
      </div>

      <div className='oh'>
        <div className="row row-cols-1 row-cols-md-4 g-5">
          {profiles.map((profile) => (
            <div className="col1" key={profile.id}>
              <div
                className="card h-100"
                onMouseEnter={() => handleMouseEnter(profile.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img style={{ width: 200, height: 200 }} src={profile.image} alt={`ck${profile.id}.png`} />
                <div className="card-body">
                  <h5 className="card-title">{profile.name}</h5>
                  {hoveredCard === profile.id && (
                    <div className='imgCon'>
                      <p>
                        <i className="fa fa-mobile"></i> {profile.hoverContent.mobile} <br />
                        <i className="fa fa-money"></i> {profile.hoverContent.money} <br />
                        <i className="fa fa-envelope"></i> {profile.hoverContent.email} <br />
                        <i className="fa fa-id-card"></i> {profile.hoverContent.idCard} <br />
                        <i class='fas fa-city' ></i> {profile.hoverContent.city}
                      </p>
                    </div>
                  )}
                  <p className="card-text">{profile.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Field */}
        <div>
          <dl className={`grid grid-cols-1 gap-x-21 gap-y-56 text-center lg:grid-cols-${stats.length}`}>
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Footer Section */}
      <div className="Footer">
        {/* ... (Your existing footer code) */}
        <div className="container">
                   <div className="row">
                       <div className="col-md-6 col-lg-5 col-12 ft-1">
                          <h3><span>Ms.</span>Maid</h3>
                          <p>Ms. Maid is a reputable and professional cleaning services company dedicated to providing high-quality, reliable, and customized cleaning solutions to meet the unique needs of our clients. <br/>With years of experience in the industry.</p>
                          <div className="footer-icons">
                         <a target = "blank" href = 'https:www.facebook.com/'><i class="fa-brands fa-facebook" ></i></a>

                          <a target = "blank" href = 'https:twitter.com/home'><i class="fa-brands fa-x-twitter"></i></a>

                          <a target = "blank" href = 'https:www.youtube.com/'><i class="fa-brands fa-youtube"></i></a>

                          <a target = "blank" href = 'https:www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>

                          <a target = "blank" href = 'https:www.linkedin.com/feed/'><i class="fa-brands fa-linkedin"></i></a>
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
                    <h3> <i className="fa-solid fa-address-card"></i> Contact Us</h3>
                      <p><i className="fa-solid fa-phone-volume"></i> +91 879580 4915 , 9311898957</p>
                      <p><i className="fa-solid fa-envelope"></i> chandresh1999kumar@gmail.com</p>
                    <p><i className="fa-solid fa-paper-plane"></i> Molarband Extn Badarpur New Delhi 110044</p>
                     </div>
                   </div>
              </div>
      </div>

      <div className="Last-footer">
        <p>Design By Chandresh</p>
      </div>
    </div>
  );
};

export default Profile;
