import React from "react"
import del from "../../../assets/delete.svg"
import memberAvatar from "../../../assets/memberAvatar.jpg"

const AvatarMember = () => {
  return (
    <>
      <div className="popup__cards">
        <div className="popup__left">
          <img src={memberAvatar} className="popup__member-pic" alt="member pic" />
          <p className="color-5f font-14 weight-700">Smith John</p>
        </div>
        <div className="popup__right">
          <select className="form__input">
            <option value="view">View</option>
            <option value="annotation">annotation</option>
            <option value="view">View</option>
            <option value="annotation">annotation</option>
          </select>
          <img src={del} className="popup__svg" alt="delete member" />
        </div>
      </div>
    </>
  )
}
export default AvatarMember
