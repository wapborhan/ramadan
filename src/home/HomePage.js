import React, { Component, Fragment } from "react";
import "../assets/stylesheet/homepage/color.css";
import "../assets/stylesheet/homepage/perfect-scrollbar.css";

import "../assets/stylesheet/homepage/slick.css";
import "../assets/stylesheet/homepage/style.css";
import "../assets/stylesheet/homepage/responsive.css";

import Header from "./header";
import Banner from "./banner";
import Prayer from "./prayer";
import Listen from "./listen";
import Quran from "./quran";
import Counter from "./counter";
import Pillar from "./pillar";
import Footer from "./footer";

export default class HomePage extends Component {
  render(props) {
    console.log(props);
    return (
      <Fragment>
        <Header />
        <main>
          <Banner />
          {/* <Prayer prayerTime={props} /> */}
          <Listen />
          <Quran />
          <Counter />
          <Pillar />
          <Footer />
        </main>
      </Fragment>
    );
  }
}
