import React from "react"
import download from "../../../../assets/ctaDownload.svg"
import bank from "../../../../assets/visaCard.jpg"

export const SubCard = () => {
  return (
    <>
      {/* Repeat line block */}
      <div className="billHistoryCard">
        <div className="billHistoryCard__leftBox">
          <p className="weight-700 p0">Pack 10 000 Credits</p>
          <p className="font-15 weight-500 color-c8 upper p0">05/10/2020</p>
        </div>
        <div className="billHistoryCard__rightBox">
          <p className="cap p0 font-14 weight-500 color-pastel-green j-self-end">Accepted</p>
          <img src={download} alt="download icon" />
        </div>
      </div>
        <div className="billHistoryCard__underline underline"></div>
      
      {/* Repeat line block */}
      <div className="billHistoryCard">
        <div className="billHistoryCard__leftBox">
          <p className="weight-700 p0">Pack 10 000 Credits</p>
          <p className="font-15 weight-500 color-c8 upper p0">05/10/2020</p>
        </div>
        <div className="billHistoryCard__rightBox">
          <p className="cap p0 font-14 weight-500 color-pastel-green j-self-end">Accepted</p>
          <img src={download} alt="download icon" />
        </div>
      </div>
        <div className="billHistoryCard__underline underline"></div>
      
    </>
  )
}

export const SubPaymentHistoryCard = ()=>{
  return(
    <>
    {/* Repeat line block */}
    <div className="billPaymentHistoryCard">
      <img src={bank} className="billPaymentHistoryCard__img" alt="debit or credit cards images"/>
      <div className="billPaymentHistoryCard__leftBox">
        <p className="weight-700 p0">Pack 10 000 Credits</p>
        <p className="font-15 weight-500 color-c8 upper p0">05/10/2020</p>
      </div>
      <div className="billPaymentHistoryCard__rightBox">
        <p className="color-99 cap p0 font-14 weight-500 j-self-end">-3000.99$</p>
        <img src={download} alt="download icon" />
      </div>
    </div>
      <div className="billPaymentHistoryCard__underline underline"></div>
    
    </>
  )
}
