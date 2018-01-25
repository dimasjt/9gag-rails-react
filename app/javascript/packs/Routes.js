import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import SectionPage from "./pages/SectionPage"

const Routes = () => (
  <Router>
    <Route path="/" component={SectionPage} />
  </Router>
)

export default Routes