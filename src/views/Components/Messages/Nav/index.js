import React from "react"
import team from "../../../../assets/team.svg"
import infoCircle from "../../../../assets/InfoCircle.svg"
import del from "../../../../assets/delete.svg"
import edit from "../../../../assets/edit.svg"

const MessageNav = () => {
  return (
    <>
        <nav className="messagesNavs">
          <div className="form__group">
            <label htmlFor="allMassages" className="form__label">
              filter
            </label>
            <select className="form__input messagesNavs__input" name="allMassages">
              <option>All Messages</option>
              <option value="Johan">Johan</option>
              <option value="Mic">Mic</option>
            </select>
          </div>
          <div>
              <p className="font-14 color-99 mb0 weight-700 mb-5 cap">Smith Johan</p>
              <p className="font-16 color-5f mb0 weight-700">Subject of the message</p>
          </div>
          <div className="messagesNavs__items">
              <img src={infoCircle} className="messagesNavs__svg" alt="infoCircle"/>
              <img src={team} className="messagesNavs__svg" alt="team"/>
              <img src= {del} className="messagesNavs__svg" alt="delete"/>
              <div>
        <button className="cta__primary">
          <img className="cta__svg" src={edit} alt="edit"/>

          <span> Request credits </span>
        </button>
        </div>
          </div>
        </nav>
        
    </>
  )
}

export default MessageNav
