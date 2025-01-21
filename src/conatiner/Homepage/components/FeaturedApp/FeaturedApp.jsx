import React from 'react'
import { featuredAppAds } from '../../../../assets/index'
import Getbtn from '../../../../components/Getbtn/Getbtn'
import ViewAllBtn from "../../../../components/ViewAllBtn/ViewAllBtn"
import "./FeaturedApp.css"
import { featuredApp } from '../../../../mocks/HomePageMocks'

const FeaturedApp = () => {
    const evenApps=featuredApp.filter((item,index)=>index%2 !==0)
    // console.log(oddApps)
    const oddApps=featuredApp.filter((item,index)=>index%2 ===0)
  return (
    <div className='featuredApp'>
        <div className="featuredApp-left">
            <div className="featuredApp-left-top">
                <h4>Featured by AppBrain</h4>
                <ViewAllBtn/>
            </div>
            <div className="featuredApp-left-down">
                <div className='featuredApp-left-down-leftdiv'>
                {oddApps.map((item) => (
          <div className="featuredApp-containers">
            <img src={item.icon} alt="" />
            <div className="featuredApp-containers-middle">
              <div className="featuredApp-middle-up">
                <h4>{item.name}</h4>
                <p>{item.company}</p>
              </div>
              <div className="featuredApp-middle-down">⭐{item.rating}</div>
            </div>
            <Getbtn />
          </div>
        ))}
                </div>
                <div className='featuredApp-left-down-rightdiv'>
                {evenApps.map((item) => (
          <div className="featuredApp-containers">
            <img src={item.icon} alt="" />
            <div className="featuredApp-containers-middle">
              <div className="featuredApp-middle-up">
                <h4>{item.name}</h4>
                <p>{item.company}</p>
              </div>
              <div className="featuredApp-middle-down">⭐{item.rating}</div>
            </div>
            <Getbtn />
          </div>
        ))}
                </div>
         
            </div>
        </div>
        <div className="featuredApp-right">
            <img src={featuredAppAds} alt="Ads" />
            <button></button>
        </div>
    </div>
  )
}

export default FeaturedApp