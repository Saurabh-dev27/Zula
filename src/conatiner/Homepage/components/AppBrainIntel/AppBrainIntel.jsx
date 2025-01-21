import React from 'react'
import appbrainImg from "../../../../assets/appbrainIntel.png"
import { CiSearch } from 'react-icons/ci'
import "./AppBrainIntel.css"

const AppBrainIntel = () => {
  return (
    <div className='appbrain-intel'>
        <img src={appbrainImg} alt="appbrain_img" />
        <div className='appbrain-intel-box'>
            <div className='appbrain-intel-header'>
              
                <h2>AppBrain App Intelligence</h2>
                <p>AppBrain App Intelligence tells you all about apps on Google Play. You can see how popular they are and find new ones easily.</p>
            </div>
            <div className='appbrain-intel-below'>
            <div className='search-bar'>
                    
                <input type="text" placeholder='Search for apps' />
                <CiSearch size="1.2rem" />
                    </div>
                    <button className='search-button'>Search</button>

            </div>
        </div>
    </div>
  )
}

export default AppBrainIntel