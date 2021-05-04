import React from "react"
import { Link } from "react-router-dom"
import { HistoryCard, RemainingCreditsCard, RequestMoreCard } from "../AllBillCards/index.js"

const BillGroup = () => {
  return (
    <>
      <div className="billing__history">
        <div className="billHistoryCards">
          <div className="billHistoryCard">
            <h3 className="heading-3">Request history</h3>
            <Link to="/" className="j-self-end">
              see all
            </Link>
          </div>
          <HistoryCard />
          <HistoryCard />
        </div>
      </div>
      <div className="billing__cardContainer">
        <RemainingCreditsCard />
        <RequestMoreCard />
      </div>
    </>
  )
}

export default BillGroup
