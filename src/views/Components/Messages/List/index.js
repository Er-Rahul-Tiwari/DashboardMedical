import React from "react"
import {Link} from "react-router-dom"
import vDot from "../../../../assets/vDots.svg"
import avatar from "../../../../assets/avatar.jpg"

const List = () => {
  return (
    <>
      {/* <div className="listCard listCard--active"> */}
      <Link to="" className="listCard">
        <div className="listCard__story">
          <img src={avatar} className="listCard__img" alt="user image" />
          <div className="dot__box mt-5">
            <img src={vDot} alt="user image" />
          </div>
        </div>
        <div className="listCard--subTop">
          <p className="mb-5 font-14 weight-500 color-99 wrap wrap-1">
              Smith John
          </p>
          <p className="mb-5 font-14 weight-500 color-99 wrap wrap-1">1 day ago</p>
        </div>
        <div className="listCard--sub">
          <div>
            <p className="mb-5 font-16 weight-700 color-5f wrap wrap-1">
                Subject of the message
                </p>
            <p className="mb-5 font-14 weight-500 color-99 wrap wrap-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliqu lkjsdkfj djfklsdfj
            </p>
          </div>
          <div className="form__point mt-small"></div>
        </div>
      </Link>
    </>
  )
}

export default List
