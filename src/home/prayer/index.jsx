import React, { useState, useEffect } from "react";
import axios from "axios";
import Contents from "./Contents";

const Index = (props) => {
  const [prayerTime, setprayerTime] = useState(null);
  const [lat, setLat] = useState("23.897144493916453");
  const [long, setlong] = useState("89.11046038653564");
  const [timestamp, settimestamp] = useState(new Date());

  useEffect(() => {
    const time = Math.round(timestamp / 1000);
    axios
      .get(
        `//api.aladhan.com/v1/timings/${time}?latitude=${lat}&longitude=${long}`
      )
      .then((response) => {
        const data = response.data.data.timings;
        setprayerTime({
          prayer: [
            { sahri: data.Imsak },
            { fazr: data.Fajr },
            { sunrise: data.Sunrise },
            { johr: data.Dhuhr },
            { asr: data.Asr },
            { sunset: data.Sunset },
            { magrib: data.Maghrib },
            { isha: data.Isha },
            { midnight: data.Midnight },
          ],
        });
      });
  }, []);

  if (!prayerTime) return null;

  return (
    <section>
      <div className="w-100 position-relative">
        <div className="container">
          <div className="time-wrap3 overlap2589 overlap-60 position-relativ w-100">
            <Contents data={prayerTime} />
            {/* <div className="sec-title text-center w-100 mt-3">
              <div className="sec-title-inner d-inline-block">
                <h2 className="mb-0 text-dark">Today's Prayer Times</h2>
                <p className="mb-0 thm-clr">
                  Islamic: , 9 Shawwal 1441 AH - Monday, June 1, 2020
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
