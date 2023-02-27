import React from "react";
import quranIco from "../../assets/images/counter/quran.png";
import ayathIco from "../../assets/images/counter/ayath.png";
import rukuIco from "../../assets/images/counter/ruku.png";
import manjilIco from "../../assets/images/counter/manjil.png";

const list = [
  {
    id: 1,
    tittle: "সূরা",
    count: "১১৪",
    icon: quranIco,
  },
  {
    id: 2,
    tittle: "আয়াত",
    count: "৬২৩৬",
    icon: ayathIco,
  },
  {
    id: 3,
    tittle: "রুকু ",
    count: "৫৪০",
    icon: rukuIco,
  },
  {
    id: 4,
    tittle: "মানজিল",
    count: "৭",
    icon: manjilIco,
  },
];

const CounterList = () => {
  return (
    <div className="row">
      {list.map((item) => {
        return (
          <div className="col-md-4 col-sm-6 col-6 col-lg-3" key={item.id}>
            <div className="fact-box d-flex flex-wrap align-items-center w-100">
              <span className="rounded-circle">
                {/* <i className="flaticon-mosque-3"></i> */}
                <img src={item.icon} alt="" />
              </span>
              <div className="fact-inner">
                <h3 className="mb-0 counter">{item.count}</h3>

                <h4 className="mb-0">
                  <span>{item.tittle}</span>
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CounterList;
