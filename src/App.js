import React, { Component, Fragment } from "react";
import Header from "./components/pages/header/Header";
import Main from "./components/pages/Main";
import Footer from "./components/pages/footer/Footer";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: "23.897144493916453",
      long: "89.11046038653564",
      prayerTime: null,
      timestamp: new Date(),
    };
  }
  componentDidMount() {
    const time = Math.round(this.state.timestamp / 1000);
    axios
      .get(
        `//api.aladhan.com/v1/timings/${time}?latitude=${this.state.lat}&longitude=${this.state.long}`
      )
      .then((response) => {
        // console.log(response);
        const data = response.data.data.timings;
        this.setState({
          prayerTime: [
            { time: ["সেহরী শেষ", data.Imsak] },
            { time: ["ফজর", data.Fajr] },
            { time: ["সূর্যোদয়", data.Sunrise] },
            { time: ["জোহর", data.Dhuhr] },
            { time: ["আছর", data.Asr] },
            { time: ["সূর্যাস্ত", data.Sunset] },
            { time: ["মাগরিব", data.Maghrib] },
            { time: ["এশা", data.Isha] },
            { time: ["মধ্যরাত", data.Midnight] },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.prayerTime);
    return (
      <Fragment>
        {/* <Header /> */}
        <Main data={this.state.prayerTime} />
        <Footer />
      </Fragment>
    );
  }
}
