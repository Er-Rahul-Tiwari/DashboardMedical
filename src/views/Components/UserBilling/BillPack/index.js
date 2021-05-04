import React from "react"
import { Link } from "react-router-dom"
import { PaymentHistoryCard, RemainingCreditsCard, BuyMorePackCard } from "../AllBillCards/index.js"

const BillPack = () => {
  return (
    <>
      <div className="billing__history">
        <div className="billHistoryCards">
          <div className="billHistoryCard">
            <h3 className="heading-3">Payment History</h3>
            <Link to="/" className="j-self-end">
              see all
            </Link>
          </div>
          <PaymentHistoryCard />
          <PaymentHistoryCard />
        </div>
      </div>
      <div className="billing__cardContainer">
        <RemainingCreditsCard />
        <BuyMorePackCard />
      </div>
    </>
  )
}

export default BillPack
