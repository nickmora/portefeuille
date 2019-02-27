import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/Pages/Portfolio"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { from } from 'rxjs';
import Home from './components/Pages/About';
import SmartTabs from './components/SmartTabs';
import Welcome from './components/Pages/Welcome';



class App extends Component {
  render() {
    return (
      <Fragment>
  
      <SmartTabs />
      {/* <Router>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={Home} />


          <div className="App">
            <NavBar />
            <Card />
          </div>
        </Switch>
      </Router> */}
      </Fragment>

    );
  }
}

export default App;
