import React from "react"
import "./sass/main.scss"
import { Switch } from "react-router-dom"
import Auth from "./views/Routing/PublicRoutes"

function App() {
  return (
    <Switch>
      <Auth />
    </Switch>
  )
}

export default App
