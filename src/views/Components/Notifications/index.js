import React from "react"
import Notification from "./Notification"
import NotificationCta from "./NotificationCta"

const Notifications = ({props}) => {
  return (
    <>
      <div className="popups">
        <div className="notification">
          <NotificationCta {...props} />
        </div>
      </div>
    </>
  )
}

export default Notifications
