import React, { useState, useEffect } from "react"

import logo from "../../../assets/logo.svg"
import lineChart from "../../../assets/line-Chart.svg"
import pieChart from "../../../assets/pie-Chart.svg"
import folderOpen from "../../../assets/folder-open.svg"
import container from "../../../assets/container.svg"
import team from "../../../assets/team.svg"
import speaker from "../../../assets/speaker.svg"
import setting from "../../../assets/setting.svg"
import logout from "../../../assets/logout.svg"
import upload from "../../../assets/upload.svg"

const LeftSideNavbar = () => {
  const [menuSelected, setMenuSelected] = useState(0)

  const handleSelection = (prop) => {
    console.log(prop)
    setMenuSelected(prop)
  }

  useEffect(() => console.log("[Mount][LeftSideNavbar]"), [])

  return (
    <>
      <div className="leftNav">
        <img className="leftNav__logo" src={logo} alt="logo" />{" "}
        <div className="leftNav__box">
          <div
            className="leftNav__item leftNav__active"
            onClick={() => handleSelection(1)}
          >
            <img className="leftNav__icon" src={pieChart} alt="pie-Chart" />
          </div>
          <div className="leftNav__item" onClick={() => handleSelection(2)}>
            <img className="leftNav__icon" src={folderOpen} alt="folder open" />
          </div>
          <div className="leftNav__item" onClick={() => handleSelection(3)}>
            <img className="leftNav__icon" src={lineChart} alt="line-Chart" />
          </div>
          <div className="leftNav__item" onClick={() => handleSelection(4)}>
            <img className="leftNav__icon" src={container} alt="container" />
          </div>
          <div className="leftNav__item" onClick={() => handleSelection(5)}>
            <img className="leftNav__icon" src={team} alt="team" />
          </div>
          <div className="leftNav__item" onClick={() => handleSelection(6)}>
            <img className="leftNav__icon" src={speaker} alt="speaker" />
          </div>
          <div className="leftNav__upload" onClick={() => handleSelection(7)}>
            <img className="leftNav__icon" src={upload} alt="upload" />
          </div>
        </div>
        <div className="leftNav__bottom">
          <div className="leftNav__item" onClick={() => handleSelection(8)}>
            <img className="leftNav__icon" src={setting} alt="setting" />
          </div>
          <div className="leftNav__item" onClick={() => handleSelection(9)}>
            <img className="leftNav__icon" src={logout} alt="logout" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftSideNavbar
