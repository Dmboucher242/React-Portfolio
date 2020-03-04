import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import Portfolio from "./components/Portfolio/index";
import Contact from "./components/Contact/index";



function App() {
  return (
    <div>
      <Nav />

      <Router>
        <Switch>
          <Route exact path='/'>
            <Nav />
          </Route>

          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
