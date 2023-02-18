import React from 'react';


import List from './Component/List';
import Home from './Component/Home';
import About from './Component/About';
import Reviews from './Component/Reviews';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

// import List from './Component/List';
// import Footer from './Component/Footer';

// import {NavLink} from 'react-router-dom';


import '../src/CSS/Home.css';
// import logo from '../src/Images/logo.png';
// import pic from '../src/Images/pic.png';




// import facebook from '../src/Images/FB.png';
// import twitter from '../src/Images/twitter.png';




const App=()=> {
  return (
    <>

     {/* <List/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      
    </Routes>
    <Footer/>  */}


    {/* 1 <div> */}
      {/* 2 <div className="first-page"> */}



        {/* <div className="content"> */}
          {/* <img
            alt="pic204"
            src={pic}
            className="pic"
          />
          <button className="button">
            <button className="king-button">
              <span className="text">
                <span>Join Now</span>
              </span>
            </button>
          </button>
          <span className="text02">
            <span>Find your Traveling Buddy here !!</span>
          </span>
          <span className="text04">
            <span>
              <span>
                Planning a trip? Want someone to share the journey with?
              </span>
              <br></br>
              <span>Your travel companion is just a click away.</span>
              <br></br>
              <span></span>
            </span>
          </span>
        </div> */}
       {/* 3  <div className="header">
          <span className="text11">
            {' '}
           ( Home           About       Services     Reviews      Contact  deleted)

            
            <NavLink exact to="/" element={<Home/>} className="listItem" activeClassName="activeItem">Home</NavLink>
            <NavLink to="/about" element={<About/>} className="listItem" activeClassName="activeItem">About</NavLink>
            <NavLink to="/services" element={<Services/>} className="listItem" activeClassName="activeItem">Services</NavLink>
            <NavLink to="/reviews" element={<Reviews/>} className="listItem" activeClassName="activeItem">Reviews</NavLink>
            <NavLink to="/contact" element={<Contact/>} className="listItem" activeClassName="activeItem">Contact</NavLink>
            
          </span>
          <img
            alt="logo7810"
            src={logo}
            className="logo"
          />
          <button className="button1">
            <button className="king-button1">
              <span className="text12">Sign Up</span>
            </button>
          </button>
        </div> */}

        
        <List/>
        <Home/>
        <About/>
        <Reviews/>
        <Contact/>
        <Footer/>

        {/* <div className="footer">
          <div className="content1">
            <img
              alt="logo7810"
              src={logo}
              className="logo1"
            />
            <span className="text13">
              <span>
                <span>About Us</span>
                <br></br>
                <span>Terms and Conditions</span>
                <br></br>
                <span>
                  Privacy Policy
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Safety</span>
              </span>
            </span>
            <div className="rights"> */}
              {/* <div className="emoji">
                <img
                  alt="Vector1352"
                  src="/playground_assets/vector1352-95m8.svg"
                  className="vector"
                />
                <img
                  alt="Vector1352"
                  src="/playground_assets/vector1352-q2h.svg"
                  className="vector1"
                />
              </div> */}
            {/* </div>
            <div className="logo2">
              <div className="twitter">
                <img
                  alt="bg7589"
                  src={twitter}
                  className="bg"
                /> */}







                {/* wrong<img
                  alt="twitter7590"
                  src="/playground_assets/twitter7590-7pm2.svg"
                  className="twitter1"
                /> */}
              {/* </div>
              <div className="facebook">
                <img
                  alt="bg7593"
                  src={facebook}
                  className="bg1"
                /> */}




                {/*wrong <img
                  alt="facebook7594"
                  src={facebook}
                  className="facebook1"
                /> */}
              {/* </div>
            </div>
          </div>
          <span className="text22">
            <span className="text23">
             @ TravelCompanion. All Rights Reserved
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
                />
                </span>
              </span> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
    </>
  )
}

export default App;
