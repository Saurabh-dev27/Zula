import React from 'react'
import "./Breadcrumb.css"
import { IoIosArrowForward } from "react-icons/io";
import { PiShareNetworkFill } from "react-icons/pi";
import { PiBookmarkFill } from "react-icons/pi";

const Breadcrumb = () => {
  return (
    <div className='breadcrumb'>
      <div className='breadcrumb-left'>
        <ul>
          <li>Android Apps</li>
          <span><IoIosArrowForward/></span>
          <li>Racing</li>
          <span><IoIosArrowForward/></span>
          <li>SpotRacers - Car Racing Game</li>
        </ul>
      </div>
      <div className='breadcrumb-right'>
        <ul>
          <li><PiShareNetworkFill/>Share</li>
          <li><PiBookmarkFill/>Bookmark</li>
        </ul>
        {/* <div className='breadcrumb-right-share'>


        </div> */}
        {/* <div className='breadcrumb-right-bookmark'></div> */}
        
      </div>
      
    </div>
  )
}

export default Breadcrumb