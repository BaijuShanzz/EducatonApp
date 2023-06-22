import React from 'react'
import './About.css'
import miya from "../../../assets/img/miya.jpg"
function About() {
  return (
    <div className="container">
        <div className="about-us-container">
            <div className="team-member">
                <h2>Our Team</h2>
                <div className="member-card">
                    <img className='member-image' src={miya} alt="" />
                    <h3 className="member-name">
                        miya 
                    </h3>
                    <p className="member-roles">
                        co-founder
                    </p>
                </div>
            </div>
            <div className="about-us-description">
                <h1 className="abou-us-heading">
                    About us
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus deserunt, voluptates consequatur sequi ipsum tenetur, est architecto ipsa illo delectus excepturi porro quod adipisci rem at nulla. Porro, velit esse.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About