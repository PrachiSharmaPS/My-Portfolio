import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div  id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I am Prachi Sharma, a dedicated web developer currently employed
              at DronaHQ, where I specialize in seamlessly integrating backend
              logic with UI components to ensure robust functionality. I excel
              in creating client applications and guiding projects through every
              stage of development. My innovative approach has led to an
              impressive 80% conversion rate of leads into active engagements.
            </p>
            <p>
              Previously, I received intensive training at FunctionUP where I
              specialized in advanced backend development using Node.js,
              Express, and MongoDB. Recognized for my skills and commitment, I
              was selected as a mentor to support and inspire fellow developers
              in their learning journeys.
            </p>
          </div>
          <div className="about-skills">
        
              <div className="about-skill">
                <p>Javascript</p>
                <hr style={{ width: "46%" }} />
              </div>
              <div className="about-skill">
                <p>React Js</p>
                <hr style={{ width: "40%" }} />
              </div>
              <div className="about-skill">
                <p>MySQL</p>
                <hr style={{ width: "45%" }} />
              </div>
        
              <div className="about-skill">
                <p>Node JS</p>
                <hr style={{ width: "45%" }} />
              </div>
              <div className="about-skill">
                <p>Mongo DB</p>
                <hr style={{ width: "50%" }} />
              </div>
       
          </div>
        </div>
      </div>
   
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3 +</h1>
          <p> Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10 +</h1>
          <p> Project Completed</p>
        </div>
       
      </div>
    </div>
  );
};

export default About;
