import React from 'react'
import "./AppBrainPromote.css"
import { appBrainData } from '../../../../mocks/HomePageMocks'

const AppBrainPromote = () => {
  const upper=appBrainData.slice(0,3)
  const lower=appBrainData.slice(3,7)
  return (
    <div className='app-brain-promote'>
      <div className="appbrain-upper">
        <h2>AppBrain Promote</h2>
        <p>The easiest way to promote your Android App. Increase your Android app’s users by promoting it on our network.</p>
      </div>
      <div className="appbrain-lower">
        <div className='appbrain-lower-cards'>
          <div className='appbrain-lower-cards1'> {upper.map((items,index)=>(
            <div className='appbrain-lower-cards-individual'>
              <img src={items.icon} alt={`item_image${index}`} />
              <h3>{items.heading}</h3>
              <p>{items.context}</p>
            </div>
          ))}</div>
          <div className='appbrain-lower-cards2'> {lower.map((items,index)=>(
            <div className='appbrain-lower-cards-individual'>
              <img src={items.icon} alt={`item_image${index}`} />
              <h3>{items.heading}</h3>
              <p>{items.context}</p>
            </div>
          ))}</div>
         
        </div>
        <div className='appbrain-lower-button'>

        <button className='appbrain-lower-button'>More Info</button>
        </div>
      </div>
        
    </div>
  )
}

export default AppBrainPromote