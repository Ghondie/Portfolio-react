  
import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Carousel  from './Componets/card/Card';
import Homepage from './Componets/Pages/Home'
import Portfolio from './Componets/Pages/Portfolio'
import About from './Componets/Pages/About'
// import Homepage from './Componets/Pages/Home'
// import Homepage from './Componets/Pages/Home'
// import Nav from './Componets/Nav/Nav';

import 'bootstrap/dist/css/bootstrap.min.css'
// import image from '../src/assets/project2.png'


function App(){
  return(
    <div className="App">
    <Router>
    <Route exact path="/" component={Homepage}/>
    <Route exact path="/Portfolio" component={Portfolio}/>
    <Route exact path="/About" component={About}/>
    </Router>

      </div>
  )
}



export default App;