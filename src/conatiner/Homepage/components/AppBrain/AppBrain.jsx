import React from 'react'
import appbrain from "../../../../assets/appbrain.png"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import "./AppBrain.css"
const AppBrain = () => {
  return (
    <div className='appbrain'>
        <div className='appbrain-left'>
            <img src={appbrain} alt="appbrain_image" />
        </div>
        <div className='appbrain-right'>
            <div className=' appbrain-right-header'>
    <h2>AppBrain Ranking</h2>
    <p>Optimize user acquisition and retention by analyzing your app's market position and understanding your users through our free analytics service.</p>
            </div>
            <div className='appbrain-right-accordian-container'>
                <div className='accordian-container'>
                    <div className='accordian-container-left'>

                    <h2>Track your Google Play rankings</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at commodo enim. Phasellus sit amet posuere diam, ac rutrum dui. </p>
                    </div>
                    <IoMdArrowDropup size="3rem" className='tilt'/>

                </div>
                <div className='accordian-container'>
                    <h2>Benchmark your app against competitors</h2>
                    <IoMdArrowDropdown size="2rem"/>
                </div>
                <div className='accordian-container'>
                    <h2>Insight in user engagement and retention</h2>
                    <IoMdArrowDropdown size="2rem"/>
                </div>
                <div className='accordian-container'>
                    <h2>Improve your app with AppBrain Apptimizer</h2>
                    <IoMdArrowDropdown size="2rem"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBrain