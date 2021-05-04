import React from "react"
import { useFormik } from "formik"
import upload from "../../../../assets/upload.svg"

const validate = (values) => {
  const errors = {}

  if (!values.speedValue) {
    errors.speedValue = "Required"
  }
  if (!values.speed) {
    errors.speed = "Required"
  }
  return errors
}
export const AdvanceSetting = () => {
  const formik = useFormik({
    initialValues: {
      speedValue: "20",
      speed: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })
  return (
    <>
      <div className="box mb-medium">
        <h3 className="heading-3">Settings</h3>
        <p className="font-14 color-99">Set everything in detail before upload.</p>
        <div className="form__group requestMoreCard__form-box">
          <div className="buyMoreCard__tabHeader">
            <p className="mb0 color-c8 buyMoreCard__tab">Options</p>
            <p className="mb0 color-c8 buyMoreCard__tab--active">Advanced</p>
          </div>
        </div>
        <form className="" onSubmit={formik.handleSubmit}>
          <div className="form__group">
            <div className="signUp1__grid-2">
              <input
                type="checkbox"
                className="form__checkbox"
                name="speed"
                id="speed"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.speed}
              />
              <label htmlFor="group" className="form__label">
                Limit upload speed :
                <span className="cap color-99 font-14 weight-500">
                  <div className="signUp1__grid-2 ">
                    <input
                      type="text"
                      className="form__input"
                      name="speedValue"
                      id="speedValue"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.speedValue}
                    />
                    <span>Mb/s</span>
                  </div>
                </span>
              </label>
            </div>
          </div>

          <div className="mt-medium">
            <button className="cta__primary" type="submit">
              <img className="cta__svg" src={upload} alt="upload icon" />

              <span> Upload </span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
