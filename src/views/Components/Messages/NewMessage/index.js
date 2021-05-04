import React from "react"
import { Link } from "react-router-dom"
import closeCircle from "../../../../assets/closeCircle.svg"
import link from "../../../../assets/link.svg"
import userIcon from "../../../../assets/userIcon.svg"
import smile from "../../../../assets/smile.svg"
import avatar from "../../../../assets/avatar.jpg"

import Nav from "../Nav/SearchNav"
import ListCard from "../List/index"

const NewMessages = () => {
  return (
    <>
      <div className="messagesLayout messagesLayout__box">
        <Nav />
        <div className="messagesLayout__messageArea">
          {/* Message User List */}
          <div className="listCards">
            {/* Active card */}
            <div className="listCard listCard--active">
              <div className="listCard__story">
                {/* condition if image comming or not, show icon if not comming */}

                {/* <img src={avatar} className="listCard__img" alt="user image" /> */}

                <div className="listCard__svgCircle">
                  <img src={userIcon} className="" alt="user icon" />
                </div>

                <img className="cta__svg mt-medium" src={closeCircle} alt="close" />
              </div>
              <div className="listCard--subTop">
                <p className="weight-700 color-5f wrap wrap-1">New Message</p>
              </div>
            </div>

            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>

          {/* Chat Box */}
          <div className="messageArea">
            <div className="chats"></div>

            <div className="chat__footer">
              <Link to="" className="color-99 font-14 cap">
                Subject
              </Link>
            </div>
            <div className="chat__footer">
              <Link to="">
                <img src={link} alt="attechment" />
              </Link>
              <input className="chat__input" placeholder="Write your message..." />
              <Link to="">
                <img src={smile} alt="attechment" />
              </Link>
              <Link to="" className="font-14 cap">
                send
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewMessages
