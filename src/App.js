import React from 'react';
//import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar.js';
import Feed from './Feed.js';
import BottomBar from './BottomBar.js'
import BookmarkIcon from './icons/bookmark.png'
import SettingsIcon from './icons/settings.png'
import MenuIcon from './icons/Menu.png'


function App () {
    return (
     <BrowserRouter>
       <NavBar bookmarkicon={BookmarkIcon} settingsicon={SettingsIcon} menuicon={MenuIcon} />
       <Switch>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
        <BottomBar />
     </BrowserRouter> 
    );
}

export default App;