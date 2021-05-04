import React from "react"
import AnalysesCard from "./AnalysesCard"
import StorageCard from "./StorageCard"
import WebAnalyticCard from "./WebAnaliticCard"

const AdminDashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="cards">
          {/* Storage */}
          <StorageCard />
          {/* Analyses */}
          <AnalysesCard />

          {/* WebAnalyticCard */}
          <WebAnalyticCard />
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
