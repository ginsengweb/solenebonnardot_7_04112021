import * as React from "react"
import * as ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./App"
import {RecoilRoot} from "recoil"

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById("root")
)
