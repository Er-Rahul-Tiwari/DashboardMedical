import React from "react"
import { useFormik } from "formik"
import logo from "../../assets/logo.svg"

const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = "Required your first name"
  }
  if (!values.lastName) {
    errors.lastName = "Required your last name"
  }
  if (!values.address) {
    errors.address = "Required your address"
  }
  if (!values.zipCode) {
    errors.zipCode = "Required zip code"
  }
  if (!values.country) {
    errors.country = "Required country name"
  }

  return errors
}

const SignUp2A = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      complementAddress: "",
      state: "",
      zipCode: "",
      country: "",
      institution: "",
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
              <label htmlFor="name" className="form__label">
                ADDRESS <div className="form__point"></div>
              </label>
              <input
                className="form__input"
                id="address"
                type="text"
                name="address"
                placeholder="Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.errors.address ? (
                <p className="form__error">{formik.errors.address}</p>
              ) : null}
            </div>
            <div className="form__group">
              <label htmlFor="complementAddress" className="form__label">
                COMPLEMENT OF ADDRESS
              </label>
              <input
                className="form__input"
                id="complementAddress"
                type="text"
                name="complementAddress"
                placeholder="Facultative"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.complementAddress}
              />
            </div>
            <div className="form__sub-2">
              <div className="form__group">
                <label htmlFor="zipCode" className="form__label">
                  zip code <div className="form__point"></div>
                </label>
                <input
                  className="form__input"
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  placeholder="Zip code"
                    onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zipCode}
                />
                {formik.errors.address ? (
                  <p className="form__error">{formik.errors.address}</p>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="state" className="form__label">
                  State
                </label>
                <input
                  className="form__input"
                  id="state"
                  type="text"
                  name="state"
                  placeholder="State"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                />
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="country" className="form__label">
                country <div className="form__point"></div>
              </label>
              <select
                className="form__input"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option>Country</option>
                <option value="Fran">Fran</option>
                <option value="India">India</option>
              </select>
                {formik.errors.country ? (
                  <p className="form__error">{formik.errors.country}</p>
                ) : null}
            </div>
            <div className="form__group">
              <label htmlFor="institution" className="form__label">
                Institution
              </label>
              <input
                className="form__input"
                id="institution"
                type="text"
                name="institution"
                placeholder="Institution"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.institution}
              />
            </div>
            <br className="signUp__none" />
            <div className="signUp__box-btn">
              <button type="submit" className="btn">
                done
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp2A
