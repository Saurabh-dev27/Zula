import React from 'react'
import nameapp from "../../../../assets/nameapp.png"
import googleplay from "../../../../assets/googleplay.png"
import appstore from "../../../../assets/appstore.png"
import "./NameApps.css"

const NameApps = () => {
  return (
    <div className='nameapps'>
        <div className='nameapps-left'>
            <img src={nameapp} alt="" />
            <div className='nameapp-left-content'>
                <h3>SpotRacers - Car Racing Game</h3>
                <p>1.26.2</p>
                <p>Casual Azur Games</p>
            </div>
        </div>
        <div className='nameapps-button'>
            <button>
                <img src={googleplay} alt="" />
                
            </button>
            <button>
                <img src={appstore} alt="" />
            </button>
        </div>
    </div>
  )
}

export default NameApps