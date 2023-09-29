import "./FooterStyles.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={40} style = {{color:"#fff", marginRight:"2rem" }}/>
            <div>
                <p>123 Ayur Vigyan Nagar,</p>
                <p>New Delhi, India.</p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style = {{color:"#fff", marginRight:"2rem" }}/>
            00123-456-789</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style = {{color:"#fff", marginRight:"2rem" }}/>
            123@gmail.com
           </h4> </div>
        </div>
        <div className="right">
        <h4 >By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. All rights reserved.</h4>
        <div className="social">
        <FaFacebook size={20} style = {{color:"#fff", marginRight:"2rem" }}/>
        <FaTwitter size={20} style = {{color:"#fff", marginRight:"2rem" }}/>
        <FaLinkedin size={20} style = {{color:"#fff", marginRight:"2rem" }}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
