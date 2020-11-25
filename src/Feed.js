import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

  const Feed = () => {
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
              Bunch of text here...
            </div>
          </Route>
        </Switch>
          
        
    </div>
  );
}

export default Feed