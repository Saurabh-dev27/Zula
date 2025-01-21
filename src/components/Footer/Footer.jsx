import React from 'react'
import socialImage1 from "../../assets/Social Media.png"
import socialImage2 from "../../assets/Social Media (1).png"
import socialImage3 from "../../assets/Social Media (2).png"
import logo from "../../assets/Logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-above'>
            <div className='footer-above-left'>
                <div className='footer-links left'>
                    <h2>More Apps</h2>
                    <ul>
                        <li>Top Android Apps</li>
                        <li>Seattle Sports</li>
                        <li>Large Print Bible</li>
                        <li>Droid TV</li>
                    </ul>
                </div>
                <div className='footer-links middle'>
                <h2>Android Statistics</h2>
                    <ul>
                        <li>Android Statistics</li>
                        <li>Google Play Developer Stats</li>
                        <li>Trending Android Apps</li>
                        <li>Top Popular Apps</li>
                    </ul>
                </div>
                <div className='footer-links right'>
                <h2>About AppBrain</h2>
                    <ul>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Documentation</li>
                        <li>Articles</li>
                    </ul>
                </div>
            </div>
            <div className='footer-above-right'>
                <h2>Connect With Us</h2>
                <div className='social-icons'>
                    <img src={socialImage1} alt="social_images" />
                    <img src={socialImage2} alt="social_images1" />
                    <img src={socialImage3} alt="social_images2" />
                </div>
            </div>
        </div>
        <div className='footer-below'>
            <img src={logo} alt="" />
            <p>© 2024 AppBrain. All Rights reserved</p>
        </div>
    </div>
  )
}

export default Footer