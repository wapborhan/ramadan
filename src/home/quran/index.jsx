import React from "react";
import SecBG from "../../assets/images/sec-bg2.jpg";
import PattBG from "../../assets/images/pattern-bg.jpg";
import LearnIMG from "../../assets/images/resources/learn-img.jpg";

import { GiRubElHizb } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import List from "./List";

const index = () => {
  return (
    <section>
      <div className="w-100 pt-100 black-layer pb-100 opc1 position-relative">
        <div
          className="fixed-bg"
          style={{
            backgroundImage: `url("${SecBG}")`,
          }}
        ></div>
        <div
          className="hlf-bg thm-layer opc6 pat-bg back-blend-multiply thm-bg position-absolute"
          style={{
            backgroundImage: `url("${PattBG}")`,
          }}
        ></div>
        <div className="container">
          <div className="learn-wrap w-100">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-5">
                <div className="learn-img w-100">
                  <img
                    className="img-fluid w-100"
                    src={LearnIMG}
                    alt="Learn Image"
                  />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-7">
                <div className="learn-inner w-100">
                  <div className="learn-top d-flex flex-wrap align-items-center justify-content-between w-100">
                    <div className="learn-top-inner">
                      <h3 className="mb-0">
                        <i className="flaticon-rub-el-hizb thm-clr">
                          <GiRubElHizb />
                        </i>
                        আল কুরআন (সুরা ক্রমে)
                      </h3>
                    </div>
                    <div className="learn-top-inner">
                      <NavLink
                        to="/pages/sura"
                        className="text-decoration-none"
                      >
                        সম্পূর্ণ কুরআন
                        <i className="fas fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                  <List />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
