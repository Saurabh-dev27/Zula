import React from 'react'
import "./TopnewApp.css"
import ViewAllBtn from '../../../../components/ViewAllBtn/ViewAllBtn'
import {topNewAppData} from "../../../../mocks/HomePageMocks"
import Getbtn from "../../../../components/Getbtn/Getbtn"

const TopnewApp = () => {
  return (
    <div className='topnew-apps-container'>
        <div className='topnew-app-upper'>
            <h4>Top New Apps</h4>
            <ViewAllBtn/>
            
        </div>
        <div className='topnew-app-lower'>
            {topNewAppData.map((item,index)=>(
                <div className='topnew-app-lower-card'>
                <img  src={item.image} alt={`image${index}`} />
                <div className='topnew-app-container'>
                    <img src={item.icon} alt={`icon_image${index}`} />
                    <div className='topnew-app-container-middle'>
                        <h4>{item.name}</h4>
                        <p>{item.company}</p>
                        <span>⭐{item.rating}</span>
                        </div>
                        <Getbtn/>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopnewApp