import React from "react"
import { Gauge } from "@ant-design/charts"
import upArr from "../../../assets/upAngleArrow.svg"
import downBlueArr from "../../../assets/downAngleArrow.svg"

const StorageCard = () => {
  var config = {
    width: 170,
    height: 110,
    percent: 0.5,
    lineWidth: 3,
    range: { color: "#8ED8F8" },
    indicator: null,
    statistic: {
      title: {
        offsetY: -5,
        style: {
          fontSize: "25px",
          color: "#8ED8F8",
        },
        formatter: function formatter() {
          return "50%"
        },
      },
    },
  }
  var config2 = {
    width: 144,
    height: 100,
    percent: 0.35,
    lineWidth: 3,
    range: { color: "#0095DA" },
    indicator: null,
    statistic: {
      title: {
        offsetY: -35,
        style: {
          fontSize: "45px",
          color: "#0095DA",
        },
        formatter: function formatter() {
          return "35%"
        },
      },
    },
  }

  return (
    <>
      {/* Storage */}
      <div className="card">
        <h3 className="heading-3">Storage </h3>
        <svg className="card__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path d="M20.813 18.563H4.688V3.938c0-.104-.085-.188-.188-.188H3.187c-.103 0-.187.084-.187.188v16.125c0 .103.084.187.188.187h17.625c.103 0 .187-.084.187-.188V18.75c0-.103-.084-.188-.188-.188zM6.75 16.688h1.313c.103 0 .187-.085.187-.188v-3.375c0-.103-.084-.188-.188-.188H6.75c-.103 0-.188.085-.188.188V16.5c0 .103.085.188.188.188zm3.563 0h1.312c.103 0 .188-.085.188-.188V9c0-.103-.085-.188-.188-.188h-1.313c-.103 0-.187.085-.187.188v7.5c0 .103.084.188.188.188zm3.562 0h1.313c.103 0 .187-.085.187-.188v-5.672c0-.103-.084-.187-.188-.187h-1.312c-.103 0-.188.084-.188.187V16.5c0 .103.085.188.188.188zm3.563 0h1.312c.103 0 .188-.085.188-.188V7.125c0-.103-.085-.188-.188-.188h-1.313c-.103 0-.187.085-.187.188V16.5c0 .103.084.188.188.188z" />
        </svg>

        <div className="card__btn">
          <div className="card__nestedBox">
            <div className="card__nested-1">
              <Gauge className="card__data" {...config} />
            </div>
            <div className="card__nested-2">
              <Gauge className="card__data" {...config2} />
            </div>
          </div>
        </div>

        <div className="card__data">
          <p>
            {" "}
            <span className="azure-blue">17</span> <span className="color-5f">/25</span>{" "}
            <sapn className="color-99 cap">gB</sapn>
          </p>
        </div>
        
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">NUMBER OF FILES</p>
          <div className="card__card-box">
            <h3 className="heading-3">532</h3>
            <img className="card__arr" src={upArr} alt="up angle arrow" />
          </div>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">NUMBER OF GROUPS</p>

          <div className="card__card-box">
            <h3 className="heading-3">
              36<span className="cap color-c8 font-16 weight-400"> Mb</span>
            </h3>
            <img className="card__arr" src={downBlueArr} alt="down angle arrow" />
          </div>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">MEAN SIZE</p>
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

export default StorageCard
