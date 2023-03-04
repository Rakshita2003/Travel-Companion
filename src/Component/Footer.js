import React from 'react';
import '../CSS/Home.css';
import '../CSS/Footer.css';
import facebook from '../Images/FB.png';
import twitter from '../Images/twitter.png';
import logo from '../Images/logo.png';

const Footer=()=> {
  return (
    <>
     <div className="footer">
          <div className="content12">
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
            </div>
            <div className="logo2">
              <div className="twitter">
                <img
                  alt="bg7589"
                  src={twitter}
                  className="bg"
                />

              </div>
              <div className="facebook">
                <img
                  alt="bg7593"
                  src={facebook}
                  className="bg1"
                />

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

    </>
  )
}

export default Footer;
