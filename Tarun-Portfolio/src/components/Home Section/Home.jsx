import React from 'react'
import './home.css'
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { TbArrowBigRightLines } from 'react-icons/tb'
import {FiChevronsDown} from 'react-icons/fi'
const Home = () => {
  return (
    <section id="home" className='home section'>
      {/* this div weill be only visible at wider screen */}
      {/* <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/Tarun03022407" target="_blank">
          <AiFillGithub className='icon'/>
          </a>
          <a href="https://www.linkedin.com/in/tarun-aggarwal-886440123/" target="_blank">
          <AiFillLinkedin className='icon'/>
          </a>
          <a href="https://www.instagram.com/tarun_2407/" target="_blank">
          <AiFillInstagram className='icon'/>
          </a>
          <div className='line'></div>
        </div>
      </div> */}
      {/* HomeContent */}
      <div className="container homeContainer">
        <span className="introText">
          Hi my name is,
        </span>
        <h1 className='title'>
        Tarun Aggarwal
        </h1>
        <span className='subTitle'>
      Full Stack Web Developer
        </span>
        <p className="homeParagraph">
          I code within the Required coding standards and styles to serve the exact need.
        </p>
        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className='icon'/>
            </a>
          </button>
          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className='scroll'>Scroll Down </h6><FiChevronsDown className="icon"/>
            </a>
          </div>

        </div>
      </div>
     
     {/* <div className="rightEmail">
      <div>
        <div className="emailAddress">
          <a href='https://mailto:taggarwal533@gmail.com' target="_blank">taggarwal533@gmail.com</a>
        </div>
        <div className="line"></div>
      </div>
     </div> */}
  </section>
  )
}

export default Home
