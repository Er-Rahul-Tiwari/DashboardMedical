import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import logo from "../../assets/logo.svg"
import eye from "../../assets/eye.svg"

const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = "Required your first name"
  }
  if (!values.lastName) {
    errors.lastName = "Required your last name"
  }
  if (!values.email) {
    errors.email = "Required email password"
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

const FreeTrial = () => {
  const [toggle, setToggle] = useState(true)
  const clickToggle = () => {
    setToggle(!toggle)
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      term: false,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <div className="authContainer">
        <div className="signUp1">
          <img src={logo} className="signUp1__logo" alt="logo" />
          <h1 className="heading-large">Free Trial</h1>
          <form className="signUp1__form" onSubmit={formik.handleSubmit}>
            <div className="form__group">
              <label htmlFor="firstName" className="form__label">
                First Name
              </label>
              <input
                className="form__input"
                id="firstName"
                type="firstName"
                name="firstName"
                placeholder="First name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? <p className="form__error">{formik.errors.firstName}</p> : null}
            </div>
            <div className="form__group">
              <label htmlFor="lastName" className="form__label">
                Last Name
              </label>
              <input
                className="form__input"
                id="lastName"
                type="lastName"
                name="lastName"
                placeholder="Last name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? <p className="form__error">{formik.errors.lastName}</p> : null}
            </div>
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
              {formik.errors.email ? <p className="form__error">{formik.errors.email}</p> : null}
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
              <img src={eye} className="form__eye" alt="password icon" onClick={clickToggle} />
              {formik.errors.password ? <p className="form__error">{formik.errors.password}</p> : null}
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
                    I agree with <span className="azure-blue weight-700">CARPACCIO.cloud terms</span>
                  </span>
                </label>
              </div>
              {formik.errors.term ? <p className="form__error">{formik.errors.term}</p> : null}
            </div>
            <button type="submit" className="btn">
              Start Free Trial
            </button>
          </form>
          <p className="mt-large weight-500 color-99">
            Already have an account ?{" "}
            <Link to="/Login" className="link azure-blue weight-700">
              Login ?
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  )
}

export default FreeTrial
