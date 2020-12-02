import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Search from './components/Search';
import Version from './components/Version';
import Book from './components/Book';
import Chapter from './components/Chapter';


 
const Feed = ({searchicon}) => {
 
  axios.defaults.headers.common['api-key']='6f9c7d0c19762a205018465f47308c71'
  
  const [verses, setVerses] = useState([])
  const [versionId, setVersionId] = useState('0c2ff0a5c8b9069c-01')
  const [bookId, setBookId] = useState('MRK')

  

  useEffect(() => {
    const fetchVerses = async () => {
    const result = await axios(`https://api.scripture.api.bible/v1/bibles/0c2ff0a5c8b9069c-01/chapters/MRK.1/sections`)
  // const result = await axios(`https://api.scripture.api.bible/v1/bibles`)

  console.log(result.data.data)

  setVerses(result.data.data)
  }
  
  fetchVerses()
}, []) 

const selectedVersion = (versionId) => {
  setVersionId(versionId)
}

const selectedBook = (bookId) => {
  setBookId(bookId)
}
 
    return (
      <div className="feed">
    
        <div className="toolbar">
          <Link to="search"><img src={searchicon} alt='Search' /></Link>
          <Book versionid={versionId} selectedbook={selectedBook} />
          <Version selectedversion={selectedVersion}/>
          <Chapter bookid={bookId} versionid={versionId}/>
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
                    <p key={verses.id}>{verses.bookId}</p>
                  ))}
                
                </div>
            </div>
          </Route>
        </Switch>
          
        
    </div>
  );
}

export default Feed 