import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";

import LeftNav from "../Components/Layout/LeftSideNavbar"
import TopNav from "../Components/Layout/TopNavbar"
import Dashboard from "../Components/Dashboard"
import SignUp2A from "../Auth/SignUp2A"
import SignUp3B from "../Auth/SignUp3B"
import SignUp3A from "../Auth/SignUp3A"
import SignUp1 from "../Auth/SignUp1"
import SignUp2B from "../Auth/SignUp2B"
import FreeTrial from "../Auth/FreeTrial"
import Login from "../Auth/Login"

export const Routes=()=>{
    return(
        <Switch>
            <Route exact path="/SignUpStep2B" component={SignUp2B} />
            <Route exact path="/SignUpStep2A" component={SignUp2A} />
            <Route exact path="/SignUpStep3A" component={SignUp3A} />
            <Route exact path="/SignUpStep3B" component={SignUp3B} />
            <Route exact path="/SignUpStep1" component={SignUp1} />
            <Route exact path="/FreeTrial" component={FreeTrial} />
            <Route exact path="/Login" component={Login} />
        </Switch>
    )
}
