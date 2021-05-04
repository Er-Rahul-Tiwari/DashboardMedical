import React from "react"
import { useFormik } from "formik"
import ProfileCard from "./ProfileCard"
import ProfileSmallCard from "./ProfileSmallCard"
import saveBtn from "../../../assets/saveBtn.svg"
import deleteAccount from "../../../assets/deleteAccount.svg"

const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = "Required first name"
  }
  if (!values.lastName) {
    errors.lastName = "Required last name"
  }
  if (!values.jobTitle) {
    errors.jobTitle = "Required jobTitle"
  }
  if (!values.group) {
    errors.group = "Required group"
  }
  if (!values.email) {
    errors.email = "Required email"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (!values.oldPassword) {
    errors.oldPassword = "Required old Password"
  }
  if (!values.newPassword) {
    errors.newPassword = "Required new Password"
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required confirm Password"
  }

  return errors
}

const Profile = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      group: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <div className="profile__story">
        <div className="profile__cards">
          <ProfileCard />
        </div>

        {/* Small Cards */}
        <div className="profile__cards">
          <ProfileSmallCard/>
          <ProfileSmallCard/>
          <ProfileSmallCard/>
          <ProfileSmallCard/>
        </div>
      </div>

      <div className="profile__details">
        {/* profile */}
        <div className="profile__box">
          <h3 className="heading-3 mb-3">Profile</h3>
          <form className="profile__form" onSubmit={formik.handleSubmit}>
            {/* grid 3 */}
            <div className="profile__grid-3">
              <div className="form__group">
                <label htmlFor="title" className="form__label cap">
                  Titile
                </label>
                <select className="form__input">
                  <option>PhD</option>
                  <option value="Er">Er</option>
                  <option value="Er">Er</option>
                  <option value="Er">Er</option>
                </select>
              </div>
              <div className="form__group">
                <label htmlFor="firstName" className="form__label cap">
                  first name
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
                <label htmlFor="lastName" className="form__label cap">
                  Last name
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
            </div>
            {/* grid 2 */}
            <div className="profile__grid-2">
              <div className="form__group">
                <label for="jobTitle" className="form__label">
                  jobTitle
                </label>
                <select
                  className="form__input"
                  name="jobTitle"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option>jobTitle</option>
                  <option value="Fran">Fran</option>
                  <option value="India">India</option>
                </select>
                {formik.errors.jobTitle ? (
                  <p className="form__error">{formik.errors.jobTitle}</p>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="group" className="form__label cap">
                  group
                </label>
                <input
                  className="form__input"
                  id="group"
                  type="text"
                  name="group"
                  placeholder="Last name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.group}
                />
                {formik.errors.group ? (
                  <p className="form__error">{formik.errors.group}</p>
                ) : null}
              </div>
            </div>
            {/* grid 2 */}
            <div className="profile__grid-2">
              <div className="form__group">
                <label htmlFor="email" className="form__label cap">
                  email
                </label>
                <input
                  className="form__input"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="james.rockatansky@carpaccio.cloud"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email ? (
                  <p className="form__error">{formik.errors.email}</p>
                ) : null}
              </div>
              <div></div>
            </div>
            <button type="submit" className="saveBtn">
              <img src={saveBtn} className="saveBtn__svg" alt="save button" />
              Save changes
            </button>
          </form>
        </div>

        {/* Security */}
        <div className="profile__box">
          <h3 className="heading-3 mb-3">Security</h3>
          <form className="profile__form" onSubmit={formik.handleSubmit}>
            {/* grid 2 */}
            <div className="profile__grid-2">
              <div className="form__group">
                <label htmlFor="oldPassword" className="form__label cap">
                  Old password
                </label>
                <input
                  className="form__input"
                  id="oldPassword"
                  type="text"
                  name="oldPassword"
                  placeholder="Old password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.oldPassword}
                />
                {formik.errors.oldPassword ? (
                  <p className="form__error">{formik.errors.oldPassword}</p>
                ) : null}
              </div>
              <div></div>
            </div>

            {/* grid 2 */}
            <div className="profile__grid-2">
              <div className="form__group">
                <label htmlFor="newPassword" className="form__label cap">
                  new Password
                </label>
                <input
                  className="form__input"
                  id="newPassword"
                  type="text"
                  name="newPassword"
                  placeholder="New password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                />
                {formik.errors.newPassword ? (
                  <p className="form__error">{formik.errors.newPassword}</p>
                ) : null}
                <p className="font-12 color-c8 weight-500 mt-5">
                  Minimum : 8 characters , 1 capital, 1 special character
                </p>
              </div>
              <div className="form__group">
                <label htmlFor="confirmPassword" className="form__label cap">
                  Confirm new password
                </label>
                <input
                  className="form__input"
                  id="confirmPassword"
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword ? (
                  <p className="form__error">{formik.errors.confirmPassword}</p>
                ) : null}
                <p className="font-12 color-c8 weight-500 mt-5">
                  Minimum : 8 characters , 1 capital, 1 special character
                </p>
              </div>
            </div>

            <button type="submit" className="saveBtn">
              <img src={saveBtn} className="saveBtn__svg" alt="save button" />
              Save changes
            </button>
          </form>
        </div>

        {/* profile */}
        <div className="profile__box">
          <h3 className="heading-3 mb-3">Delete account</h3>
          {/* <form className="profile__form" onSubmit={formik.handleSubmit}> */}
            <div className="profile__grid-2">
              <p className="color-99 weight-500">
                After confirmation you will loose every data and will not be able to
                recover your account. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <div className="profile__delete-box">
                  <img className="" src={deleteAccount} alt="delete your account" />
              </div>
            </div>
          {/* </form> */}
        </div>
      </div>
    </>
  )
}

export default Profile
