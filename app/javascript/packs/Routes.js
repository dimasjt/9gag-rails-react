import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import SectionPage from "./pages/SectionPage"

import Navbar from "./components/Navbar"

const Routes = () => (
  <div>
    <Navbar />

    <div className="container">
      <Router>
        <Route path="/" component={SectionPage} />
      </Router>
    </div>
  </div>
)

export default Routes