import React from "react"
import { Credit, Answer, NotAny } from "./Cards"

const HistoryNotification = () => {
  return (
    <>
      <div className="historyNotification">
        <div className="historyNotificationCards">
          <p className="weight-700 font-12 upper color-c8 ml-3 mt-medium">OCTOBER 2020</p>

          <Credit/>
          <Credit/>
          <Credit/>
          
        </div>
        <div className="historyNotificationCards">
          <p className="weight-700 font-12 upper color-c8 ml-3 mt-medium">SEPTEMBER 2020</p>
          <Answer/>
          <Answer/>
          <Answer/>
        </div>
        <div className="historyNotificationCards">
          <p className="weight-700 font-12 upper color-c8 ml-3 mt-medium">OCTOBER 2020</p>

          <Credit/>
          <Answer/>
          <NotAny/>

        </div>
        <div className="historyNotificationCards">
          <p className="weight-700 font-12 upper color-c8 ml-3 mt-medium">OCTOBER 2020</p>

          <Credit/>
          <Answer/>
          <NotAny/>

        </div>
      </div>
    </>
  )
}

export default HistoryNotification
