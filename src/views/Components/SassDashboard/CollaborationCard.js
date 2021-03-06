import React from "react"
import { Gauge } from "@ant-design/charts"
import upArr from "../../../assets/upAngleArrow.svg"
import downBlueArr from "../../../assets/downAngleArrow.svg"

const CollaborationCard = () => {
  var config = {
    width: 170,
    height: 110,
    percent: 0.001,
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
          return "0%"
        },
      },
    },
  }
  var config2 = {
    width: 144,
    height: 100,
    percent: 0.003,
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
          return "0%"
        },
      },
    },
  }

  return (
    <>
      {/* Collaboration */}
      <div className="card">
        <h3 className="heading-3">Collaboration </h3>
        <svg className="card__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path d="M19.317 16.404c-.586-.587-1.272-1.066-2.024-1.416 1.061-.86 1.739-2.172 1.739-3.644 0-2.597-2.166-4.728-4.763-4.688-2.557.04-4.617 2.124-4.617 4.688 0 1.472.68 2.784 1.739 3.644-.753.35-1.439.829-2.025 1.416-1.28 1.282-2.006 2.974-2.053 4.779 0 .025.004.05.013.073.009.023.023.044.04.062.018.018.038.033.061.042.024.01.048.015.073.015h1.313c.1 0 .185-.08.187-.18.045-1.36.596-2.633 1.564-3.598.495-.498 1.084-.893 1.733-1.162.649-.268 1.345-.406 2.047-.404 1.427 0 2.77.556 3.78 1.566.966.965 1.517 2.238 1.564 3.598.002.1.087.18.187.18h1.313c.025 0 .05-.005.073-.015.023-.01.044-.024.061-.042.018-.018.031-.039.04-.062.01-.023.014-.048.013-.073-.047-1.805-.773-3.497-2.058-4.78zm-4.973-2.06c-.801 0-1.556-.312-2.121-.88-.284-.28-.507-.616-.658-.986-.151-.37-.226-.765-.22-1.165.006-.769.313-1.511.85-2.062.562-.577 1.315-.898 2.119-.907.794-.007 1.565.302 2.132.858.582.57.9 1.33.9 2.142 0 .801-.311 1.554-.878 2.12-.279.28-.61.502-.974.653-.365.15-.755.228-1.15.227zm-5.871-2.381c-.021-.204-.033-.41-.033-.62 0-.372.035-.735.1-1.09.017-.084-.027-.17-.105-.205-.318-.143-.611-.34-.864-.589-.299-.289-.533-.637-.69-1.022-.156-.385-.23-.798-.217-1.214.02-.752.323-1.467.85-2.006.58-.593 1.357-.916 2.185-.907.747.007 1.47.295 2.015.806.185.174.345.366.479.572.046.073.138.103.218.075.412-.143.848-.243 1.296-.29.13-.014.206-.155.147-.272-.761-1.507-2.318-2.548-4.118-2.576-2.599-.04-4.765 2.09-4.765 4.685 0 1.472.678 2.785 1.74 3.645-.746.344-1.433.82-2.028 1.415-1.284 1.282-2.01 2.975-2.058 4.781 0 .026.004.05.013.074.01.023.023.044.04.062.018.018.039.032.062.042.023.01.048.015.073.015h1.315c.1 0 .185-.08.187-.18.045-1.36.595-2.633 1.563-3.598.69-.69 1.533-1.168 2.454-1.4.092-.023.153-.11.141-.204z" />
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
          <p className="color-c8 upper font-12 weight-700 mb-small">SHARED FILES</p>
          <div className="card__card-box">
            <h3 className="heading-3">532</h3>
            <img className="card__arr" src={upArr} alt="up angle arrow" />
          </div>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">MONTHLY MESSAGES</p>

          <div className="card__card-box">
            <h3 className="heading-3">
              36<span className="cap color-c8 font-16 weight-400"> Mb</span>
            </h3>
          </div>
        </div>
        <div>
          <p className="color-c8 upper font-12 weight-700 mb-small">MADE ANNOTATIONS</p>
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

export default CollaborationCard
