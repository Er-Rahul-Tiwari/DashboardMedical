import React from "react"
import cr from "../../../../assets/cr.svg"
import error from "../../../../assets/error.svg"

const BillError = () => {
  return (
    <>
      <div className="billSuccess">
        <div className="billSuccess__box">
          <div className="billSuccess__content">
            <img src={error} alt="success message" />
            <h1 className="heading-1 mt-medium weight-700 color-5f">Error !</h1>
            <p className="mb0 weight-500 color-99 font-14">Don’t panic, nothing has been debited yet.</p>
            <p className="mb0 weight-500 color-99 font-14 mb-large">Don’t panic, nothing has been debited yet.</p>
            

            <div className="mt-large mb-medium">
              <button className="cta__secondary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#0095DA"
                    d="M16.0644 8.31494C16.0644 8.21182 15.98 8.12744 15.8769 8.12744L14.33 8.13447L12.0003 10.9118L9.67299 8.13682L8.12378 8.12979C8.02065 8.12979 7.93628 8.21182 7.93628 8.31729C7.93628 8.36182 7.95269 8.404 7.98081 8.43916L11.03 12.072L7.98081 15.7024C7.95249 15.7368 7.93678 15.7798 7.93628 15.8243C7.93628 15.9274 8.02065 16.0118 8.12378 16.0118L9.67299 16.0048L12.0003 13.2274L14.3277 16.0024L15.8745 16.0095C15.9777 16.0095 16.062 15.9274 16.062 15.822C16.062 15.7774 16.0456 15.7353 16.0175 15.7001L12.973 12.0696L16.0222 8.43682C16.0503 8.404 16.0644 8.35947 16.0644 8.31494Z"
                  />
                  <path
                    fill="#0095DA"
                    d="M12 1.52344C6.20156 1.52344 1.5 6.225 1.5 12.0234C1.5 17.8219 6.20156 22.5234 12 22.5234C17.7984 22.5234 22.5 17.8219 22.5 12.0234C22.5 6.225 17.7984 1.52344 12 1.52344ZM12 20.7422C7.18594 20.7422 3.28125 16.8375 3.28125 12.0234C3.28125 7.20938 7.18594 3.30469 12 3.30469C16.8141 3.30469 20.7188 7.20938 20.7188 12.0234C20.7188 16.8375 16.8141 20.7422 12 20.7422Z"
                  />
                </svg>

                <span>Cancel order</span>
              </button>
            </div>
            <button className="btn">Retry</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillError
