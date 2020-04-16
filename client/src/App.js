import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Saved from './pages/Saved';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import NoMatch from './pages/NoMatch';
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
          <Route exact path ='/saved' component={Saved} />
          <Route component ={NoMatch} />
        </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
