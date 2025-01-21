import React from "react";
import "./AppMonetize.css";
import {
  appmonetize1,
  appmonetize2,
  appmonetize3,
  appmonetize4,
  appmonetize5,
} from "../../../../assets";

const AppMonetize = () => {
  return (
    <div className="appMonetize">
      <div className="appMonetize-header">
        <h2>AppBrain Monetize</h2>
        <p>
          The AppBrain SDK lets you show user-friendly app install ads to your
          users through interstitial or banner ad units. Our high-quality ads
          provide a good user experience and great monetization potential.
        </p>
      </div>
      <div className="appMonetize-content">
        <div className="appMonetize-content-upper">
          <div className="upper-content">
            <img src={appmonetize1} alt="appmonetize_image1" />
            <h3>Monetization with user-friendly app install ads</h3>
          </div>
          <div className="upper-content">
            <img src={appmonetize2} alt="appmonetize_image2" />
            <h3>Easy and fast integration of our small SDK</h3>
          </div>
          <div className="upper-content">
            <img src={appmonetize3} alt="appmonetize_image3" />
            <h3>Clear usage statistics and retention figures for your app</h3>
          </div>
        </div>
        <div className="appMonetize-content-lower">
          <div className="upper-content lowers">
            <img src={appmonetize4} alt="appmonetize_image4" />
            <h3>Quick payout of your revenue</h3>
          </div>
          <div className="upper-content lowers">
            <img src={appmonetize5} alt="appmonetize_image5" />
            <h3>High-earning ads from 25+ leading ad networks</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMonetize;
