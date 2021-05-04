import React from "react"
import { Route, Redirect } from "react-router-dom"
// import PageNotFound from "../NoteFound"
import LeftNav from "../Components/Layout/LeftSideNavbar"
import TopNav from "../Components/Layout/TopNavbar"
import UserDashboard from "../Components/UserDashboard/index"
import SassDashboard from "../Components/SassDashboard/index"
import AdminDashboard from "../Components/AdminDashboard/index"
import Member from "../Components/Members/index"
import Institution from "../Components/UserTables/Institution/index"
import InstitutionName from "../Components/UserTables/User/index"
import InstitutionGroup from "../Components/UserTables/Group/index"
import userBillHistory from "../Components/UserBilling/BillHistory/index"
import userBillGroup from "../Components/UserBilling/BillGroup/index"
import userBillCustom from "../Components/UserBilling/BillCustom/index"
import userBillPack from "../Components/UserBilling/BillPack/index"
import userBillSuccess from "../Components/UserBilling/BillSuccess/index"
import userBillError from "../Components/UserBilling/BillError/index"
import messages from "../Components/Messages/index"
import newMessage from "../Components/Messages/NewMessage/index"
import Nofications from "../Components/Notifications/index"
import HistoryNotification from "../Components/HistoryNotification/index"
import Option from "../Components/Uploads/Option/index"
import Upload from "../Components/Uploads/Upload/index"
import Advance from "../Components/Uploads/Advance/index"
import Profile from "../Components/Profile/Profile"
import File from "../Components/Files/File/index"

const ComponentRoutes = () => {
  return (
    <div className="App container">
      <TopNav />
      <LeftNav />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/userDashboard" component={UserDashboard} />
      <Route exact path="/sassDashboard" component={SassDashboard} />
      <Route exact path="/adminDashboard" component={AdminDashboard} />
      <Route exact path="/userBillingHistory" component={userBillHistory} />
      <Route exact path="/userBillingGroup" component={userBillGroup} />
      <Route exact path="/userBillingCustom" component={userBillCustom} />
      <Route exact path="/userBillingPack" component={userBillPack} />
      <Route exact path="/userBillingSuccess" component={userBillSuccess} />
      <Route exact path="/userBillingError" component={userBillError} />
      <Route exact path="/institution" component={Institution} />
      <Route exact path="/institutionName" component={InstitutionName} />
      <Route exact path="/institutionGroup" component={InstitutionGroup} />
      <Route exact path="/messages" component={messages} />
      <Route exact path="/newMessage" component={newMessage} />
      <Route exact path="/option" component={Option} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/advance" component={Advance} />
      <Route exact path="/member" component={Member} />
      <Route exact path="/historyNotification" component={HistoryNotification} />
      <Route exact path="/file" component={File} />
      <Route exact path="/nofications" component={Nofications} />
      {/* <Route exact path="/page-not-found" component={PageNotFound} />
        <Redirect to="/page-not-found" /> */}
    </div>
  )
}

export default ComponentRoutes
