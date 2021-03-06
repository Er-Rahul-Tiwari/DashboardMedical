import React from "react"
import { Gauge } from "@ant-design/charts"
import upArr from "../../../assets/upAngleArrow.svg"
import downBlueArr from "../../../assets/downAngleArrow.svg"

const WorkCard = () => {
  var config = {
    width: 170,
    height: 110,
    percent: 0.5,
    lineWidth: 3,
    range: { color: "#FFD98F" },
    indicator: null,
    statistic: {
      title: {
        offsetY: -5,
        style: {
          fontSize: "25px",
          color: "#FFD98F",
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
    range: { color: "#F9BD4A" },
    indicator: null,
    statistic: {
      title: {
        offsetY: -35,
        style: {
          fontSize: "45px",
          color: "#4B535E",
        },
        formatter: function formatter() {
          return "35%"
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
        <button className="cta card__btn">
          <svg className="cta__svg" viewBox="0 0 15 19" fill="none">
            <path d="M7.5 18.8C6.01664 18.8 4.56659 18.3601 3.33323 17.536C2.09986 16.7119 1.13856 15.5406 0.570907 14.1701C0.00324963 12.7997 -0.145275 11.2917 0.144114 9.83681C0.433503 8.38196 1.14781 7.04558 2.1967 5.99669C3.2456 4.9478 4.58197 4.23349 6.03683 3.9441C7.49168 3.65471 8.99968 3.80324 10.3701 4.37089C11.7406 4.93855 12.9119 5.89985 13.736 7.13321C14.5601 8.36658 15 9.81663 15 11.3C15 12.2849 14.806 13.2602 14.4291 14.1701C14.0522 15.0801 13.4997 15.9068 12.8033 16.6033C12.1069 17.2997 11.2801 17.8522 10.3701 18.2291C9.46019 18.606 8.48492 18.8 7.5 18.8ZM7.5 5.29999C6.31331 5.29999 5.15328 5.65188 4.16658 6.31117C3.17989 6.97046 2.41085 7.90753 1.95673 9.00389C1.5026 10.1002 1.38378 11.3066 1.61529 12.4705C1.8468 13.6344 2.41825 14.7035 3.25736 15.5426C4.09648 16.3817 5.16558 16.9532 6.32946 17.1847C7.49335 17.4162 8.69975 17.2974 9.7961 16.8433C10.8925 16.3891 11.8295 15.6201 12.4888 14.6334C13.1481 13.6467 13.5 12.4867 13.5 11.3C13.5 9.70869 12.8679 8.18257 11.7426 7.05735C10.6174 5.93213 9.0913 5.29999 7.5 5.29999Z" />
            <path d="M10.5 2.29999H4.5C4.30109 2.29999 4.11032 2.22097 3.96967 2.08032C3.82902 1.93967 3.75 1.7489 3.75 1.54999C3.75 1.35108 3.82902 1.16031 3.96967 1.01966C4.11032 0.879005 4.30109 0.799988 4.5 0.799988H10.5C10.6989 0.799988 10.8897 0.879005 11.0303 1.01966C11.171 1.16031 11.25 1.35108 11.25 1.54999C11.25 1.7489 11.171 1.93967 11.0303 2.08032C10.8897 2.22097 10.6989 2.29999 10.5 2.29999Z" />
            <path d="M7.5 5.29999C7.30109 5.29999 7.11032 5.22097 6.96967 5.08032C6.82902 4.93966 6.75 4.7489 6.75 4.54999V1.54999C6.75 1.35108 6.82902 1.16031 6.96967 1.01966C7.11032 0.879005 7.30109 0.799988 7.5 0.799988C7.69891 0.799988 7.88968 0.879005 8.03033 1.01966C8.17098 1.16031 8.25 1.35108 8.25 1.54999V4.54999C8.25 4.7489 8.17098 4.93966 8.03033 5.08032C7.88968 5.22097 7.69891 5.29999 7.5 5.29999Z" />
            <path d="M14.2519 6.05025C14.1532 6.05082 14.0554 6.0319 13.964 5.99458C13.8726 5.95726 13.7895 5.90226 13.7194 5.83275L12.2194 4.33275C12.0965 4.18928 12.0323 4.00472 12.0396 3.81596C12.0469 3.62721 12.1252 3.44815 12.2587 3.31458C12.3923 3.18101 12.5714 3.10276 12.7601 3.09547C12.9489 3.08818 13.1334 3.15238 13.2769 3.27525L14.7769 4.77525C14.8797 4.88008 14.9494 5.01277 14.9775 5.15687C15.0056 5.30097 14.9908 5.45014 14.9349 5.58589C14.879 5.72164 14.7845 5.838 14.6631 5.92055C14.5417 6.00309 14.3987 6.04819 14.2519 6.05025Z" />
            <path d="M12.0005 6.79994C11.8515 6.80081 11.7056 6.75729 11.5815 6.67494C11.4574 6.59259 11.3606 6.47513 11.3034 6.33755C11.2463 6.19997 11.2314 6.04849 11.2607 5.90243C11.29 5.75637 11.3622 5.62234 11.468 5.51744L12.968 4.01744C13.1114 3.89457 13.296 3.83037 13.4847 3.83766C13.6735 3.84495 13.8526 3.9232 13.9861 4.05677C14.1197 4.19034 14.1979 4.36939 14.2052 4.55815C14.2125 4.74691 14.1483 4.93146 14.0255 5.07494L12.5255 6.57494C12.387 6.71625 12.1983 6.79712 12.0005 6.79994Z" />
            <path d="M11.25 12.05H7.5C7.30109 12.05 7.11032 11.971 6.96967 11.8303C6.82902 11.6897 6.75 11.4989 6.75 11.3V6.79999C6.75 6.60108 6.82902 6.41031 6.96967 6.26966C7.11032 6.12901 7.30109 6.04999 7.5 6.04999C7.69891 6.04999 7.88968 6.12901 8.03033 6.26966C8.17098 6.41031 8.25 6.60108 8.25 6.79999V10.55H11.25C11.4489 10.55 11.6397 10.629 11.7803 10.7697C11.921 10.9103 12 11.1011 12 11.3C12 11.4989 11.921 11.6897 11.7803 11.8303C11.6397 11.971 11.4489 12.05 11.25 12.05Z" />
          </svg>

          <span>Tissue preparation</span>
        </button>
      </div>
    </>
  )
}

export default WorkCard
