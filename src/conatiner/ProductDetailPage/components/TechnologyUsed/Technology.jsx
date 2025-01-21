import React from 'react'
import "./Technology.css"

const Technology = () => {
  return (
    <div className='technology'>
        <div className='technology-left'>
            <h3>Technologies used by SpotRacers - Car Racing Game</h3>
            <p>SpotRacers - Car Racing Game is requesting 16 permissions and is using 46 libraries. Show  details</p>
        </div>
        <div className='technology-right'>
            <div className='technology-right-up'>
                <p>Apps other people are watching</p>
                <p>Popular Racing Games</p>
            </div>
            <div className='technology-right-down'>
                <p>Apps on Sale</p>
                <p>Today’s trending apps</p>
                <p>Top New Apps</p>
            </div>
        </div>
    </div>
  )
}

export default Technology