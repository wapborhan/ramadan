import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PrayerTime() {
  // componentDidMount() {
  //   axios
  //     .get("https://api.pray.zone/v2/times/today.json?city=kushtia")
  //     .then((res) => res.data)
  //     .then((comment) => {
  //       let data = comment.results.datetime[0].times;
  //       return data;
  //     });
  // }

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.pray.zone/v2/times/today.json?city=kushtia")
      .then((response) => {
        // setPost(response.data)
        return response.data;
      })
      .then((res) => {
        return res.results;
      })
      .then((res) => {
        return res.datetime;
      })
      .then((res) => {
        return [res[0].date, res[0].times];
      })
      .then((res) => {
        setPost(res);
      });
  }, []);

  if (!post) return null;
  post.map((item) => {
    console.log(item);
   
  });


  return (
    <div>
      <dd className="a"></dd>
      da
    </div>
  );
}
