import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"

import Routes from "./Routes"

import store from "./store"

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

render(
  <App />,
  document.getElementById("root")
)