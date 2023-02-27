import React from "react";
import Slide1 from "../../assets/images/resources/slide1.jpg";

import CountDown from "./CountDown";
import Clock from "./Clock";

const index = () => {
  return (
    <section>
      <div className="w-100 position-relative">
        <div className="feat-wrap v1 text-center position-relative w-100">
          <div className="feat-caro">
            <div
              className="feat-img position-absolute"
              style={{
                backgroundImage: `url(${Slide1})`,
              }}
            ></div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <Clock />
              </div>
              <div className="col-md-4 col-sm-6">
                <CountDown />
              </div>
            </div>
          </div>

          {/* <div className="feat-caro">
            <div className="feat-item">
              <div
                className="feat-img position-absolute"
                style={{
                  backgroundImage: `url(${Slide1})`,
                }}
              ></div>
              <div className="feat-cap-wrap position-absolute d-inline-block">
                <div className="feat-cap d-inline-block">
                  <i className="d-inline-block flaticon-rub-el-hizb thm-clr">
                    <GiRubElHizb />
                  </i>
                
                  <h2 className="mb-0">
                    <span>আল্লাহর কাছে কোন কিছুই অসম্ভব নয়</span>
                  </h2>
                  <p className="mb-0">
                    মুসলিম সম্প্রদায়, পবিত্র কুরআনের উপর ভিত্তি করে একটি ব্যাপক
                    ইসলামী জীবনধারা প্রচার করছে
                  </p>
                  <NavLink className="thm-btn thm-bg rounded" to="/pages/sura">
                    আল কুরআন
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default index;
