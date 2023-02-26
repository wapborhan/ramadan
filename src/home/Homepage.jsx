import React, { Fragment } from "react";
import Banner from "./banner/Banner";

import PrayerTime from "./prayertime/PrayerTime";

export default function Main(props) {
  return (
    <Fragment>
      <Banner />
      <PrayerTime prayerTime={props.data} />
    </Fragment>
  );
}
