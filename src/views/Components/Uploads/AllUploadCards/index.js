import React from "react"
import { useFormik } from "formik"

import closeCircle from "../../../../assets/closeCircle.svg"
import spin from "../../../../assets/spin.svg"
import upload from "../../../../assets/upload.svg"
import InfoCircle from "../../../../assets/InfoCircle.svg"
import bioImg from "../../../../assets/rectImg.jpg"

const validate = (values) => {
  const errors = {}

  if (!values.folder) {
    errors.folder = "Required"
  }
  if (!values.compress) {
    errors.compress = "Required"
  }
  if (!values.launch) {
    errors.launch = "Required"
  }
  return errors
}
// file image upload
export const UploadFile = () => {
  return (
    <>
      {/* Repeat files */}
      <div className="billPaymentHistoryCard">
        {/* show any one apply if else condition if image upload or not than show icon */}

        <img src={bioImg} className="billPaymentHistoryCard__img" alt="upload images" />

        {/* <div className="billPaymentHistoryCard__img">
                    <img src={spin} className="cta__svg" alt="upload images" />
                </div> */}

        <div className="billPaymentHistoryCard__leftBox">
          <p className="weight-700 p0">Image12345_study01_sampleB.ndpi</p>
        </div>
        <div className="billPaymentHistoryCard__rightBox">
          <p className="color-99 cap p0 font-14 weight-500 j-self-end">234 mb</p>

          <img src={closeCircle} className="cta__svg" alt="closeCircle icon" />
        </div>
      </div>
      <div className="billHistoryCard__underline underline"></div>
    </>
  )
}

// file image upload
export const UploadFile2 = () => {
  return (
    <>
      {/* Repeat files */}
      <div className="billPaymentHistoryCard">
        {/* show any one apply if else condition if image upload or not than show icon */}

        {/* <img src={bioImg} className="billPaymentHistoryCard__img" alt="upload images" /> */}

        <div className="billPaymentHistoryCard__img">
          <img src={spin} className="cta__svg" alt="upload images" />
        </div>

        <div className="billPaymentHistoryCard__leftBox">
          <p className="weight-700 p0">Image12345_study01_sampleB.ndpi</p>
        </div>
        <div className="billPaymentHistoryCard__rightBox">
          <p className="color-99 cap p0 font-14 weight-500 j-self-end">234 mb</p>
          <img src={closeCircle} className="cta__svg" alt="closeCircle icon" />
        </div>
      </div>
      <div className="billHistoryCard__underline underline"></div>
    </>
  )
}

export const Setting = () => {
  const formik = useFormik({
    initialValues: {
      folder: "",
      launch: false,
      compress: false,
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
            <p className="mb0 color-c8 buyMoreCard__tab--active">Options</p>
            <p className="mb0 color-c8 buyMoreCard__tab">Advanced</p>
          </div>
        </div>
        <form className="" onSubmit={formik.handleSubmit}>
          <div className="form__group  requestMoreCard__form-box">
            <label htmlFor="folder" className="form__label">
              folder
            </label>
            <select className="form__input" name="folder" onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option>RootFolder</option>
              <option value="folder1">folder1</option>
              <option value="folder2">folder2</option>
            </select>
            {formik.errors.folder ? <p className="form__error">{formik.errors.folder}</p> : null}
          </div>

          <div className="form__group">
            <div className="signUp1__grid-2">
              <input
                type="checkbox"
                className="form__checkbox"
                name="compress"
                id="compress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.compress}
              />
              <label htmlFor="group" className="form__label">
                <span className="cap color-99 font-14 weight-500">
                  Compress files before upload
                  <img className="cta__svg ml-small" src={InfoCircle} alt="notifications" />
                </span>
              </label>
            </div>
          </div>
          <div className="form__group">
            <div className="signUp1__grid-2">
              <input
                type="checkbox"
                className="form__checkbox"
                name="launch"
                id="launch"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.launch}
              />
              <label htmlFor="group" className="form__label">
                <span className="cap color-99 font-14 weight-500">Launch an Analyse with uploaded images</span>
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
