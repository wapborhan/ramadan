import React from "react";
import BannerImg from "../../assets/images/banner-2.png";
import BannerTop from "../../assets/images/top.png";
import CountDown from "./CountDown";

export default function Banner() {
  return (
    <div
      className="banner"
      style={{
        paddingTop: "80px",
        background: "#868686",
        backgroundImage: `url(${BannerImg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="image">
        <img src={BannerTop} alt="dsd" />
      </div>
      <CountDown />
    </div>
  );
}
