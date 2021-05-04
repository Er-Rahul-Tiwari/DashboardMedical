import React from "react"
import { useFormik } from "formik"
import {Link} from "react-router-dom"
import logo from "../../assets/logo.svg"

const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = "Required your first name"
  }
  if (!values.lastName) {
    errors.lastName = "Required your last name"
  }
  if (!values.managerEmail) {
    errors.managerEmail = 'Required email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.managerEmail)) {
    errors.managerEmail = 'Invalid managerEmail address';
  }
  if (!values.institution) {
    errors.institution = "Required your institution"
  }
  return errors
}

const SignUp3B = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      managerEmail: "",
      institution: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <div className="authContainer">
        <div className="signUp">
          <img src={logo} className="signUp__logo" alt="logo" />
          <h1 className="heading-large">Sign up</h1>
          <form className="signUp__form" onSubmit={formik.handleSubmit}>
            <div className="form__group">
              <label htmlFor="firstName" className="form__label">
                first name <div className="form__point"></div>
              </label>
              <input
                className="form__input"
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Full name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <p className="form__error">{formik.errors.firstName}</p>
              ) : null}
            </div>
            <div className="form__group">
              <label htmlFor="lastName" className="form__label">
                LAST NAME <div className="form__point"></div>
              </label>
              <input
                className="form__input"
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? (
                <p className="form__error">{formik.errors.lastName}</p>
              ) : null}
            </div>
            <div className="form__group">
              <label htmlFor="complementAddress" className="form__label">
                manager email <div className="form__point"></div>
              </label>
              <input
                className="form__input"
                id="managerEmail"
                type="managerEmail"
                name="managerEmail"
                placeholder="Manager email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.managerEmail}
              />
              {formik.errors.managerEmail ? (
                <p className="form__error">{formik.errors.managerEmail}</p>
              ) : null}
            </div>
            <div className="form__group">
              <label htmlFor="institution" className="form__label">
                INStitution <div className="form__point"></div>
              </label>
              <select
                className="form__input"
                name="institution"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option>institution</option>
                <option value="Fran">Fran</option>
                <option value="India">India</option>
              </select>
              {formik.errors.institution ? (
                <p className="form__error">{formik.errors.institution}</p>
              ) : null}
            </div>
            <div className="form__group form__textarea">
              <label htmlFor="message" className="form__label">
                Message
              </label>
              <textarea
                className="form__input"
                type="text"
                name="message"
                rows="8"
                placeholder="Your message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
            </div>
            <div className="form__group centerVertical">
              <Link to="/SignUp3A" className="link azure-blue weight-700">
                Back
              </Link>
            </div>
            <div className="form__group">
              <div className="signUp__box-btn">
                <button className="btn" type="submit">
                  done
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp3B
