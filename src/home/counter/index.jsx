import React from "react";
import PattBG from "../../assets/images/pattern-bg.jpg";
import CounterList from "./CounterList";
import { GiPayMoney, GiRubElHizb } from "react-icons/gi";

const index = () => {
  return (
    <section>
      <div className="w-100 pt-80 white-layer pb-50 opc9 position-relative">
        <div
          className="fixed-bg patern-bg back-blend-multiply white-bg"
          // style="background-image: url(assets/images/pattern-bg.jpg);"
          style={{
            backgroundImage: `url("${PattBG}")`,
          }}
        ></div>
        <div className="container">
          <div className="facts-wrap w-100 text-center">
            <div className="sec-title text-center w-100">
              <div className="sec-title-inner d-inline-block">
                <i className="flaticon-rub-el-hizb thm-clr">
                  <GiRubElHizb />
                </i>
                <h2 className="mb-0">
                  <span>আল কুরআন এ রয়েছে</span>
                </h2>
              </div>
            </div>
            <CounterList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
