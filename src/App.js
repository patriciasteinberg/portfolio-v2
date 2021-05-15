import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';


function App() {
  return (
    <Router>
        <Header />
        <main>
          <Route path="/" component={Home} />
        </main>
    </Router>
  );
}

export default App;
