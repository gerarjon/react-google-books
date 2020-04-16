import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Hero />
        <main>
        <Switch>
          <Route exact path ='/' component={Home} />
        </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
