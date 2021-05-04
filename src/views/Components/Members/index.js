import React from "react"
import AvatarMember from "./AvatarMember"
import BlurMemberAvatar from "./BlurMemberAvatar"
import IconMember from "./IconMember"

const Member = () => {
  return (
    <>
      <div className="popups">
        <div className="popup">
            <div className="popup__header">
              <h3 className="heading-3">Member :</h3>
              <div className="popup__header-btn">
                <button className="addBtn">+ Add people</button>
              </div>
            </div>
          <div className="popup-box">
            <div className="popup__content">
              {/* blur avatar member */}
              <BlurMemberAvatar />
              <BlurMemberAvatar />
              <BlurMemberAvatar />

              {/* without avatar member */}
              <IconMember />
              <IconMember />
              <IconMember />

              {/* Member */}
              <AvatarMember />
              <AvatarMember />
              <AvatarMember />
              <AvatarMember />
            </div>
          
          </div>
            <div className="popup__header">
              <button className="btn">Add More</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Member
