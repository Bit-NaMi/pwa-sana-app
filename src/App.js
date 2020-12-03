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
import PlusIcon from './icons/plus.png'
import SearchIcon from './icons/Search.png'
import AddBookmarkIcon from './icons/addbookmark.png'
import Logo from './icons/logo.png'

function App () {
    return (
     <BrowserRouter>
       <NavBar bookmarkicon={BookmarkIcon} settingsicon={SettingsIcon} menuicon={MenuIcon} />
  
       <Switch>
          <Route path="/">
            <Feed searchicon={SearchIcon} addbookmarkicon={AddBookmarkIcon}/>
          </Route>
        </Switch>
        <BottomBar plusicon={PlusIcon} logo={Logo} />
     </BrowserRouter> 
    );
}

export default App;

