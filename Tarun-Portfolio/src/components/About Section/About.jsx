import React from "react";
import { TbCloudDownload } from "react-icons/tb";
import img from '../../Assets/Image.png'
import "./about.css";
const About = () => {
  const URL = "https://drive.google.com/file/d/1mc3vOIHc_JsTE1M6LuPGrNeWGhE9DG91/view"

  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
          Motivated and innovative aspiring full-stack web developer with hands-on experience (1200+ hours) in
building websites with MERN stack and various web technologies including HTML, CSS, and JS. 
<br />
Curious to learn about emerging web technologies. Looking forward to make a significant contribution
to an organization through dedicated efforts
          </h4>
          <div className="aboutBtn">
            <a onClick={()=>window.open(URL,"_blank")} href="Tarun-Aggarwal-Resume.pdf" download="Tarun-Aggarwal-Resume.pdf" className="flex">
              Download Resume <TbCloudDownload className='icon'/>
            </a>
          </div>
        </div>
        <div   className="home-img">
          <img src={img} alt="Tarun Aggarwal" className="aboutImg"/>
        </div>
      </div>
    </section>
  );
};

export default About;
