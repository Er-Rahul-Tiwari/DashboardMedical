import React from "react"
import StorageCard from "./StorageCard"
import WorkCard from "./WorkCard"
import CollaborationCard from "./CollaborationCard"

const UserDashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="cards">
          {/* Storage */}
          <StorageCard />
          <WorkCard />
          <CollaborationCard />
        </div>
      </div>
    </>
  )
}

export default UserDashboard
