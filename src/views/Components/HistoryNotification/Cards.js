import React from "react"
import avatar from "../../../assets/avatar.jpg"
import cr from "../../../assets/cr.svg"
import bank from "../../../assets/bank.svg"

export const Credit = () => {
  return (
    <>
      <div className="historyNotificationCard">
        <div className="historyNotificationCard__end">
          <div className="historyNotificationCard__point"></div>
          <img src={avatar} alt="history notification cards" />
        </div>
        <div>
          <span className="weight-700 font-14 color-5f">Smith John </span>
          <span className=" weight-500 font-14 color-99"> has been added to the group </span>
          <span className="weight-700 font-14 color-5f"> Scientific Team </span>
            <img src={cr} alt="cr images"/>
        </div>
        <p className="p0 azure-blue font-14 weight-700">Give credits</p>
        <p className="p0 color-c8 font-14 weight-500">2 hours ago</p>
      </div>
    </>
  )
}
export const Answer = () => {
  return (
    <>
      <div className="historyNotificationCard">
        <div className="historyNotificationCard__end">
          {/* <div className="historyNotificationCard__point"></div> */}
          <img src={bank} alt="history notification cards" />
        </div>
        <div>
          <span className="weight-700 font-14 color-5f">Caroline Depagnieux </span>
          <span className=" weight-500 font-14 color-99"> has been added to the group </span>
          <span className="weight-700 font-14 color-5f"> Scientific Team </span>
        </div>
        <p className="p0 azure-blue font-14 weight-700">Answer</p>
        <p className="p0 color-c8 font-14 weight-500">12/09/2020</p>
      </div>
    </>
  )
}
export const NotAny = () => {
  return (
    <>
      <div className="historyNotificationCard">
        <div className="historyNotificationCard__end">
          <div className="historyNotificationCard__point"></div>
          <img src={avatar} alt="history notification cards" />
        </div>
        <div>
          <span className="weight-700 font-14 color-5f">Smith John </span>
          <span className=" weight-500 font-14 color-99"> has been added to the group </span>
          <span className="weight-700 font-14 color-5f"> Scientific Team </span>
            <img src={cr} alt="cr images"/>
        </div>
        <p className="p0 azure-blue font-14 weight-700">Give credits</p>
        <p className="p0 color-c8 font-14 weight-500">2 hours ago</p>
      </div>
    </>
  )
}
