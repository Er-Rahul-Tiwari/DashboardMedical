import React from "react"
import rectImg from "../../../../assets/rectImg.jpg"

const Me= ()=>{
    return(
        <>  
        {/* when your doing sms */}
        <div className="chat__me">
          <div className="chat__me--message">
            <p className="mb0 font-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas scelerisque vulputate dictumst ipsum
              pharetra eget malesuada dolor.
            </p>
          </div>
          <img src={rectImg} alt="rectanguler image" />
          <div className="chat__me--message">
            <p className="mb0 font-14">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      
        </>
    )
}

export default Me