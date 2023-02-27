import React, { Component } from "react";
import MobileNav from "./MobileNav";
import { FaBars } from "react-icons/fa";

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState((prevState) => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  }
  render() {
    return (
      <div className="rspn-hdr">
        <div className="rspn-mdbr">
          <div className="rspn-scil text-light pt-2 pb-2">
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
          {/* <form className="rspn-srch">
          <input type="text" placeholder="Enter Your Keyword" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form> */}
        </div>
        <div className="lg-mn">
          <div className="logo">
            <a href="index-2.html" title="Home">
              {/* <img src="assets/images/logo3.png" alt="IslamBD" /> */}
              <span> কুরআনিক জীবন</span>
            </a>
          </div>
          {/* <div className="rspn-cnt">
          <span>
            <i className="thm-clr far fa-envelope"></i>
            <a href="javascript:void(0);" title="">
              info@youremailid.com
            </a>
          </span>
          <span>
            <i className="thm-clr fas fa-phone-alt"></i>+96 125 554 24 5
          </span>
        </div> */}
          <span onClick={this.handleToggle} className="rspn-mnu-btn">
            <FaBars />
          </span>
        </div>
        <div className={this.state.isActive ? "rsnp-mnu" : "rsnp-mnu slidein"}>
          <span className="rspn-mnu-cls" onClick={this.handleToggle}>
            <FaBars />
          </span>
          <MobileNav handleToggle={this.handleToggle} />
        </div>
      </div>
    );
  }
}
