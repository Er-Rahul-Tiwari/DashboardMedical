import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import logo from "../../assets/logo.svg"
import eye from "../../assets/eye.svg"

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = "Required email"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (!values.password) {
    errors.password = "Required password"
  }
  if (!values.term) {
    errors.term = "Required term"
  }
  return errors
}

const SignUp1 = () => {
  const [toggle, setToggle] = useState(true)
  const clickToggle = () => {
    setToggle(!toggle)
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      term: false,
      single: false,
      group: false,
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
          <h1 className="heading-large">Sign up</h1>
          <form className="signUp1__form" onSubmit={formik.handleSubmit}>
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
              <div className="form__group mt-medium">
                <p className="font-14 weight-500 mb-small">
                  Password strength: <span className="color-99">Medium</span>
                </p>
                <div className="signUp1__indications">
                  <div className="signUp1__indication"></div>
                  <div className="signUp1__indication"></div>
                  <div className="signUp1__indication"></div>
                  <div className="signUp1__indication"></div>
                </div>
              </div>
            </div>
            <div className="form__group">
              <p className="upper color-c8 font-12 mb-small">type of account</p>
              <div className="signUp1__grid-2 mb-small">
                <input
                  type="radio"
                  className="form__radio"
                  name="single"
                  id="single"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.single}
                />
                <label htmlFor="single" className="form__label">
                  <span className="cap color-5f font-16">
                    Single{" "}
                    <span className="color-99 lower"> (for individual use)</span>
                  </span>
                </label>
                {formik.errors.single ? (
                  <p className="form__error">{formik.errors.single}</p>
                ) : null}
              </div>
              <div className="signUp1__grid-2">
                <input
                  type="radio"
                  className="form__radio"
                  name="group"
                  id="group"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.group}
                />
                <label htmlFor="group" className="form__label">
                  <span className="cap color-5f font-16">
                    group{" "}
                    <span className="color-99 lower">(for institutional use)</span>
                  </span>
                </label>
              </div>
            </div>
            <div className="form__group">
              <div className="underline"></div>
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
                    I agree with{" "}
                    <span className="azure-blue weight-700">
                      CARPACCIO.cloud terms
                    </span>
                  </span>
                </label>
              </div>
                {formik.errors.term ? (
                  <p className="form__error">{formik.errors.term}</p>
                ) : null}
            </div>
            <button type="submit" className="btn">
              Create account
            </button>
          </form>
          <p className="mt-large weight-500 color-99">
            Already have an account ?{" "}
            <Link to="/Login" className="link azure-blue weight-700">Login ?</Link>{" "}
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp1
