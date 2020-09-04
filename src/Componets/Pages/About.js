import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Bio from '../Bio/bio'


const About= ()=>{
    return(
      <div className="APP">
        <header className="App-header">
        <Nav/>
        <Bio/>
   
        </header>
        </div>
    )
}
export default About;