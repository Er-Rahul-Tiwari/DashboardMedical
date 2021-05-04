import React from "react"
import avatar from "../../../assets/avatar.jpg"

const ProfileCard = () => {
  return (
    <>
      <div className="profile__card">
        <img className="profile__img" src={avatar} alt="user profile" />
        <div className="profile__item">
          <h3 className="heading-3">James Rockatansky</h3>
          <p className="font-12 upper color-c8 weight-700 mt-15">last visit</p>
          <p className="font-14 weight-500 upper color-99 mt-5">22/3/2021</p>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
