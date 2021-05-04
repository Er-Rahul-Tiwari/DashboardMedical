import React from "react"
import cr from "../../../../assets/cr.svg"
import success from "../../../../assets/success.svg"

const BillSuccess = () => {
  return (
    <>
      <div className="billSuccess">
        <div className="billSuccess__box">
          <div className="billSuccess__content">
            <img src={success} alt="success message" />
            <h1 className="heading-1 mt-medium weight-700 color-5f">Success !</h1>
            <p className="mb0 weight-500 color-99 font-14">Payment is completed.</p>
            <p className="mb0 weight-500 color-99 font-14">
              An automated payment receipt will be sent to your registered email
            </p>
            <div className="billSuccess__addOn">
              <h3 className="heading-3 mb0">+50000</h3>
              <img src={cr} alt="cr" />
            </div>
            <p className="font-12 color-c8 upper mb0">total amount</p>
            <h3 className="heading-3 mb-large">2 253 €</h3>

            <div className="mt-large mb-medium">
              <button className="cta__secondary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#0095DA"
                    d="M11.8523 15.4922C11.8699 15.5146 11.8923 15.5327 11.9179 15.5452C11.9435 15.5577 11.9715 15.5641 12 15.5641C12.0285 15.5641 12.0565 15.5577 12.0821 15.5452C12.1077 15.5327 12.1301 15.5146 12.1477 15.4922L14.7727 12.1711C14.8687 12.0492 14.782 11.8687 14.625 11.8687H12.8883V3.9375C12.8883 3.83437 12.8039 3.75 12.7008 3.75H11.2945C11.1914 3.75 11.107 3.83437 11.107 3.9375V11.8664H9.375C9.21797 11.8664 9.13125 12.0469 9.22734 12.1688L11.8523 15.4922ZM20.5781 14.6719H19.1719C19.0688 14.6719 18.9844 14.7563 18.9844 14.8594V18.4688H5.01562V14.8594C5.01562 14.7563 4.93125 14.6719 4.82812 14.6719H3.42188C3.31875 14.6719 3.23438 14.7563 3.23438 14.8594V19.5C3.23438 19.9148 3.56953 20.25 3.98438 20.25H20.0156C20.4305 20.25 20.7656 19.9148 20.7656 19.5V14.8594C20.7656 14.7563 20.6812 14.6719 20.5781 14.6719Z"
                  />
                </svg>

                <span>Download receipt</span>
              </button>
            </div>
            <button className="btn">done</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillSuccess
