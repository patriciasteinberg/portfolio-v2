import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';


function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/projects"><Projects /></Route>
          <Route path="/contact" component={Contact} />
        </Switch>
    </Router>
  );
}

export default App;
