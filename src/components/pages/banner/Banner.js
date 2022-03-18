import React from "react";
import BannerImg from "../../assets/images/mosque.jpg";
import PrayerTime from "../PrayerTime";
import CountDown from "./CountDown";

export default function Banner() {
  return (
    <div
      className="banner"
      style={{
        paddingTop: "80px",
        backgroundImage: `url(${BannerImg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CountDown />
      <PrayerTime />
    </div>
  );
}
