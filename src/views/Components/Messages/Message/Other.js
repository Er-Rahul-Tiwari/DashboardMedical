import React from "react"
import rectImg from "../../../../assets/rectImg.jpg"

const Other= ()=>{
    return(
        <>
        {/* When other person doing sms */}
        <div className="chat__other">
          <div className="chat__other--message">
            <p className="mb0 font-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas scelerisque vulputate dictumst ipsum
              pharetra eget malesuada dolor.
            </p>
          </div>
          <img src={rectImg} alt="rectanguler image"/>
        </div>

        </>
    )
}

export default Other