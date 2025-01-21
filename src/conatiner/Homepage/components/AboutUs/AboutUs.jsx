import React from 'react'
import "./AboutUs.css"
import friend_kawai from "../../../../assets/kawai_image.png"

const AboutUs = () => {
  return (
    <div className='aboutUs'>  
    <div className='aboutUs-left'>
        <div className='aboutUs-left-upper'>
            <h2>Best and Easiest Tools for Apps or Games</h2>
            <p>AppBrain helps Android developers succeed by offering easy tools for promoting and earning money from apps or games. With us, you can start quickly and manage everything yourself.</p>
        </div>
        <div className='aboutUs-left-down'>
            <button className='btn1'>SDK Documentation</button>
            <button className='btn2'>Learn More</button>
        </div>
        </div> 
    {/* <div className='aboutUs-right'> */}
        <img className='aboutUs-right-img' src={friend_kawai} alt="image_kawai" />
        {/* </div>  */}
    </div>
  )
}

export default AboutUs