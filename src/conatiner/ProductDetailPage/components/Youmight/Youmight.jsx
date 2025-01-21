import React from 'react'
import "./Youmight.css"
import { topAppDeals } from '../../../../mocks/HomePageMocks'

const Youmight = () => {
    const appspreview=topAppDeals.slice(0,7)
  return (
    <div className='youmight'>
        <div className='youmight-header'>
            <h2>You Might Also Like</h2>
            <button>View All</button>
        </div>
        <div className='youmight-cardDiv'>
            {appspreview.map((item,index)=>(
                <div className='youmight-card'>
                    <div className='youmight-imgdiv'>
                        <img src={item.icon} alt="Icon_image" />
                    </div>
                    <div className='youmight-card-lower-div'>
                        <h2>{item.name}</h2>
                        <p>{item.company}</p>
                        <span>⭐{item.rating}</span>
                    </div>

                </div>
            ))}

        </div>
    </div>
  )
}

export default Youmight