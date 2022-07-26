// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import packageJson from '../package.json';
import Home from './components/pages/home';

import ServiceCard from "./components/pages/servicesCard";

import {
  BrowserRouter as Router,
  // Routes,
  // Route,
  // Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        
        <div className="Service-list"><ServiceCard serviceName="123" /></div>

        <div className="App"><header className="App-header-2"><code>Jnqa App<small> {packageJson.version}</small></code></header></div>
        
        <div style={{minHeight:"40vh"}} className="card">
          <Home/>
        </div>
        <br/>
      </Router>
  );
}

export default App;