import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
// Import Images
import Logo from "../../assets/images/logo.png";
import RetinaLogo from "../../assets/images/retina-logo.png";
import PatternBG from "../../assets/images/pattern-bg.jpg";
// Import Icon
import { FaSun, FaMoon } from "react-icons/fa";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

const index = () => {
  return (
    <Fragment>
      <header className="stick style1 w-100">
        <div className="topbars bg-color1 d-flex flex-wrap justify-content-center w-100">
          <ul className="topbars-info-list mb-0 list-unstyled d-inline-flex">
            <li>
              <i className="thm-clr flaticon-sun">
                <FaSun />
              </i>
              সূর্যোদয়: <span className="thm-clr">০০:০০</span>
            </li>
            <li>
              <i className="thm-clr flaticon-moon">
                <FaMoon />
              </i>
              সূর্যাস্ত : <span className="thm-clr">০০:০০</span>
            </li>
          </ul>
          <div className="social-links d-inline-flex text-light">
            <div className="dateshow">
              {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
                day: "numeric",
                month: "long",
                weekday: "long",
                year: "numeric",
              }).format(Date.now())}
            </div>
            <div className="datehide">
              {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
                day: "numeric",
                month: "long",
                weekday: "long",
                // year: "numeric",
              }).format(Date.now())}
            </div>
          </div>
        </div>
        <div className="logo-menu-wrap d-flex flex-wrap justify-content-between w-100">
          <div
            className="logo position-relative thm-layer opc7 back-blend-multiply thm-bg"
            // style="background-image: url(assets/images/pattern-bg.jpg);"
            style={{
              backgroundImage: `url("${PatternBG}")`,
            }}
          >
            <h1 className="mb-0">
              <NavLink to="/" title="Home">
                <img
                  className="img-fluid"
                  src={Logo}
                  alt="Logo"
                  // srcset={RetinaLogo}
                />
                {/* <span> কুরআনিক জীবন</span> */}
              </NavLink>
            </h1>
          </div>

          <NavMenu />
        </div>
      </header>
      <MobileMenu />
    </Fragment>
  );
};

export default index;
