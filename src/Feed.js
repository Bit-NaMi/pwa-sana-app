import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Search from './components/Search';
import Version from './components/Version';
import Book from './components/Book';
import Chapter from './components/Chapter';


 
const Feed = () => {
 
  const [verses, setVerses] = useState([])
  const [versionId, setVersionId] = useState('06125adad2d5898a-01')

  // axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'

  useEffect(() => {
    const fetchVerses = async () => {
  const result = await axios(`https://www.abibliadigital.com.br/api/verses/bbe/sl/27`)
  // const result = await axios(`https://api.scripture.api.bible/v1/bibles`)

  console.log(result.data.verses)

  setVerses(result.data.verses)
  }
  
  fetchVerses()
}, []) 

const openAlert = (versionId) => {
  setVersionId(versionId)
}
 
    return (
      <div className="feed">
    
        <div className="toolbar">
          <Link to="search">search</Link>
          <Book versionid={versionId} />
          <Version openalert={openAlert}/>
          <Chapter/>
          <button>bookmark</button>
        </div>
        
        
        <Switch>
          <Route path="/search">
            <Search />
            
          </Route>
          <Route path="/">
            <div className="texts">
                <div className="verses">
                  
                  {verses.map(verses => (
                    <p key={verses.number}>{verses.number + " " + verses.text}</p>
                  ))}
                
                </div>
            </div>
          </Route>
        </Switch>
          
        
    </div>
  );
}

export default Feed 