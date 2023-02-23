import React, { Component, Fragment } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notfound/NotFound";

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
        <Header />
        <Routes>
          <Route
            path="/ramadan"
            exact
            element={<Main data={this.state.prayerTime} />}
          />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}
