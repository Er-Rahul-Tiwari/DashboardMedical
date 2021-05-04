import React from "react"
import { Link } from "react-router-dom"
import Message from "./Message/index"
import vDot from "../../../assets/vDots.svg"
import link from "../../../assets/link.svg"
import smile from "../../../assets/smile.svg"
import avatar from "../../../assets/avatar.jpg"
import rectImg from "../../../assets/rectImg.jpg"

import Nav from "./Nav/index"
import ListCard from "./List/index"

const Messages = () => {
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
                <img src={avatar} className="listCard__img" alt="user image" />
                <div className="dot__box mt-5">
                  <img src={vDot} alt="user image" />
                </div>
              </div>
              <div className="listCard--subTop">
                <p className="mb-5 font-14 weight-500 color-99 wrap wrap-1">Smith John</p>
                <p className="mb-5 font-14 weight-500 color-99 wrap wrap-1">1 day ago</p>
              </div>
              <div className="listCard--sub">
                <div>
                  <p className="mb-5 font-16 weight-700 color-5f wrap wrap-1">Subject of the message</p>
                  <p className="mb-5 font-14 weight-500 color-99 wrap wrap-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliqu lkjsdkfj djfklsdfj
                  </p>
                </div>
                <div className="form__point mt-small"></div>
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
            <div className="chats">
              <Message/>
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

export default Messages
