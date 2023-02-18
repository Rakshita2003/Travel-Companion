import React from 'react';
import '../CSS/Home.css';


import facebook from '../Images/FB.png';
import twitter from '../Images/twitter.png';
import logo from '../Images/logo.png';



const Footer=()=> {
  return (
    <>
     <div className="footer">
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
            <div className="rights">
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
            </div>
            <div className="logo2">
              <div className="twitter">
                <img
                  alt="bg7589"
                  src={twitter}
                  className="bg"
                />







                {/* wrong<img
                  alt="twitter7590"
                  src="/playground_assets/twitter7590-7pm2.svg"
                  className="twitter1"
                /> */}
              </div>
              <div className="facebook">
                <img
                  alt="bg7593"
                  src={facebook}
                  className="bg1"
                />




                {/*wrong <img
                  alt="facebook7594"
                  src={facebook}
                  className="facebook1"
                /> */}
              </div>
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
              </span>
            </div>
          {/* </div> */}

    </>
  )
}

export default Footer;
