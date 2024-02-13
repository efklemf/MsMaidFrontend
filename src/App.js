import React from "react";
import Contact from "./pages/contact";
import "./index.css";
import "./App.css";

import "../src/style/Profile.css"
import "./components/LoginPage";

function App(){
    return (
        <>
           <div className="app">
             <Contact/>
           </div>
           {/* Login part */}
           

           {/* Footer Part */}
    <div className="Footer">
                <div className="container">
                  <div className="row">
                     <div className="col-md-6 col-lg-5 col-12">
                        <a className="logoicon" href="/">Ms. Maid</a>
                        <p>Lorem ipsumis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in represt laborum</p>
                        <div className="footer-icons">
                             <i class="fa-brands fa-facebook" ></i>
                             <i class="fa-brands fa-x-twitter"></i>
                             <i class="fa-brands fa-youtube"></i>
                             <i class="fa-brands fa-instagram"></i>
                             <i class="fa-brands fa-linkedin"></i>
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-3 col-12"></div>
                     <div className="col-md-6 col-lg-4 col-12"></div>
                    </div>
                </div>
           </div>
        </>
    );
}
export default App;


