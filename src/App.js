import React from 'react';
//import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar.js';
import Feed from './Feed.js';
import BottomBar from './BottomBar.js'



function App () {
    return (
     <div className="App">
       <NavBar />
       <Feed />
       <BottomBar />
     </div> 
    );
}

export default App;