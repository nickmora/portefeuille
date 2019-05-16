import React, { Component, Fragment } from 'react';
import Card from './components/Card';
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/Pages/Portfolio"
import { from } from 'rxjs';
import SmartTabs from './components/SmartTabs';
import Welcome from './components/Pages/Welcome';
import About from './components/Pages/About';
import { Typography } from '@material-ui/core';



class App extends Component {
  render() {
    return (
      <Fragment>
  
      {/* <SmartTabs /> */}
      <Welcome />
      <About />
      <Contact />
      <footer>
        <Typography
          variant = "h4"
          component = "h4"
          align = "center"
        >
          &copy; Copyright 2019 Nick Morales Design
        </Typography>
      </footer>

      </Fragment>

    );
  }
}

export default App;
