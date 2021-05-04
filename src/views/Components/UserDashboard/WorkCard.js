import React from "react"
import { Gauge } from "@ant-design/charts"
import upArr from "../../../assets/upAngleArrow.svg"
import downBlueArr from "../../../assets/downAngleArrow.svg"

const WorkCard = () => {
  var config = {
    width: 160,
    height: 110,
    percent: 0.5,
    lineWidth: 3,
    range: { color: "#F9BD4A" },
    indicator: null,
    statistic: {
      title: {
        offsetY: -30,
        style: {
          fontSize: "45px",
          color: "#4B535E",
        },
        formatter: function formatter() {
          return "50%"
        },
      },
    },
  }

  return (
    <>
      {/* Work */}
      <div className="card">
        <h3 className="heading-3">Work </h3>
        <svg className="card__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 38">
          <path d="M45.9375 0.4375H2.0625C1.1291 0.4375 0.375 1.1916 0.375 2.125V35.875C0.375 36.8084 1.1291 37.5625 2.0625 37.5625H45.9375C46.8709 37.5625 47.625 36.8084 47.625 35.875V2.125C47.625 1.1916 46.8709 0.4375 45.9375 0.4375ZM4.17188 4.23438H43.8281V10.5625H4.17188V4.23438ZM43.8281 33.7656H4.17188V15.2031H43.8281V33.7656ZM31.3301 30.3906H40.0312C40.2633 30.3906 40.4531 30.2008 40.4531 29.9688V26.1719C40.4531 25.9398 40.2633 25.75 40.0312 25.75H31.3301C31.098 25.75 30.9082 25.9398 30.9082 26.1719V29.9688C30.9082 30.2008 31.098 30.3906 31.3301 30.3906Z" />
        </svg>

        <div className="card__btn">
          <Gauge className="card__data" {...config} />
          <p className="card__data">
            {" "}
            <span className="pastel-orange">17</span> <span className="color-5f">/25</span>{" "}
            <sapn className="color-99 cap">gB</sapn>
          </p>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">REMAINING CREDITS</p>
          <div className="card__card-box">
            <h3 className="heading-3">532</h3>
            <img className="card__arr" src={upArr} alt="up angle arrow" />
          </div>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">MONTHLY CREDITS</p>

          <div className="card__card-box">
            <h3 className="heading-3">
              36<span className="cap color-c8 font-16 weight-400"> Mb</span>
            </h3>
          </div>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">MEAN CREDITS / IMG</p>
          <div className="card__card-box">
            <h3 className="heading-3">
              443<span className="cap color-c8 font-16 weight-400"> Mb</span>
            </h3>
            <img className="card__arr" src={downBlueArr} alt="down angle arrow" />
          </div>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">OTHER STATS</p>
          <h2 className="heading-2">...</h2>
        </div>
      </div>
    </>
  )
}

export default WorkCard
