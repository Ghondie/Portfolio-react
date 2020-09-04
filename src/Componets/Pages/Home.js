import React from 'react';
// import { Router, Route, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'
// import Card from '../card/Card'
import Jumbotron from '../Jumbotron/Jumbotron'


const Homepage= ()=>{
    return(
      <div className="APP">
        <header className="App-header">
        <Nav/>
        <Jumbotron />
    
   
        </header>
        </div>
    )
}
export default Homepage;