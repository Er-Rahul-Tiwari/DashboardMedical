import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import logo from "../../assets/logo.svg"

const SignUp2B = () => {
  
  const [toggle, setToggle] = useState(true)
  const clickToggle = () => {
    setToggle(!toggle)
  }

  const formik = useFormik({
    initialValues: {
      joinNewGroup: true,
      joinExistingGroup: false,
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <div className="authContainer">
        <div className="signUp1">
          <img src={logo} className="signUp1__logo" alt="logo" />
          <h1 className="heading-large">Sign up</h1>
          <form className="signUp1__form" onSubmit={formik.handleSubmit}>
            <div
              className={`form__group signUp1__group  
              ${toggle ? "signUp1__group--active" : "signUp1__group--inactive"}
              `}
              onClick={clickToggle}
            >
              <label htmlFor="joinGroup" className="">
                <p className="font-18 weight-700 mb-small">Create a new group</p>
                <p className="para weight-500">
                  Join as a new Institution and start invite your team
                </p>
              </label>
              <input
                className="signUp1__checkboxNone"
                type="checkbox"
                name="joinNewGroup"
                id="joinNewGroup"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.joinNewGroup}
              />
            </div>
            <div
              className={`form__group signUp1__group  
              ${toggle ? "signUp1__group--inactive" : "signUp1__group--active"}
              `}
              onClick={clickToggle}
            >
              <label htmlFor="joinExistingGroup" className="">
                <p className="font-18 weight-700 mb-small">Join an existing group</p>
                <p className="para weight-500">
                  You will need your manager email to join an existing group
                </p>
              </label>
              <input
                className="signUp1__checkboxNone"
                type="checkbox"
                name="joinExistingGroup"
                id="joinExistingGroup"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.joinExistingGroup}
              />
            </div>
            <Link to="/SignUp2A" className="signUp1__grid link">
              <button type="submit" className="btn">
                next
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp2B
