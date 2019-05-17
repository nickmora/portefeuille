import React, { Component, Fragment } from 'react';
import Contact from "./components/Pages/Contact";
import About from './components/Pages/About';
import Footer from "./components/Footer"
import { Typography } from '@material-ui/core';



class App extends Component {
  render() {
    return (
      <Fragment>

        <About />
        {/* <Contact /> */}
        <Footer />

      </Fragment>

    );
  }
}

export default App;
