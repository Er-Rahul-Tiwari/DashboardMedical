import React from "react"
import blurMemberAvatar from "../../../assets/blurMemberAvatar.jpg"
import closeCircle from "../../../assets/closeCircle.svg"

const BlurMemberAvatar = () => {
  return (
    <>
      <div className="popup__cards">
        <div className="popup__left">
          <img
            src={blurMemberAvatar}
            className="popup__member-pic"
            alt="member pic"
          />
          <p className="color-5f font-14 weight-700">Smith john</p>
        </div>
        <div className="popup__right">
          <p className="azure-blue weight-700 font-14">Re-send invitation</p>
          <img src={closeCircle} className="popup__svg" alt="close Circle svg" />
        </div>
      </div>
    </>
  )
}
export default BlurMemberAvatar
