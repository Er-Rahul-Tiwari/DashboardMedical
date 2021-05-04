import React from "react"
import { Link } from "react-router-dom"
import { Setting } from "../AllUploadCards/index"
import uploadBlock from "../../../../assets/uploadBlock.svg"

const Upload = () => {
  return (
    <>
      <div className="billing__history">
        <div className="billHistoryCards">
          <div className="mb-large">
            <h3 className="heading-3">Submit your files</h3>
            <p className="font-14 color-99">Select one or more images to be uploaded.</p>
          </div>
          <div className="mb-large">
            <Link to="">
              <img src={uploadBlock} alt="upload or drag and drop" />
            </Link>
          </div>
        </div>
      </div>
      <div className="billing__cardContainer">
        <Setting />
      </div>
    </>
  )
}

export default Upload
