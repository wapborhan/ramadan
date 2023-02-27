import React, { Component } from "react";
import parallaxBG from "../../assets/images/parallax-bg5.jpg";
// import AudioCover from "../../assets/images/parallax-bg5.jpg";
import PattBG from "../../assets/images/pattern-bg.jpg";
import MockUp from "../../assets/images/sec-top-mckp5.png";
// import AudioPlayer from "react-h5-audio-player";
import { FaKaaba, FaMosque } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import SuraData from "../../assets/data/quran/SuraData";

export default class index extends Component {
  render() {
    return (
      <section>
        <div className="w-100 pt-170 pb-120 position-relative">
          <div
            className="fixed-bg"
            style={{
              backgroundImage: `url("${parallaxBG}")`,
            }}
          ></div>
          <img
            className="img-fluid sec-top-mckp position-absolute"
            src={MockUp}
            alt="Sec Top Mockup 5"
          />
          <div className="container">
            <div className="about-wrap3 w-100">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-5 order-lg-1">
                  <div className="plyr-wrp v3 w-100">
                    <h3
                      className="mb-0 text-center pat-bg dark-layer2 opc5 back-blend-multiply bg-color1"
                      style={{
                        backgroundImage: `url("${PattBG}")`,
                      }}
                    >
                      <span>কুরআন অডিও শুনুন</span>
                    </h3>
                    <div
                      className="plyr-inner w-100 pat-bg thm-layer opc65 back-blend-multiply thm-bg"
                      style={{
                        backgroundImage: `url("${PattBG}")`,
                      }}
                    >
                      <div className="plyr text-center v3 w-100">
                        <h1>
                          <FaKaaba />
                        </h1>
                        <h3 className="font-ar">
                          <br />
                          <span></span>
                          <br />
                        </h3>
                        <h4>নম্বর: </h4>
                        <h4>আয়াত: </h4>
                        <ul className="playlist mb-0 list-unstyled">
                          <li
                            // data-cover={AudioCover}
                            data-artist="(Abd-ur Rahman)"
                          >
                            {/* <AudioPlayer
                              onEnded={this.handleClickNext}
                              autoPlayAfterSrcChange={true}
                              showSkipControls={true}
                              showJumpControls={false}
                              src={this.state.playlist[currentMusicIndex].audio}
                              onClickPrevious={this.handleClickPrevious}
                              onClickNext={this.handleClickNext}
                            /> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-7">
                  <div className="about-inner3 w-100">
                    <div className="d-block thm-clr h2">
                      <span>স্বাগতম Quranic Jibon এ</span>
                    </div>
                    {/* <h2 className="mb-0">
                    <span>স্বাগতম IslamBD তে </span>
                  </h2> */}
                    <p className="mb-0 text-dark">
                      ইসলাম (আরবি: আল-ইসলাম - [الإسلام]) একটি একেশ্বরবাদী এবং
                      ইব্রাহিমীয় ধর্মবিশ্বাস যার মূল শিক্ষা হল, এক আল্লাহ ছাড়া
                      আর কোন স্রষ্টা নেই এবং হযরত মুহাম্মাদ সাঃ হলেন আল্লাহর
                      প্রেরিত সর্বশেষ ও চূড়ান্ত নবি ও রাসূল।
                    </p>
                    <p className="mb-0 text-dark">
                      আল্লাহ দয়ালু, করুনাময়, এক ও অদ্বিতীয় এবং একমাত্র
                      ইবাদতযোগ্য অভিভাবক। মানবজাতিকে পথ প্রদর্শনের জন্য তিনি
                      যুগে-যুগে অনেক নবি-রাসূল, আসমানী কিতাব এবং নিদর্শন
                      পাঠিয়েছেন। ইসলামে প্রধান ধর্মগ্রন্থ হলো পবিত্র কুরআন, যা
                      স্বয়ং আল্লাহর বাণী; আর সর্বশেষ ও চূড়ান্ত নবি মুহাম্মদ
                      (ﷺ) এর কথা, কাজ ও মৌনসম্মতিকে সুন্নাহ বলা হয় যা হাদিস
                      নামে লিপিবদ্ধ রয়েছে। তবে সমস্ত সুন্নাহই হাদিস, কিন্তু
                      সমস্ত হাদিস সুন্নাহ নয়।
                    </p>
                    {/* <NavLink className="thm-btn thm-bg rounded" to="/about-islam">
                    আরো জানুন
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </NavLink> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
