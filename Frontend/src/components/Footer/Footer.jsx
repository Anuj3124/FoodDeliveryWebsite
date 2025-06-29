import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <p className='logo'>Munchy</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa voluptatibus libero laboriosam omnis rem ea assumenda! Eaque iusto hic assumenda obcaecati blanditiis officia sequi impedit aperiam dolore voluptates quisquam unde iure numquam aliquid iste quasi perspiciatis, amet libero placeat sapiente maxime reprehenderit? Dolorum, soluta atque vel maxime vero eos!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>CONTACT US</h2>
                <ul>
                    <li>+91 923456782</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 @ Munchy - All rights reserved</p>
    </div>
  )
}

export default Footer
