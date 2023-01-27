import { AiOutlineMail,AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import {IoIosCall} from 'react-icons/io'
import { TbArrowBigRightLines } from 'react-icons/tb'
import './contact.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xdy8r85', 'template_7q09r67', form.current, 'xkAVIy-WKLKe8tbrG')
      e.target.reset()
  };


  return (
    <section id="contact" className='contact container section'>
     <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Get in Touch</h3>
          <div className="cards grid">
            <div className="card">
              <div>
                <AiFillLinkedin className='icon'/>
              </div>
              <h4>Linkedin</h4>
              <span className="userName">
              tarun-aggarwal-886440123
              </span>
              <div>
                <a href="https://www.linkedin.com/in/tarun-aggarwal-886440123/" className='flex' target="_blank">
                  Send Message<TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiFillGithub className='icon'/>
              </div>
              <h4>Github</h4>
              <span className="userName">
                Tarun03022407
              </span>
              <div>
                <a href="https://github.com/Tarun03022407" className='flex' target="_blank">
                  Send Message<TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiOutlineInstagram className='icon'/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
              tarun_2407
              </span>
              <div>
                <a href="https://www.instagram.com/tarun_2407/" className='flex' target="_blank">
                  Send Message<TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiOutlineMail className='icon'/>
              </div>
              <h4>E-mail & Contact </h4>
              <span className="userName">
              taggarwal533@gmail.com
              </span>
              <div>
              
              <a href='tel:9711677180'>9711677180 <IoIosCall className='icon'  />   </a>  
        
              </div>
            </div>
          </div>
        </div>
        <div className="form grid">
          <h3>Send me an email</h3>
          <form action="https://formspree.io/f/mpznbyel" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" autoComplete="off"  required />
            <input type="email" placeholder="Enter Email" name="email" autoComplete="off"  required/>
            <textarea name="message" cols="30" rows="10" required autoComplete="off" placeholder="Enter Your Message"></textarea>
            <button className='formBtn' type="submit" value="Send">Send Email</button>
          </form>
        </div>
      </div>
  </section>
  )
}

export default Contact
