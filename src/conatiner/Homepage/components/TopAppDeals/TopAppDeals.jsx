import React from "react";
import "./TopAppDeals.css";
import ViewAllBtn from "../../../../components/ViewAllBtn/ViewAllBtn";
import { topAppDeals } from "../../../../mocks/HomePageMocks";
import Getbtn from "../../../../components/Getbtn/Getbtn";

const TopAppDeals = () => {
  return (
    <div className="topAppDeals">
      <div className="topAppDeals-upper">
        <h4>Top Apps Deals</h4>
        <ViewAllBtn />
      </div>
      <div className="topAppDeal-lower">
        {topAppDeals.map((item) => (
          <div className="topAppDeal-containers">
            <img src={item.icon} alt="" />
            <div className="topAppDeal-containers-middle">
              <div className="topAppDeal-middle-up">
                <h4>{item.name}</h4>
                <p>{item.company}</p>
              </div>
              <div className="topAppDeal-middle-down">⭐{item.rating}</div>
            </div>
            <Getbtn />
          </div>
        ))}

        {/* <div className="topAppDeal-lower-container1"></div> */}
      </div>
    </div>
  );
};

export default TopAppDeals;
