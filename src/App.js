import React, { Component } from 'react';
import About from './components/Pages/About';
import Footer from "./components/Footer"
import Portfolio from "./components/Pages/Portfolio"
import "./styles/App.css"
import TechStack from './components/Pages/TechStack';



class App extends Component {
  render() {
    return (
      <div
        className = "main"
      >

        <About />
        <TechStack />
        <Portfolio />
        <Footer />

      </div>

    );
  }
}

export default App;
