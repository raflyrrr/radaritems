import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ItemCard from "./components/ItemCard";
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import "./main.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/daftar">
            <Signup/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
