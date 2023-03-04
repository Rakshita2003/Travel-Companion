import React from 'react'
import '../CSS/Safety.css';
import privacy from '../Images/privacy.png';

const Safety = (props) => {
  return (
    <div>
      <div className='safety'>
        <div className='content25'>
          <div className='headerr'>
            <div className='context'>
              <span className='para'>
                <span>
                  <span>
                    1) We take safety at TravelCompanion seriously and we <br></br>make every effort to secure your account information.
                  </span>
                  <br></br>
                  <br></br>

                  <div className='saly37'>
                    <img
                      src={privacy}
                      alt="error!!!"
                      className='saly371'
                    />
                  </div>
                  <span>
                    2) TravelCompanion also closely reviews every new <br></br>account to ensure there is no inappropriate content <br></br>and that nobody violates our terms and conditions. If <br></br>you encounter any inappropriate content or abuse, <br></br>please contact us.
                  </span>
                  <br></br>
                  <br></br>

                  <span>
                    3) TravelCompanion envisions to create a friendly<br></br> community of travelers, however we strongly encourage <br></br>you to use your instincts when meeting new travelers.
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Safety
