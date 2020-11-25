import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

  const Feed = () => {
    const axios = require('axios');
    const [feed, setFeed] = useState(undefined)

    useEffect(() => {
      if(!feed) {
      axios.get(`https://bible-api.com/john%203:16`)
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
          <button>book/chapter</button>
          <button>version</button>
          <button>bookmark</button>
        </div>
        <Switch>
          <Route path="/search">
            <div> Haku</div>
          </Route>
          <Route path="/">
            <div className="texts">
             {feed && feed.data.text}
            </div>
          </Route>
        </Switch>
          
        
    </div>
  );
}

export default Feed