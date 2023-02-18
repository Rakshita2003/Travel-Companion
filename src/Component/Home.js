import React from 'react';
import '../CSS/Home.css';
import pic1 from '../Images/pic1.png';
import '../App';

const Home = (props) => {
  return (
    <>
    <div>
      <div className="first-page">
        <div className="content">
          <img
            alt="pic204"
            src={pic1}
            className="pic1"
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
        </div>
    </div>
  </div>
   </>
  );
};

export default Home;
