import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import logo from "../../assets/logo.svg"
import eye from "../../assets/eye.svg"

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (!values.password) {
    errors.password = "Required"
  }
  return errors;
}

const Login = () => {
  const [toggle, setToggle] = useState(true)
  const clickToggle = () => {
    setToggle(!toggle)
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      term: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <div className="authContainer">
        <div className="signUp1">
          <img src={logo} className="signUp1__logo" alt="logo" />
          <h1 className="heading-large">Login</h1>
          <form className="signUp1__form"  onSubmit={formik.handleSubmit}>
            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                className="form__input"
                id="email"
                type="email"
                name="email"
                placeholder="Your email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <p className="form__error">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="form__group">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                className="form__input"
                id="password"
                name="password"
                type={toggle ? "password" : "text"}
                placeholder="At least 8 characters"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <img
                src={eye}
                className="form__eye"
                alt="password icon"
                onClick={clickToggle}
              />
              {formik.errors.password ? (
                <p className="form__error">{formik.errors.password}</p>
              ) : null}
            </div>
            <div className="form__group">
              <div className="signUp1__grid-2">
                <input
                  type="checkbox"
                  className="form__checkbox"
                  name="term"
                  id="term"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.term}
                />
                <label htmlFor="group" className="form__label">
                  <span className="cap color-5f font-16 weight-500">
                    Remember me
                  </span>
                </label>
              </div>
            </div>
            <button type="submit" className="btn">
              Create account
            </button>
          </form>
          <div className="center">
            <p className="mt-large weight-500 color-99">
              You don’t have an account ?{" "}
              <Link to="/SignUp2A" className="link azure-blue weight-700">Sign up</Link>{" "}
            </p>
            <Link to="" className="link mt-small weight-700 azure-blue">Forgot your password ?</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
