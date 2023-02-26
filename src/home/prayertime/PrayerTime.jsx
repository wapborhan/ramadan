import React, { Component } from "react";
import moment from "moment";

import "moment/min/locales.min";
import Clock from "./Clock";
// moment.locale("bn");

class PrayerTime extends Component {
  render() {
    if (!this.props.prayerTime) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="error-msg">
                <p className="py-5 text-center">
                  সার্ভার থেকে তথ্য পেতে আপনার ইন্টারনেট সংযোগ পরীক্ষা করেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // console.log(this.props.prayerTime);
    const item = this.props.prayerTime.map((prayer, a, b) => {
      // console.log(prayer.time[1]);

      const timeOr = prayer.time[1].split(":");
      const perfectTime = moment()
        .hours(timeOr[0])
        .minutes(timeOr[1])
        .format("hh:mm A");
      return (
        <div key={prayer.time[0]} className="col-md-4">
          <div className="card mt-3 text-center shadow">
            <div className="prayer-card card-body">
              <h3>{prayer.time[0]}</h3>
              <p>{perfectTime}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row justify-content-md-center no-gutters">
          <div className="col-md-4">
            <Clock />
          </div>
          <div className="col-md-8">
            <div className="row">{item}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default PrayerTime;
