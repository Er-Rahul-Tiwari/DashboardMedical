import React from "react"
import { Gauge } from "@ant-design/charts"
import upArr from "../../../assets/upAngleArrow.svg"
import downArr from "../../../assets/downAngleArrow.svg"
import databaseSmall from "../../../assets/database-small.svg"
import database from "../../../assets/database.svg"

const StorageCard = () => {
  var config = {
    width: 160,
    height: 110,
    percent: 0.75,
    lineWidth: 3,
    range: { color: "#F9694A" },
    indicator: null,
    statistic: {
      title: {
        offsetY: -30,
        style: {
          fontSize: "45px",
          color: "#4B535E",
        },
        formatter: function formatter() {
          return "75%"
        },
      },
    },
  }

  return (
    <>
      {/* Storage */}
      <div className="card">
        <h3 className="heading-3">Storage </h3>
        <img className="card__icon" src={database} alt="database" />
        <div className="card__btn">
          <Gauge className="card__data" {...config} />
          <p className="card__data">
            {" "}
            <span className="pastel-red">17</span> <span className="color-5f">/25</span>{" "}
            <sapn className="color-99 cap">gB</sapn>
          </p>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">number of files</p>
          <div className="card__card-box">
            <h3 className="heading-3">247</h3>
            <img className="card__arr" src={upArr} alt="up angle arrow" />
          </div>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">MEAN SIZE</p>
          <div className="card__card-box">
            <h3 className="heading-3">
              6<span className="cap color-c8 font-16 weight-400"> Mb</span>
            </h3>
            <img className="card__arr" src={downArr} alt="down angle arrow" />
          </div>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">OTHER STATS</p>
          <h2 className="heading-2">...</h2>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">OTHER STATS</p>
          <h2 className="heading-2">...</h2>
        </div>

        <button className="cta__secondary card__btn">
          <svg className="cta__svg" viewBox="0 0 24 24" fill="none">
            <path d="M11.8523 15.4922C11.8699 15.5146 11.8923 15.5327 11.9179 15.5452C11.9435 15.5577 11.9715 15.5641 12 15.5641C12.0285 15.5641 12.0565 15.5577 12.0821 15.5452C12.1077 15.5327 12.1301 15.5146 12.1477 15.4922L14.7727 12.1711C14.8687 12.0492 14.782 11.8687 14.625 11.8687H12.8883V3.9375C12.8883 3.83437 12.8039 3.75 12.7008 3.75H11.2945C11.1914 3.75 11.107 3.83437 11.107 3.9375V11.8664H9.375C9.21797 11.8664 9.13125 12.0469 9.22734 12.1688L11.8523 15.4922ZM20.5781 14.6719H19.1719C19.0688 14.6719 18.9844 14.7563 18.9844 14.8594V18.4688H5.01562V14.8594C5.01562 14.7563 4.93125 14.6719 4.82812 14.6719H3.42188C3.31875 14.6719 3.23438 14.7563 3.23438 14.8594V19.5C3.23438 19.9148 3.56953 20.25 3.98438 20.25H20.0156C20.4305 20.25 20.7656 19.9148 20.7656 19.5V14.8594C20.7656 14.7563 20.6812 14.6719 20.5781 14.6719Z" />
          </svg>
          <span>Export report</span>
        </button>
      </div>
    </>
  )
}

export default StorageCard
