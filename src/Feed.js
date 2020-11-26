import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Search from './components/Search'
 
const Feed = () => {
    const axios = require('axios');
    const [feed, setFeed] = useState(undefined)

    useEffect(() => {
      if(!feed) {
      axios.get(`https://bible-api.com/john 1`)
      .then(function (response) {
        // handle success
       setFeed(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      })}}, [axios, feed])
    return (
      <div className="feed">
    
        <div className="toolbar">
          <Link to="search">search</Link>
          <select name="book"><option>book/chapter</option></select>
          <select name="version"><option>version</option></select>
          <button>bookmark</button>
        </div>
        
        <Switch>
          <Route path="/search">
            <Search />
            
          </Route>
          <Route path="/">
            <div className="texts">
            <h3>{feed && feed.data.reference}</h3>
            <p>{feed && feed.data.text}</p>
             
            </div>
          </Route>
        </Switch>
          
        
    </div>
  );
}

export default Feed 