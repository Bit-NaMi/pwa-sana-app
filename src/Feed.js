import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import Version from './components/Version';
import Verses from './components/Verses';
import Book from './components/Book';


 
const Feed = () => {

    return (
      <div className="feed">
    
        <div className="toolbar">
          <Link to="search">search</Link>
          <Book />
          <Version />
          <button>bookmark</button>
        </div>
        
        
        <Switch>
          <Route path="/search">
            <Search />
            
          </Route>
          <Route path="/">
            <div className="texts">
             <Verses />
            </div>
          </Route>
        </Switch>
          
        
    </div>
  );
}

export default Feed 