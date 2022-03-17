import React from "react";
import BannerImg from "../../assets/images/mosque.jpg";

export default function Banner() {
  return (
    <div
      className="banner"
      style={{
        color: "red",
        paddingTop: "80px",
        backgroundImage: `url(${BannerImg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      Banner
    </div>
  );
}
