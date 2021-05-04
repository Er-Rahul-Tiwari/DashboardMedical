import React from "react"
import { Line } from "@ant-design/charts"
import { SubCard, SubPaymentHistoryCard } from "./SubCard"
import cr from "../../../../assets/cr.svg"
import swap from "../../../../assets/swap.svg"

export const HistoryCard = () => {
  return (
    <>
      <div className="">
        <div className="billHistoryCard__box">
          <p className="font-12 weight-700 color-c8 upper p0">OCTOBER 2020</p>
        </div>
        {/* Repeat line SubCard */}
        <SubCard />
        <SubCard />
        <SubCard />
      </div>
    </>
  )
}

export const PaymentHistoryCard = () => {
  return (
    <>
      <div className="">
        <div className="billHistoryCard__box">
          <p className="font-12 weight-700 color-c8 upper p0">OCTOBER 2020</p>
        </div>
        {/* Repeat line SubPaymentHistoryCard */}
        <SubPaymentHistoryCard />
        <SubPaymentHistoryCard />
        <SubPaymentHistoryCard />
      </div>
    </>
  )
}

export const PaymentHistory = () => {
  return (
    <>
      <div className="">PaymentHistory</div>
    </>
  )
}

export const RemainingCreditsCard = () => {
  return (
    <>
      <div className="box mb-medium">
        <p className="font-12 color-c8 upper">REMAINING CREDITS</p>
        <div className="remainingCreditsCard__box">
          <h1 className="heading-large weight-700 mb0">20 000</h1>
          <img src={cr} className="remainingCreditsCard__img" alt="cr " />
          <svg viewBox="0 0 24 24" className="remainingCreditsCard__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" />
            <path d="M10.875 7.875C10.875 8.17337 10.9935 8.45952 11.2045 8.6705C11.4155 8.88147 11.7016 9 12 9C12.2984 9 12.5845 8.88147 12.7955 8.6705C13.0065 8.45952 13.125 8.17337 13.125 7.875C13.125 7.57663 13.0065 7.29048 12.7955 7.0795C12.5845 6.86853 12.2984 6.75 12 6.75C11.7016 6.75 11.4155 6.86853 11.2045 7.0795C10.9935 7.29048 10.875 7.57663 10.875 7.875ZM12.5625 10.5H11.4375C11.3344 10.5 11.25 10.5844 11.25 10.6875V17.0625C11.25 17.1656 11.3344 17.25 11.4375 17.25H12.5625C12.6656 17.25 12.75 17.1656 12.75 17.0625V10.6875C12.75 10.5844 12.6656 10.5 12.5625 10.5Z" />
          </svg>
        </div>
      </div>
    </>
  )
}

export const RequestMoreCard = () => {
  return (
    <>
      <div className="box mb-medium">
        <h3 className="heading-3">Request more</h3>
        <div className="form__group requestMoreCard__form-box">
          <label htmlFor="password" className="font-12 weight-700 upper azure-blue">
            amount of credits
          </label>
          <input className="form__input requestMoreCard__input-border" id="password" name="password" value="25 000" />
          <span className="form__eye color-c8">Credits </span>
        </div>
        <button className="cta__primary">
          <svg className="cta__svg" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.9375 0.4375H2.0625C1.1291 0.4375 0.375 1.1916 0.375 2.125V35.875C0.375 36.8084 1.1291 37.5625 2.0625 37.5625H45.9375C46.8709 37.5625 47.625 36.8084 47.625 35.875V2.125C47.625 1.1916 46.8709 0.4375 45.9375 0.4375ZM4.17188 4.23438H43.8281V10.5625H4.17188V4.23438ZM43.8281 33.7656H4.17188V15.2031H43.8281V33.7656ZM31.3301 30.3906H40.0312C40.2633 30.3906 40.4531 30.2008 40.4531 29.9688V26.1719C40.4531 25.9398 40.2633 25.75 40.0312 25.75H31.3301C31.098 25.75 30.9082 25.9398 30.9082 26.1719V29.9688C30.9082 30.2008 31.098 30.3906 31.3301 30.3906Z" />
          </svg>

          <span> Request credits </span>
        </button>
      </div>
    </>
  )
}

export const BuyMoreCard = () => {
  const data = [
    { year: "31/08", value: 1 },
    { year: "07/09", value: 2 },
    { year: "14/09", value: 3.5 },
    { year: "21/09", value: 5 },
  ]
  var config = {
    width: 300,
    height: 110,
    data,
    xField: "year",
    yField: "value",
    point: {
      size: 4,
      shape: "holo",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  }

  return (
    <>
      <div className="box mb-medium">
        <div className="buyMoreCards">
          <h3 className="heading-3">buy now</h3>
          <div className="buyMoreCard__tabHeader">
            <p className="mb0 color-c8 buyMoreCard__tab">Our packages</p>
            <p className="mb0 color-c8 buyMoreCard__tab--active">Custom amount</p>
          </div>

          <div className="buyMoreCard__graph">
            <span className="color-c8 font-12 upper">COST/CREDIT</span>
            <Line className="card__data" {...config} />
            <p className="buyMoreCard__quantity color-c8 font-12 upper">QUANTITY of credits</p>
          </div>

          <div className="buyMoreCard__swapBox">
            <div className="form__group">
              <label htmlFor="password" className="font-12 weight-700 upper azure-blue">
                amount of credits
              </label>
              <input className="form__input requestMoreCard__input-border" id="password" name="password" value="25 000" />
              <span className="form__eye color-c8">Credits </span>
            </div>

            <img src={swap} className="" alt="swap card" />

            <div className="form__group">
              <label htmlFor="password" className="font-12 weight-700 upper color-c8">
                cost in euros
              </label>
              <input className="form__input" id="password" name="password" value="25 000" />
              <span className="form__eye color-c8">$ </span>
            </div>
          </div>

          <button className="cta__primary">
            <svg className="cta__svg" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.9375 0.4375H2.0625C1.1291 0.4375 0.375 1.1916 0.375 2.125V35.875C0.375 36.8084 1.1291 37.5625 2.0625 37.5625H45.9375C46.8709 37.5625 47.625 36.8084 47.625 35.875V2.125C47.625 1.1916 46.8709 0.4375 45.9375 0.4375ZM4.17188 4.23438H43.8281V10.5625H4.17188V4.23438ZM43.8281 33.7656H4.17188V15.2031H43.8281V33.7656ZM31.3301 30.3906H40.0312C40.2633 30.3906 40.4531 30.2008 40.4531 29.9688V26.1719C40.4531 25.9398 40.2633 25.75 40.0312 25.75H31.3301C31.098 25.75 30.9082 25.9398 30.9082 26.1719V29.9688C30.9082 30.2008 31.098 30.3906 31.3301 30.3906Z" />
            </svg>

            <span> Buy credits </span>
          </button>
        </div>
      </div>
    </>
  )
}

export const BuyMorePackCard = () => {
  return (
    <>
      <div className="box mb-medium">
        <div className="buyMoreCards">
          <h3 className="heading-3">buy now</h3>
          <div className="buyMoreCard__tabHeader">
            <p className="mb0 color-c8 buyMoreCard__tab--active">Our packages</p>
            <p className="mb0 color-c8 buyMoreCard__tab">Custom amount</p>
          </div>

          <div className="buyMorePackCards">
            {/* 1 */}
            <div className="buyMorePackCard">
              <div className="buyMorePackCard__item">
                <h3 className="heading-3 mb-5">20000</h3>
                <img src={cr} alt="buy more packs" />
              </div>
              <div className="buyMorePackCard__item">
                <p className="weight-500 color-99 mb-5">865,00 €</p>
              </div>
              <div className="buyMorePackCard__item">
                <p className="weight-700 azure-blue font-12 upper">SAVE 10% / CREDIT</p>
              </div>
            </div>
           
            {/* 2 */}
            <div className="buyMorePackCard">
              <div className="buyMorePackCard__item">
                <h3 className="heading-3 mb-5">50000</h3>
                <img src={cr} alt="buy more packs" />
              </div>
              <div className="buyMorePackCard__item">
                <p className="weight-500 color-99 mb-5">555,00 €</p>
              </div>
              <div className="buyMorePackCard__item">
                <p className="weight-700 azure-blue font-12 upper">SAVE 20% / CREDIT</p>
              </div>
            </div>
           
            {/* 3 */}
            <div className="buyMorePackCard">
              <div className="buyMorePackCard__item">
                <h3 className="heading-3 mb-5">220000</h3>
                <img src={cr} alt="buy more packs" />
              </div>
              <div className="buyMorePackCard__item">
                <p className="weight-500 color-99 mb-5">999,00 €</p>
              </div>
              <div className="buyMorePackCard__item">
                <p className="weight-700 azure-blue font-12 upper">SAVE 30% / CREDIT</p>
              </div>
            </div>
           
           </div>

          <button className="cta__primary">
            <svg className="cta__svg" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.9375 0.4375H2.0625C1.1291 0.4375 0.375 1.1916 0.375 2.125V35.875C0.375 36.8084 1.1291 37.5625 2.0625 37.5625H45.9375C46.8709 37.5625 47.625 36.8084 47.625 35.875V2.125C47.625 1.1916 46.8709 0.4375 45.9375 0.4375ZM4.17188 4.23438H43.8281V10.5625H4.17188V4.23438ZM43.8281 33.7656H4.17188V15.2031H43.8281V33.7656ZM31.3301 30.3906H40.0312C40.2633 30.3906 40.4531 30.2008 40.4531 29.9688V26.1719C40.4531 25.9398 40.2633 25.75 40.0312 25.75H31.3301C31.098 25.75 30.9082 25.9398 30.9082 26.1719V29.9688C30.9082 30.2008 31.098 30.3906 31.3301 30.3906Z" />
            </svg>

            <span> Buy credits </span>
          </button>
        </div>
      </div>
    </>
  )
}
