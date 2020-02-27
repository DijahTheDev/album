import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../styles/app.css"

import Home from "./Home"
import Album from "./Album"
import Picture from "./Picture"

export default props => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/album/:id" component={Album} />
        <Route exact path="/picture/:id" component={Picture} />
      </div>
    </Router>
  )
}
