import React from 'react';
//import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar.js';
import Feed from './Feed.js';
import BottomBar from './BottomBar.js'
import BookmarkIcon from './icons/bookmark.png'
import SettingsIcon from './icons/settings.png'
import MenuIcon from './icons/Menu.png'




function App () {
    return (
     <div className="App">
       <NavBar bookmarkicon={BookmarkIcon} settingsicon={SettingsIcon} menuicon={MenuIcon} />
       <Feed />
       <BottomBar />
     </div> 
    );
}

export default App;