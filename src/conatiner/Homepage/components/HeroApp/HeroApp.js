import React from "react";
import "./HeroApp.css";
import "../TopnewApp/TopnewApp"
import { data, mainData } from "./heroutil";
import TopnewApp from "../TopnewApp/TopnewApp";
import ViewAllBtn from "../../../../components/ViewAllBtn/ViewAllBtn"
import TopAppDeals from "../TopAppDeals/TopAppDeals";
import FeaturedApp from "../FeaturedApp/FeaturedApp";
import AboutUs from "../AboutUs/AboutUs";
import AppBrainPromote from "../AppBrainPromote/AppBrainPromote";
import AppMonetize from "../AppMonetize/AppMonetize";
import AppBrain from "../AppBrain/AppBrain";
import AppBrainIntel from "../AppBrainIntel/AppBrainIntel";
import Footer from "../../../../components/Footer/Footer";
const HeroApp = () => {
  // console.log('-------data',data);
  
  return (
    <div className="heroapp-container">
      <div className="hot-app">
        <div className="heroapp-heading">
          <h4>Hot Apps</h4>
          <ViewAllBtn/>
          {/* <button>View All </button> */}
        </div>
        <div className="hero-cards">
          <div className="hero-main-card">
            <img className="main-img" src={mainData.image} alt="image1" />
            <div className="card-container">
              <div className="card-container-left">
                <img src={mainData.icon} alt="" />
                <div className="card-container-middle">
                  <h2>{mainData.name}</h2>
                  <p>{mainData.company}</p>
                </div>
              </div>
              <button>Get</button>
            </div>
          </div>
          <div className="hero-secondary-card">
            <div className="secondary-card-one">
              <img className="" src={data[0].image} alt="image1" />
              <div className="secondary-card-container">
                <div className="secondary-card-container-left">
                  <img src={data[0].icon} alt="" />
                  <div className="secondary-card-container-middle">
                    <h2>{data[0].name}</h2>
                    <p>{data[0].company}</p>
                  </div>
                </div>
                <button>Get</button>
              </div>
            </div>
            <div className="secondary-card-other">
              <div className="seconadry-card-other-one">
                <img className="" src={data[1].image} alt="image1" />
                <div className="secondary-card-container cardchange">
                  <div className="secondary-card-container-left">
                    <img src={data[1].icon} alt="" />
                    <div className="secondary-card-container-middle">
                      <h2>{data[1].name}</h2>
                      <p>{data[1].company}</p>
                    </div>
                  </div>
                  <button>Get</button>
                </div>
              </div>
              <div className="secondary-card-other-two">
                {" "}
                <img className="" src={data[2].image} alt="image1" />
                <div className="secondary-card-container cardchange">
                  <div className="secondary-card-container-left">
                    <img src={data[2].icon} alt="" />
                    <div className="secondary-card-container-middle">
                      <h2>{data[2].name}</h2>
                      <p>{data[2].company}</p>
                    </div>
                  </div>
                  <button>Get</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopnewApp/>
      <TopAppDeals/>
      <FeaturedApp/>
      <AboutUs/>
      <AppBrainPromote/>
      <AppMonetize/>
      <AppBrain/>
      <AppBrainIntel/>
      {/* <Footer/> */}
    </div>
  );
};

export default HeroApp;
