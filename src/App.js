import './App.css';
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';


function App() {
  return (
    <Router>
        <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/projects"><Projects /></Route>
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
    </Router>
  );
}

export default App;
