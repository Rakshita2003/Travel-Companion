import React from 'react';
import '../CSS/Reviews.css';
import orgrect from '../Images/orgrect.png';
import rect2 from '../Images/rect2.png';
import pic from '../Images/pic.png';
import vector from '../Images/vector.png';
import vector2 from '../Images/vector2.png';
import saly from '../Images/saly.png';
const Reviews = (props) => {
  return (
    <div>
      <div className="reviews">
        <img src={orgrect} alt="Rectangle" className="rectangle"/>
        <img src={vector} alt="Vector" className="vector"/>
        <span className="text">
          <span>Word from our customers</span>
        </span>
        <div className="pic">
          <img src={saly} alt="Saly" className="saly"/>
        </div>
        <img src={rect2} alt="Rectangle2" className="rectangle2"/>
        <img src={pic} alt="jake" className="image"/>
        <span className="text2">
          <span> Really the best site for a happier journey.</span>
        </span>
        <img src={vector2} alt="Vector2" className="vector2"/>
        <span className="text4">
          <span>
            <span>Jake Sully</span>
            <br></br>
            <span></span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Reviews
