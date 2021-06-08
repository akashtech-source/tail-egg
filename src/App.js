import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages';
import AboutSec from './pages/aboutsec';
import Menu from './pages/menu'
import Dropdown from './components/Dropdown';
import { useState } from 'react';

function App() {

  



  return (
    <Router>
      <Switch>
      <Route path="/home">
          <Home />
        </Route>
        <Route path="/abouts">
          <AboutSec></AboutSec>
        </Route>
        <Route path="/menu">
          <Menu/>
        </Route>
        <Route path="/">
          <Header />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
