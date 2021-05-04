import "react-app-polyfill/ie9" // For IE 9-11 support
import "react-app-polyfill/stable"
// import 'react-app-polyfill/ie11'; // For IE 11 support
import "./polyfill"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
)