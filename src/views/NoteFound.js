import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <div className="error">
      <div className="center mt-large">
        <h2 className="heading-2">Sorry! Page Not Found</h2>
        <div className="mt-large">
          <Link to="/Profile" className="">
            Go to Profile
          </Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
