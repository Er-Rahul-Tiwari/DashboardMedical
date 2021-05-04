import React from "react"
import { Route, Redirect, withRouter } from "react-router-dom"
import ComponentRoutes from "../Routing/ComponentRoutes"
import SignUp2A from "../Auth/SignUp2A"
import SignUp3B from "../Auth/SignUp3B"
import SignUp3A from "../Auth/SignUp3A"
import SignUp1 from "../Auth/SignUp1"
import SignUp2B from "../Auth/SignUp2B"
import FreeTrial from "../Auth/FreeTrial"
import Login from "../Auth/Login"

const Auth = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/Login" &&
        location.pathname !== "/SignUp2B" &&
        location.pathname !== "/SignUp2A" &&
        location.pathname !== "/SignUp3A" &&
        location.pathname !== "/SignUp3B" &&
        location.pathname !== "/SignUp1" &&
        location.pathname !== "/FreeTrial" && <ComponentRoutes />}

      <Route exact path="/Login" component={Login} />
      <Route exact path="/" render={() => <Redirect to="/Login" />} />
      <Route exact path="/SignUp2B" component={SignUp2B} />
      <Route exact path="/SignUp2A" component={SignUp2A} />
      <Route exact path="/SignUp3A" component={SignUp3A} />
      <Route exact path="/SignUp3B" component={SignUp3B} />
      <Route exact path="/SignUp1" component={SignUp1} />
      <Route exact path="/FreeTrial" component={FreeTrial} />
    </>
  )
})

export default Auth
