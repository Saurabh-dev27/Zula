import React from 'react'
import {dice,sword} from "../../../../assets/index.js"
import "./Hero.css"


const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-inner'>
      <div className='hero-text'>
        <h1>Welcome to Zula</h1>
        <p>The best place to download Android apps</p>
      </div>
        <div className='heroImage-container'>
          <img src={dice} alt="dice_image" className='dice-image'/>
          <img src={sword} alt="sword_image" className='sword-image' />
        </div>
      </div>
    </div>
  )
}

export default Hero